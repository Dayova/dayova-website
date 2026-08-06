import { PageHeading, ProgressBar, StatusBadge } from "@/features/teacher-dashboard/components/dashboard-ui";
import { HomeworkPlanningFlow } from "@/features/teacher-dashboard/components/homework-planning-flow";
import { formatDate } from "@/features/teacher-dashboard/format";
import { getAllHomework, getClassesForSession, getDemoDashboardSession } from "@/features/teacher-dashboard/service";

export default function HomeworkPage() {
  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const items = getAllHomework(session);
  const groups = classes.flatMap((item) => item.groups);
  return <>
    <PageHeading title="Hausaufgaben" description="Planen und begleiten Sie Aufgaben nach Klassen und Fächern." actions={<HomeworkPlanningFlow groups={groups} />} />
    <div className="teacher-class-sections">{classes.map((item) => {
      const groupIds = new Set(item.groups.map((group) => group.id));
      const classItems = items.filter((homework) => groupIds.has(homework.teachingGroupId));
      return <section className="teacher-panel" key={item.id}><header className="teacher-panel-header"><div><h2>Klasse {item.name}</h2><p>{classItems.length} aktive Aufgaben</p></div><HomeworkPlanningFlow groups={item.groups} presetGroupId={item.groups[0]?.id} compact /></header>{classItems.length ? <div className="teacher-horizontal-strip">{classItems.map((homework) => <article className="teacher-group-card" key={homework.id}><div className="teacher-group-card-header"><div><span>{item.groups.find((group) => group.id === homework.teachingGroupId)?.subjectName}</span><h2>{homework.title}</h2><p>{homework.description}</p></div><StatusBadge tone={homework.status === "korrektur" ? "warning" : "brand"}>{homework.status === "korrektur" ? "Zu prüfen" : "Offen"}</StatusBadge></div><ProgressBar value={homework.completionRate} label="Abgaben" /><p>Fällig am {formatDate(homework.dueDate)} · {homework.missingCount} fehlen</p></article>)}</div> : <p className="teacher-muted-copy">Für diese Klasse sind aktuell keine Hausaufgaben geplant.</p>}</section>;
    })}</div>
  </>;
}
