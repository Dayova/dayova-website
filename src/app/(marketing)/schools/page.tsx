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
  "Dayova ist die Lernplattform für Schulen: persönliche Lernpläne für Schüler, Lernstandsanalysen und konkrete Unterrichtsempfehlungen für Lehrkräfte.";

export const metadata: Metadata = createPageMetadata({
  title: "Lernplattform für Schulen und Lehrkräfte",
  description: schoolsDescription,
  path: "/schools",
});

const schoolsStructuredData = createPageStructuredData({
  name: "Dayova – Lernplattform für Schulen und Lehrkräfte",
  description: schoolsDescription,
  path: "/schools",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Für Schulen", path: "/schools" },
  ],
});

const studentBenefits = [
  "Persönliche Lernpläne aus Aufgaben, Prüfungen und Lernzeiten",
  "Rückmeldung zu Antworten, Stärken und Wissenslücken",
  "Ein verständlicher nächster Schritt statt Lernchaos",
] as const;

const teacherBenefits = [
  "Klassen, Klassenbuch, Aufgaben und Tests an einem Ort",
  "Lernstände und Handlungsbedarf ohne lange Auswertung",
  "Unterrichtsassistent für die Vorbereitung des nächsten Tages",
] as const;

const schoolBenefits = [
  {
    icon: UserGroupIcon,
    title: "Selbstständiger lernen",
    text: "Schüler:innen erhalten Orientierung im Alltag und übernehmen Schritt für Schritt mehr Verantwortung für ihren Lernweg.",
  },
  {
    icon: SparklesIcon,
    title: "Lehrkräfte entlasten",
    text: "Wichtige Informationen werden gebündelt und in konkrete nächste Handlungen für Unterricht und Förderung übersetzt.",
  },
  {
    icon: ChartHistogramIcon,
    title: "Förderung gezielter machen",
    text: "Lernstände werden nachvollziehbar, damit Unterstützung dort ankommt, wo sie fachlich gebraucht wird.",
  },
] as const;

const schoolFaq = [
  {
    question: "Was erhalten Schülerinnen und Schüler?",
    answer:
      "Sie nutzen Dayova als persönlichen Lernbegleiter. Aufgaben, Prüfungen und Lernzeiten werden zu einem individuellen Plan. Antworten liefern Rückmeldung zu Stärken, Lücken und dem nächsten sinnvollen Lernschritt.",
  },
  {
    question: "Was erhalten Lehrkräfte?",
    answer:
      "Lehrkräfte erhalten ein übersichtliches System für Klassen und Klassenbuch, Aufgaben und Tests, Lernstände sowie die Unterrichtsvorbereitung. Im Mittelpunkt stehen konkrete Empfehlungen statt zusätzlicher Verwaltungsaufwand.",
  },
  {
    question: "Wie kann eine Schule mit Dayova starten?",
    answer:
      "Der Einstieg beginnt mit einem unverbindlichen Gespräch. Danach definieren wir gemeinsam einen passenden Pilotumfang, die beteiligten Klassen und die Begleitung während der Erprobung.",
  },
] as const;

export default function SchoolsPage() {
  const offerHref = `mailto:${siteConfig.links.schoolEmail}?subject=${encodeURIComponent(
    "Schulpartnerschaft mit Dayova",
  )}&body=${encodeURIComponent(
    "Guten Tag,\n\nwir möchten mehr über Dayova für unsere Schule erfahren.\n\nSchule:\nAnsprechperson:\nUngefähre Anzahl der Schüler:innen:\n\nViele Grüße",
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
              Dayova für Schulen
            </span>
            <h1 id="schools-hero-title" className="dayova-hero-claim">
              Lernstände verstehen. Unterricht gezielt planen.
            </h1>
            <p className="dayova-body home-classic-hero__description">
              <strong>Eine Lösung für die ganze Schulgemeinschaft:</strong>{" "}
              Schüler:innen bekommen Dayova als persönlichen Lernbegleiter.
              Lehrkräfte erhalten ein Management- und Unterrichtssystem, das
              aus Lernständen konkrete nächste Schritte macht.
            </p>
            <div className="home-classic-actions" aria-label="Dayova für Schulen">
              <ButtonLink href={offerHref}>Schulpartnerschaft anfragen</ButtonLink>
              <ButtonLink href="#schulloesung" variant="secondary">
                Lösung kennenlernen
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
              Zwei Perspektiven. Ein Lernweg.
            </span>
            <h2 id="schools-solution-title" className="dayova-section-title">
              Was Schüler:innen lernen und Lehrkräfte planen, gehört zusammen.
            </h2>
            <p>
              Dayova verbindet persönliche Lernbegleitung mit einem System,
              das Lehrkräften Orientierung gibt – ohne den Schulalltag durch
              weitere Einzellösungen komplizierter zu machen.
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
                <h3>Der persönliche Lernbegleiter</h3>
                <p>
                  Dayova macht aus Terminen, Aufgaben und dem eigenen
                  Lernstand einen verständlichen Weg durch den Schulalltag.
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
                <h3>Das Management- und Unterrichtssystem</h3>
                <p>
                  Lehrkräfte sehen, was als Nächstes wichtig ist, verwalten
                  zentrale Abläufe gebündelt und bereiten Unterricht gezielter
                  vor.
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
            <span className="home-classic-section-eyebrow">Mehrwert im Alltag</span>
            <h2 id="schools-benefits-title" className="dayova-section-title">
              Ein System, das den Schulalltag für alle Beteiligten verbessert.
            </h2>
            <p>
              Nicht mehr Daten, sondern bessere Entscheidungen: für Lernen,
              Unterricht und individuelle Unterstützung.
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
                Gemeinsam starten
              </span>
              <h2
                id="schools-partnership-title"
                className="dayova-section-title"
              >
                Von der ersten Idee zu einer Partnerschaft, die zu Ihrer Schule
                passt.
              </h2>
              <p>
                Wir führen Dayova nicht einfach ein. Wir lernen Ihren Alltag
                kennen, starten fokussiert und entwickeln den Einsatz gemeinsam
                mit Ihrer Schule weiter.
              </p>
            </div>

            <ProcessTimeline variant="schools" />
          </div>
        </div>
      </section>

      <BlueCtaSection
        id="schools-cta"
        eyebrow="Dayova an Ihrer Schule"
        title="Gemeinsam Schule im Alltag entlasten."
        description="Erzählen Sie uns von Ihrer Schule. Wir besprechen persönlich den passenden nächsten Schritt – unverbindlich und ohne Standardpaket."
        sectionClassName="schools-cta-section"
      >
        <ButtonLink href={offerHref}>Gespräch vereinbaren</ButtonLink>
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
