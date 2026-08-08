"use client";

import { useState } from "react";
import type { Student, TeachingGroup } from "../types";
import { useTeacherDashboard } from "./dashboard-store";

export function GradeEntryFlow({ group, students }: { group: TeachingGroup; students: Student[] }) {
  const { addGrades } = useTeacherDashboard();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [assessmentType, setAssessmentType] = useState("Klassenarbeit");
  const [assessmentDate, setAssessmentDate] = useState("2026-07-31");
  const [topic, setTopic] = useState("");

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
                <label>Leistungsart<select value={assessmentType} onChange={(event) => setAssessmentType(event.target.value)}><option>Klassenarbeit</option><option>Test</option><option>Quiz</option><option>Mündliche Leistung</option></select></label>
                <label>Datum<input type="date" value={assessmentDate} onChange={(event) => setAssessmentDate(event.target.value)} /></label>
                <label className="teacher-form-wide">Thema (optional)<input value={topic} onChange={(event) => setTopic(event.target.value)} placeholder="z. B. Bruchgleichungen" /></label>
              </div>
            ) : step === 2 ? (
              <div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Schüler:in</th><th>Note</th></tr></thead><tbody>{students.map((student) => <tr key={student.id}><td>{student.firstName} {student.lastName}</td><td><input aria-label={`Note für ${student.firstName} ${student.lastName}`} value={grades[student.id] ?? ""} onChange={(event) => setGrades((current) => ({ ...current, [student.id]: event.target.value }))} placeholder="1–6" /></td></tr>)}</tbody></table></div>
            ) : (
              <div className="teacher-review-summary"><strong>{group.className} · {group.subjectName}</strong><p>{Object.values(grades).filter(Boolean).length} von {students.length} Noten sind eingetragen.</p><p>Nach dem Speichern werden Notenbuch, Durchschnitt und Analyse aktualisiert.</p></div>
            )}
            <footer className="teacher-flow-actions"><button className="teacher-button teacher-button-secondary" type="button" onClick={step === 1 ? close : () => setStep((value) => value - 1)}>Abbrechen{step > 1 ? " / Zurück" : ""}</button>{step < 3 ? <button className="teacher-button teacher-button-primary" type="button" disabled={step === 2 && !Object.values(grades).some(Boolean)} onClick={() => setStep((value) => value + 1)}>Weiter</button> : <button className="teacher-button teacher-button-primary" type="button" onClick={() => { const assessmentTitle = topic.trim() || `${assessmentType} ${assessmentDate}`; addGrades(Object.entries(grades).flatMap(([studentId, value]) => value.trim() ? [{ id: `grade-${Date.now()}-${studentId}`, teachingGroupId: group.id, studentId, assessmentTitle, assessmentType: assessmentType === "Mündliche Leistung" ? "Mündlich" : assessmentType === "Klassenarbeit" ? "Test" : assessmentType as "Test" | "Quiz", value: value.trim(), weight: assessmentType === "Klassenarbeit" ? 2 : 1, competency: topic.trim() || group.subjectName, date: new Date(`${assessmentDate}T08:00:00`).toISOString(), semester: 1 as const }] : [])); close(); setSaved(true); }}>Noten speichern</button>}</footer>
          </section>
        </div>
      ) : null}
    </>
  );
}
