"use client";

import { useMemo, useState } from "react";
import type { TeachingGroup } from "../types";
import { useTeacherDashboard } from "./dashboard-store";

type Draft = {
  groupId: string;
  title: string;
  description: string;
  dueDate: string;
  topics: string;
  knowledgeCheck: boolean;
};

export function HomeworkPlanningFlow({
  groups,
  presetGroupId,
  compact = false,
  startOpen = false,
}: {
  groups: TeachingGroup[];
  presetGroupId?: string;
  compact?: boolean;
  startOpen?: boolean;
}) {
  const { addHomework } = useTeacherDashboard();
  const [open, setOpen] = useState(startOpen);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState<Draft | null>(null);
  const [draft, setDraft] = useState<Draft>({ groupId: presetGroupId ?? groups[0]?.id ?? "", title: "", description: "", dueDate: "2026-08-07", topics: "", knowledgeCheck: false });
  const group = useMemo(() => groups.find((item) => item.id === draft.groupId), [draft.groupId, groups]);
  const canContinue = step === 1 ? Boolean(draft.groupId) : step === 2 ? Boolean(draft.title.trim() && draft.dueDate) : true;
  const close = () => { setOpen(false); setStep(1); };

  return <>
    <button className={`teacher-button ${compact ? "teacher-button-secondary" : "teacher-button-primary"}`} type="button" onClick={() => setOpen(true)}>{compact ? "Hausaufgabe planen" : "Hausaufgabe erstellen"}</button>
    {saved && !open ? <span className="teacher-success-message" role="status">„{saved.title}“ wurde gespeichert. Benachrichtigungen und Lernplanvorschläge werden aktualisiert.</span> : null}
    {open ? <div className="teacher-modal-backdrop" role="presentation"><section className="teacher-flow-dialog" role="dialog" aria-modal="true" aria-labelledby="homework-flow-title">
      <header><div><span>Schritt {step} von 3</span><h2 id="homework-flow-title">Hausaufgabe planen</h2></div><button type="button" onClick={close}>Schließen</button></header>
      {step === 1 ? <div className="teacher-form-grid"><label>Klasse und Fach<select value={draft.groupId} disabled={Boolean(presetGroupId)} onChange={(event) => setDraft({ ...draft, groupId: event.target.value })}>{groups.map((item) => <option key={item.id} value={item.id}>{item.className} · {item.subjectName}</option>)}</select></label><div className="teacher-flow-hint"><strong>Kontext</strong><p>Die Aufgabe wird für {group ? `${group.className} · ${group.subjectName}` : "die ausgewählte Gruppe"} geplant.</p></div></div> : null}
      {step === 2 ? <div className="teacher-form-grid"><label>Titel<input value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} placeholder="z. B. Bruchgleichungen festigen" /></label><label>Fälligkeitsdatum<input type="date" value={draft.dueDate} onChange={(event) => setDraft({ ...draft, dueDate: event.target.value })} /></label><label className="teacher-form-wide">Beschreibung / Anweisungen<textarea value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} placeholder="Was sollen die Schüler:innen bearbeiten?" /></label><label className="teacher-form-wide">Themen / Kompetenzen<input value={draft.topics} onChange={(event) => setDraft({ ...draft, topics: event.target.value })} placeholder="Mit Komma trennen" /></label><label className="teacher-check-row"><input type="checkbox" checked={draft.knowledgeCheck} onChange={(event) => setDraft({ ...draft, knowledgeCheck: event.target.checked })} /> Optionalen KnowledgeCheck verknüpfen</label></div> : null}
      {step === 3 ? <div className="teacher-review-summary"><strong>Planung prüfen</strong><dl><div><dt>Klasse / Fach</dt><dd>{group?.className} · {group?.subjectName}</dd></div><div><dt>Titel</dt><dd>{draft.title || "Noch nicht angegeben"}</dd></div><div><dt>Fällig</dt><dd>{draft.dueDate}</dd></div><div><dt>Themen</dt><dd>{draft.topics || "Noch nicht angegeben"}</dd></div><div><dt>KnowledgeCheck</dt><dd>{draft.knowledgeCheck ? "Verknüpft" : "Nicht verknüpft"}</dd></div></dl></div> : null}
      <footer className="teacher-flow-actions"><button className="teacher-button teacher-button-secondary" type="button" onClick={step === 1 ? close : () => setStep(step - 1)}>{step === 1 ? "Abbrechen" : "Zurück"}</button>{step < 3 ? <button className="teacher-button teacher-button-primary" type="button" disabled={!canContinue} onClick={() => setStep(step + 1)}>Weiter</button> : <button className="teacher-button teacher-button-primary" type="button" onClick={() => { addHomework({ id: `homework-${Date.now()}`, teachingGroupId: draft.groupId, title: draft.title.trim(), description: draft.description.trim() || "In Dayova bereitgestellte Aufgabe bearbeiten.", dueDate: new Date(`${draft.dueDate}T14:00:00`).toISOString(), competency: draft.topics.trim() || "Allgemeine Kompetenz", status: "offen", completionRate: 0, missingCount: group?.studentCount ?? 0 }); setSaved(draft); close(); }}>Hausaufgabe speichern</button>}</footer>
    </section></div> : null}
  </>;
}
