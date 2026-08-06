import type { NextRequest } from "next/server";
import { getDemoDashboardSession } from "./service";
import type { DashboardRole, DashboardSession } from "./types";

const roles = new Set<DashboardRole>(["teacher", "school_admin", "internal_setup"]);

export function getApiSession(request: NextRequest): DashboardSession | null {
  const userId = request.headers.get("x-dayova-user-id");
  const role = request.headers.get("x-dayova-role") as DashboardRole | null;
  const schoolId = request.headers.get("x-dayova-school-id");

  if (userId && role && schoolId && roles.has(role)) {
    return {
      userId,
      role,
      schoolId,
      displayName: request.headers.get("x-dayova-display-name") ?? "Lehrkraft",
    };
  }

  return process.env.NODE_ENV === "production"
    ? null
    : getDemoDashboardSession();
}

export function unauthorized() {
  return Response.json(
    { error: "Sie müssen angemeldet sein, um diese Daten aufzurufen." },
    { status: 401 },
  );
}

export function forbidden(message = "Sie haben keinen Zugriff auf diese Ressource.") {
  return Response.json({ error: message }, { status: 403 });
}
