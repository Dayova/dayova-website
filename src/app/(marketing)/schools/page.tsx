import {
  ChartHistogramIcon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  SmartPhone01Icon,
  SparklesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { BlueCtaSection } from "@/components/sections/blue-cta-section";
import { FaqAccordionSection } from "@/components/sections/faq-accordion-section";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const schoolsDescription =
  "Schulen erproben Dayova mit einer ausgewählten Lerngruppe. Ziele, Funktionen und Auswertung werden vor dem Pilot gemeinsam festgelegt.";

export const metadata: Metadata = createPageMetadata({
  title: "Dayova Pilotprojekt für Schulen und Lehrkräfte",
  description: schoolsDescription,
  path: "/schools",
});

const schoolsStructuredData = createPageStructuredData({
  name: "Dayova – begleitetes Pilotprojekt für Schulen",
  description: schoolsDescription,
  path: "/schools",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Für Schulen", path: "/schools" },
  ],
});

const studentBenefits = [
  "Lernplan aus Aufgaben, Prüfungen und freien Zeiten",
  "Nächster Lernschritt mit Thema, Ziel und Dauer",
  "Antworten bestimmen, welche Themen wiederkehren",
] as const;

const teacherBenefits = [
  "Pilotgruppe und vereinbarte Aufgaben einsehen",
  "Hinweise zum Lernstand im Unterricht erproben",
  "Rückmeldung zu festen Zeitpunkten festhalten",
] as const;

const schoolBenefits = [
  {
    icon: UserGroupIcon,
    title: "Fangen Schüler:innen selbst an?",
    text: "Wir beobachten, ob der bereitstehende Lernschritt den Einstieg erleichtert und wie die Lerngruppe mit dem Plan arbeitet.",
  },
  {
    icon: SparklesIcon,
    title: "Welche Ansicht spart Lehrkräften Zeit?",
    text: "Lehrkräfte testen die vereinbarten Übersichten und sagen uns, welche Angaben im Unterricht wirklich gebraucht werden.",
  },
  {
    icon: ChartHistogramIcon,
    title: "Wo brauchen Schüler:innen Hilfe?",
    text: "Antworten aus den Lernschritten zeigen, welche Themen sicher sind und an welchen Stellen weitere Übung nötig ist.",
  },
] as const;

const schoolFaq = [
  {
    question: "Was erhalten Schülerinnen und Schüler?",
    answer:
      "Sie nutzen die im Pilot vereinbarten Funktionen der App. Aus Aufgaben, Prüfungen und freien Zeiten entsteht ein Lernplan. Beim Öffnen sehen sie den nächsten Lernschritt und erhalten Rückmeldung auf ihre Antworten.",
  },
  {
    question: "Was erhalten Lehrkräfte?",
    answer:
      "Lehrkräfte erhalten Zugang zu den Funktionen, die wir vor dem Start festlegen. Während des Piloten prüfen wir, welche Übersichten im Unterricht helfen und welcher Aufwand dabei entsteht.",
  },
  {
    question: "Wie kann eine Schule mit Dayova starten?",
    answer:
      "In einem ersten Gespräch klären wir Lerngruppe, Laufzeit, Funktionen und Ziele. Danach erhalten Sie einen Vorschlag für den Pilot und den Preis.",
  },
] as const;

