import type { Metadata } from "next";
import { SchoolPricingCard } from "@/components/pricing/school-pricing-card";
import { FaqAccordionSection } from "@/components/sections/faq-accordion-section";
import { JsonLd } from "@/components/seo/json-ld";
import { StudentPricingCard } from "@/components/pricing/student-pricing-card";
import { pricingFaqs } from "@/content/pricing";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const pricingDescription =
  "Dayova Preise für Schüler und Schulen: 14 Tage kostenlos testen, danach ab 12,99 € pro Monat oder ein individuelles Schulangebot anfragen.";

export const metadata: Metadata = createPageMetadata({
  title: "Dayova Preise: Lern-App für Schüler und Schulen",
  description: pricingDescription,
  path: "/pricing",
});

const pricingStructuredData = createPageStructuredData({
  name: "Dayova Preise für Schüler und Schulen",
  description: pricingDescription,
  path: "/pricing",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Preise", path: "/pricing" },
  ],
});

const checkoutMessages = {
  "invalid-plan": "Bitte wähle ein gültiges Monats- oder Jahresabo aus.",
  unavailable:
    "Der Bezahlvorgang ist gerade noch nicht verfügbar. Bitte versuche es später erneut.",
  "invalid-configuration":
    "Der Bezahlvorgang konnte nicht sicher gestartet werden. Bitte versuche es später erneut.",
} as const;

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const checkoutState = Array.isArray(query.checkout)
    ? query.checkout[0]
    : query.checkout;
  const checkoutMessage =
    checkoutState && checkoutState in checkoutMessages
      ? checkoutMessages[checkoutState as keyof typeof checkoutMessages]
      : null;

  return (
    <>
      <JsonLd data={pricingStructuredData} />
      <section
        className="home-classic-section pricing-page"
        id="abos"
        aria-labelledby="pricing-hero-title"
      >
        <div className="dayova-container">
          <div className="pricing-page__intro">
            <h1 id="pricing-hero-title" className="dayova-hero-claim">
              Dayova Preise für Schüler und Schulen.
            </h1>
            <p>
              Teste Dayova 14 Tage kostenlos und wähle danach das Abo, das zu
              deinem Lernalltag passt.
            </p>
            {checkoutMessage ? (
              <p className="pricing-page__notice" role="alert">
                {checkoutMessage}
              </p>
            ) : null}
          </div>

          <div className="pricing-plans-layout">
            <div className="pricing-plans-grid">
              <StudentPricingCard />
              <SchoolPricingCard />
            </div>
            <p className="pricing-plans-note">
              Vor dem Abschluss werden Laufzeit, Gesamtpreis und Kündigung
              verständlich angezeigt. Die Testphase endet nicht überraschend.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordionSection
        id="pricing-faq"
        title="Häufige Fragen zu den Preisen"
        items={pricingFaqs}
        name="pricing-faq"
      />
    </>
  );
}
