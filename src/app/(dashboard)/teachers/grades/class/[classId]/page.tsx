import Link from "next/link";
import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { GradeEntryFlow } from "@/features/teacher-dashboard/components/grade-entry-flow";
import { PageHeading, Panel } from "@/features/teacher-dashboard/components/dashboard-ui";
import { GradebookTable } from "@/features/teacher-dashboard/components/gradebook-table";
import { getClassForSession, getDemoDashboardSession, getStudentsForClass } from "@/features/teacher-dashboard/service";

export default async function ClassGradebookPage({ params, searchParams }: { params: Promise<{ classId: string }>; searchParams: Promise<{ subject?: string; semester?: string; fach?: string; halbjahr?: string }> }) {
  const [{ classId }, query] = await Promise.all([params, searchParams]);
  const session = getDemoDashboardSession();
  const item = getClassForSession(session, classId);
  if (!item) notFound();
  const group = item.groups.find((candidate) => candidate.id === (query.subject ?? query.fach)) ?? item.groups[0];
  if (!group) notFound();
  const semester: 1 | 2 = (query.semester ?? query.halbjahr) === "2" ? 2 : 1;
  const students = getStudentsForClass(session, classId);

  return <><BackButton fallback="/teachers/grades" /><PageHeading title={`Notenbuch · ${item.name}`} description={`${group.subjectName} · ${students.length} Schüler:innen`} actions={<GradeEntryFlow group={group} students={students} />} />
    <Panel title="Fach und Halbjahr auswählen"><div className="teacher-grade-filters"><div className="teacher-segmented-control">{item.groups.map((candidate) => <Link key={candidate.id} href={`?subject=${candidate.id}&semester=${semester}`} data-active={candidate.id === group.id}>{candidate.subjectName}</Link>)}</div><div className="teacher-segmented-control"><Link href={`?subject=${group.id}&semester=1`} data-active={semester === 1}>1. Halbjahr</Link><Link href={`?subject=${group.id}&semester=2`} data-active={semester === 2}>2. Halbjahr</Link></div></div></Panel>
    <Panel title={`${semester}. Halbjahr · ${group.subjectName}`} description="Einzelnoten, Leistungsarten, Zielnote und Durchschnitt"><GradebookTable group={group} students={students} semester={semester} /></Panel>
  </>;
}
