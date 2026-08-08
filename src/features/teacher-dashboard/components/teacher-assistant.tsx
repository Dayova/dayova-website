"use client";

import {
  CheckmarkCircle02Icon,
  Copy01Icon,
  MagicWand01Icon,
  PrinterIcon,
} from "@hugeicons/core-free-icons";
import { useMemo, useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import type {
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

export function TeacherAssistant({ data }: { data: AssistantData[] }) {
  const [groupId, setGroupId] = useState(data[0]?.group.id ?? "");
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
  const riskStudents = selected.students.filter(
    (student) => student.riskLevel !== "niedrig",
  );
  const lessonId = `${groupId}-${duration}-${focus}`;
  const saved = savedLessonIds.includes(lessonId);
  const phases = recommendation?.phases ?? [
    {
      title: "Einstieg",
      durationMinutes: 8,
      description: "Vorwissen aktivieren und Lernziel sichtbar machen.",
      activities: ["Kurze Diagnosefrage", "Antworten gemeinsam ordnen"],
    },
    {
      title: "Arbeitsphase",
      durationMinutes: Math.max(20, duration - 18),
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

  const copyPlan = async () => {
    const text = [
      `${selected.group.className} · ${selected.group.subjectName}`,
      `Fokus: ${focus}`,
      `Dauer: ${duration} Minuten`,
      ...phases.map(
        (phase) =>
          `${phase.title} (${phase.durationMinutes} Min.): ${phase.description}`,
      ),
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
                <p>{student.supportFocus}</p>
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
              <h2>{recommendation?.lessonTitle ?? focus}</h2>
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
          <div className="teacher-assistant-differentiation">
            <article>
              <span>Unterstützen</span>
              <p>
                {recommendation?.supportActivities.join(" · ") ??
                  "Schrittkarten, ein begleitetes Beispiel und gezielte Partnerarbeit."}
              </p>
            </article>
            <article>
              <span>Festigen</span>
              <p>
                {recommendation?.coreActivities.join(" · ") ??
                  "Kernaufgaben bearbeiten und Lösungswege vergleichen."}
              </p>
            </article>
            <article>
              <span>Fordern</span>
              <p>
                {recommendation?.advancedActivities.join(" · ") ??
                  "Transferaufgabe lösen und einen eigenen Lösungsweg begründen."}
              </p>
            </article>
          </div>
        </section>
      ) : null}
    </div>
  );
}
