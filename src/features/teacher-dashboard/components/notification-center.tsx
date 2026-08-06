"use client";

import Link from "next/link";
import { useState } from "react";
import type { TeacherNotification } from "../types";

export function NotificationCenter({ initialItems }: { initialItems: TeacherNotification[] }) {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="teacher-notification-list">
      <div className="teacher-notification-toolbar">
        <span>{items.filter((item) => !item.read).length} ungelesen</span>
        <button type="button" onClick={() => setItems((current) => current.map((item) => ({ ...item, read: true })))}>
          Alle als gelesen markieren
        </button>
      </div>
      {items.map((item) => (
        <article className="teacher-notification-item" data-read={item.read} key={item.id}>
          <span className="teacher-notification-marker" data-tone={item.tone} />
          <Link href={item.href} onClick={() => setItems((current) => current.map((candidate) => candidate.id === item.id ? { ...candidate, read: true } : candidate))}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </Link>
          <button type="button" onClick={() => setItems((current) => current.map((candidate) => candidate.id === item.id ? { ...candidate, read: true } : candidate))}>
            {item.read ? "Gelesen" : "Als gelesen markieren"}
          </button>
        </article>
      ))}
    </div>
  );
}
