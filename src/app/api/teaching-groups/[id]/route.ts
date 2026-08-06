import type { NextRequest } from "next/server";
import { getApiSession, unauthorized } from "@/features/teacher-dashboard/api-session";
import { getTeachingGroup } from "@/features/teacher-dashboard/service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = getApiSession(request);
  if (!session) return unauthorized();
  const { id } = await params;
  const group = getTeachingGroup(session, id);
  return group
    ? Response.json({ data: group })
    : Response.json({ error: "Unterrichtsgruppe nicht gefunden." }, { status: 404 });
}
