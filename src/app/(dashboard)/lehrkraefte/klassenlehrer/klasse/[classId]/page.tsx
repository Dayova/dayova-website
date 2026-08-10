import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { Metric, PageHeading, Panel, ProgressBar, RiskBadge, TextAction } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getAttendanceForClass, getClassForSession, getDemoDashboardSession, getStudentsForClass } from "@/features/teacher-dashboard/service";

export default async function ClassTeacherOverview({ params }: { params: Promise<{ classId: string }> }) {
  const { classId } = await params; const session = getDemoDashboardSession(); const item = getClassForSession(session, classId); if (!item?.isClassTeacher) notFound(); const students = getStudentsForClass(session, classId); const attendance = getAttendanceForClass(session, classId);
  const homeworkAverage = Math.round(students.reduce((sum, student) => sum + student.homeworkCompletionRate, 0) / Math.max(1, students.length));
  return <><BackButton fallback={`/lehrkraefte/klassen/${classId}`} /><PageHeading title={`Klassenleitung · ${item.name}`} description="Überblick über Leistung, Mitarbeit, Anwesenheit und Unterstützungsbedarf." />
    <section className="teacher-metric-grid"><Metric label="Schüler:innen" value={String(students.length)} tone="brand" /><Metric label="Hausaufgabenquote" value={`${homeworkAverage} %`} /><Metric label="Unterstützungsbedarf" value={String(item.riskStudentCount)} tone="warning" /><Metric label="Heute anwesend" value={`${attendance.filter((record) => record.status === "anwesend").length}/${attendance.length}`} tone="positive" /></section>
    <Panel title="Klassenübersicht" action={<TextAction href={`/lehrkraefte/klassenbuch?klasse=${classId}`}>Klassenbuch öffnen</TextAction>}><div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Name</th><th>Durchschnitt</th><th>Hausaufgaben</th><th>Wissen</th><th>Status</th></tr></thead><tbody>{students.map((student) => <tr key={student.id}><td><TextAction href={`/lehrkraefte/schueler/${student.id}`}>{student.firstName} {student.lastName}</TextAction></td><td>{student.averageGrade}</td><td>{student.homeworkCompletionRate} %</td><td><ProgressBar value={student.knowledgeScore} /></td><td><RiskBadge risk={student.riskLevel} /></td></tr>)}</tbody></table></div></Panel>
  </>;
}
