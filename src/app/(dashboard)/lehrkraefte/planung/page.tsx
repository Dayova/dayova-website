import { AiTestTemplateFlow } from "@/features/teacher-dashboard/components/ai-test-template-flow";
import { PageHeading } from "@/features/teacher-dashboard/components/dashboard-ui";
import { HomeworkPlanningFlow } from "@/features/teacher-dashboard/components/homework-planning-flow";
import { HomeworkWorkspace } from "@/features/teacher-dashboard/components/homework-workspace";
import { TestPlanningFlow } from "@/features/teacher-dashboard/components/test-planning-flow";
import { TestsWorkspace } from "@/features/teacher-dashboard/components/tests-workspace";
import { WorkspaceTabs } from "@/features/teacher-dashboard/components/workspace-tabs";
import {
  getClassesForSession,
  getDemoDashboardSession,
  getTeachingGroupsForSession,
} from "@/features/teacher-dashboard/service";

export default async function PlanningPage({
  searchParams,
}: {
  searchParams: Promise<{ bereich?: string }>;
}) {
  const query = await searchParams;
  const active = query.bereich === "tests" ? "tests" : "aufgaben";
  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const groups = getTeachingGroupsForSession(session);

  return (
    <>
      <PageHeading
        eyebrow="Planung"
        title="Aufgaben & Tests"
        description="Erstellen Sie Aufgaben und Leistungsnachweise an einem Ort – ohne zwischen mehreren Bereichen zu wechseln."
        actions={
          active === "aufgaben" ? (
            <HomeworkPlanningFlow groups={groups} />
          ) : (
            <>
              <AiTestTemplateFlow groups={groups} />
              <TestPlanningFlow groups={groups} />
            </>
          )
        }
      />

      <WorkspaceTabs
        label="Aufgaben und Tests"
        items={[
          {
            label: "Aufgaben",
            href: "/lehrkraefte/planung?bereich=aufgaben",
            active: active === "aufgaben",
          },
          {
            label: "Tests",
            href: "/lehrkraefte/planung?bereich=tests",
            active: active === "tests",
          },
        ]}
      />

      {active === "aufgaben" ? (
        <HomeworkWorkspace classes={classes} />
      ) : (
        <TestsWorkspace classes={classes} />
      )}
    </>
  );
}
