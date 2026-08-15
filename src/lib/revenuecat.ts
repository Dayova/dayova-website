import type { BillingCycle } from "@/content/pricing";

const revenueCatPackageEnvironmentKeys = {
  annual: "REVENUECAT_ANNUAL_PACKAGE_ID",
  monthly: "REVENUECAT_MONTHLY_PACKAGE_ID",
} as const satisfies Record<BillingCycle, string>;

export function isBillingCycle(value: string | null): value is BillingCycle {
  return value === "annual" || value === "monthly";
}

type CheckoutUrlResult =
  | { ok: true; url: URL }
  | { ok: false; reason: "missing-configuration" | "invalid-configuration" };

export function createRevenueCatCheckoutUrl(
  billingCycle: BillingCycle,
): CheckoutUrlResult {
  const purchaseLink = process.env.REVENUECAT_WEB_PURCHASE_LINK?.trim();
  const packageId = process.env[
    revenueCatPackageEnvironmentKeys[billingCycle]
  ]?.trim();

  if (!purchaseLink || !packageId) {
    return { ok: false, reason: "missing-configuration" };
  }

  try {
    const checkoutUrl = new URL(purchaseLink);

    if (
      checkoutUrl.protocol !== "https:" ||
      checkoutUrl.hostname !== "pay.rev.cat"
    ) {
      return { ok: false, reason: "invalid-configuration" };
    }

    checkoutUrl.searchParams.set("package_id", packageId);
    checkoutUrl.searchParams.set("currency", "EUR");
    checkoutUrl.searchParams.set("hide_back_button", "true");
    checkoutUrl.searchParams.set("skip_purchase_success", "true");

    return { ok: true, url: checkoutUrl };
  } catch {
    return { ok: false, reason: "invalid-configuration" };
  }
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
