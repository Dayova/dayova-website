import type { NextRequest } from "next/server";
import { getApiSession, unauthorized } from "@/features/teacher-dashboard/api-session";
import {
  getHomeworkForGroup,
  getStudentsForGroup,
  getTeachingGroup,
  getTestsForGroup,
  getTopicAnalyses,
} from "@/features/teacher-dashboard/service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = getApiSession(request);
  if (!session) return unauthorized();
  const { id } = await params;
  const group = getTeachingGroup(session, id);
  if (!group) return Response.json({ error: "Unterrichtsgruppe nicht gefunden." }, { status: 404 });
  return Response.json({
    data: {
      group,
      students: getStudentsForGroup(session, id),
      homework: getHomeworkForGroup(session, id),
      tests: getTestsForGroup(session, id),
      topics: getTopicAnalyses(session, id),
    },
  });
}
