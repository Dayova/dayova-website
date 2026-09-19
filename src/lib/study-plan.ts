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

export const studyGrades = ["6", "7", "8", "9", "10", "11", "12", "13"] as const;

export const studyPhases = [
  { id: "theory", name: "Theorie", description: "Grundlagen verstehen und den Prüfungsstoff ordnen." },
  { id: "practice", name: "Üben", description: "Wissen festigen und an Aufgaben arbeiten." },
  { id: "rehearsal", name: "Praxis", description: "Das Gelernte selbstständig im Prüfungsformat anwenden." },
] as const;

export type StudyPlan = {
  subject: string;
  grade: string;
  examDate: string;
  dayCount: number;
  topicDescription: string;
  sessionMinutes: number;
  sessionsPerWeek: number;
  totalMinutes: number;
  sessions: {
    date: string;
    blocks: { id: StudyPhase; name: string; minutes: number; task: string }[];
  }[];
};

function parseDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value)) return NaN;
  const time = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : NaN;
}

export function createStudyPlan(input: { subjectId: string; grade: string; examDate: string; topicDescription: string; sessionMinutes: number; sessionsPerWeek: number }, now = new Date()): StudyPlan {
  const subject = studySubjects.find((item) => item.id === input.subjectId);
  if (!subject) throw new Error("Wähle ein Fach aus der Liste aus.");
  if (!studyGrades.some((grade) => grade === input.grade)) {
    throw new Error("Wähle eine Klassenstufe von 6 bis 13 aus.");
  }
  const topicDescription = input.topicDescription.trim();
  if (!topicDescription || topicDescription.length > 300) {
    throw new Error("Beschreibe die Themen deiner Arbeit in 1 bis 300 Zeichen.");
  }
  if (!Number.isInteger(input.sessionMinutes) || input.sessionMinutes < 15 || input.sessionMinutes > 240 || input.sessionMinutes % 15 !== 0) {
    throw new Error("Wähle eine Lernzeit von 15 Minuten bis 4 Stunden pro Einheit.");
  }
  if (!Number.isInteger(input.sessionsPerWeek) || input.sessionsPerWeek < 2 || input.sessionsPerWeek > 5) {
    throw new Error("Wähle 2 bis 5 Lerneinheiten pro Woche.");
  }
  // Use the learner's local calendar date, then do date arithmetic in UTC to avoid DST shifts.
  const start = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const end = parseDate(input.examDate);
  const dayCount = (end - start) / 86_400_000;
  if (!Number.isInteger(dayCount) || dayCount < 1) {
    throw new Error("Wähle einen gültigen Prüfungstermin ab morgen.");
  }
  const dateAt = (offset: number) => new Date(start + offset * 86_400_000).toISOString().slice(0, 10);
  const supportingTasks = [
    ["Sammle deine Prüfungsthemen und die passenden Unterlagen aus dem Unterricht.", "Erkläre die Grundlagen in eigenen Worten und markiere offene Fragen."],
    ["Arbeite deine Prüfungsthemen nacheinander durch und wiederhole bereits Geübtes ohne Vorlage.", "Vergleiche deine Lösungen und übe gezielt die Stellen, an denen du noch Fehler machst."],
    ["Orientiere dich an den erlaubten Hilfsmitteln und der vorgesehenen Prüfungszeit.", "Werte deinen Versuch aus und wiederhole die wichtigsten offenen Punkte."],
  ] as const;
  const phaseTasks = {
    theory: [supportingTasks[0][0], subject.tasks[0], supportingTasks[0][1]],
    practice: [subject.tasks[1], supportingTasks[1][0], supportingTasks[1][1]],
    rehearsal: [subject.tasks[2], supportingTasks[2][0], supportingTasks[2][1]],
  } satisfies Record<StudyPhase, readonly string[]>;
  const sessionCount = Math.min(dayCount, Math.max(1, Math.ceil(dayCount * input.sessionsPerWeek / 7)));
  const offsets = sessionCount === 1
    ? [0]
    : Array.from({ length: sessionCount }, (_, index) => Math.round(index * (dayCount - 1) / (sessionCount - 1)));
  const phaseUseCount: Record<StudyPhase, number> = { theory: 0, practice: 0, rehearsal: 0 };
  const createBlock = (id: StudyPhase, minutes: number) => {
    const tasks = phaseTasks[id];
    const task = tasks[phaseUseCount[id] % tasks.length]!;
    phaseUseCount[id] += 1;
    return { id, name: studyPhases.find((phase) => phase.id === id)!.name, minutes, task };
  };
  const blocksForSession = (index: number) => {
    if (sessionCount === 1) {
      const theoryMinutes = Math.floor(input.sessionMinutes * 0.3);
      const practiceMinutes = Math.floor(input.sessionMinutes * 0.45);
      return [
        createBlock("theory", theoryMinutes),
        createBlock("practice", practiceMinutes),
        createBlock("rehearsal", input.sessionMinutes - theoryMinutes - practiceMinutes),
      ];
    }
    if (sessionCount === 2) {
      if (index === 0) {
        const theoryMinutes = Math.floor(input.sessionMinutes * 0.4);
        return [createBlock("theory", theoryMinutes), createBlock("practice", input.sessionMinutes - theoryMinutes)];
      }
      const practiceMinutes = Math.floor(input.sessionMinutes * 0.6);
      return [createBlock("practice", practiceMinutes), createBlock("rehearsal", input.sessionMinutes - practiceMinutes)];
    }
    const position = (index + 0.5) / sessionCount;
    const phase: StudyPhase = position <= 0.3 ? "theory" : position <= 0.75 ? "practice" : "rehearsal";
    return [createBlock(phase, input.sessionMinutes)];
  };
  return {
    subject: subject.name,
    grade: input.grade,
    examDate: input.examDate,
    dayCount,
    topicDescription,
    sessionMinutes: input.sessionMinutes,
    sessionsPerWeek: input.sessionsPerWeek,
    totalMinutes: sessionCount * input.sessionMinutes,
    sessions: offsets.map((offset, index) => ({ date: dateAt(offset), blocks: blocksForSession(index) })),
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
