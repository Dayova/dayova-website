import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  createRevenueCatCheckoutUrl,
  isBillingCycle,
} from "@/lib/revenuecat";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const billingCycle = request.nextUrl.searchParams.get("plan");

  if (!isBillingCycle(billingCycle)) {
    return NextResponse.redirect(
      new URL("/pricing?checkout=invalid-plan", request.url),
    );
  }

  const checkout = createRevenueCatCheckoutUrl(billingCycle);

  if (!checkout.ok) {
    const reason =
      checkout.reason === "invalid-configuration"
        ? "invalid-configuration"
        : "unavailable";

    return NextResponse.redirect(
      new URL(`/pricing?checkout=${reason}`, request.url),
    );
  }

  const response = NextResponse.redirect(checkout.url);
  response.headers.set("Cache-Control", "no-store");
  return response;
}
