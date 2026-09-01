import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { PageHeading, Panel, ProgressBar, RiskBadge, TextAction, TrendLabel } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassForSession, getDemoDashboardSession, getStudentsForClass } from "@/features/teacher-dashboard/service";

export default async function ClassStudentsPage({ params }: { params: Promise<{ classId: string }> }) {
  const { classId } = await params; const session = getDemoDashboardSession(); const item = getClassForSession(session, classId); if (!item) notFound(); const students = getStudentsForClass(session, classId);
  return <><BackButton fallback="/teachers/students" /><PageHeading title={`Schüler:innen · ${item.name}`} description={`${students.length} Schüler:innen · ${item.subjects.join(" · ")}`} />
    <Panel><div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Name</th><th>Durchschnitt</th><th>Wissensstand</th><th>Hausaufgaben</th><th>Trend</th><th>Status</th></tr></thead><tbody>{students.map((student) => <tr key={student.id}><td><TextAction href={`/teachers/students/${student.id}`}>{student.firstName} {student.lastName}</TextAction></td><td>{student.averageGrade}</td><td><ProgressBar value={student.knowledgeScore} /></td><td>{student.homeworkCompletionRate} %</td><td><TrendLabel trend={student.trend} /></td><td><RiskBadge risk={student.riskLevel} /></td></tr>)}</tbody></table></div></Panel>
  </>;
}
