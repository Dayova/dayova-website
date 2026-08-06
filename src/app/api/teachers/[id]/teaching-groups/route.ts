import type { NextRequest } from "next/server";
import { forbidden, getApiSession, unauthorized } from "@/features/teacher-dashboard/api-session";
import { getTeachingGroupsForSession } from "@/features/teacher-dashboard/service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = getApiSession(request);
  if (!session) return unauthorized();
  const { id } = await params;
  if (session.role === "teacher" && session.userId !== id) return forbidden();
  return Response.json({ data: getTeachingGroupsForSession(session) });
}
