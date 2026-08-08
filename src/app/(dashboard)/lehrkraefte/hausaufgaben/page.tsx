import { PageHeading } from "@/features/teacher-dashboard/components/dashboard-ui";
import { HomeworkPlanningFlow } from "@/features/teacher-dashboard/components/homework-planning-flow";
import { HomeworkWorkspace } from "@/features/teacher-dashboard/components/homework-workspace";
import { getClassesForSession, getDemoDashboardSession } from "@/features/teacher-dashboard/service";

export default function HomeworkPage() {
  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const groups = classes.flatMap((item) => item.groups);
  return <>
    <PageHeading title="Hausaufgaben" description="Planen und begleiten Sie Aufgaben nach Klassen und Fächern." actions={<HomeworkPlanningFlow groups={groups} />} />
    <HomeworkWorkspace classes={classes} />
  </>;
}
