export type StudyPhase = "theory" | "practice" | "rehearsal";

// Same subject selection and phase names as the Dayova app's exam creation flow.
export const studySubjects = [
  { id: "mathematics", name: "Mathematik", tasks: ["Fasse die Formeln, Regeln und Lösungswege deiner Prüfungsthemen zusammen.", "Löse zu jedem Thema Aufgaben und überprüfe jeden Rechenschritt.", "Bearbeite gemischte Prüfungsaufgaben ohne Lösungsbeispiel und prüfe danach deine Ergebnisse."] },
  { id: "german", name: "Deutsch", tasks: ["Wiederhole die Textsorten, sprachlichen Mittel und Regeln, die in deiner Prüfung vorkommen.", "Übe an passenden Texten das Analysieren, Argumentieren oder Schreiben.", "Bearbeite eine vollständige Aufgabe im Prüfungsformat und überarbeite anschließend deinen Text."] },
  { id: "english", name: "Englisch", tasks: ["Wiederhole den Wortschatz, die Grammatik und die Textsorten deiner Prüfungsthemen.", "Übe die gefragten Sprachfertigkeiten mit Aufgaben aus deinem Unterricht.", "Bearbeite eine passende Prüfungsaufgabe ohne Vorlage und prüfe Inhalt, Ausdruck und Grammatik."] },
  { id: "biology", name: "Biologie", tasks: ["Erkläre die zentralen Begriffe, Strukturen und biologischen Abläufe deiner Prüfungsthemen.", "Übe, Abbildungen zu beschriften, Zusammenhänge zu erklären und Daten auszuwerten.", "Übertrage dein Wissen auf eine neue Prüfungsaufgabe und begründe deine Antwort."] },
  { id: "chemistry", name: "Chemie", tasks: ["Wiederhole die Stoffeigenschaften, Modelle und Reaktionen deiner Prüfungsthemen.", "Übe passende Reaktionsgleichungen, Berechnungen oder Auswertungen aus dem Unterricht.", "Bearbeite eine gemischte Prüfungsaufgabe und begründe deine Lösungswege mit den passenden Modellen."] },
  { id: "physics", name: "Physik", tasks: ["Fasse die Größen, Einheiten, Formeln und physikalischen Zusammenhänge deiner Prüfungsthemen zusammen.", "Löse passende Rechenaufgaben und übe, Diagramme oder Versuchsergebnisse zu erklären.", "Löse eine neue Anwendungsaufgabe ohne Beispiel und prüfe Einheiten und Plausibilität."] },
  { id: "history", name: "Geschichte", tasks: ["Ordne die Ereignisse, Personen, Ursachen und Folgen deiner Prüfungsthemen zeitlich ein.", "Übe an Quellen und Darstellungen, Aussagen einzuordnen und Zusammenhänge zu erklären.", "Bearbeite eine Prüfungsfrage mit Quellenbelegen und formuliere ein begründetes Urteil."] },
  { id: "geography", name: "Erdkunde", tasks: ["Wiederhole die Fachbegriffe, räumlichen Zusammenhänge und Prozesse deiner Prüfungsthemen.", "Übe, Karten, Diagramme und Fallbeispiele aus deinem Unterricht auszuwerten.", "Wende dein Wissen auf ein neues Raumbeispiel an und begründe deine Schlussfolgerungen."] },
  { id: "social-studies", name: "Sozialkunde", tasks: ["Kläre die Begriffe, Institutionen und politischen oder gesellschaftlichen Zusammenhänge deiner Prüfungsthemen.", "Übe, Materialien auszuwerten und unterschiedliche Positionen mit Argumenten zu vergleichen.", "Beantworte eine Prüfungsfrage mit Belegen und einem nachvollziehbar begründeten Urteil."] },
  { id: "computer-science", name: "Informatik", tasks: ["Wiederhole die Konzepte, Abläufe und Darstellungen deiner Prüfungsthemen.", "Übe passende Aufgaben zu Algorithmen, Code oder Datenmodellen und analysiere Fehler.", "Löse eine neue Aufgabe selbstständig und überprüfe deine Lösung mit geeigneten Testfällen."] },
  { id: "art", name: "Kunst", tasks: ["Wiederhole die Gestaltungsmittel, Techniken und kunstgeschichtlichen Begriffe deiner Prüfungsthemen.", "Übe passende Bildanalysen oder gestalterische Entwürfe und begründe deine Entscheidungen.", "Bearbeite eine Aufgabe im vorgesehenen Prüfungsformat und reflektiere dein Ergebnis anhand der Kriterien."] },
  { id: "music", name: "Musik", tasks: ["Wiederhole die musikalischen Begriffe, Strukturen und Hintergründe deiner Prüfungsthemen.", "Übe passende Hör-, Noten- oder Analyseaufgaben beziehungsweise die geforderten musikalischen Fertigkeiten.", "Erprobe die konkrete Prüfungsaufgabe möglichst ohne Vorlage und überprüfe sie anhand der Bewertungskriterien."] },
  { id: "sport", name: "Sport", tasks: ["Wiederhole die Regeln, Bewegungsabläufe und theoretischen Grundlagen deiner Prüfungsthemen.", "Übe die geforderten Aufgaben oder Bewegungsabläufe nach den Vorgaben deiner Lehrkraft.", "Gehe das Prüfungsformat unter den vorgesehenen Bedingungen durch und prüfe die Bewertungskriterien."] },
] as const;

