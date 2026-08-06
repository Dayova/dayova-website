import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { PageHeading, Panel, ProgressBar, RiskBadge, TextAction } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassForSession, getDemoDashboardSession, getStudentsForClass } from "@/features/teacher-dashboard/service";

export default async function FullClassStudentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const session = getDemoDashboardSession(); const item = getClassForSession(session, id); if (!item) notFound(); const students = getStudentsForClass(session, id);
  return <><BackButton fallback={`/lehrkraefte/klassen/${id}`} /><PageHeading title={`Schüler:innen der ${item.name}`} description="Vollständige Klassenliste mit Lernstand, Abschlussquote und Unterstützungsbedarf." />
    <Panel><div className="teacher-filter-row"><label>Suche<input type="search" placeholder="Name suchen" /></label><label>Sortierung<select><option>Name</option><option>Notendurchschnitt</option><option>Unterstützungsbedarf</option></select></label></div><div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Name</th><th>Durchschnitt</th><th>Wissen</th><th>Hausaufgaben</th><th>Status</th></tr></thead><tbody>{students.map((student) => <tr key={student.id}><td><TextAction href={`/lehrkraefte/schueler/${student.id}`}>{student.firstName} {student.lastName}</TextAction></td><td>{student.averageGrade}</td><td><ProgressBar value={student.knowledgeScore} /></td><td>{student.homeworkCompletionRate} %</td><td><RiskBadge risk={student.riskLevel} /></td></tr>)}</tbody></table></div></Panel></>;
}
