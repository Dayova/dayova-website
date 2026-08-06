import {
  Calendar03Icon,
  Compass01Icon,
  StudentIcon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { IconBadge } from "@/components/ui/icon-badge";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Dayova für Eltern",
  description:
    "Wie Dayova Schülerinnen und Schülern Orientierung gibt und Eltern dabei hilft, Lernen verlässlich zu begleiten.",
};

const parentBenefits = [
  {
    icon: Compass01Icon,
    title: "Weniger tägliche Unsicherheit",
    text: "Dayova macht sichtbar, was ansteht und welcher nächste Schritt sinnvoll ist.",
  },
  {
    icon: Calendar03Icon,
    title: "Ein Plan, der zum Alltag passt",
    text: "Prüfungen, Aufgaben und verfügbare Lernzeiten werden gemeinsam gedacht.",
  },
  {
    icon: StudentIcon,
    title: "Mehr Eigenständigkeit",
    text: "Schülerinnen und Schüler behalten ihren Lernweg selbst in der Hand.",
  },
] as const;

export default function ParentsPage() {
  return (
    <>
      <PageHero
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

      <section className="section" aria-labelledby="parents-value">
        <div className="dayova-container">
          <div className="max-w-2xl">
            <h2 className="dayova-section-title" id="parents-value">
              Unterstützung, die Struktur gibt und Selbstständigkeit stärkt.
            </h2>
          </div>
          <div className="card-grid mt-6 md:grid-cols-3 lg:mt-8">
            {parentBenefits.map((benefit) => (
              <article className="section-card p-6" key={benefit.title}>
                <IconBadge>
                  <DayovaIcon icon={benefit.icon} size={24} />
                </IconBadge>
                <h3 className="mt-6 text-ink">{benefit.title}</h3>
                <p className="mt-4 text-dayova-body text-muted">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="dayova-container card-grid lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-dayova-xl bg-dark-panel p-6 text-white lg:p-8">
            <h2 className="dayova-section-title max-w-xl text-white">
              14 Tage testen. Danach den passenden Tarif wählen.
            </h2>
            <p className="mt-4 max-w-xl text-dayova-body text-white/70">
              Auf der Preisseite findest du das empfohlene Jahresabo, das
              flexible Monatsabo und alle wichtigen Informationen auf einen
              Blick.
            </p>
            <div className="mt-6">
              <ButtonLink href="/pricing">Preise ansehen</ButtonLink>
            </div>
          </article>
          <article className="section-card p-6">
            <h2 className="dayova-section-title">Wir antworten persönlich.</h2>
            <p className="mt-4 text-dayova-body text-muted">
              Wenn du wissen möchtest, ob Dayova zu eurem Lernalltag passt,
              schreib uns einfach kurz.
            </p>
            <div className="mt-6">
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
