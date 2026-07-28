import type { Metadata } from "next";
import { PricingCard } from "@/components/pricing/pricing-card";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";
import { pricingFaqs, studentPlans } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Preise – Dayova für Schüler und Schulen",
  description:
    "Dayova Jahresabo für 13,50 € pro Monat, Monatsabo für 15 € pro Monat und individuelle Angebote für Schulen.",
};

export default function PricingPage() {
  const schoolOfferHref = `mailto:${siteConfig.links.schoolEmail}?subject=${encodeURIComponent(
    "Individuelles Dayova Schulangebot",
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Preise"
        title="Der passende Lernbegleiter für deinen Alltag."
        description="Starte mit 14 Tagen vollem Zugang. Entscheide danach zwischen dem empfohlenen Jahresabo und dem flexiblen Monatsabo."
      />

      <section className="dayova-section pt-0" aria-labelledby="plans-title">
        <div className="dayova-container">
          <h2 className="sr-only" id="plans-title">
            Dayova Abos
          </h2>
          <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
            {studentPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted">
            Die Checkout-Anbindung wird vor dem App-Start ergänzt. Vor einer
            Zahlung werden Laufzeit, Gesamtpreis, Kündigung und Steuerangaben
            vollständig und transparent angezeigt.
          </p>
        </div>
      </section>

      <section className="dayova-section" aria-labelledby="school-plan-title">
        <div className="dayova-container">
          <div className="grid overflow-hidden rounded-dayova-lg bg-[#15283b] text-white lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="section-label !text-cyan-200">Für Schulen</p>
              <h2 className="mt-3 max-w-2xl text-white" id="school-plan-title">
                Ein individuelles Angebot statt eines starren Tarifs.
              </h2>
              <p className="mt-5 max-w-2xl text-dayova-body text-white/70">
                Preis und Leistungsumfang richten sich nach Einsatzbereich und
                Anzahl der Schülerinnen und Schüler. Wir erstellen ein
                passendes, nachvollziehbares Angebot.
              </p>
              <div className="mt-8">
                <ButtonLink href={schoolOfferHref}>
                  Schulangebot anfragen
                </ButtonLink>
              </div>
            </div>
            <div className="grid place-items-center border-t border-white/10 bg-white/[0.04] p-8 lg:border-l lg:border-t-0">
              <div className="text-center">
                <span className="text-sm text-white/60">Preis</span>
                <strong className="mt-2 block text-[36px] font-semibold leading-tight tracking-[-0.04em]">
                  Individuell
                </strong>
                <span className="mt-3 block text-sm text-white/65">
                  nach Umfang und Schülerzahl
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dayova-section pt-0" aria-labelledby="pricing-faq">
        <div className="dayova-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">Gut zu wissen</p>
            <h2 className="mt-3" id="pricing-faq">
              Häufige Fragen zu den Preisen
            </h2>
          </div>
          <div className="grid gap-3">
            {pricingFaqs.map((faq) => (
              <details className="faq-item rounded-[22px]" key={faq.question}>
                <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-4 rounded-[22px] border border-line bg-elevated px-6 py-4 font-semibold text-ink">
                  <span>{faq.question}</span>
                  <span className="faq-chevron text-xl" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <p className="px-6 pb-5 pt-4 text-dayova-body text-muted">
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
