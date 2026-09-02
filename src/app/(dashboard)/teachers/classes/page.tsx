import { ClassSearchGrid } from "@/features/teacher-dashboard/components/class-search-grid";
import { ClassWorkspaceTabs } from "@/features/teacher-dashboard/components/class-workspace-tabs";
import { PageHeading } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassesForSession, getDemoDashboardSession } from "@/features/teacher-dashboard/service";

export default function ClassesPage() {
  const classes = getClassesForSession(getDemoDashboardSession());
  return (
    <>
      <PageHeading
        eyebrow="Klassenbereich"
        title="Klassen & Klassenbuch"
        description="Klassen, Schüler:innen, Anwesenheit und Noten finden Sie gebündelt an einem Ort."
      />
      <ClassWorkspaceTabs active="klassen" />
      <ClassSearchGrid classes={classes} />
    </>
  );
}
