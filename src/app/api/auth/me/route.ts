import type { NextRequest } from "next/server";
import { getApiSession, unauthorized } from "@/features/teacher-dashboard/api-session";

export async function GET(request: NextRequest) {
  const session = getApiSession(request);
  return session ? Response.json({ data: session }) : unauthorized();
}
