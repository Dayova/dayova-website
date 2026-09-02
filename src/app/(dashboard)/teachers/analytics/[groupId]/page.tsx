import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { PageHeading, Panel, ProgressBar, RiskBadge, StatusBadge, TextAction, TrendLabel } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getDemoDashboardSession, getLatestRecommendation, getStudentsForGroup, getTeachingGroup, getTopicAnalyses } from "@/features/teacher-dashboard/service";

export default async function AnalyticsDetailPage({ params }: { params: Promise<{ groupId: string }> }) {
  const { groupId } = await params;
  const session = getDemoDashboardSession();
  const group = getTeachingGroup(session, groupId);
  if (!group) notFound();
  const topics = getTopicAnalyses(session, groupId);
  const allStudents = getStudentsForGroup(session, groupId);
  const riskStudents = allStudents.filter((student) => student.riskLevel !== "niedrig");
  const recommendation = getLatestRecommendation(session, groupId);
  const visibleTopics = topics.length ? topics : [{ id: "overview", name: "Aktueller Lernstand", masteryScore: group.masteryScore, affectedStudents: group.riskStudentCount, misconception: "Noch keine wiederkehrende Fehlvorstellung erkannt.", trend: "stabil" as const, level: "im_aufbau" as const, priority: 1, teachingGroupId: group.id }];

  return <><BackButton fallback="/teachers/analytics" /><PageHeading title={`${group.className} · ${group.subjectName}`} description="Wissensstand, Fehlvorstellungen und konkrete nächste Unterrichtsschritte." />
    {recommendation ? <Panel title="Handlungsempfehlung für die nächste Stunde" description={recommendation.lessonTitle} emphasis="priority"><div className="teacher-next-lesson-grid"><div><strong>Warum jetzt?</strong><p>{recommendation.whyThisMattersNow}</p><ul>{recommendation.lessonObjectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></div><div><strong>Konkreter Ablauf</strong><ol>{recommendation.phases.slice(0, 4).map((phase) => <li key={phase.title}><span>{phase.durationMinutes} Min.</span> {phase.title}: {phase.description}</li>)}</ol></div></div></Panel> : null}
    <div className="teacher-two-column"><Panel title="Aktueller Wissensstand"><div className="teacher-list">{visibleTopics.map((topic) => <article className="teacher-analysis-row" key={topic.id}><div><strong>{topic.name}</strong><p>{topic.misconception}</p></div><ProgressBar value={topic.masteryScore} label="Themenbeherrschung" /><div className="teacher-inline-actions"><StatusBadge tone={topic.affectedStudents > 8 ? "danger" : "warning"}>{topic.affectedStudents} betroffen</StatusBadge><TrendLabel trend={topic.trend} /></div></article>)}</div></Panel>
      <Panel title="Schüler:innen mit Unterstützungsbedarf" description="Nach aktuellem Signal priorisiert"><div className="teacher-list">{riskStudents.map((student) => <article className="teacher-list-row" key={student.id}><div><strong>{student.firstName} {student.lastName}</strong><p>{student.supportFocus} · Wissen {student.knowledgeScore} %</p></div><RiskBadge risk={student.riskLevel} /></article>)}</div></Panel></div>
    <Panel title="Differenzierung für die nächste Stunde"><div className="teacher-action-grid"><article><strong>Unterstützungsgruppe</strong><p>{recommendation?.supportActivities.join(" · ") ?? "Nutzen Sie Schrittkarten und begleitete Beispiele."}</p></article><article><strong>Kernniveau</strong><p>{recommendation?.coreActivities.join(" · ") ?? "Festigen Sie den aktuellen Lernstoff in Partnerarbeit."}</p></article><article><strong>Erweiterungsgruppe</strong><p>{recommendation?.advancedActivities.join(" · ") ?? "Setzen Sie Transfer- und Fehlerdiagnoseaufgaben ein."}</p></article></div><TextAction href={`/teachers/classes/${group.classId}`}>Klasse öffnen</TextAction></Panel>
  </>;
}
