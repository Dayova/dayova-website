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
  searchParams: Promise<{
    section?: string;
    group?: string | string[];
    new?: string;
    bereich?: string;
    gruppe?: string | string[];
    neu?: string;
  }>;
}) {
  const query = await searchParams;
  const requestedSection = query.section ?? query.bereich;
  const active = requestedSection === "tests" ? "tests" : "assignments";
  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const groups = getTeachingGroupsForSession(session);
  const groupParam = query.group ?? query.gruppe;
  const requestedGroup = Array.isArray(groupParam) ? groupParam[0] : groupParam;
  const presetGroupId = groups.some((group) => group.id === requestedGroup)
    ? requestedGroup
    : undefined;
  const groupQuery = presetGroupId
    ? `&group=${encodeURIComponent(presetGroupId)}`
    : "";
  const startFlow = (query.new ?? query.neu) === "1";

  return (
    <>
      <PageHeading
        eyebrow="Planung"
        title="Aufgaben & Tests"
        description="Erstellen Sie Aufgaben und Leistungsnachweise an einem Ort – ohne zwischen mehreren Bereichen zu wechseln."
        actions={
          active === "assignments" ? (
            <HomeworkPlanningFlow
              groups={groups}
              presetGroupId={presetGroupId}
              startOpen={startFlow}
            />
          ) : (
            <>
              <AiTestTemplateFlow
                groups={groups}
                presetGroupId={presetGroupId}
              />
              <TestPlanningFlow
                groups={groups}
                presetGroupId={presetGroupId}
                startOpen={startFlow}
              />
            </>
          )
        }
      />

      <WorkspaceTabs
        label="Aufgaben und Tests"
        items={[
          {
            label: "Aufgaben",
            href: `/teachers/planning?section=assignments${groupQuery}`,
            active: active === "assignments",
          },
          {
            label: "Tests",
            href: `/teachers/planning?section=tests${groupQuery}`,
            active: active === "tests",
          },
        ]}
      />

      {active === "assignments" ? (
        <HomeworkWorkspace classes={classes} />
      ) : (
        <TestsWorkspace classes={classes} />
      )}
    </>
  );
}
