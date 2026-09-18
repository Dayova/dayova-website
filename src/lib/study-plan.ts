export type StudyTopic = { name: string; minutes: number };
export type StudyPlanInput = {
  startDate: string;
  examDate: string;
  weekdays: number[];
  dailyMinutes: number;
  topics: StudyTopic[];
};
export type StudySession = { topic: string; minutes: number; kind: "study" | "review" };
export type StudyDay = { date: string; sessions: StudySession[]; spareMinutes: number };
export type StudyPlan = {
  days: StudyDay[];
  requestedMinutes: number;
  scheduledMinutes: number;
  remaining: { topic: string; studyMinutes: number; reviewMinutes: number }[];
};

function parseDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) return NaN;
  const time = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : NaN;
}

export function createStudyPlan(input: StudyPlanInput): StudyPlan {
  const start = parseDate(input.startDate);
  const end = parseDate(input.examDate);
  const dayCount = (end - start) / 86_400_000;
  if (!Number.isFinite(dayCount) || dayCount < 1 || dayCount > 90) {
    throw new Error("Wähle einen Prüfungstermin 1 bis 90 Tage nach dem Lernstart.");
  }
  if (!Number.isInteger(input.dailyMinutes) || input.dailyMinutes < 15 || input.dailyMinutes > 240) {
    throw new Error("Wähle 15 bis 240 verfügbare Minuten pro Lerntag.");
  }
  if (!input.weekdays.length || input.weekdays.some((day) => !Number.isInteger(day) || day < 0 || day > 6)) {
    throw new Error("Wähle mindestens einen gültigen Wochentag aus.");
  }
  if (!input.topics.length || input.topics.length > 8 || input.topics.some((topic) =>
    !topic.name.trim() || topic.name.trim().length > 80 || !Number.isInteger(topic.minutes) || topic.minutes < 10 || topic.minutes > 600,
  )) {
    throw new Error("Trage 1 bis 8 Themen ein: je 1 bis 80 Zeichen und 10 bis 600 Minuten Übungszeit.");
  }
  const topics = input.topics.map((topic) => ({
    name: topic.name.trim(),
    study: topic.minutes,
    review: Math.max(10, Math.ceil(topic.minutes * 0.25 / 5) * 5),
    finishedOn: Infinity,
  }));
  const requestedMinutes = topics.reduce((sum, topic) => sum + topic.study + topic.review, 0);
  // Reserve at least 20% for pauses and overruns; round planned capacity down to five minutes.
  const capacity = Math.floor(input.dailyMinutes * 0.8 / 5) * 5;
  const days: StudyDay[] = [];
  let nextTopic = 0;
  for (let index = 0; index < dayCount; index++) {
    const date = new Date(start + index * 86_400_000);
    if (!input.weekdays.includes(date.getUTCDay())) continue;
    const sessions: StudySession[] = [];
    let available = capacity;
    for (const topic of topics) {
      if (topic.finishedOn >= index || !topic.review || !available) continue;
      const minutes = Math.min(topic.review, available);
      sessions.push({ topic: topic.name, minutes, kind: "review" });
      topic.review -= minutes;
      available -= minutes;
    }
    while (available && topics.some((topic) => topic.study > 0)) {
      const orderedTopics = [...topics.slice(nextTopic), ...topics.slice(0, nextTopic)];
      const topic = orderedTopics.find((item) => item.study > 0);
      if (!topic) break;
      const selected = topics.indexOf(topic);
      const minutes = Math.min(25, topic.study, available);
      sessions.push({ topic: topic.name, minutes, kind: "study" });
      topic.study -= minutes;
      available -= minutes;
      if (!topic.study) topic.finishedOn = index;
      nextTopic = (selected + 1) % topics.length;
    }
    days.push({ date: date.toISOString().slice(0, 10), sessions, spareMinutes: input.dailyMinutes - capacity + available });
  }
  if (!days.length) throw new Error("Zwischen Lernstart und Prüfung liegt keiner deiner gewählten Lerntage.");
  return {
    days,
    requestedMinutes,
    scheduledMinutes: days.flatMap((day) => day.sessions).reduce((sum, session) => sum + session.minutes, 0),
    remaining: topics.filter((topic) => topic.study || topic.review).map((topic) => ({
      topic: topic.name, studyMinutes: topic.study, reviewMinutes: topic.review,
    })),
  };
}

export function formatPlanDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export function studyPlanAsText(plan: StudyPlan) {
  return [
    "Dayova Lernplan — persönliche Planungshilfe, keine Prognose der Prüfungsreife",
    `Geplant: ${plan.scheduledMinutes} von ${plan.requestedMinutes} Minuten einschließlich Wiederholungen.`,
    ...plan.days.map((day) => [
      formatPlanDate(day.date),
      ...day.sessions.map((session) => `  ${session.kind === "review" ? "Wiederholen" : "Üben"}: ${session.topic} — ${session.minutes} Min.`),
      `  Frei / Puffer: ${day.spareMinutes} Min.`,
    ].join("\n")),
    ...(plan.remaining.length ? ["Noch nicht eingeplant:", ...plan.remaining.map((item) => `${item.topic}: ${item.studyMinutes} Min. Üben, ${item.reviewMinutes} Min. Wiederholen`)] : []),
    "Annahmen: 25% zusätzliche Wiederholungszeit (mindestens 10 Min. je Thema), frühestens an einem späteren Lerntag; mindestens 20% der Tageszeit bleiben frei. Diese Werte sind Planungshilfen, keine allgemeingültige Lernregel.",
    "https://dayova.com/tools/study-plan",
  ].join("\n\n");
}

export function createStudyPlanExample(now = new Date()): StudyPlanInput {
  const start = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const exam = new Date(start);
  exam.setUTCDate(exam.getUTCDate() + 3);
  return {
    startDate: start.toISOString().slice(0, 10),
    examDate: exam.toISOString().slice(0, 10),
    weekdays: [0, 1, 2, 3, 4, 5, 6],
    dailyMinutes: 60,
    topics: [
      { name: "Bruchrechnung", minutes: 20 },
      { name: "Gleichungen", minutes: 30 },
      { name: "Textaufgaben", minutes: 20 },
    ],
  };
}
