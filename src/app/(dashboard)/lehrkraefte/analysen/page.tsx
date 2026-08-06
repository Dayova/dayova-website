import { PageHeading, Panel, ProgressBar, StatusBadge, TextAction } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassesForSession, getDemoDashboardSession, getTopicAnalyses } from "@/features/teacher-dashboard/service";

export default function AnalyticsPage() {
  const session = getDemoDashboardSession(); const classes = getClassesForSession(session);
  return <><PageHeading title="Analysen" description="Öffnen Sie ein Fach, um Kompetenzen, Fehlvorstellungen und empfohlene nächste Schritte zu sehen." />
    <div className="teacher-class-sections">{classes.map((item) => <Panel key={item.id} title={`Klasse ${item.name}`} description="Ihre Fächer"><div className="teacher-subject-tiles">{item.groups.map((group) => { const topics = getTopicAnalyses(session, group.id); return <article className="teacher-subject-tile" key={group.id}><div><h3>{group.subjectName}</h3><StatusBadge tone={group.masteryScore < 65 ? "warning" : "positive"}>{topics.length || 1} Themenbereiche</StatusBadge></div><ProgressBar value={group.masteryScore} label="Durchschnittlicher Wissensstand" /><p>{group.riskStudentCount} Schüler:innen benötigen Aufmerksamkeit.</p><TextAction href={`/lehrkraefte/analysen/${group.id}`}>Detailanalyse öffnen</TextAction></article>; })}</div></Panel>)}</div>
  </>;
}
