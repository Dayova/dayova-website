"use client";

import Link from "next/link";
import type { TeacherNotification } from "../types";
import { useTeacherDashboard } from "./dashboard-store";

export function NotificationCenter({ initialItems }: { initialItems: TeacherNotification[] }) {
  const { notifications, markAllNotificationsRead, markNotificationRead } = useTeacherDashboard();
  const items = notifications.length ? notifications : initialItems;

  return (
    <div className="teacher-notification-list">
      <div className="teacher-notification-toolbar">
        <span>{items.filter((item) => !item.read).length} ungelesen</span>
        <button type="button" onClick={markAllNotificationsRead}>
          Alle als gelesen markieren
        </button>
      </div>
      {items.map((item) => (
        <article className="teacher-notification-item" data-read={item.read} key={item.id}>
          <span className="teacher-notification-marker" data-tone={item.tone} />
          <Link href={item.href} onClick={() => markNotificationRead(item.id)}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </Link>
          <button type="button" disabled={item.read} onClick={() => markNotificationRead(item.id)}>
            {item.read ? "Gelesen" : "Als gelesen markieren"}
          </button>
        </article>
      ))}
    </div>
  );
}
