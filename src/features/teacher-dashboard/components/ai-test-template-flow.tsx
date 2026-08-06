"use client";

import { useMemo, useState } from "react";
import type { AiTestTemplate, TeachingGroup } from "../types";

function generateTemplate(topics: string, difficulty: string): AiTestTemplate {
  const values = topics.split(",").map((topic) => topic.trim()).filter(Boolean);
  const selected = values.length ? values : ["Ausgewählter Lernstoff"];
  return {
    taskCount: difficulty === "schwer" ? 8 : difficulty === "leicht" ? 5 : 6,
    groups: selected.slice(0, 3).map((topic, index) => ({
      title: index === 0 ? "Grundlagen sichern" : index === 1 ? "Anwenden und begründen" : "Transfer",
      taskType: index === 0 ? "Kurzaufgaben" : index === 1 ? "Offene Aufgaben" : "Transferaufgabe",
      taskCount: index === 0 ? 3 : index === 1 ? 2 : 1,
      topic,
      description: `Aufgaben zu ${topic} auf dem Niveau „${difficulty}“ mit nachvollziehbarem Lösungsweg.`,
    })),
  };
}

export function AiTestTemplateFlow({ groups }: { groups: TeachingGroup[] }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [groupId, setGroupId] = useState(groups[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [topics, setTopics] = useState("");
  const [difficulty, setDifficulty] = useState("mittel");
  const [template, setTemplate] = useState<AiTestTemplate | null>(null);
  const [saved, setSaved] = useState(false);
  const group = useMemo(() => groups.find((item) => item.id === groupId), [groupId, groups]);
  const close = () => { setOpen(false); setStep(1); setTemplate(null); };

  return <>
    <button className="teacher-button teacher-button-secondary" type="button" onClick={() => { setOpen(true); setSaved(false); }}>Testvorlage mit KI erstellen</button>
    {saved ? <span className="teacher-success-message" role="status">Die Testvorlage und ihre Themen wurden beim Test gespeichert.</span> : null}
    {open ? <div className="teacher-modal-backdrop" role="presentation"><section className="teacher-flow-dialog" role="dialog" aria-modal="true" aria-labelledby="ai-test-title">
      <header><div><span>Schritt {step} von 2</span><h2 id="ai-test-title">Testvorlage mit KI erstellen</h2></div><button type="button" onClick={close}>Schließen</button></header>
      {step === 1 ? <div className="teacher-form-grid"><label>Klasse und Fach<select value={groupId} onChange={(event) => setGroupId(event.target.value)}>{groups.map((item) => <option key={item.id} value={item.id}>{item.className} · {item.subjectName}</option>)}</select></label><label>Datum (optional)<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><label className="teacher-form-wide">Themen / Kompetenzen<input value={topics} onChange={(event) => setTopics(event.target.value)} placeholder="z. B. Bruchgleichungen, Äquivalenzumformungen" /></label><label>Schwierigkeitsgrad<select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}><option value="leicht">Leicht</option><option value="mittel">Mittel</option><option value="schwer">Schwer</option></select></label></div> : null}
      {step === 2 && template ? <div className="teacher-ai-preview"><div><strong>{group?.className} · {group?.subjectName}</strong><p>{template.taskCount} Aufgaben · {difficulty} {date ? `· ${date}` : ""}</p></div><div className="teacher-list">{template.groups.map((item) => <article className="teacher-analysis-row" key={`${item.topic}-${item.title}`}><div><strong>{item.title}</strong><p>{item.description}</p></div><span className="teacher-status" data-tone="brand">{item.taskCount} × {item.taskType}</span></article>)}</div></div> : null}
      <footer className="teacher-flow-actions"><button className="teacher-button teacher-button-secondary" type="button" onClick={step === 1 ? close : () => { setStep(1); setTemplate(null); }}>Verwerfen</button>{step === 1 ? <button className="teacher-button teacher-button-primary" type="button" onClick={() => { setTemplate(generateTemplate(topics, difficulty)); setStep(2); }}>Vorlage generieren</button> : <><button className="teacher-button teacher-button-secondary" type="button" onClick={() => setTemplate(generateTemplate(topics, difficulty))}>Vorlage anpassen</button><button className="teacher-button teacher-button-primary" type="button" onClick={() => { setSaved(true); close(); }}>Vorlage übernehmen</button></>}</footer>
    </section></div> : null}
  </>;
}
