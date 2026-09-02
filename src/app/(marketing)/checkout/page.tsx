import type { Metadata } from "next";
import { RevenueCatCheckout } from "@/components/checkout/revenuecat-checkout";
import { studentPricing } from "@/content/pricing";
import { isBillingCycle } from "@/lib/revenuecat";

export const metadata: Metadata = {
  title: "Sicher bezahlen",
  description: "Schließe dein Dayova-Abo sicher auf Deutsch ab.",
  robots: { index: false, follow: false },
};

const packageEnvironmentKeys = {
  annual: "REVENUECAT_ANNUAL_PACKAGE_ID",
  monthly: "REVENUECAT_MONTHLY_PACKAGE_ID",
} as const;

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const requestedPlan = Array.isArray(query.plan) ? query.plan[0] : query.plan;
  const planCandidate = requestedPlan ?? null;
  const billingCycle = isBillingCycle(planCandidate) ? planCandidate : null;

  if (!billingCycle) {
    return (
      <RevenueCatCheckout
        apiKey=""
        billingCycle={null}
        packageId=""
        pricingOption={null}
      />
    );
  }

  return (
    <RevenueCatCheckout
      apiKey={process.env.NEXT_PUBLIC_REVENUECAT_WEB_API_KEY?.trim() ?? ""}
      billingCycle={billingCycle}
      packageId={process.env[packageEnvironmentKeys[billingCycle]]?.trim() ?? ""}
      pricingOption={studentPricing.options[billingCycle]}
    />
  );
}
