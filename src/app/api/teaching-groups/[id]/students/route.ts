import type { NextRequest } from "next/server";
import { getApiSession, unauthorized } from "@/features/teacher-dashboard/api-session";
import { getStudentsForGroup } from "@/features/teacher-dashboard/service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = getApiSession(request);
  if (!session) return unauthorized();
  const { id } = await params;
  try {
    return Response.json({ data: getStudentsForGroup(session, id) });
  } catch {
    return Response.json({ error: "Unterrichtsgruppe nicht gefunden." }, { status: 404 });
  }
}
