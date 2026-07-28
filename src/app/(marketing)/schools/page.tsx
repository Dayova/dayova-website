import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { IconBadge } from "@/components/ui/icon-badge";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dayova für Schulen",
  description:
    "Dayova als strukturierter Lernbegleiter im schulischen Umfeld – mit einem individuellen Angebot für Schulen.",
};

const schoolBenefits = [
  {
    icon: "↗",
    title: "Klare nächste Schritte",
    text: "Lernaufgaben werden für Schülerinnen und Schüler verständlich und handhabbar.",
  },
  {
    icon: "⌁",
    title: "Planung mit Terminen",
    text: "Prüfungen, Aufgaben und verfügbare Lernzeit fließen in einen realistischen Plan ein.",
  },
  {
    icon: "◎",
    title: "Passend zum Einsatz",
    text: "Das Angebot wird nach Umfang, Schülerzahl und schulischem Kontext zusammengestellt.",
  },
] as const;

export default function SchoolsPage() {
  const offerHref = `mailto:${siteConfig.links.schoolEmail}?subject=${encodeURIComponent(
    "Individuelles Angebot für unsere Schule",
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Für Schulen"
        title="Lernorganisation, die Schülerinnen und Schüler wirklich erreicht."
        description="Dayova verbindet Aufgaben, Prüfungstermine und persönliche Lernzeiten zu einem klaren Lernweg. Für Schulen entwickeln wir ein Angebot, das zum konkreten Einsatz passt."
        actions={
          <>
            <ButtonLink href={offerHref}>Individuelles Angebot anfragen</ButtonLink>
            <ButtonLink href="/#produkt" variant="secondary">
              Produkt ansehen
            </ButtonLink>
          </>
        }
        aside={
          <div className="section-card flex min-h-[460px] items-end justify-center overflow-hidden bg-brand-soft px-4 pt-8">
            <Image
              className="h-auto max-h-[440px] w-auto object-contain object-bottom"
              src="/images/dayova-screen-collage.png"
              alt="Mehrere Ansichten der Dayova App"
              width={964}
              height={883}
              priority
            />
          </div>
        }
      />

      <section className="dayova-section pt-0" aria-labelledby="school-value">
        <div className="dayova-container">
          <div className="max-w-2xl">
            <p className="section-label">Für den schulischen Alltag</p>
            <h2 className="mt-3" id="school-value">
              Ein gemeinsamer Rahmen, der individuelles Lernen übersichtlich
              macht.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {schoolBenefits.map((benefit) => (
              <article className="section-card p-7 sm:p-8" key={benefit.title}>
                <IconBadge>{benefit.icon}</IconBadge>
                <h3 className="mt-7">{benefit.title}</h3>
                <p className="mt-4 text-dayova-body text-muted">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dayova-section pt-0">
        <div className="dayova-container">
          <div className="grid overflow-hidden rounded-dayova-lg bg-[#15283b] text-white lg:grid-cols-[1fr_0.8fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="section-label !text-cyan-200">
                Individuelles Schulangebot
              </p>
              <h2 className="mt-3 max-w-2xl text-white">
                Preis und Umfang richten sich nach Ihrer Schule.
              </h2>
              <p className="mt-5 max-w-2xl text-dayova-body text-white/70">
                Wir klären gemeinsam Einsatzszenario, Anzahl der Schülerinnen
                und Schüler sowie den gewünschten Umfang. Anschließend erhalten
                Sie ein transparentes, individuelles Angebot.
              </p>
              <div className="mt-8">
                <ButtonLink href={offerHref}>
                  Angebot unverbindlich anfragen
                </ButtonLink>
              </div>
            </div>
            <div className="grid content-center gap-4 border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-sm font-semibold text-white">
                Bereits für die nächste Phase vorbereitet
              </p>
              <p className="text-sm text-white/65">
                Die Website-Architektur lässt sich später sauber um einen
                geschützten Schul- und Lehrkräftezugang erweitern. Dieser Zugang
                ist noch nicht Teil der aktuellen Website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
