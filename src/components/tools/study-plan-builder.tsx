"use client";

import { useRef, useState } from "react";
import { createStudyPlan, formatPlanDate, studySubjects, type StudyPlan } from "@/lib/study-plan";

export function StudyPlanBuilder() {
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <div className="study-plan-tool">
      <form className="study-plan-inputs" onChange={() => { setPlan(null); setError(""); }} onSubmit={(event) => {
        event.preventDefault();
        try {
          const data = new FormData(event.currentTarget);
          setPlan(createStudyPlan({ subjectId: String(data.get("subject")), examDate: String(data.get("examDate")) }));
          setError("");
          requestAnimationFrame(() => resultRef.current?.focus());
        } catch (cause) {
          setPlan(null);
          setError(cause instanceof Error ? cause.message : "Bitte prüfe deine Angaben.");
        }
      }}>
        <div className="content-grid">
          <label>Dein Fach<select name="subject" required defaultValue="">
            <option value="" disabled>Fach auswählen</option>
            {studySubjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}
          </select></label>
          <label>Dein Prüfungstag<input type="date" name="examDate" required aria-describedby="study-plan-date-hint" /></label>
        </div>
        <p id="study-plan-date-hint" className="content-small">Dein Plan startet heute und reicht bis zum Tag vor deiner Prüfung.</p>
        {error && <p className="content-notice" role="alert">{error}</p>}
        <button className="button-primary" type="submit">Lernplan erstellen</button>
        <p className="content-small">Kostenlos und ohne Anmeldung. Dein Plan wird nur in diesem Browserfenster erstellt und nicht dauerhaft gespeichert.</p>
      </form>
      <div className="study-plan-result" ref={resultRef} tabIndex={-1} aria-label="Dein erstellter Lernplan">
        {plan && <>
          <h3>Dein Lernplan für {plan.subject}</h3>
          <p role="status">Prüfung am {formatPlanDate(plan.examDate)} · {plan.dayCount} {plan.dayCount === 1 ? "Tag" : "Tage"} zur Vorbereitung</p>
          <p>Gehe deine Prüfungsthemen in diesen drei Phasen durch. Teile dir innerhalb der Zeiträume passende Lerneinheiten und Pausen ein.</p>
          {plan.dayCount < 3 && <p className="content-small">Bei deinem nahen Prüfungstermin liegen mehrere Phasen am selben Tag. Konzentriere dich auf die wichtigsten Prüfungsthemen.</p>}
          <ol className="study-plan-phases">
            {plan.phases.map((phase, index) => <li className="study-plan-phase" key={phase.id}>
              <div className="study-plan-phase-heading"><span className="study-plan-phase-number" aria-hidden="true">{index + 1}</span><div><h4>{phase.name}</h4><p className="content-small"><time dateTime={phase.startDate}>{formatPlanDate(phase.startDate)}</time>{phase.startDate !== phase.endDate && <> bis <time dateTime={phase.endDate}>{formatPlanDate(phase.endDate)}</time></>}</p></div></div>
              <ul>{phase.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </li>)}
          </ol>
          <p className="content-small">Dieser Vorschlag richtet sich nach Fach und Prüfungstermin. Passe die Aufgaben an deinen Unterricht und deinen Lernstand an.</p>
          <div className="content-actions study-plan-controls"><button type="button" className="button-secondary" onClick={() => window.print()}>Lernplan drucken</button></div>
        </>}
      </div>
    </div>
  );
}
