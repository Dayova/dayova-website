import Link from "next/link";
import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { GradeEntryFlow } from "@/features/teacher-dashboard/components/grade-entry-flow";
import { PageHeading, Panel, StatusBadge } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassForSession, getDemoDashboardSession, getGradesForGroup, getStudentsForClass } from "@/features/teacher-dashboard/service";

function gradeValueToNumber(value: string) {
  const base = Number.parseInt(value, 10);
  if (Number.isNaN(base)) return null;
  if (value.includes("+")) return Math.max(1, base - 0.3);
  if (value.includes("-")) return Math.min(6, base + 0.3);
  return base;
}

function getSemesterAverage(studentId: string, grades: ReturnType<typeof getGradesForGroup>) {
  const studentGrades = grades.filter((grade) => grade.studentId === studentId);
  const weightedGrades = studentGrades.flatMap((grade) => {
    const value = gradeValueToNumber(grade.value);
    return value === null ? [] : [{ value, weight: grade.weight }];
  });
  const totalWeight = weightedGrades.reduce((sum, grade) => sum + grade.weight, 0);
  if (totalWeight === 0) return "–";
  const average = weightedGrades.reduce((sum, grade) => sum + grade.value * grade.weight, 0) / totalWeight;
  return average.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export default async function ClassGradebookPage({ params, searchParams }: { params: Promise<{ classId: string }>; searchParams: Promise<{ fach?: string; halbjahr?: string }> }) {
  const [{ classId }, query] = await Promise.all([params, searchParams]);
  const session = getDemoDashboardSession();
  const item = getClassForSession(session, classId);
  if (!item) notFound();
  const group = item.groups.find((candidate) => candidate.id === query.fach) ?? item.groups[0];
  if (!group) notFound();
  const semester: 1 | 2 = query.halbjahr === "2" ? 2 : 1;
  const students = getStudentsForClass(session, classId);
  const grades = getGradesForGroup(session, group.id).filter((grade) => grade.semester === semester);
  const columns = [...new Map(grades.map((grade) => [grade.assessmentTitle, grade])).values()];
  const targetLabel = semester === 1 ? "Zielnote (1. Halbjahr)" : "Zielnote (2. Halbjahr)";

  return <><BackButton fallback="/lehrkraefte/noten" /><PageHeading title={`Notenbuch · ${item.name}`} description={`${group.subjectName} · ${students.length} Schüler:innen`} actions={<GradeEntryFlow group={group} students={students} />} />
    <Panel title="Fach und Halbjahr auswählen"><div className="teacher-grade-filters"><div className="teacher-segmented-control">{item.groups.map((candidate) => <Link key={candidate.id} href={`?fach=${candidate.id}&halbjahr=${semester}`} data-active={candidate.id === group.id}>{candidate.subjectName}</Link>)}</div><div className="teacher-segmented-control"><Link href={`?fach=${group.id}&halbjahr=1`} data-active={semester === 1}>1. Halbjahr</Link><Link href={`?fach=${group.id}&halbjahr=2`} data-active={semester === 2}>2. Halbjahr</Link></div></div></Panel>
    <Panel title={`${semester}. Halbjahr · ${group.subjectName}`} description="Einzelnoten, Leistungsarten, Zielnote und Durchschnitt"><div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Schüler:in</th>{columns.map((column) => <th key={column.assessmentTitle}><span>{column.assessmentTitle}</span><small>{column.assessmentType}</small></th>)}<th>{targetLabel}</th><th>Durchschnitt</th></tr></thead><tbody>{students.map((student) => <tr key={student.id}><td><strong>{student.firstName} {student.lastName}</strong></td>{columns.map((column) => { const grade = grades.find((candidate) => candidate.studentId === student.id && candidate.assessmentTitle === column.assessmentTitle); return <td key={column.assessmentTitle}>{grade ? <StatusBadge tone="brand">{grade.value}</StatusBadge> : "–"}</td>; })}<td>{(semester === 1 ? student.targetGradeFirstSemester : student.targetGradeSecondSemester) ?? <span className="teacher-table-placeholder">Keine Zielnote festgelegt</span>}</td><td><strong>{getSemesterAverage(student.id, grades)}</strong></td></tr>)}</tbody></table></div></Panel>
  </>;
}
