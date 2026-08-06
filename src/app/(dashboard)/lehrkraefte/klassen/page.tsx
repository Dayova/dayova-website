import { ClassSearchGrid } from "@/features/teacher-dashboard/components/class-search-grid";
import { PageHeading } from "@/features/teacher-dashboard/components/dashboard-ui";
import { getClassesForSession, getDemoDashboardSession } from "@/features/teacher-dashboard/service";

export default function ClassesPage() {
  const classes = getClassesForSession(getDemoDashboardSession());
  return (
    <>
      <PageHeading title="Klassen" description="Ihre Klassen, Fächer und aktuellen Lernsignale auf einen Blick." />
      <ClassSearchGrid classes={classes} />
    </>
  );
}
