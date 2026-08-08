import {
  Metric,
  PageHeading,
  Panel,
  PrimaryAction,
  StatusBadge,
} from "@/features/teacher-dashboard/components/dashboard-ui";
import { TeacherInvitePanel } from "@/features/teacher-dashboard/components/teacher-invite-panel";
import {
  getDemoDashboardSession,
  getTeachingGroupsForSession,
} from "@/features/teacher-dashboard/service";

export default function SchoolAdministrationPage() {
  const session = getDemoDashboardSession();
  const groups = getTeachingGroupsForSession(session);
  return (
    <>
      <PageHeading eyebrow="Administration" title="Schulverwaltung" description="Verwalten Sie Zugänge, Klassen und schulweite Einstellungen." actions={<PrimaryAction href="#einladen">Lehrkraft einladen</PrimaryAction>} />
      <section className="teacher-metric-grid">
        <Metric label="Klassen und Fächer" value={String(groups.length)} detail="Aktive Zuordnungen" tone="brand" />
        <Metric label="Lehrkräfte" value="1" detail="Im Demo-Arbeitsbereich" />
        <Metric label="Schüler:innen" value="50" detail="Eindeutige Konten" />
        <Metric label="Datenstatus" value="Aktuell" detail="Letzte Synchronisierung heute" tone="positive" />
      </section>
      <div className="teacher-two-column">
        <Panel title="Schulprofil">
          <dl className="teacher-definition-list">
            <div><dt>Name</dt><dd>Dayova Demo-Schule</dd></div>
            <div><dt>Schuljahr</dt><dd>2026/27</dd></div>
            <div><dt>Rolle</dt><dd><StatusBadge tone="brand">Schuladministration</StatusBadge></dd></div>
          </dl>
        </Panel>
        <Panel title="Datenschutz und Berechtigungen">
          <div className="teacher-callout"><strong>Rollenbasierter Zugriff</strong><p>Lehrkräfte sehen nur ihre Unterrichtsgruppen. Schuladministrationen verwalten schulweite Zuordnungen.</p></div>
        </Panel>
      </div>
      <TeacherInvitePanel />
    </>
  );
}
