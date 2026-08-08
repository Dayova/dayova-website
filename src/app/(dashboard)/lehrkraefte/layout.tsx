import type { Metadata } from "next";
import type { ReactNode } from "react";
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
};

export default function TeacherDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
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
    ...classes.map((item) => ({
      id: item.id,
      label: `Klasse ${item.name}`,
      meta: `${item.studentCount} Schüler:innen · ${item.subjects.join(" · ")}`,
      href: `/lehrkraefte/klassen/${item.id}`,
      keywords: item.subjects.join(" "),
    })),
    ...classes.flatMap((item) =>
      getStudentsForClass(session, item.id).map((student) => ({
        id: student.id,
        label: `${student.firstName} ${student.lastName}`,
        meta: `Klasse ${item.name} · Ø ${student.averageGrade}`,
        href: `/lehrkraefte/schueler/${student.id}`,
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
