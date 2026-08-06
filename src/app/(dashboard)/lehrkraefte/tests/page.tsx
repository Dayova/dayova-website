import { AiTestTemplateFlow } from "@/features/teacher-dashboard/components/ai-test-template-flow";
import { PageHeading, ProgressBar, StatusBadge } from "@/features/teacher-dashboard/components/dashboard-ui";
import { TestPlanningFlow } from "@/features/teacher-dashboard/components/test-planning-flow";
import { formatDate } from "@/features/teacher-dashboard/format";
import { getAllTests, getClassesForSession, getDemoDashboardSession, getTeachingGroupsForSession } from "@/features/teacher-dashboard/service";

export default function TestsPage() {
  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const groups = getTeachingGroupsForSession(session);
  const items = getAllTests(session);
  return <><PageHeading title="Tests" description="Planen Sie Leistungsnachweise und stimmen Sie Inhalte auf die Lernvorbereitung ab." actions={<><AiTestTemplateFlow groups={groups} /><TestPlanningFlow groups={groups} /></>} />
    <div className="teacher-class-sections">{classes.map((item) => { const groupIds = new Set(item.groups.map((group) => group.id)); const classItems = items.filter((test) => groupIds.has(test.teachingGroupId)); if (!classItems.length) return null; return <section className="teacher-panel" key={item.id}><header className="teacher-panel-header"><div><h2>Klasse {item.name}</h2><p>{classItems.length} geplante Leistungsnachweise</p></div></header><div className="teacher-horizontal-strip">{classItems.map((test) => <article className="teacher-group-card" key={test.id}><div className="teacher-group-card-header"><div><span>{item.groups.find((group) => group.id === test.teachingGroupId)?.subjectName}</span><h2>{test.title}</h2><p>{test.description}</p></div><StatusBadge tone="brand">Geplant</StatusBadge></div><ProgressBar value={test.readinessScore} label="Vorbereitungsstand" /><p>{formatDate(test.date)} · {test.topics.join(", ")}</p></article>)}</div></section>; })}</div>
  </>;
}
