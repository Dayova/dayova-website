import {
  Calendar03Icon,
  School01Icon,
  TaskDone01Icon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
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
    icon: TaskDone01Icon,
    title: "Klare nächste Schritte",
    text: "Lernaufgaben werden für Schülerinnen und Schüler verständlich und handhabbar.",
  },
  {
    icon: Calendar03Icon,
    title: "Planung mit Terminen",
    text: "Prüfungen, Aufgaben und verfügbare Lernzeit fließen in einen realistischen Plan ein.",
  },
  {
    icon: School01Icon,
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
          <div className="marketing-page-hero__visual marketing-page-hero__visual--collage">
            <Image
              className="marketing-page-hero__image"
              src="/images/dayova-screen-collage.png"
              alt="Mehrere Ansichten der Dayova App"
              width={964}
              height={883}
              priority
            />
          </div>
        }
      />

      <section className="section" aria-labelledby="school-value">
        <div className="dayova-container">
          <div className="marketing-section-heading">
            <span className="home-classic-section-eyebrow">
              Im Schulalltag
            </span>
            <h2 className="dayova-section-title" id="school-value">
              Ein gemeinsamer Rahmen, der individuelles Lernen übersichtlich
              macht.
            </h2>
          </div>
          <div className="card-grid marketing-feature-grid">
            {schoolBenefits.map((benefit) => (
              <article
                className="section-card marketing-feature-card"
                key={benefit.title}
              >
                <IconBadge>
                  <DayovaIcon icon={benefit.icon} size={24} />
                </IconBadge>
                <h3 className="mt-6">{benefit.title}</h3>
                <p className="mt-4 text-dayova-body text-muted">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="dayova-container">
          <div className="marketing-split-cta">
            <div className="marketing-split-cta__copy">
              <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
                Individuelles Angebot
              </span>
              <h2 className="dayova-section-title">
                Preis und Umfang richten sich nach Ihrer Schule.
              </h2>
              <p>
                Wir klären gemeinsam Einsatzszenario, Anzahl der Schülerinnen
                und Schüler sowie den gewünschten Umfang. Anschließend erhalten
                Sie ein transparentes, individuelles Angebot.
              </p>
              <div className="marketing-split-cta__action">
                <ButtonLink href={offerHref}>
                  Angebot unverbindlich anfragen
                </ButtonLink>
              </div>
            </div>
            <div className="marketing-split-cta__aside">
              <p className="marketing-split-cta__aside-title">
                Bereits für die nächste Phase vorbereitet
              </p>
              <p>
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
