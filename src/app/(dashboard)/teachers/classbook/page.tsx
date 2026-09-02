import Link from "next/link";
import { AttendanceBoard } from "@/features/teacher-dashboard/components/attendance-board";
import { ClassWorkspaceTabs } from "@/features/teacher-dashboard/components/class-workspace-tabs";
import { PageHeading, Panel, TextAction } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getAttendanceForClass, getClassesForSession, getDemoDashboardSession, getStudentsForClass } from "@/features/teacher-dashboard/service";

const weekDays = [
  ["Montag", "2026-07-27"], ["Dienstag", "2026-07-28"], ["Mittwoch", "2026-07-29"], ["Donnerstag", "2026-07-30"], ["Freitag", "2026-07-31"],
] as const;

export default async function ClassBookPage({ searchParams }: { searchParams: Promise<{ class?: string; date?: string; view?: string; klasse?: string; datum?: string; ansicht?: string }> }) {
  const query = await searchParams;
  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const selected = classes.find((item) => item.id === (query.class ?? query.klasse));
  const date = query.date ?? query.datum ?? "2026-07-31";
  const requestedView = query.view ?? query.ansicht;
  const view = requestedView === "week" || requestedView === "woche" ? "week" : "day";

  if (!selected) return <><PageHeading eyebrow="Klassenbereich" title="Digitales Klassenbuch" description="Wählen Sie eine Klasse aus, um Anwesenheiten und Krankmeldungen zu dokumentieren." /><ClassWorkspaceTabs active="klassenbuch" /><section className="teacher-group-grid" aria-label="Klasse auswählen">{classes.map((item) => <article className="teacher-group-card" key={item.id}><div><span>{item.studentCount} Schüler:innen</span><h2>Klasse {item.name}</h2><p>{item.subjects.join(" · ")}</p></div><TextAction href={`/teachers/classbook?class=${item.id}&view=day`}>Klassenbuch öffnen</TextAction></article>)}</section></>;

  const students = getStudentsForClass(session, selected.id);
  const records = getAttendanceForClass(session, selected.id, date);
  const week = weekDays.map(([label, day]) => ({ label, day, records: getAttendanceForClass(session, selected.id, day) }));
  return <><PageHeading eyebrow="Klassenbereich" title={`Klassenbuch · ${selected.name}`} description="Dokumentieren Sie Anwesenheit und Krankmeldungen direkt im Unterricht." actions={<TextAction href="/teachers/classbook">Klasse wechseln</TextAction>} /><ClassWorkspaceTabs active="klassenbuch" />
    <Panel><div className="teacher-classbook-toolbar"><div className="teacher-segmented-control"><Link href={`?class=${selected.id}&date=${date}&view=day`} data-active={view === "day"}>Tag</Link><Link href={`?class=${selected.id}&date=${date}&view=week`} data-active={view === "week"}>Woche</Link></div>{view === "day" ? <form className="teacher-filter-row"><label>Datum<input name="date" type="date" defaultValue={date} /></label><input type="hidden" name="class" value={selected.id} /><input type="hidden" name="view" value="day" /><button className="teacher-button teacher-button-secondary" type="submit">Anzeigen</button></form> : null}</div></Panel>
    {view === "day" ? <Panel title={`Tagesansicht · ${date}`} description="Alle Schüler:innen sind standardmäßig als anwesend markiert."><AttendanceBoard students={students} initialRecords={records} date={date} /></Panel> : <Panel title="Wochenansicht · Montag bis Freitag" description="Fehlzeiten, frühe Abgänge und Krankmeldungen auf einen Blick"><div className="teacher-week-grid">{week.map((item) => { const absent = item.records.filter((record) => record.status === "nicht_erschienen" || record.status === "krank").length; const early = item.records.filter((record) => record.status === "zu_frueh_gegangen").length; const sickNotes = item.records.filter((record) => record.sickNoteAvailable).length; return <article key={item.day}><span>{item.day}</span><h3>{item.label}</h3><dl><div><dt>Fehlend</dt><dd>{absent}</dd></div><div><dt>Früh gegangen</dt><dd>{early}</dd></div><div><dt>Krankmeldungen</dt><dd>{sickNotes}</dd></div></dl><TextAction href={`?class=${selected.id}&date=${item.day}&view=day`}>Tag öffnen</TextAction></article>; })}</div></Panel>}
  </>;
}
