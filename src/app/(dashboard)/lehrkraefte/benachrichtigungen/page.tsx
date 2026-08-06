import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { NotificationCenter } from "@/features/teacher-dashboard/components/notification-center";
import { PageHeading, Panel } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getTeacherNotifications } from "@/features/teacher-dashboard/service";

export default function NotificationsPage() {
  return <><BackButton /><PageHeading title="Benachrichtigungen" description="Wichtige Hinweise zu Abgaben, Lernständen und geplanten Leistungsnachweisen." /><Panel><NotificationCenter initialItems={getTeacherNotifications()} /></Panel></>;
}
