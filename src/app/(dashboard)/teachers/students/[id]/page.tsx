import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import {
  Metric,
  PageHeading,
  Panel,
  ProgressBar,
  RiskBadge,
  TrendLabel,
} from "@/features/teacher-dashboard/components/dashboard-ui";
import { formatDate, studentName } from "@/features/teacher-dashboard/format";
import {
  getAllGrades,
  getDemoDashboardSession,
  getStudent,
} from "@/features/teacher-dashboard/service";

export default async function StudentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = getDemoDashboardSession();
  const student = getStudent(session, id);
  if (!student) notFound();
  const grades = getAllGrades(session).filter((grade) => grade.studentId === id);

  return (
    <>
      <BackButton fallback="/teachers/students" />
      <PageHeading
        eyebrow="Schülerprofil"
        title={studentName(student.firstName, student.lastName)}
        description={student.email ?? "Kein schulischer Kontakt hinterlegt"}
        actions={<RiskBadge risk={student.riskLevel} />}
      />
      <section className="teacher-metric-grid">
        <Metric label="Notendurchschnitt" value={student.averageGrade} detail="Gewichteter Stand" />
        <Metric label="Wissensstand" value={`${student.knowledgeScore} %`} detail={student.supportFocus} tone="brand" />
        <Metric label="Hausaufgaben" value={`${student.homeworkCompletionRate} %`} detail="Abschlussquote" />
        <Metric label="Entwicklung" value={student.trend === "steigend" ? "Positiv" : student.trend === "fallend" ? "Rückläufig" : "Stabil"} tone={student.trend === "fallend" ? "warning" : "positive"} />
      </section>
      <div className="teacher-two-column">
        <Panel title="Lernentwicklung" description="Aktuelle Signale">
          <ProgressBar value={student.knowledgeScore} label="Wissensstand" />
          <ProgressBar value={student.homeworkCompletionRate} label="Hausaufgabenquote" />
          <TrendLabel trend={student.trend} />
        </Panel>
        <Panel title="Empfohlener Förderfokus">
          <div className="teacher-callout">
            <strong>{student.supportFocus}</strong>
            <p>Planen Sie eine kurze Diagnose und eine gezielte Wiederholung mit passenden Übungsaufgaben.</p>
          </div>
        </Panel>
      </div>
      <Panel title="Leistungsnachweise">
        <div className="teacher-table-wrap">
          <table className="teacher-table">
            <thead><tr><th>Leistung</th><th>Typ</th><th>Kompetenz</th><th>Datum</th><th>Note</th></tr></thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade.id}><td>{grade.assessmentTitle}</td><td>{grade.assessmentType}</td><td>{grade.competency}</td><td>{formatDate(grade.date)}</td><td><strong>{grade.value}</strong></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
      <div className="teacher-two-column">
        <Panel title="Anwesenheit"><ProgressBar value={92} label="Anwesenheitsquote" /><p className="teacher-muted-copy">Eine entschuldigte Fehlzeit, eine Verspätung im aktuellen Monat.</p></Panel>
        <Panel title="Notizen und Maßnahmen"><div className="teacher-callout"><strong>Letzte Vereinbarung</strong><p>Rechenwege bei Bruchgleichungen mit der Schrittkarte strukturieren und am Freitag kurz rückmelden.</p></div></Panel>
      </div>
    </>
  );
}
