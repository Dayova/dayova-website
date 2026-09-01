"use client";

import {
  CheckmarkCircle02Icon,
  Copy01Icon,
  MagicWand01Icon,
  PrinterIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useMemo, useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import type {
  LessonPhase,
  LessonRecommendation,
  Student,
  TeachingGroup,
  TopicAnalysis,
} from "../types";
import { useTeacherDashboard } from "./dashboard-store";
import { ProgressBar, RiskBadge, StatusBadge } from "./dashboard-ui";

type AssistantData = {
  group: TeachingGroup;
  topics: TopicAnalysis[];
  students: Student[];
  recommendation?: LessonRecommendation;
};

type FocusPlan = {
  title: string;
  phases: LessonPhase[];
};

const defaultPhases: LessonPhase[] = [
  {
    title: "Einstieg",
    durationMinutes: 8,
    description: "Vorwissen aktivieren und Lernziel sichtbar machen.",
    activities: ["Kurze Diagnosefrage", "Antworten gemeinsam ordnen"],
  },
  {
    title: "Arbeitsphase",
    durationMinutes: 27,
    description: "Lernstoff differenziert bearbeiten.",
    activities: ["Aufgaben in Niveaustufen", "Partnerfeedback"],
  },
  {
    title: "Sicherung",
    durationMinutes: 10,
    description: "Ergebnisse sichern und nächsten Schritt festlegen.",
    activities: ["Exit-Ticket", "Individuellen Fokus notieren"],
  },
];

function buildFocusPlan(
  focus: string,
  topic: string,
  recommendation?: LessonRecommendation,
): FocusPlan {
  if (focus === "Lernlücken schließen") {
    return {
      title: recommendation?.lessonTitle ?? `${topic} gezielt festigen`,
      phases: recommendation?.phases ?? defaultPhases,
    };
  }

  if (focus === "Neues Thema einführen") {
    return {
      title: `${topic} verständlich erschließen`,
      phases: [
        {
          title: "Orientierung",
          durationMinutes: 5,
          description: "Lernziel und Bedeutung des neuen Inhalts klären.",
          activities: ["Alltagsbezug öffnen", "Lernziel sichtbar machen"],
        },
        {
          title: "Vorwissen prüfen",
          durationMinutes: 5,
          description: "Voraussetzungen mit einer kurzen Diagnose absichern.",
          activities: ["Diagnosefrage", "Antworten sortieren"],
        },
        {
          title: "Gemeinsam entdecken",
          durationMinutes: 10,
          description: "Den zentralen Zusammenhang an einem Beispiel entwickeln.",
          activities: ["Beispiel modellieren", "Vermutungen begründen"],
        },
        {
          title: "Differenziert erarbeiten",
          durationMinutes: 20,
          description: "Den neuen Inhalt mit passenden Hilfen selbst anwenden.",
          activities: ["Lernwege nach Datenlage", "Gezieltes Lehrerfeedback"],
        },
        {
          title: "Verständnis sichern",
          durationMinutes: 5,
          description: "Den neuen Zusammenhang in eigenen Worten erklären.",
          activities: ["Mini-Erklärung", "Offene Frage markieren"],
        },
      ],
    };
  }

  if (focus === "Prüfung vorbereiten") {
    return {
      title: `${topic} prüfungssicher anwenden`,
      phases: [
        {
          title: "Prüfungsziele klären",
          durationMinutes: 5,
          description: "Kompetenzen und Erfolgskriterien transparent machen.",
          activities: ["Ziele priorisieren", "Unsicherheiten benennen"],
        },
        {
          title: "Schnelldiagnose",
          durationMinutes: 5,
          description: "Den aktuellen Stand mit prüfungsnahen Aufgaben prüfen.",
          activities: ["Drei Kurzaufgaben", "Ergebnisse zuordnen"],
        },
        {
          title: "Strategien sichern",
          durationMinutes: 10,
          description: "Typische Fehler und sichere Lösungswege vergleichen.",
          activities: ["Fehlerdiagnose", "Lösungsweg begründen"],
        },
        {
          title: "Prüfungsnah üben",
          durationMinutes: 20,
          description: "Aufgaben auf dem passenden Anspruchsniveau bearbeiten.",
          activities: ["Zeitfenster setzen", "Individuell nachsteuern"],
        },
        {
          title: "Nächsten Schritt festlegen",
          durationMinutes: 5,
          description: "Restliche Lücken für die App-Wiederholung markieren.",
          activities: ["Exit-Ticket", "Persönlichen Fokus wählen"],
        },
      ],
    };
  }

  return {
    title: `${topic} auf neue Situationen übertragen`,
    phases: [
      {
        title: "Problem öffnen",
        durationMinutes: 5,
        description: "Eine neue Situation ohne vorgegebenen Lösungsweg verstehen.",
        activities: ["Problem erfassen", "Fragen sammeln"],
      },
      {
        title: "Strategien aktivieren",
        durationMinutes: 5,
        description: "Bekannte Werkzeuge und Lösungswege verfügbar machen.",
        activities: ["Strategien erinnern", "Auswahl begründen"],
      },
      {
        title: "Transfer bearbeiten",
        durationMinutes: 20,
        description: "Wissen auf eine unbekannte Aufgabe übertragen.",
        activities: ["Eigenständig planen", "Zwischenstände prüfen"],
      },
      {
        title: "Lösungen vergleichen",
        durationMinutes: 10,
        description: "Unterschiedliche Wege erklären und bewerten.",
        activities: ["Partnerfeedback", "Strategien vergleichen"],
      },
      {
        title: "Transfer sichern",
        durationMinutes: 5,
        description: "Das übertragbare Prinzip in eigenen Worten festhalten.",
        activities: ["Merksatz formulieren", "Nächste Herausforderung wählen"],
      },
    ],
  };
}

function fitPhasesToDuration(
  phases: LessonPhase[],
  targetDuration: number,
): LessonPhase[] {
  const sourceDuration = phases.reduce(
    (total, phase) => total + phase.durationMinutes,
    0,
  );

  if (!sourceDuration || sourceDuration === targetDuration) return phases;

  let allocated = 0;
  return phases.map((phase, index) => {
    const remainingPhases = phases.length - index - 1;
    const durationMinutes =
      index === phases.length - 1
        ? targetDuration - allocated
        : Math.min(
            Math.max(
              5,
              Math.round(
                ((phase.durationMinutes / sourceDuration) * targetDuration) / 5,
              ) * 5,
            ),
            targetDuration - allocated - remainingPhases * 5,
          );

    allocated += durationMinutes;
    return { ...phase, durationMinutes };
  });
}

function studentNames(students: Student[], fallback: string) {
  if (!students.length) return fallback;
  return students
    .slice(0, 4)
    .map((student) => student.firstName)
    .join(", ");
}

function learningFocusForGroup(
  student: Student,
  topics: TopicAnalysis[],
): string {
  const topicIndex =
    student.riskLevel === "hoch" ? 0 : student.riskLevel === "mittel" ? 1 : 2;
  return topics[topicIndex]?.name ?? topics[0]?.name ?? student.supportFocus;
}

export function TeacherAssistant({
  data,
  initialGroupId,
}: {
  data: AssistantData[];
  initialGroupId?: string;
}) {
  const [groupId, setGroupId] = useState(
    initialGroupId ?? data[0]?.group.id ?? "",
  );
  const [duration, setDuration] = useState(45);
  const [focus, setFocus] = useState("Lernlücken schließen");
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const { savedLessonIds, toggleLessonSaved } = useTeacherDashboard();
  const selected = useMemo(
    () => data.find((item) => item.group.id === groupId) ?? data[0],
    [data, groupId],
  );

  if (!selected) return null;
  const recommendation = selected.recommendation;
  const topTopic = selected.topics[0];
  const primaryTopic = recommendation?.primaryTopic ?? topTopic?.name ?? "Lernziel";
  const riskStudents = selected.students.filter(
    (student) => student.riskLevel !== "niedrig",
  );
  const supportStudents = selected.students.filter(
    (student) => student.riskLevel === "hoch",
  );
  const observationStudents = selected.students.filter(
    (student) => student.riskLevel === "mittel",
  );
  const secureStudents = selected.students.filter(
    (student) => student.riskLevel === "niedrig",
  );
  const lessonId = `${groupId}-${duration}-${focus}`;
  const saved = savedLessonIds.includes(lessonId);
  const focusPlan = buildFocusPlan(focus, primaryTopic, recommendation);
  const phases = fitPhasesToDuration(focusPlan.phases, duration);
  const evidenceSignals = recommendation?.signalsUsed ?? [
    `${selected.group.masteryScore} % Wissensstand in der Lerngruppe`,
    `${selected.group.riskStudentCount} Schüler:innen mit Unterstützungsbedarf`,
    `${topTopic?.affectedStudents ?? 0} betroffen bei ${primaryTopic}`,
  ];
  const lessonObjectives = recommendation?.lessonObjectives ?? [
    `${primaryTopic} sicher anwenden.`,
    "Den eigenen Lösungsweg nachvollziehbar erklären.",
  ];
  const materials = recommendation?.materialsNeeded ?? [
    "Diagnosefrage",
    "Differenzierte Aufgaben",
    "Exit-Ticket",
  ];

  const copyPlan = async () => {
    const text = [
      focusPlan.title,
      `${selected.group.className} · ${selected.group.subjectName}`,
      `Fokus: ${focus}`,
      `Dauer: ${duration} Minuten`,
      `Begründung: ${recommendation?.whyThisMattersNow ?? topTopic?.misconception ?? "Aktueller Lernstand der Klasse"}`,
      "",
      "Lernziele:",
      ...lessonObjectives.map((objective) => `- ${objective}`),
      "",
      "Stundenverlauf:",
      ...phases.map(
        (phase) =>
          `${phase.title} (${phase.durationMinutes} Min.): ${phase.description}`,
      ),
      "",
      `Unterstützen: ${recommendation?.supportActivities.join(" · ") ?? "Schrittkarten und begleitetes Beispiel"}`,
      `Festigen: ${recommendation?.coreActivities.join(" · ") ?? "Kernaufgaben und Partnerfeedback"}`,
      `Fordern: ${recommendation?.advancedActivities.join(" · ") ?? "Transfer- und Diagnoseaufgaben"}`,
      "",
      "Abschluss: Exit-Ticket erfassen und den Dayova-Lernstand aktualisieren.",
    ].join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="teacher-assistant-layout">
      <section className="teacher-panel teacher-assistant-controls">
        <div className="teacher-assistant-intro">
          <span className="teacher-list-icon" data-tone="brand">
            <DayovaIcon icon={MagicWand01Icon} size={22} />
          </span>
          <div>
            <h2>Stunde vorbereiten</h2>
            <p>
              Dayova verbindet Lernstand, Aufgaben und Risikosignale zu einem
              direkt nutzbaren Unterrichtsentwurf.
            </p>
          </div>
        </div>
        <div className="teacher-form-grid">
          <label>
            Klasse und Fach
            <select value={groupId} onChange={(event) => setGroupId(event.target.value)}>
              {data.map((item) => (
                <option value={item.group.id} key={item.group.id}>
                  {item.group.className} · {item.group.subjectName}
                </option>
              ))}
            </select>
          </label>
          <label>
            Stundenlänge
            <select value={duration} onChange={(event) => setDuration(Number(event.target.value))}>
              <option value={45}>45 Minuten</option>
              <option value={60}>60 Minuten</option>
              <option value={90}>90 Minuten</option>
            </select>
          </label>
          <label className="teacher-form-wide">
            Schwerpunkt
            <select value={focus} onChange={(event) => setFocus(event.target.value)}>
              <option>Lernlücken schließen</option>
              <option>Neues Thema einführen</option>
              <option>Prüfung vorbereiten</option>
              <option>Transfer und Vertiefung</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          className="teacher-button teacher-button-primary"
          onClick={() => setGenerated(true)}
        >
          <DayovaIcon icon={MagicWand01Icon} size={18} />
          Planung erstellen
        </button>
      </section>

      <section className="teacher-panel teacher-assistant-signals">
        <header className="teacher-panel-header">
          <div>
            <h2>Signale aus der Klasse</h2>
            <p>Automatisch aus den aktuellen Dayova-Daten priorisiert</p>
          </div>
          <StatusBadge tone="brand">Live-Kontext</StatusBadge>
        </header>
        <ProgressBar value={selected.group.masteryScore} label="Wissensstand" />
        <div className="teacher-list">
          <article className="teacher-list-row">
            <div>
              <strong>{topTopic?.name ?? "Aktueller Lernschwerpunkt"}</strong>
              <p>{topTopic?.misconception ?? "Vorwissen gezielt aktivieren."}</p>
            </div>
            <StatusBadge tone="warning">
              {topTopic?.affectedStudents ?? selected.group.riskStudentCount} betroffen
            </StatusBadge>
          </article>
          {riskStudents.slice(0, 3).map((student) => (
            <article className="teacher-list-row" key={student.id}>
              <div>
                <strong>{student.firstName} {student.lastName}</strong>
                <p>{learningFocusForGroup(student, selected.topics)}</p>
              </div>
              <RiskBadge risk={student.riskLevel} />
            </article>
          ))}
        </div>
      </section>

      {generated ? (
        <section className="teacher-panel teacher-assistant-plan">
          <header className="teacher-panel-header">
            <div>
              <p className="teacher-eyebrow">Unterrichtsentwurf</p>
              <h2>{focusPlan.title}</h2>
              <p>
                {selected.group.className} · {selected.group.subjectName} · {duration}{" "}
                Minuten
              </p>
            </div>
            <div className="teacher-heading-actions">
              <button className="teacher-button teacher-button-secondary" type="button" onClick={copyPlan}>
                <DayovaIcon icon={Copy01Icon} size={17} />
                {copied ? "Kopiert" : "Kopieren"}
              </button>
              <button className="teacher-button teacher-button-secondary" type="button" onClick={() => window.print()}>
                <DayovaIcon icon={PrinterIcon} size={17} />
                Drucken
              </button>
              <button className="teacher-button teacher-button-primary" type="button" onClick={() => toggleLessonSaved(lessonId)}>
                {saved ? "Gespeichert" : "Plan speichern"}
              </button>
            </div>
          </header>
          <div className="teacher-assistant-plan-context">
            <article className="teacher-assistant-rationale">
              <div className="teacher-assistant-section-heading">
                <div>
                  <span>Entscheidungsgrundlage</span>
                  <h3>Warum genau diese Stunde?</h3>
                </div>
                <StatusBadge tone="positive">
                  Datenlage {recommendation?.confidenceLevel ?? "mittel"}
                </StatusBadge>
              </div>
              <p>
                {recommendation?.whyThisMattersNow ??
                  topTopic?.misconception ??
                  "Die Empfehlung folgt dem aktuellen Wissensstand der Lerngruppe."}
              </p>
              <div className="teacher-assistant-signal-list" aria-label="Verwendete Analysesignale">
                {evidenceSignals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            </article>
            <article className="teacher-assistant-preparation">
              <div>
                <span>Lernziele</span>
                <ul>
                  {lessonObjectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>Material & Vorbereitung</span>
                <div className="teacher-assistant-materials">
                  {materials.map((material) => (
                    <small key={material}>{material}</small>
                  ))}
                </div>
              </div>
            </article>
          </div>
          <div className="teacher-lesson-workflow">
            {phases.map((phase, index) => {
              const key = `${lessonId}-${phase.title}`;
              const done = completed.includes(key);
              return (
                <article key={phase.title} data-complete={done}>
                  <button
                    type="button"
                    aria-label={`${phase.title} als ${done ? "offen" : "erledigt"} markieren`}
                    onClick={() =>
                      setCompleted((current) =>
                        done
                          ? current.filter((item) => item !== key)
                          : [...current, key],
                      )
                    }
                  >
                    <DayovaIcon icon={CheckmarkCircle02Icon} size={22} />
                  </button>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                    <ul>
                      {phase.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <strong>{phase.durationMinutes} Min.</strong>
                </article>
              );
            })}
          </div>
          <div className="teacher-assistant-section-heading teacher-assistant-learning-heading">
            <div>
              <span>Individuelle Lernwege</span>
              <h3>Wer braucht in dieser Stunde was?</h3>
            </div>
            <p>Die Gruppen entstehen aus dem aktuellen Dayova-Lernstand.</p>
          </div>
          <div className="teacher-assistant-differentiation">
            <article>
              <span>Unterstützen</span>
              <strong>
                {studentNames(supportStudents, "Gezielte Unterstützungsgruppe")}
              </strong>
              <p>
                {recommendation?.supportActivities.join(" · ") ??
                  "Schrittkarten, ein begleitetes Beispiel und gezielte Partnerarbeit."}
              </p>
              <small>Erfolgssignal: Lösungsweg mit weniger Hilfen durchführen</small>
            </article>
            <article>
              <span>Festigen</span>
              <strong>
                {studentNames(observationStudents, "Schüler:innen im Aufbau")}
              </strong>
              <p>
                {recommendation?.coreActivities.join(" · ") ??
                  "Kernaufgaben bearbeiten und Lösungswege vergleichen."}
              </p>
              <small>Erfolgssignal: Rechenweg sicher erklären</small>
            </article>
            <article>
              <span>Fordern</span>
              <strong>{studentNames(secureStudents, "Sichere Schüler:innen")}</strong>
              <p>
                {recommendation?.advancedActivities.join(" · ") ??
                  "Transferaufgabe lösen und einen eigenen Lösungsweg begründen."}
              </p>
              <small>Erfolgssignal: Wissen auf eine neue Situation übertragen</small>
            </article>
          </div>
          <section className="teacher-assistant-feedback" aria-labelledby="feedback-loop-heading">
            <div className="teacher-assistant-section-heading">
              <div>
                <span>Lernschleife schließen</span>
                <h3 id="feedback-loop-heading">Was nach der Stunde passiert</h3>
              </div>
              <p>Das Ergebnis dieser Stunde verbessert automatisch die nächste Empfehlung.</p>
            </div>
            <div className="teacher-assistant-feedback-steps">
              <article>
                <span>01</span>
                <strong>Exit-Ticket erfassen</strong>
                <p>Kurzes Ergebnis je Schüler:in statt zusätzlicher Dokumentation.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Lernstand aktualisieren</strong>
                <p>Stärken, Lücken und Unterstützungsgruppen werden neu bewertet.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Nächste Handlung erhalten</strong>
                <p>Dayova priorisiert den sinnvollsten Schritt für die nächste Stunde.</p>
              </article>
            </div>
            <div className="teacher-assistant-next-actions">
              <p>
                Empfohlene Weiterarbeit: {recommendation?.homeworkFollowUp ?? `Kurze App-Wiederholung zu ${primaryTopic}.`}
              </p>
              <div>
                <Link
                  className="teacher-button teacher-button-secondary"
                  href={`/teachers/planning?section=assignments&group=${groupId}&new=1`}
                >
                  Hausaufgabe planen
                </Link>
                <Link
                  className="teacher-button teacher-button-secondary"
                  href={`/teachers/planning?section=tests&group=${groupId}&new=1`}
                >
                  Wissenscheck planen
                </Link>
              </div>
            </div>
          </section>
        </section>
      ) : null}
    </div>
  );
}
