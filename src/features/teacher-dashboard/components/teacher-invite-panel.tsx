"use client";

import { Mail01Icon, UserAdd01Icon } from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

type Invitation = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
};

const STORAGE_KEY = "dayova-teacher-invitations-v1";

export function TeacherInvitePanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Lehrkraft");
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) setInvitations(JSON.parse(stored) as Invitation[]);
      } catch {
        // Lokale Demo-Einladungen dürfen die Verwaltung nicht blockieren.
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const invitation: Invitation = {
      id: `invite-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLocaleLowerCase("de"),
      role,
      createdAt: new Date().toISOString(),
    };
    const next = [invitation, ...invitations];
    setInvitations(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setName("");
    setEmail("");
    setMessage(`Einladung an ${invitation.email} wurde vorbereitet.`);
  };

  return (
    <section className="teacher-panel teacher-invite-panel" id="einladen">
      <header className="teacher-panel-header">
        <div>
          <h2>Lehrkraft einladen</h2>
          <p>Zugang und Rolle für den schulischen Arbeitsbereich vorbereiten</p>
        </div>
        <span className="teacher-list-icon" data-tone="brand">
          <DayovaIcon icon={UserAdd01Icon} size={21} />
        </span>
      </header>
      <form className="teacher-form-grid" onSubmit={submit}>
        <label>
          Name
          <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Vor- und Nachname" />
        </label>
        <label>
          Schulische E-Mail-Adresse
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@schule.de" />
        </label>
        <label>
          Rolle
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            <option>Lehrkraft</option>
            <option>Klassenleitung</option>
            <option>Schuladministration</option>
          </select>
        </label>
        <div className="teacher-invite-submit">
          <button className="teacher-button teacher-button-primary" type="submit">
            <DayovaIcon icon={Mail01Icon} size={18} />
            Einladung erstellen
          </button>
          {message ? <span className="teacher-success-message" role="status">{message}</span> : null}
        </div>
      </form>
      {invitations.length ? (
        <div className="teacher-list teacher-invite-list" aria-label="Ausstehende Einladungen">
          {invitations.slice(0, 4).map((item) => (
            <article className="teacher-list-row" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>{item.email} · {item.role}</p>
              </div>
              <span className="teacher-status" data-tone="warning">Ausstehend</span>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
