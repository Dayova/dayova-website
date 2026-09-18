"use client";

import { useRef, useState } from "react";
import { createStudyPlan, formatPlanDate, studyPlanAsText, type StudyPlan, type StudyTopic } from "@/lib/study-plan";

const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const initialTopics: StudyTopic[] = [
  { name: "Bruchrechnung", minutes: 60 },
  { name: "Gleichungen", minutes: 90 },
  { name: "Textaufgaben", minutes: 60 },
];

export function StudyPlanBuilder() {
  const [startDate, setStartDate] = useState("");
  const [examDate, setExamDate] = useState("");
  const [selectedDays, setSelectedDays] = useState([1, 2, 3, 4, 5]);
  const [dailyMinutes, setDailyMinutes] = useState(60);
  const [topics, setTopics] = useState(initialTopics);
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [error, setError] = useState("");
  const [stale, setStale] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  function updateTopic(index: number, key: keyof StudyTopic, value: string) {
    setTopics((current) => current.map((topic, position) => position === index ? { ...topic, [key]: key === "minutes" ? Number(value) : value } : topic));
  }
  function loadExample() {
    const now = new Date();
    const localDate = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    setStartDate(localDate.toISOString().slice(0, 10));
    localDate.setUTCDate(localDate.getUTCDate() + 14);
    setExamDate(localDate.toISOString().slice(0, 10));
    setTopics(initialTopics);
    setSelectedDays([1, 2, 3, 4, 5]);
    setDailyMinutes(60);
    setStale(!!plan);
    setError("");
  }
  function downloadPlan() {
    if (!plan) return;
    const url = URL.createObjectURL(new Blob([studyPlanAsText(plan)], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "dayova-study-plan.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="study-plan-tool">
      <form className="study-plan-inputs" onChange={() => setStale(!!plan)} onSubmit={(event) => {
        event.preventDefault();
        try {
          setPlan(createStudyPlan({ startDate, examDate, weekdays: selectedDays, dailyMinutes, topics }));
          setError("");
          setStale(false);
          requestAnimationFrame(() => resultRef.current?.focus());
        } catch (cause) {
          setError(cause instanceof Error ? cause.message : "Bitte prüfe deine Angaben.");
        }
      }}>
        <p>Die Mathe-Themen sind Beispiele. Ersetze sie durch deinen Prüfungsstoff und schätze die reine Übungszeit je Thema. Wiederholungen plant der Rechner zusätzlich ein.</p>
        <button type="button" className="button-secondary" onClick={loadExample}>Beispiel für 14 Tage einsetzen</button>
        <div className="content-grid">
          <label>Lernstart<input type="date" required value={startDate} onChange={(event) => setStartDate(event.target.value)} /></label>
          <label>Prüfungstag<input type="date" required value={examDate} onChange={(event) => setExamDate(event.target.value)} /></label>
          <label>Verfügbare Minuten pro Lerntag<input type="number" min={15} max={240} step={1} required value={dailyMinutes || ""} onChange={(event) => setDailyMinutes(Number(event.target.value))} /></label>
        </div>
        <fieldset>
          <legend>An welchen Tagen kannst du lernen?</legend>
          <div className="study-plan-weekdays">
            {[1, 2, 3, 4, 5, 6, 0].map((day) => <label key={day}><input type="checkbox" checked={selectedDays.includes(day)} onChange={(event) => setSelectedDays((current) => event.target.checked ? [...current, day] : current.filter((item) => item !== day))} />{weekdays[day]}</label>)}
          </div>
        </fieldset>
        <fieldset>
          <legend>Deine Themen und der geschätzte Aufwand</legend>
          {topics.map((topic, index) => <div className="study-plan-topic" key={index}>
            <label>Thema {index + 1}<input type="text" maxLength={80} required value={topic.name} onChange={(event) => updateTopic(index, "name", event.target.value)} /></label>
            <label>Übungszeit in Minuten<input type="number" min={10} max={600} step={1} required value={topic.minutes || ""} onChange={(event) => updateTopic(index, "minutes", event.target.value)} /></label>
            <button type="button" className="button-secondary" disabled={topics.length === 1} aria-label={`Thema ${index + 1} entfernen`} onClick={() => { setTopics((current) => current.filter((_, position) => position !== index)); setStale(!!plan); }}>Entfernen</button>
          </div>)}
          <button type="button" className="button-secondary" disabled={topics.length === 8} onClick={() => { setTopics((current) => [...current, { name: "", minutes: 30 }]); setStale(!!plan); }}>Thema hinzufügen</button>
        </fieldset>
        {error && <p className="content-notice" role="alert">{error}</p>}
        <button className="button-primary" type="submit">Lernplan berechnen</button>
        <p className="content-small">Kostenlos, ohne Anmeldung. Die Berechnung läuft im Browser; der Plan wird hier nicht dauerhaft gespeichert.</p>
      </form>
      <div className="study-plan-result" ref={resultRef} tabIndex={-1}>
        {plan && <>
          <h3>Dein Lernplan-Vorschlag</h3>
          <p role="status">{plan.scheduledMinutes} von {plan.requestedMinutes} Minuten sind eingeplant, einschließlich Wiederholungen.</p>
          {stale && <p className="content-notice" role="status">Deine Eingaben haben sich geändert. Berechne den Plan erneut, bevor du ihn übernimmst.</p>}
          {plan.remaining.length > 0 ? <div className="content-notice"><strong>Der Stoff passt noch nicht vollständig in deine Lernzeit.</strong><ul>{plan.remaining.map((item, index) => <li key={index}>{item.topic}: {item.studyMinutes} Min. Üben und {item.reviewMinutes} Min. Wiederholen offen.</li>)}</ul><p>Beginne früher, prüfe deine Schätzungen oder priorisiere den Stoff. Fülle nicht einfach alle Pausen. Besprich wichtige Lücken mit deiner Lehrkraft.</p></div> : <p>Deine Zeitschätzungen passen in den Zeitraum. Ob du den Stoff beherrschst, musst du mit eigenen Aufgaben überprüfen.</p>}
          <div className="content-table-wrap" role="region" aria-label="Dein berechneter Lernplan" tabIndex={0}>
            <table className="content-table"><caption>Lerntermine vor deinem Prüfungstag</caption><thead><tr><th scope="col">Tag</th><th scope="col">Aufgaben</th><th scope="col">Frei / Puffer</th></tr></thead><tbody>{plan.days.map((day) => <tr key={day.date}><th scope="row">{formatPlanDate(day.date)}</th><td>{day.sessions.length ? <ul>{day.sessions.map((session, index) => <li key={index}>{session.kind === "review" ? "Wiederholen" : "Üben"}: {session.topic} · {session.minutes} Min.</li>)}</ul> : "Frei – nur bei Bedarf nacharbeiten"}</td><td>{day.spareMinutes} Min.</td></tr>)}</tbody></table>
          </div>
          <p className="content-small">Modellannahmen: mindestens 20 % Tagespuffer; zusätzlich 25 % Wiederholungszeit je Thema, mindestens 10 Minuten, frühestens an einem späteren Lerntag. Das sind transparente Rechenannahmen, keine allgemeingültigen Lernregeln.</p>
          <div className="content-actions study-plan-controls"><button type="button" className="button-secondary" disabled={stale} onClick={downloadPlan}>Lernplan als Text speichern</button><button type="button" className="button-secondary" disabled={stale} onClick={() => window.print()}>Lernplan drucken</button></div>
        </>}
      </div>
    </div>
  );
}
