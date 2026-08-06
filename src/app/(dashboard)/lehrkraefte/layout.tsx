import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DashboardShell } from "@/features/teacher-dashboard/components/dashboard-shell";
import { getDemoDashboardSession } from "@/features/teacher-dashboard/service";
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

  return <DashboardShell session={session}>{children}</DashboardShell>;
}
