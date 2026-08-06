import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { SchoolPricingCard } from "@/components/pricing/school-pricing-card";
import { StudentPricingCard } from "@/components/pricing/student-pricing-card";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { PageHero } from "@/components/ui/page-hero";
import { pricingFaqs } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Preise – Dayova für Schüler und Schulen",
  description:
    "Dayova im Jahresabo für 12,99 € pro Monat, im Monatsabo für 14,99 € und mit individuellen Angeboten für Schulen.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Ein klarer Preis für Schüler. Ein passendes Angebot für Schulen."
        description="Wähle Jahres- oder Monatsabo – Schulen erhalten ein individuelles Angebot."
      />

      <section className="section" aria-labelledby="plans-title">
        <div className="dayova-container">
          <h2 className="sr-only" id="plans-title">
            Dayova Abos
          </h2>
          <div className="stack-lg mx-auto max-w-[640px] lg:max-w-[920px]">
            <div className="card-grid items-stretch lg:grid-cols-2">
              <StudentPricingCard />
              <SchoolPricingCard />
            </div>
            <p className="mx-auto max-w-2xl text-center text-xs text-muted">
              Vor dem Checkout werden Laufzeit, Gesamtpreis und Kündigung klar
              angezeigt.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pricing-faq">
        <div className="dayova-container section-inner mx-auto max-w-[640px] lg:max-w-[920px] lg:grid-cols-[0.7fr_1.3fr]">
          <div className="grid content-start">
            <h2 className="dayova-section-title" id="pricing-faq">
              Häufige Fragen zu den Preisen
            </h2>
          </div>
          <div className="grid gap-3">
            {pricingFaqs.map((faq) => (
              <details className="faq-item rounded-dayova-md" key={faq.question}>
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-dayova-md border border-line bg-elevated px-6 py-4 font-semibold text-ink">
                  <span>{faq.question}</span>
                  <DayovaIcon
                    className="faq-chevron shrink-0"
                    icon={ArrowDown01Icon}
                    size={20}
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-6 pb-4 pt-4 text-dayova-body text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
