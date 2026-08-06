"use client";

import { useState } from "react";
import type { TeachingGroup } from "../types";

export function TestPlanningFlow({ groups }: { groups: TeachingGroup[] }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const close = () => { setOpen(false); setStep(1); };

  return <>
    <button className="teacher-button teacher-button-primary" type="button" onClick={() => { setOpen(true); setSaved(false); }}>Test planen</button>
    {saved ? <span className="teacher-success-message" role="status">Der Test wurde angelegt. Die Lernvorbereitung der Schüler:innen wurde aktualisiert.</span> : null}
    {open ? <div className="teacher-modal-backdrop" role="presentation"><section className="teacher-flow-dialog" role="dialog" aria-modal="true" aria-labelledby="test-flow-title">
      <header><div><span>Schritt {step} von 2</span><h2 id="test-flow-title">Test planen</h2></div><button type="button" onClick={close}>Schließen</button></header>
      {step === 1 ? <div className="teacher-form-grid"><label>Klasse und Fach<select>{groups.map((group) => <option key={group.id}>{group.className} · {group.subjectName}</option>)}</select></label><label>Art<select><option>Klassenarbeit</option><option>Test</option><option>Quiz</option><option>Stegreifaufgabe</option></select></label><label>Datum<input type="date" defaultValue="2026-08-17" /></label><label>Themen<input placeholder="Themen mit Komma trennen" /></label></div> : <div className="teacher-review-summary"><strong>Planung prüfen</strong><p>Dayova informiert die Schüler:innen und passt deren Vorbereitung an Termin und Themen an.</p></div>}
      <footer className="teacher-flow-actions"><button className="teacher-button teacher-button-secondary" type="button" onClick={step === 1 ? close : () => setStep(1)}>Abbrechen{step > 1 ? " / Zurück" : ""}</button>{step === 1 ? <button className="teacher-button teacher-button-primary" type="button" onClick={() => setStep(2)}>Weiter</button> : <button className="teacher-button teacher-button-primary" type="button" onClick={() => { close(); setSaved(true); }}>Test anlegen</button>}</footer>
    </section></div> : null}
  </>;
}
