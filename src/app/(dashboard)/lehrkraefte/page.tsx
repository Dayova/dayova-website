import {
  Alert02Icon,
  Calendar03Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import {
  PageHeading,
  Panel,
  PrimaryAction,
  TextAction,
} from "@/features/teacher-dashboard/components/dashboard-ui";
import { TomorrowRecommendationsCarousel } from "@/features/teacher-dashboard/components/tomorrow-recommendations-carousel";
import {
  getDashboardOverview,
  getDemoDashboardSession,
  getLatestRecommendation,
} from "@/features/teacher-dashboard/service";

export default function TeacherDashboardPage() {
  const session = getDemoDashboardSession();
  const overview = getDashboardOverview(session);
  const recommendations = overview.teachingGroups
    .map((group) => getLatestRecommendation(session, group.id))
    .filter((recommendation) => recommendation !== undefined);
  const nextTest = overview.upcomingTests[0];

  return (
    <>
      <PageHeading
        eyebrow="Startseite"
        title={`Guten Morgen, ${overview.teacherName}`}
        description="Ihr kompakter Überblick für heute – mit der Vorbereitung für morgen an erster Stelle."
        actions={<PrimaryAction href="/lehrkraefte/assistent">Unterricht planen</PrimaryAction>}
      />

      <TomorrowRecommendationsCarousel recommendations={recommendations} />

      <div className="teacher-two-column teacher-home-priorities">
        <Panel
          title="Heute abschließen"
          description="Das sollte vor Feierabend erledigt sein"
          action={<TextAction href="/lehrkraefte/planung">Aufgaben & Tests</TextAction>}
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
          </div>
        </Panel>

        <Panel
          title="Morgen im Blick"
          description="Signale und Termine für Ihre Vorbereitung"
          action={<TextAction href="/lehrkraefte/analysen">Lernstände</TextAction>}
        >
          <div className="teacher-list">
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
            {nextTest ? (
              <article className="teacher-list-row">
                <span className="teacher-list-icon" data-tone="brand">
                  <DayovaIcon icon={Calendar03Icon} size={20} />
                </span>
                <div>
                  <strong>{nextTest.title}</strong>
                  <p>{nextTest.description}</p>
                </div>
                <small>
                  {new Intl.DateTimeFormat("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                  }).format(new Date(nextTest.date))}
                </small>
              </article>
            ) : null}
          </div>
        </Panel>
      </div>
    </>
  );
}
