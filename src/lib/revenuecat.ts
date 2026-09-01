import type { BillingCycle } from "@/content/pricing";

export function isBillingCycle(value: string | null): value is BillingCycle {
  return value === "annual" || value === "monthly";
}

export function getSafeRevenueCatRedemptionUrl(
  value: string | string[] | undefined,
) {
  const redemptionScheme = process.env.REVENUECAT_REDEMPTION_SCHEME?.trim()
    .toLowerCase()
    .replace(/:$/, "");
  const rawValue = Array.isArray(value) ? value[0] : value;

  if (
    !redemptionScheme ||
    !rawValue ||
    !/^rc-[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(redemptionScheme)
  ) {
    return null;
  }

  try {
    const redeemUrl = new URL(rawValue);
    const hasExpectedDestination =
      redeemUrl.protocol === `${redemptionScheme}:` &&
      redeemUrl.hostname === "redeem_web_purchase";
    const hasToken = Boolean(redeemUrl.searchParams.get("redemption_token"));

    return hasExpectedDestination && hasToken ? redeemUrl.toString() : null;
  } catch {
    return null;
  }
}
