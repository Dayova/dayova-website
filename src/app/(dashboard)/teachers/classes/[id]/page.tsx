import { notFound } from "next/navigation";
import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { PageHeading, Panel, ProgressBar, RiskBadge, SecondaryAction, TextAction } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassForSession, getDemoDashboardSession, getLatestRecommendation, getStudentsForClass } from "@/features/teacher-dashboard/service";

export default async function ClassPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = getDemoDashboardSession();
  const item = getClassForSession(session, id);
  if (!item) notFound();
  const students = getStudentsForClass(session, id);
  const recommendations = item.groups.map((group) => ({
    group,
    recommendation: getLatestRecommendation(session, group.id),
  }));
  return <>
    <BackButton fallback="/teachers/classes" />
    <PageHeading eyebrow="Klassenbereich" title={`Klasse ${item.name}`} description={`${item.studentCount} Schüler:innen · ${item.subjects.join(" · ")}`} actions={<><SecondaryAction href={`/teachers/classbook?class=${item.id}&view=day`}>Klassenbuch öffnen</SecondaryAction><TextAction href={`/teachers/grades/class/${item.id}`}>Noten öffnen</TextAction></>} />
    <section className="teacher-recommendation-grid" aria-label="Empfehlungen für die nächste Stunde">
      {recommendations.map(({ group, recommendation }) => recommendation ? (
        <Panel
          key={group.id}
          title="Empfehlung für die nächste Stunde"
          description={`${group.subjectName} · ${recommendation.durationMinutes} Minuten`}
          emphasis="priority"
          action={<TextAction href={`/teachers/analytics/${group.id}`}>Analyse öffnen</TextAction>}
        >
          <div className="teacher-recommendation-detail">
            <div className="teacher-stack-sm"><h3>{recommendation.lessonTitle}</h3><p>{recommendation.whyThisMattersNow}</p></div>
            <div><strong>Lernziele</strong><ul>{recommendation.lessonObjectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></div>
            <div><strong>Stundenstruktur</strong><ol>{recommendation.phases.slice(0, 4).map((phase) => <li key={phase.title}><span>{phase.durationMinutes} Min.</span> {phase.title}: {phase.description}</li>)}</ol></div>
          </div>
        </Panel>
      ) : null)}
    </section>
    <div className="teacher-two-column">
      <Panel title="Fächer" description="Ihre Unterrichtszuordnungen">
        <div className="teacher-list">{item.groups.map((group) => <article className="teacher-group-compact" key={group.id}><div><strong>{group.subjectName}</strong><p>{group.studentCount} Schüler:innen</p></div><ProgressBar value={group.masteryScore} label="Wissensstand" /><TextAction href={`/teachers/grades/class/${item.id}?subject=${group.id}`}>Notenbuch öffnen</TextAction></article>)}</div>
      </Panel>
      <Panel title="Schüler:innen" description="Schneller Überblick">
        <div className="teacher-list">{students.slice(0, 4).map((student) => <article className="teacher-list-row" key={student.id}><div><strong>{student.firstName} {student.lastName}</strong><p>Ø {student.averageGrade} · Wissen {student.knowledgeScore} %</p></div><RiskBadge risk={student.riskLevel} /></article>)}</div>
        <TextAction href={`/teachers/classes/${item.id}/students`}>Gesamte Schüler:innenliste anzeigen</TextAction>
      </Panel>
    </div>
    {item.isClassTeacher ? <Panel title="Klassenleitung" description="Alle wichtigen Signale dieser Klasse in einer Übersicht." action={<TextAction href={`/teachers/class-teacher/class/${item.id}`}>Übersicht öffnen</TextAction>}><p className="teacher-muted-copy">Leistung, Mitarbeit, Anwesenheit und Unterstützungsbedarf werden hier gemeinsam betrachtet.</p></Panel> : null}
  </>;
}
