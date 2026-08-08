import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import {
  Metric,
  PageHeading,
  Panel,
  PrimaryAction,
  ProgressBar,
  RiskBadge,
  TextAction,
} from "@/features/teacher-dashboard/components/dashboard-ui";
import {
  getDashboardOverview,
  getDemoDashboardSession,
} from "@/features/teacher-dashboard/service";

export default function TeacherDashboardPage() {
  const session = getDemoDashboardSession();
  const overview = getDashboardOverview(session);
  const recommendation = overview.recommendations[0];

  return (
    <>
      <PageHeading
        eyebrow="Startseite"
        title={`Guten Morgen, ${overview.teacherName}`}
        description="Hier sehen Sie, was heute wichtig ist und wo Ihre Klassen Unterstützung benötigen."
        actions={<PrimaryAction href="/lehrkraefte/assistent">Unterricht planen</PrimaryAction>}
      />

      <section className="teacher-metric-grid" aria-label="Übersicht">
        <Metric
          label="Klassen"
          value={String(overview.teachingGroups.length)}
          detail="Aktiv in diesem Schuljahr"
          tone="brand"
        />
        <Metric
          label="Offene Aufgaben"
          value={String(overview.todos.length)}
          detail="Heute zu bearbeiten"
        />
        <Metric
          label="Unterstützungsbedarf"
          value={String(overview.supportStudents.length)}
          detail="Schüler:innen beobachten"
          tone="warning"
        />
        <Metric
          label="Anstehende Tests"
          value={String(overview.upcomingTests.length)}
          detail="In den nächsten 14 Tagen"
        />
      </section>

      <div className="teacher-two-column">
        <Panel
          title="Heute wichtig"
          description="Ihre priorisierten Aufgaben"
          action={<TextAction href="/lehrkraefte/klassen">Alle Klassen</TextAction>}
        >
          <div className="teacher-list">
            {overview.todos.map((todo) => (
              <article className="teacher-list-row" key={todo.id}>
                <span className="teacher-list-icon" data-tone="brand">
                  <DayovaIcon icon={CheckmarkCircle02Icon} size={20} />
                </span>
                <div>
                  <strong>{todo.title}</strong>
                  <p>{todo.description}</p>
                </div>
                <small>{todo.dueLabel}</small>
              </article>
            ))}
            {overview.warnings.map((warning) => (
              <article className="teacher-list-row" key={warning.id}>
                <span className="teacher-list-icon" data-tone="warning">
                  <DayovaIcon icon={Alert02Icon} size={20} />
                </span>
                <div>
                  <strong>{warning.title}</strong>
                  <p>{warning.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          title="Klassen"
          description="Wissensstand und offene Aufgaben"
        >
          <div className="teacher-list">
            {overview.teachingGroups.map((group) => (
              <article className="teacher-group-compact" key={group.id}>
                <div>
                  <strong>{group.className} · {group.subjectName}</strong>
                  <p>{group.studentCount} Schüler:innen · {group.openHomeworkCount} offene Hausaufgaben</p>
                </div>
                <ProgressBar value={group.masteryScore} label="Wissensstand" />
                <TextAction href={`/lehrkraefte/klassen/${group.classId}`}>
                  Öffnen
                </TextAction>
              </article>
            ))}
          </div>
        </Panel>
      </div>

      {recommendation ? (
        <Panel
          title="Empfehlung für die nächste Stunde"
          description={`${recommendation.className} · ${recommendation.subject} · ${recommendation.durationMinutes} Minuten`}
          emphasis="priority"
          action={
            <TextAction href={`/lehrkraefte/analysen/${recommendation.teachingGroupId}`}>
              Planung öffnen
            </TextAction>
          }
        >
          <div className="teacher-recommendation-summary">
            <span className="teacher-list-icon" data-tone="brand">
              <DayovaIcon icon={SparklesIcon} size={22} />
            </span>
            <div>
              <h3>{recommendation.lessonTitle}</h3>
              <p>{recommendation.whyThisMattersNow}</p>
            </div>
            <RiskBadge risk="mittel" />
          </div>
        </Panel>
      ) : null}
    </>
  );
}
