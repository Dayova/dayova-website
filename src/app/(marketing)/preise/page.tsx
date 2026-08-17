import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";
import { SchoolPricingCard } from "@/components/pricing/school-pricing-card";
import { JsonLd } from "@/components/seo/json-ld";
import { StudentPricingCard } from "@/components/pricing/student-pricing-card";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { pricingFaqs } from "@/content/pricing";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const pricingDescription =
  "Dayova Preise für Schüler und Schulen: 14 Tage kostenlos testen, danach ab 12,99 € pro Monat oder ein individuelles Schulangebot anfragen.";

export const metadata: Metadata = createPageMetadata({
  title: "Dayova Preise: Lern-App für Schüler und Schulen",
  description: pricingDescription,
  path: "/preise",
});

const pricingStructuredData = createPageStructuredData({
  name: "Dayova Preise für Schüler und Schulen",
  description: pricingDescription,
  path: "/preise",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Preise", path: "/preise" },
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

      <section
        className="home-classic-section"
        id="pricing-faq"
        aria-labelledby="pricing-faq-title"
      >
        <div className="dayova-container home-classic-faq">
          <article className="home-classic-faq__visual">
            <h3>Fragen zu deinem Abo?</h3>
            <Image
              src="/images/dayova-home-phone.png"
              alt="Dayova App mit einer geplanten Lerneinheit"
              width={872}
              height={1080}
              sizes="(max-width: 1023px) 88vw, 440px"
            />
          </article>

          <div className="home-classic-faq__content">
            <span className="home-classic-section-eyebrow">Gut zu wissen</span>
            <h2 className="dayova-section-title" id="pricing-faq-title">
              Häufige Fragen zu den Preisen
            </h2>
            <div className="home-classic-faq__list">
              {pricingFaqs.map((faq) => (
                <details key={faq.question} name="pricing-faq">
                  <summary>
                    <span>{faq.question}</span>
                    <DayovaIcon
                      className="home-classic-faq__icon"
                      icon={ArrowDown01Icon}
                      size={24}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
