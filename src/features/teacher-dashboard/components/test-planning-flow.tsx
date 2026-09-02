"use client";

import { useState } from "react";
import type { TeachingGroup } from "../types";
import { useTeacherDashboard } from "./dashboard-store";

export function TestPlanningFlow({
  groups,
  presetGroupId,
  startOpen = false,
}: {
  groups: TeachingGroup[];
  presetGroupId?: string;
  startOpen?: boolean;
}) {
  const { addTest } = useTeacherDashboard();
  const [open, setOpen] = useState(startOpen);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [groupId, setGroupId] = useState(
    presetGroupId ?? groups[0]?.id ?? "",
  );
  const [kind, setKind] = useState("Klassenarbeit");
  const [date, setDate] = useState("2026-08-17");
  const [topics, setTopics] = useState("");
  const close = () => { setOpen(false); setStep(1); };

  return <>
    <button className="teacher-button teacher-button-primary" type="button" onClick={() => { setOpen(true); setSaved(false); }}>Test planen</button>
    {saved ? <span className="teacher-success-message" role="status">Der Test wurde angelegt. Die Lernvorbereitung der Schüler:innen wurde aktualisiert.</span> : null}
    {open ? <div className="teacher-modal-backdrop" role="presentation"><section className="teacher-flow-dialog" role="dialog" aria-modal="true" aria-labelledby="test-flow-title">
      <header><div><span>Schritt {step} von 2</span><h2 id="test-flow-title">Test planen</h2></div><button type="button" onClick={close}>Schließen</button></header>
      {step === 1 ? <div className="teacher-form-grid"><label>Klasse und Fach<select value={groupId} disabled={Boolean(presetGroupId)} onChange={(event) => setGroupId(event.target.value)}>{groups.map((group) => <option key={group.id} value={group.id}>{group.className} · {group.subjectName}</option>)}</select></label><label>Art<select value={kind} onChange={(event) => setKind(event.target.value)}><option>Klassenarbeit</option><option>Test</option><option>Quiz</option><option>Stegreifaufgabe</option></select></label><label>Datum<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><label>Themen<input value={topics} onChange={(event) => setTopics(event.target.value)} placeholder="Themen mit Komma trennen" /></label></div> : <div className="teacher-review-summary"><strong>Planung prüfen</strong><p>{kind} am {date}. Dayova informiert die Schüler:innen und passt deren Vorbereitung an Termin und Themen an.</p></div>}
      <footer className="teacher-flow-actions"><button className="teacher-button teacher-button-secondary" type="button" onClick={step === 1 ? close : () => setStep(1)}>Abbrechen{step > 1 ? " / Zurück" : ""}</button>{step === 1 ? <button className="teacher-button teacher-button-primary" type="button" disabled={!groupId || !date || !topics.trim()} onClick={() => setStep(2)}>Weiter</button> : <button className="teacher-button teacher-button-primary" type="button" onClick={() => { addTest({ id: `test-${Date.now()}`, teachingGroupId: groupId, title: `${kind} ${topics.split(",")[0]?.trim() || "Lernstand"}`, description: `Leistungsnachweis zu ${topics}.`, date: new Date(`${date}T08:00:00`).toISOString(), topics: topics.split(",").map((item) => item.trim()).filter(Boolean), status: "geplant", readinessScore: 0 }); close(); setSaved(true); }}>Test anlegen</button>}</footer>
    </section></div> : null}
  </>;
}
