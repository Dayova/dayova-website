import { AiTestTemplateFlow } from "@/features/teacher-dashboard/components/ai-test-template-flow";
import { PageHeading } from "@/features/teacher-dashboard/components/dashboard-ui";
import { TestPlanningFlow } from "@/features/teacher-dashboard/components/test-planning-flow";
import { TestsWorkspace } from "@/features/teacher-dashboard/components/tests-workspace";
import { getClassesForSession, getDemoDashboardSession, getTeachingGroupsForSession } from "@/features/teacher-dashboard/service";

export default function TestsPage() {
  const session = getDemoDashboardSession();
  const classes = getClassesForSession(session);
  const groups = getTeachingGroupsForSession(session);
  return <><PageHeading title="Tests" description="Planen Sie Leistungsnachweise und stimmen Sie Inhalte auf die Lernvorbereitung ab." actions={<><AiTestTemplateFlow groups={groups} /><TestPlanningFlow groups={groups} /></>} />
    <TestsWorkspace classes={classes} />
  </>;
}
