import { PageHeading, Panel, StatusBadge, TextAction } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassesForSession, getDemoDashboardSession } from "@/features/teacher-dashboard/service";

export default function GradesPage() {
  const classes = getClassesForSession(getDemoDashboardSession());
  return <><PageHeading title="Notenbuch" description="Wählen Sie eine Klasse aus. Im nächsten Schritt sehen Sie ausschließlich Ihre Fächer und Leistungsnachweise." />
    <Panel><div className="teacher-group-grid">{classes.map((item) => <article className="teacher-group-card" key={item.id}><div className="teacher-group-card-header"><div><span>{item.studentCount} Schüler:innen</span><h2>Klasse {item.name}</h2><p>{item.subjects.join(" · ")}</p></div><StatusBadge tone="brand">{item.subjects.length} {item.subjects.length === 1 ? "Fach" : "Fächer"}</StatusBadge></div><TextAction href={`/lehrkraefte/noten/klasse/${item.id}`}>Notenbuch öffnen</TextAction></article>)}</div></Panel>
  </>;
}
