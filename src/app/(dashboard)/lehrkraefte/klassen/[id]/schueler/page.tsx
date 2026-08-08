import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { PageHeading, Panel } from "@/features/teacher-dashboard/components/dashboard-ui";
import { StudentSearchTable } from "@/features/teacher-dashboard/components/student-search-table";
import { getClassForSession, getDemoDashboardSession, getStudentsForClass } from "@/features/teacher-dashboard/service";

export default async function FullClassStudentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const session = getDemoDashboardSession(); const item = getClassForSession(session, id); if (!item) notFound(); const students = getStudentsForClass(session, id);
  return <><BackButton fallback={`/lehrkraefte/klassen/${id}`} /><PageHeading title={`Schüler:innen der ${item.name}`} description="Vollständige Klassenliste mit Lernstand, Abschlussquote und Unterstützungsbedarf." />
    <Panel><StudentSearchTable students={students} /></Panel></>;
}
