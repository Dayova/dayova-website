"use client";

import { useState } from "react";
import type { Student, TeachingGroup } from "../types";

export function GradeEntryFlow({ group, students }: { group: TeachingGroup; students: Student[] }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [grades, setGrades] = useState<Record<string, string>>({});

  const close = () => { setOpen(false); setStep(1); };

  return (
    <>
      <button className="teacher-button teacher-button-primary" type="button" onClick={() => { setOpen(true); setSaved(false); }}>Noten eintragen</button>
      {saved ? <span className="teacher-success-message" role="status">Noten wurden gespeichert und die Auswertungen aktualisiert.</span> : null}
      {open ? (
        <div className="teacher-modal-backdrop" role="presentation">
          <section className="teacher-flow-dialog" role="dialog" aria-modal="true" aria-labelledby="grade-flow-title">
            <header><div><span>Schritt {step} von 3</span><h2 id="grade-flow-title">Noten eintragen</h2></div><button type="button" onClick={close}>Schließen</button></header>
            {step === 1 ? (
              <div className="teacher-form-grid">
                <label>Klasse<input value={group.className} readOnly /></label>
                <label>Fach<input value={group.subjectName} readOnly /></label>
                <label>Leistungsart<select defaultValue="Klassenarbeit"><option>Klassenarbeit</option><option>Test</option><option>Quiz</option><option>Mündliche Leistung</option></select></label>
                <label>Datum<input type="date" defaultValue="2026-07-31" /></label>
                <label className="teacher-form-wide">Thema (optional)<input placeholder="z. B. Bruchgleichungen" /></label>
              </div>
            ) : step === 2 ? (
              <div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Schüler:in</th><th>Note</th></tr></thead><tbody>{students.map((student) => <tr key={student.id}><td>{student.firstName} {student.lastName}</td><td><input aria-label={`Note für ${student.firstName} ${student.lastName}`} value={grades[student.id] ?? ""} onChange={(event) => setGrades((current) => ({ ...current, [student.id]: event.target.value }))} placeholder="1–6" /></td></tr>)}</tbody></table></div>
            ) : (
              <div className="teacher-review-summary"><strong>{group.className} · {group.subjectName}</strong><p>{Object.values(grades).filter(Boolean).length} von {students.length} Noten sind eingetragen.</p><p>Nach dem Speichern werden Notenbuch, Durchschnitt und Analyse aktualisiert.</p></div>
            )}
            <footer className="teacher-flow-actions"><button className="teacher-button teacher-button-secondary" type="button" onClick={step === 1 ? close : () => setStep((value) => value - 1)}>Abbrechen{step > 1 ? " / Zurück" : ""}</button>{step < 3 ? <button className="teacher-button teacher-button-primary" type="button" onClick={() => setStep((value) => value + 1)}>Weiter</button> : <button className="teacher-button teacher-button-primary" type="button" onClick={() => { close(); setSaved(true); }}>Noten speichern</button>}</footer>
          </section>
        </div>
      ) : null}
    </>
  );
}
