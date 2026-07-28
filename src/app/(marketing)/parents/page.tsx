import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { IconBadge } from "@/components/ui/icon-badge";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Dayova für Eltern",
  description:
    "Wie Dayova Schülerinnen und Schülern Orientierung gibt und Eltern dabei hilft, Lernen verlässlich zu begleiten.",
};

const parentBenefits = [
  {
    icon: "01",
    title: "Weniger tägliche Unsicherheit",
    text: "Dayova macht sichtbar, was ansteht und welcher nächste Schritt sinnvoll ist.",
  },
  {
    icon: "02",
    title: "Ein Plan, der zum Alltag passt",
    text: "Prüfungen, Aufgaben und verfügbare Lernzeiten werden gemeinsam gedacht.",
  },
  {
    icon: "03",
    title: "Mehr Eigenständigkeit",
    text: "Schülerinnen und Schüler behalten ihren Lernweg selbst in der Hand.",
  },
] as const;

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Für Eltern"
        title="Mehr Orientierung beim Lernen – ohne jeden Tag nachfragen zu müssen."
        description="Dayova hilft Schülerinnen und Schülern, aus Prüfungen, Aufgaben und Lernzeiten einen verständlichen Weg zu machen. So wird klarer, was jetzt zählt."
        actions={
          <>
            <ButtonLink href="/pricing">Abos ansehen</ButtonLink>
            <ButtonLink href="/#produkt" variant="secondary">
              Dayova kennenlernen
            </ButtonLink>
          </>
        }
        aside={
          <div className="section-card flex min-h-[460px] items-end justify-center px-6 pt-8">
            <Image
              className="h-auto max-h-[430px] w-auto object-contain object-bottom"
              src="/images/dayova-home-phone.png"
              alt="Dayova zeigt einen klaren Tages- und Lernplan"
              width={872}
              height={1080}
              priority
            />
          </div>
        }
      />

      <section className="dayova-section pt-0" aria-labelledby="parents-value">
        <div className="dayova-container">
          <div className="max-w-2xl">
            <p className="section-label">Was sich verändert</p>
            <h2 className="mt-3" id="parents-value">
              Unterstützung, die Struktur gibt und Selbstständigkeit stärkt.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {parentBenefits.map((benefit) => (
              <article className="section-card p-7 sm:p-8" key={benefit.title}>
                <IconBadge>{benefit.icon}</IconBadge>
                <h3 className="mt-7 text-ink">{benefit.title}</h3>
                <p className="mt-4 text-dayova-body text-muted">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dayova-section pt-0">
        <div className="dayova-container grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-dayova-lg bg-[#15283b] p-7 text-white sm:p-10">
            <p className="section-label !text-cyan-200">Transparent starten</p>
            <h2 className="mt-3 max-w-xl text-white">
              14 Tage testen. Danach den passenden Tarif wählen.
            </h2>
            <p className="mt-5 max-w-xl text-dayova-body text-white/70">
              Auf der Preisseite findest du das empfohlene Jahresabo, das
              flexible Monatsabo und alle wichtigen Informationen auf einen
              Blick.
            </p>
            <div className="mt-8">
              <ButtonLink href="/pricing">Preise ansehen</ButtonLink>
            </div>
          </article>
          <article className="section-card p-7 sm:p-10">
            <p className="section-label">Noch eine Frage?</p>
            <h2 className="mt-3">Wir antworten persönlich.</h2>
            <p className="mt-5 text-dayova-body text-muted">
              Wenn du wissen möchtest, ob Dayova zu eurem Lernalltag passt,
              schreib uns einfach kurz.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="mailto:kontakt@dayova.de?subject=Frage%20von%20Eltern"
                variant="secondary"
              >
                Frage stellen
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
