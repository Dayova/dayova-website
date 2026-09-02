import { notFound } from "next/navigation";
import {
  PageHeading,
  Panel,
  ProgressBar,
  RiskBadge,
  StatusBadge,
  TextAction,
  TrendLabel,
} from "@/features/teacher-dashboard/components/dashboard-ui";
import { formatDate, studentName } from "@/features/teacher-dashboard/format";
import {
  getDemoDashboardSession,
  getHomeworkForGroup,
  getLatestRecommendation,
  getStudentsForGroup,
  getTeachingGroup,
  getTestsForGroup,
  getTopicAnalyses,
} from "@/features/teacher-dashboard/service";

export default async function TeachingGroupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = getDemoDashboardSession();
  const group = getTeachingGroup(session, id);
  if (!group) notFound();

  const groupStudents = getStudentsForGroup(session, id);
  const homework = getHomeworkForGroup(session, id);
  const tests = getTestsForGroup(session, id);
  const analyses = getTopicAnalyses(session, id);
  const recommendation = getLatestRecommendation(session, id);

  return (
    <>
      <PageHeading
        eyebrow="Unterrichtsgruppe"
        title={`${group.className} · ${group.subjectName}`}
        description={`${group.teacherName} · ${group.studentCount} Schüler:innen`}
      />
      <section className="teacher-metric-grid">
        <ProgressBar value={group.masteryScore} label="Klassenweiter Wissensstand" />
        <ProgressBar value={Math.round(groupStudents.reduce((sum, item) => sum + item.homeworkCompletionRate, 0) / Math.max(1, groupStudents.length))} label="Hausaufgabenquote" />
        <ProgressBar value={tests[0]?.readinessScore ?? 0} label="Testbereitschaft" />
      </section>

      <div className="teacher-two-column">
        <Panel title="Schüler:innen" description="Lernstand und Unterstützungsbedarf">
          <div className="teacher-table-wrap">
            <table className="teacher-table">
              <thead><tr><th>Name</th><th>Wissen</th><th>Trend</th><th>Status</th></tr></thead>
              <tbody>
                {groupStudents.map((student) => (
                  <tr key={student.id}>
                    <td><TextAction href={`/teachers/students/${student.id}`}>{studentName(student.firstName, student.lastName)}</TextAction></td>
                    <td>{student.knowledgeScore} %</td>
                    <td><TrendLabel trend={student.trend} /></td>
                    <td><RiskBadge risk={student.riskLevel} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Aktuelle Themenanalyse">
          <div className="teacher-list">
            {analyses.map((topic) => (
              <article className="teacher-analysis-row" key={topic.id}>
                <div><strong>{topic.name}</strong><p>{topic.misconception}</p></div>
                <ProgressBar value={topic.masteryScore} />
                <StatusBadge tone={topic.level === "unterstuetzung" ? "danger" : topic.level === "im_aufbau" ? "warning" : "positive"}>
                  {topic.affectedStudents} betroffen
                </StatusBadge>
              </article>
            ))}
          </div>
        </Panel>
      </div>

      <div className="teacher-two-column">
        <Panel title="Hausaufgaben">
          <div className="teacher-list">
            {homework.map((item) => (
              <article className="teacher-list-row" key={item.id}>
                <div><strong>{item.title}</strong><p>Fällig: {formatDate(item.dueDate)} · {item.missingCount} fehlen</p></div>
                <ProgressBar value={item.completionRate} />
              </article>
            ))}
          </div>
        </Panel>
        <Panel title="Tests">
          <div className="teacher-list">
            {tests.map((test) => (
              <article className="teacher-list-row" key={test.id}>
                <div><strong>{test.title}</strong><p>{formatDate(test.date)} · {test.topics.join(", ")}</p></div>
                <StatusBadge tone="brand">{test.readinessScore} % bereit</StatusBadge>
              </article>
            ))}
          </div>
        </Panel>
      </div>

      {recommendation ? (
        <Panel title={recommendation.lessonTitle} description={recommendation.classReadinessSummary} emphasis="dark">
          <div className="teacher-lesson-phases">
            {recommendation.phases.map((phase) => (
              <article key={phase.title}>
                <span>{phase.durationMinutes} Min.</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </article>
            ))}
          </div>
        </Panel>
      ) : null}
    </>
  );
}
