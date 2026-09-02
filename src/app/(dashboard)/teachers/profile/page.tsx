import { BackButton } from "@/features/teacher-dashboard/components/back-button";
import { Metric, PageHeading, Panel, StatusBadge, TextAction } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getAllHomework, getAllTests, getClassesForSession, getDemoDashboardSession, getTeacherProfile } from "@/features/teacher-dashboard/service";

export default function TeacherProfilePage() {
  const session = getDemoDashboardSession(); const profile = getTeacherProfile(); const classes = getClassesForSession(session); const homework = getAllHomework(session); const tests = getAllTests(session);
  return <><BackButton /><PageHeading title="Mein Profil" description="Ihre schulischen Zuordnungen und Aktivitäten im Überblick." />
    <div className="teacher-profile-hero"><span className="teacher-avatar">FM</span><div><h2>{profile.name}</h2><p>{profile.email}</p><p>{profile.schoolName}</p></div></div>
    <section className="teacher-metric-grid"><Metric label="Klassen" value={String(classes.length)} tone="brand" /><Metric label="Fächer" value={String(profile.subjects.length)} /><Metric label="Hausaufgaben" value={String(homework.length)} /><Metric label="Geplante Tests" value={String(tests.length)} /></section>
    <div className="teacher-two-column"><Panel title="Fächer"><div className="teacher-tag-list">{profile.subjects.map((subject) => <StatusBadge key={subject} tone="brand">{subject}</StatusBadge>)}</div></Panel><Panel title="Klassenleitung"><div className="teacher-list">{profile.classTeacherOf.map((className) => { const item = classes.find((candidate) => candidate.name === className); return <article className="teacher-list-row" key={className}><div><strong>Klasse {className}</strong><p>Lern- und Anwesenheitsübersicht</p></div>{item ? <TextAction href={`/teachers/class-teacher/class/${item.id}`}>Öffnen</TextAction> : null}</article>; })}</div></Panel></div>
  </>;
}
