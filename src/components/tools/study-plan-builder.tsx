"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { StoreDownloadLink } from "@/components/store-download-link";
import { createStudyPlan, formatPlanDate, formatStudyDuration, studyGrades, studySubjects, type StudyPlan } from "@/lib/study-plan";

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
          setPlan(createStudyPlan({ subjectId: String(data.get("subject")), grade: String(data.get("grade")), examDate: String(data.get("examDate")), topicDescription: String(data.get("topicDescription")), sessionMinutes: Number(data.get("sessionMinutes")), sessionsPerWeek: Number(data.get("sessionsPerWeek")) }));
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
          <label>Deine Klasse<select name="grade" required defaultValue="">
            <option value="" disabled>Klasse auswählen</option>
            {studyGrades.map((grade) => <option key={grade} value={grade}>{grade}. Klasse</option>)}
          </select></label>
          <label>Dein Prüfungstag<input type="date" name="examDate" required aria-describedby="study-plan-date-hint" /></label>
        </div>
        <p id="study-plan-date-hint" className="content-small">Dein Plan startet heute und reicht bis zum Tag vor deiner Prüfung.</p>
        <div className="content-grid">
        <label>Wie lange möchtest du pro Lerneinheit lernen?<select name="sessionMinutes" required defaultValue="60" aria-describedby="study-plan-time-hint">
          {Array.from({ length: 16 }, (_, index) => (index + 1) * 15).map((minutes) => <option key={minutes} value={minutes}>{formatStudyDuration(minutes)}</option>)}
        </select></label>
        <label>Wie oft möchtest du pro Woche lernen?<select name="sessionsPerWeek" required defaultValue="3">
          {[2, 3, 4, 5].map((count) => <option key={count} value={count}>{count}-mal pro Woche</option>)}
        </select></label>
        </div>
        <p id="study-plan-time-hint" className="content-small">Bis zu 4 Stunden pro Einheit. Der Simulator verteilt die Termine mit freien Tagen dazwischen.</p>
        <label>Welche Themen kommen in deiner Arbeit vor?<textarea name="topicDescription" required maxLength={300} rows={3} placeholder="Zum Beispiel: lineare Gleichungen, Bruchrechnung und Textaufgaben" /></label>
        {error && <p className="content-notice" role="alert">{error}</p>}
        <button className="button-primary" type="submit">Lernplan erstellen</button>
        <p className="content-small">Kostenlos und ohne Anmeldung. Dein Plan wird nur in diesem Browserfenster erstellt und nicht dauerhaft gespeichert.</p>
      </form>
      <div className="study-plan-result" ref={resultRef} tabIndex={-1} aria-label="Dein erstellter Lernplan">
        {plan && <>
          <h3>Dein Lernplan für {plan.subject}</h3>
          <p><strong>Klassenstufe:</strong> {plan.grade}. Klasse</p>
          <p role="status">Prüfung am {formatPlanDate(plan.examDate)} · {plan.dayCount} {plan.dayCount === 1 ? "Tag" : "Tage"} zur Vorbereitung</p>
          <p><strong>Deine Prüfungsthemen:</strong> {plan.topicDescription}</p>
          <p><strong>{plan.sessions.length} {plan.sessions.length === 1 ? "Lerneinheit" : "Lerneinheiten"}</strong> · {formatStudyDuration(plan.sessionMinutes)} pro Einheit · {formatStudyDuration(plan.totalMinutes)} insgesamt</p>
          <p>Die Termine sind über den Zeitraum verteilt. Dazwischen bleiben freie Tage zum Erholen und Festigen.</p>
          {plan.sessions.length < 3 && <p className="content-small">Wegen des nahen Prüfungstermins werden mehrere Lernphasen in einer Einheit kombiniert. Konzentriere dich auf die wichtigsten Prüfungsthemen.</p>}
          <ol className="study-plan-phases">
            {plan.sessions.map((session, index) => <li className="study-plan-phase" key={session.date}>
              <div className="study-plan-phase-heading"><span className="study-plan-phase-number" aria-hidden="true">{index + 1}</span><div><h4><time dateTime={session.date}>{formatPlanDate(session.date)}</time></h4><p className="content-small">{formatStudyDuration(plan.sessionMinutes)} Lernzeit</p></div></div>
              <div className="study-plan-session-blocks">{session.blocks.map((block) => <div key={block.id}>
                <h5>{block.name} · {formatStudyDuration(block.minutes)}</h5>
                <p>{block.task}</p>
              </div>)}</div>
            </li>)}
          </ol>
          <p className="content-small">Dieser Vorschlag ordnet deine Prüfungsthemen in einen zeitlichen Rahmen ein. Wie viel Zeit du tatsächlich brauchst, hängt von deinem Lernstand und dem Umfang der Themen ab.</p>
          <div className="content-actions study-plan-controls"><button type="button" className="button-secondary" onClick={() => window.print()}>Lernplan drucken</button></div>
          <aside className="home-classic-download study-plan-app-cta" aria-labelledby="study-plan-app-title">
            <div className="home-classic-download__copy">
              <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">Dein persönlicher Plan</span>
              <h4 id="study-plan-app-title" className="dayova-section-title">Du möchtest nicht selbst planen?</h4>
              <p>In der Dayova-App musst du Lernzeiten und Aufgaben nicht jedes Mal selbst verteilen. Dayova berücksichtigt deine Prüfung, verfügbaren Lernzeiten, Wissensanalyse und Lernmaterialien und erstellt daraus deinen persönlichen Lernplan. Wenn sich etwas ändert, wird der Plan neu angepasst.</p>
              <div className="home-classic-download__actions">
                <StoreDownloadLink variant="secondary">Lernplan automatisch mit Dayova erstellen</StoreDownloadLink>
              </div>
            </div>
            <div className="home-classic-download__visual" aria-hidden="true">
              <Image src="/images/dayova-bluebox-light.png" alt="" width={2217} height={1456} sizes="(max-width: 1023px) 90vw, 520px" className="home-classic-download__theme-image home-classic-download__theme-image--light" />
              <Image src="/images/dayova-bluebox-dark.png" alt="" width={2217} height={1456} sizes="(max-width: 1023px) 90vw, 520px" className="home-classic-download__theme-image home-classic-download__theme-image--dark" />
            </div>
          </aside>
        </>}
      </div>
    </div>
  );
}
