import type { LessonRecommendation, TeachingGroup, TopicAnalysis } from "./types";

export function buildRuleBasedRecommendation(
  group: TeachingGroup,
  analyses: TopicAnalysis[],
  targetDate = new Date(),
): LessonRecommendation {
  const ordered = [...analyses].sort((a, b) => a.priority - b.priority);
  const primary = ordered[0];
  const secondary = ordered.slice(1, 3);
  const primaryName = primary?.name ?? "Aktueller Lernstoff";

  return {
    id: `recommendation-${group.id}-${targetDate.toISOString().slice(0, 10)}`,
    teachingGroupId: group.id,
    lessonTitle: `${primaryName} gezielt festigen`,
    subject: group.subjectName,
    className: group.className,
    durationMinutes: 45,
    primaryTopic: primaryName,
    secondaryTopics: secondary.map((topic) => topic.name),
    lessonObjectives: [
      `${primaryName} sicher anwenden.`,
      "Lösungswege nachvollziehbar erklären.",
    ],
    materialsNeeded: ["Diagnosekarten", "Differenzierte Übungsaufgaben", "Exit-Ticket"],
    phases: [
      { title: "Einstieg", durationMinutes: 5, description: "Typischen Fehler gemeinsam untersuchen.", activities: ["Fehler erkennen"] },
      { title: "Diagnose", durationMinutes: 5, description: "Kurzen Wissenscheck durchführen.", activities: ["Antworten sammeln"] },
      { title: "Erarbeitung", durationMinutes: 10, description: "Zentralen Lösungsweg modellieren.", activities: ["Schritte begründen"] },
      { title: "Übung", durationMinutes: 20, description: "Nach Wissensstand differenziert üben.", activities: ["Gezielt unterstützen"] },
      { title: "Abschluss", durationMinutes: 5, description: "Lernziel mit Exit-Ticket prüfen.", activities: ["Ergebnis sichern"] },
    ],
    supportActivities: ["Schrittkarten", "Begleitete Beispielaufgaben"],
    coreActivities: ["Gemischte Übungsaufgaben"],
    advancedActivities: ["Transfer- und Fehlerdiagnoseaufgaben"],
    homeworkFollowUp: `Kurze Wiederholung zu ${primaryName}.`,
    classReadinessSummary: primary
      ? `${primary.affectedStudents} Schüler:innen benötigen bei ${primary.name} gezielte Unterstützung.`
      : "Für diese Gruppe liegen noch nicht genügend Analysedaten vor.",
    whyThisMattersNow: primary?.misconception ?? "Die Empfehlung basiert auf dem aktuellen Wissensstand.",
    signalsUsed: ordered.slice(0, 3).map((topic) => `${topic.masteryScore} % Themenbeherrschung: ${topic.name}`),
    confidenceLevel: analyses.length >= 2 ? "hoch" : analyses.length ? "mittel" : "niedrig",
    generatedAt: new Date().toISOString(),
  };
}