export const studyPhases = [
  { id: "theory", name: "Theorie", description: "Grundlagen verstehen und den Prüfungsstoff ordnen." },
  { id: "practice", name: "Üben", description: "Wissen festigen und an Aufgaben arbeiten." },
  { id: "rehearsal", name: "Praxis", description: "Das Gelernte selbstständig im Prüfungsformat anwenden." },
] as const;

export type StudyPlan = {
  subject: string;
  examDate: string;
  dayCount: number;
  topicDescription: string;
  dailyMinutes: number;
  totalMinutes: number;
  phases: { id: StudyPhase; name: string; startDate: string; endDate: string; minutesPerDay: number; totalMinutes: number; tasks: string[] }[];
};

function parseDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) return NaN;
  const time = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : NaN;
}

export function createStudyPlan(input: { subjectId: string; examDate: string; topicDescription: string; dailyMinutes: number }, now = new Date()): StudyPlan {
  const subject = studySubjects.find((item) => item.id === input.subjectId);
  if (!subject) throw new Error("Wähle ein Fach aus der Liste aus.");
  const topicDescription = input.topicDescription.trim();
  if (!topicDescription || topicDescription.length > 300) {
    throw new Error("Beschreibe die Themen deiner Arbeit in 1 bis 300 Zeichen.");
  }
  if (!Number.isInteger(input.dailyMinutes) || input.dailyMinutes < 15 || input.dailyMinutes > 240 || input.dailyMinutes % 15 !== 0) {
    throw new Error("Wähle eine tägliche Lernzeit von 15 Minuten bis 4 Stunden.");
  }
  // Use the learner's local calendar date, then do date arithmetic in UTC to avoid DST shifts.
  const start = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const end = parseDate(input.examDate);
  const dayCount = (end - start) / 86_400_000;
  if (!Number.isInteger(dayCount) || dayCount < 1) {
    throw new Error("Wähle einen gültigen Prüfungstermin ab morgen.");
  }
  const theoryDays = Math.max(1, Math.floor(dayCount * 0.3));
  const rehearsalDays = Math.max(1, Math.floor(dayCount * 0.25));
  const ranges: [[number, number], [number, number], [number, number]] = dayCount < 3
    ? [[0, 0], [0, 0], [dayCount - 1, dayCount - 1]]
    : [[0, theoryDays - 1], [theoryDays, dayCount - rehearsalDays - 1], [dayCount - rehearsalDays, dayCount - 1]];
  // Phases sharing a day share its budget, rather than each receiving a full day.
  const theoryMinutes = Math.floor(input.dailyMinutes * 0.3);
  const practiceMinutes = Math.floor(input.dailyMinutes * 0.45);
  const minutesPerDay = dayCount === 1
    ? [theoryMinutes, practiceMinutes, input.dailyMinutes - theoryMinutes - practiceMinutes] as const
    : dayCount === 2
      ? [theoryMinutes, input.dailyMinutes - theoryMinutes, input.dailyMinutes] as const
      : [input.dailyMinutes, input.dailyMinutes, input.dailyMinutes] as const;
  const dateAt = (offset: number) => new Date(start + offset * 86_400_000).toISOString().slice(0, 10);
  const supportingTasks = [
    ["Sammle deine Prüfungsthemen und die passenden Unterlagen aus dem Unterricht.", "Erkläre die Grundlagen in eigenen Worten und markiere offene Fragen."],
    ["Arbeite deine Prüfungsthemen nacheinander durch und wiederhole bereits Geübtes ohne Vorlage.", "Vergleiche deine Lösungen und übe gezielt die Stellen, an denen du noch Fehler machst."],
    ["Orientiere dich an den erlaubten Hilfsmitteln und der vorgesehenen Prüfungszeit.", "Werte deinen Versuch aus und wiederhole die wichtigsten offenen Punkte."],
  ] as const;
  return {
    subject: subject.name,
    examDate: input.examDate,
    dayCount,
    topicDescription,
    dailyMinutes: input.dailyMinutes,
    totalMinutes: dayCount * input.dailyMinutes,
    phases: ([0, 1, 2] as const).map((index) => ({
      id: studyPhases[index].id,
      name: studyPhases[index].name,
      startDate: dateAt(ranges[index][0]),
      endDate: dateAt(ranges[index][1]),
      minutesPerDay: minutesPerDay[index],
      totalMinutes: minutesPerDay[index] * (ranges[index][1] - ranges[index][0] + 1),
      tasks: index === 0
        ? [supportingTasks[index][0], subject.tasks[index], supportingTasks[index][1]]
        : [subject.tasks[index], ...supportingTasks[index]],
    })),
  };
}

export function formatPlanDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export function formatStudyDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return [hours ? `${hours} Std.` : "", remainder ? `${remainder} Min.` : ""].filter(Boolean).join(" ");
}
