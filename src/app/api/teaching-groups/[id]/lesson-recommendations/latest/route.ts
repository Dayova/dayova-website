import type { NextRequest } from "next/server";
import { getApiSession, unauthorized } from "@/features/teacher-dashboard/api-session";
import { getLatestRecommendation } from "@/features/teacher-dashboard/service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = getApiSession(request);
  if (!session) return unauthorized();
  const { id } = await params;
  try {
    const recommendation = getLatestRecommendation(session, id);
    return recommendation
      ? Response.json({ data: recommendation })
      : Response.json({ error: "Noch keine Empfehlung verfügbar." }, { status: 404 });
  } catch {
    return Response.json({ error: "Unterrichtsgruppe nicht gefunden." }, { status: 404 });
  }
}