export default function SchoolsPage() {
  const offerHref = `mailto:${siteConfig.links.schoolEmail}?subject=${encodeURIComponent(
    "Pilotprojekt mit Dayova",
  )}&body=${encodeURIComponent(
    "Guten Tag,\n\nwir möchten mehr über ein Pilotprojekt mit Dayova an unserer Schule erfahren.\n\nSchule:\nAnsprechperson:\nMögliche Klassen oder Lerngruppen:\n\nViele Grüße",
  )}`;

  return (
    <div className="schools-page">
      <JsonLd data={schoolsStructuredData} />
      <section
        className="home-classic-hero schools-hero"
        aria-labelledby="schools-hero-title"
      >
        <div className="dayova-container schools-hero__inner">
          <div className="schools-hero__copy">
            <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
              Pilotprojekt für Schulen
            </span>
            <h1 id="schools-hero-title" className="dayova-hero-claim">
              Dayova mit einer Lerngruppe erproben.
            </h1>
            <p className="dayova-body home-classic-hero__description">
              Eine ausgewählte Gruppe nutzt die Schüler-App über einen
              vereinbarten Zeitraum. Lehrkräfte testen die vorgesehenen
              Ansichten. Wir begleiten den Einsatz und werten ihn mit Ihnen aus.
            </p>
            <div className="home-classic-actions" aria-label="Dayova für Schulen">
              <ButtonLink href={offerHref}>Pilotprojekt anfragen</ButtonLink>
              <ButtonLink href="#schulloesung" variant="secondary">
                Pilotumfang kennenlernen
              </ButtonLink>
            </div>
          </div>

          <div
            className="schools-hero__visual schools-hero__visual--macbook"
            role="img"
            aria-label="Dayova für Lehrkräfte mit Unterrichtsempfehlung und Stundenplan auf einem MacBook"
          >
            <div className="schools-hero-macbook">
              <Image
                src="/images/schools/teacher-dashboard-macbook-transparent-light.png"
                alt=""
                width={1364}
                height={768}
                loading="eager"
                sizes="(max-width: 1100px) 92vw, 56vw"
                className="schools-hero-macbook__image schools-hero-macbook__image--light"
              />
              <Image
                src="/images/schools/teacher-dashboard-macbook-transparent-dark.png"
                alt=""
                width={1364}
                height={768}
                loading="eager"
                sizes="(max-width: 1100px) 92vw, 56vw"
                className="schools-hero-macbook__image schools-hero-macbook__image--dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-classic-section schools-solution-section"
        id="schulloesung"
        aria-labelledby="schools-solution-title"
      >
        <div className="dayova-container schools-solution">
          <div className="home-classic-advantages__intro">
            <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
              Gemeinsam erproben
            </span>
            <h2 id="schools-solution-title" className="dayova-section-title">
              Was Schüler:innen und Lehrkräfte tatsächlich testen.
            </h2>
            <p>
              Vor dem Start halten wir Lerngruppe, Laufzeit, Funktionen und
              Fragen fest. So ist am Ende sichtbar, was funktioniert hat und
              was noch verändert werden muss.
            </p>
          </div>

          <div className="schools-dual-product">
            <article className="schools-product-card schools-product-card--students">
              <div className="schools-product-card__copy">
                <span className="schools-product-card__label">
                  <span className="schools-product-card__icon">
                    <DayovaIcon icon={SmartPhone01Icon} size={28} />
                  </span>
                  Für Schüler:innen
                </span>
                <h3>Die App für den Lernalltag</h3>
                <p>
                  Schüler:innen tragen ein, was ansteht und wann sie lernen
                  können. Dayova legt daraus die nächsten Lernschritte bereit.
                </p>
                <ul className="schools-check-list">
                  {studentBenefits.map((benefit) => (
                    <li key={benefit}>
                      <DayovaIcon icon={CheckmarkCircle01Icon} size={21} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="schools-product-card schools-product-card--teachers">
              <div className="schools-product-card__copy">
                <span className="schools-product-card__label">
                  <span className="schools-product-card__icon">
                    <DayovaIcon icon={DashboardSquare01Icon} size={28} />
                  </span>
                  Für Lehrkräfte
                </span>
                <h3>Die vereinbarten Ansichten für Lehrkräfte</h3>
                <p>
                  Lehrkräfte nutzen die ausgewählten Übersichten mit der
                  Pilotgruppe und halten fest, was ihnen im Unterricht hilft.
                </p>
                <ul className="schools-check-list">
                  {teacherBenefits.map((benefit) => (
                    <li key={benefit}>
                      <DayovaIcon icon={CheckmarkCircle01Icon} size={21} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href={offerHref} variant="secondary">
                  Pilotprojekt anfragen
                </ButtonLink>
              </div>

            </article>
          </div>
        </div>
      </section>

      <section
        className="home-classic-section schools-benefits-section"
        aria-labelledby="schools-benefits-title"
      >
        <div className="dayova-container">
          <div className="marketing-section-heading marketing-section-heading--centered">
            <span className="home-classic-section-eyebrow">Fragen des Piloten</span>
            <h2 id="schools-benefits-title" className="dayova-section-title">
              Daran messen wir, ob Dayova hilft.
            </h2>
            <p>
              Die Antworten kommen aus der Nutzung im Unterricht, aus den
              Lernschritten und aus den Rückmeldungen der Beteiligten.
            </p>
          </div>

          <div className="schools-benefit-grid">
            {schoolBenefits.map((benefit) => (
              <article className="schools-benefit-card" key={benefit.title}>
                <span className="schools-benefit-card__icon">
                  <DayovaIcon icon={benefit.icon} size={30} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-classic-section home-classic-process"
        aria-labelledby="schools-partnership-title"
      >
        <div className="dayova-container">
          <div className="home-classic-process__panel">
            <div className="home-classic-process__intro">
              <span className="home-classic-section-eyebrow">
                Klar begrenzt starten
              </span>
              <h2
                id="schools-partnership-title"
                className="dayova-section-title"
              >
                Vom ersten Gespräch zur gemeinsamen Auswertung.
              </h2>
              <p>
                Sie erhalten vorab einen Ablauf mit Laufzeit, Beteiligten und
                festen Gesprächsterminen. Zum Abschluss halten wir die
                Ergebnisse gemeinsam fest.
              </p>
            </div>

            <ProcessTimeline variant="schools" />
          </div>
        </div>
      </section>

      <BlueCtaSection
        id="schools-cta"
        eyebrow="Pilotprojekt an Ihrer Schule"
        title="Passt ein Dayova-Pilot zu Ihrer Schule?"
        description="Nennen Sie uns die mögliche Lerngruppe und Ihr Ziel. Wir besprechen mit Ihnen, welcher Umfang sinnvoll ist und was der Pilot kostet."
        sectionClassName="schools-cta-section"
      >
        <ButtonLink href={offerHref}>Pilotgespräch vereinbaren</ButtonLink>
        <ButtonLink href={offerHref} variant="secondary">
          Informationen anfordern
        </ButtonLink>
      </BlueCtaSection>

      <FaqAccordionSection
        id="schools-faq"
        title="Häufige Fragen"
        items={schoolFaq}
        name="schools-faq"
      />
    </div>
  );
}
