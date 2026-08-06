import type { NextRequest } from "next/server";
import { getApiSession, unauthorized } from "@/features/teacher-dashboard/api-session";
import { buildRuleBasedRecommendation } from "@/features/teacher-dashboard/recommendation-engine";
import { getTeachingGroup, getTopicAnalyses } from "@/features/teacher-dashboard/service";

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = getApiSession(request);
  if (!session) return unauthorized();
  const { id } = await params;
  const group = getTeachingGroup(session, id);
  if (!group) return Response.json({ error: "Unterrichtsgruppe nicht gefunden." }, { status: 404 });
  const payload = await request.json().catch(() => ({})) as { targetDate?: string };
  const targetDate = payload.targetDate ? new Date(payload.targetDate) : new Date();
  if (Number.isNaN(targetDate.getTime())) {
    return Response.json({ error: "Das Zieldatum ist ungültig." }, { status: 400 });
  }
  return Response.json(
    { data: buildRuleBasedRecommendation(group, getTopicAnalyses(session, id), targetDate) },
    { status: 201 },
  );
}
