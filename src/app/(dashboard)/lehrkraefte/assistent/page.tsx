import { PageHeading } from "@/features/teacher-dashboard/components/dashboard-ui";
import { TeacherAssistant } from "@/features/teacher-dashboard/components/teacher-assistant";
import {
  getDemoDashboardSession,
  getLatestRecommendation,
  getStudentsForGroup,
  getTeachingGroupsForSession,
  getTopicAnalyses,
} from "@/features/teacher-dashboard/service";

type TeacherAssistantPageProps = {
  searchParams: Promise<{ gruppe?: string | string[] }>;
};

export default async function TeacherAssistantPage({
  searchParams,
}: TeacherAssistantPageProps) {
  const session = getDemoDashboardSession();
  const groups = getTeachingGroupsForSession(session);
  const requestedGroup = (await searchParams).gruppe;
  const requestedGroupId = Array.isArray(requestedGroup)
    ? requestedGroup[0]
    : requestedGroup;
  const initialGroupId = groups.some((group) => group.id === requestedGroupId)
    ? requestedGroupId
    : groups[0]?.id;
  const data = groups.map((group) => ({
    group,
    topics: getTopicAnalyses(session, group.id),
    students: getStudentsForGroup(session, group.id),
    recommendation: getLatestRecommendation(session, group.id),
  }));

  return (
    <>
      <PageHeading
        eyebrow="Dayova Assistent"
        title="Ihre nächste Unterrichtsstunde – vorbereitet mit Ihren Klassendaten"
        description="Planen Sie schneller, differenzieren Sie gezielter und behalten Sie die Schüler:innen im Blick, die gerade Unterstützung benötigen."
      />
      <TeacherAssistant
        data={data}
        initialGroupId={initialGroupId}
        key={initialGroupId}
      />
    </>
  );
}
