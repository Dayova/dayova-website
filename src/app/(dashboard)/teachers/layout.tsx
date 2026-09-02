import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { DashboardShell } from "@/features/teacher-dashboard/components/dashboard-shell";
import { TeacherDashboardProvider } from "@/features/teacher-dashboard/components/dashboard-store";
import {
  getAllGrades,
  getAllHomework,
  getAllTests,
  getAttendanceForClass,
  getClassesForSession,
  getDemoDashboardSession,
  getStudentsForClass,
  getTeacherNotifications,
} from "@/features/teacher-dashboard/service";
import "@/features/teacher-dashboard/dashboard.css";

export const metadata: Metadata = {
  title: "Lehrkräfte-Dashboard",
  description:
    "Dayova für Lehrkräfte: Unterrichtsgruppen, Lernstände und Empfehlungen im Blick.",
  robots: { index: false, follow: false },
};

const teacherDashboardEnabled =
  process.env.NODE_ENV !== "production" ||
  process.env.ENABLE_TEACHER_DASHBOARD === "true";

export default function TeacherDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!teacherDashboardEnabled) notFound();

  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const initialData = {
    homework: getAllHomework(session),
    tests: getAllTests(session),
    grades: getAllGrades(session),
    attendance: classes.flatMap((item) =>
      getAttendanceForClass(session, item.id),
    ),
    notifications: getTeacherNotifications(),
    savedLessonIds: [],
  };
  const searchItems = [
    {
      id: "teacher-assistant",
      label: "Unterrichtsassistent",
      meta: "Unterricht mit den Lernsignalen Ihrer Klasse planen",
      href: "/teachers/assistant",
      keywords: "Unterricht Planung Stunde Assistent",
    },
    {
      id: "timetable",
      label: "Stundenplan",
      meta: "Unterricht, Räume und Vorbereitung der Woche",
      href: "/teachers/timetable",
      keywords: "Stundenplan Unterricht Räume Woche Termine",
    },
    {
      id: "classes-and-classbook",
      label: "Klassen & Klassenbuch",
      meta: "Klassen, Anwesenheit und Noten",
      href: "/teachers/classes",
      keywords: "Klassenbuch Anwesenheit Noten Schüler",
    },
    {
      id: "tasks-and-tests",
      label: "Aufgaben & Tests",
      meta: "Hausaufgaben und Leistungsnachweise planen",
      href: "/teachers/planning",
      keywords: "Hausaufgaben Aufgaben Tests Prüfung Leistungsnachweis",
    },
    {
      id: "learning-progress",
      label: "Lernstände",
      meta: "Wissensstände und Unterstützungsbedarf",
      href: "/teachers/analytics",
      keywords: "Analyse Lernstand Wissen Unterstützung",
    },
    ...classes.map((item) => ({
      id: item.id,
      label: `Klasse ${item.name}`,
      meta: `${item.studentCount} Schüler:innen · ${item.subjects.join(" · ")}`,
      href: `/teachers/classes/${item.id}`,
      keywords: item.subjects.join(" "),
    })),
    ...classes.flatMap((item) =>
      getStudentsForClass(session, item.id).map((student) => ({
        id: student.id,
        label: `${student.firstName} ${student.lastName}`,
        meta: `Klasse ${item.name} · Ø ${student.averageGrade}`,
        href: `/teachers/students/${student.id}`,
        keywords: `${student.supportFocus} ${student.email ?? ""}`,
      })),
    ),
  ];

  return (
    <TeacherDashboardProvider initialData={initialData}>
      <DashboardShell session={session} searchItems={searchItems}>
        {children}
      </DashboardShell>
    </TeacherDashboardProvider>
  );
}
