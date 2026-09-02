"use client";

import { Notification01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { useTeacherDashboard } from "./dashboard-store";

export function DashboardNotificationLink() {
  const { notifications } = useTeacherDashboard();
  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <Link
      href="/teachers/notifications"
      className="teacher-icon-button"
      aria-label={
        unreadCount > 0
          ? `${unreadCount} ungelesene Benachrichtigungen anzeigen`
          : "Benachrichtigungen anzeigen"
      }
    >
      <DayovaIcon icon={Notification01Icon} size={20} />
      {unreadCount > 0 ? (
        <span className="teacher-notification-dot" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
