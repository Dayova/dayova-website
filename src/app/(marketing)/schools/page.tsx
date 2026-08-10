import {
  AiLearningIcon,
  BookOpen01Icon,
  Calendar03Icon,
  ChartHistogramIcon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  School01Icon,
  SmartPhone01Icon,
  SparklesIcon,
  TaskDone01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Für Schulen: Lernbegleitung und Lehrkräfte-System",
  description:
    "Dayova verbindet einen persönlichen Lernbegleiter für Schülerinnen und Schüler mit einem übersichtlichen Management- und Unterrichtssystem für Lehrkräfte.",
  path: "/schools",
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
    text: "Lernstände werden nachvollziehbar, damit Unterstützung dort ankommt, wo sie fachlich wirklich gebraucht wird.",
  },
] as const;

const partnershipSteps = [
  {
    icon: School01Icon,
    number: "01",
    title: "Bedarf Ihrer Schule verstehen",
    text: "Wir besprechen Klassenstufen, Fachbereiche, bestehende Abläufe und die Ziele, die Sie mit Dayova erreichen möchten.",
  },
  {
    icon: TaskDone01Icon,
    number: "02",
    title: "Mit einem Pilot starten",
    text: "Eine ausgewählte Gruppe testet Lernbegleiter und Lehrkräfte-System in einem klar abgegrenzten, begleiteten Einsatz.",
  },
  {
    icon: Calendar03Icon,
    number: "03",
    title: "Gemeinsam weiterentwickeln",
    text: "Wir werten Erfahrungen aus, passen den Einsatz an und schaffen die Grundlage für eine nachhaltige Zusammenarbeit.",
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
    <>
      <section
        className="home-classic-hero schools-hero"
        aria-labelledby="schools-hero-title"
      >
        <div className="dayova-container schools-hero__inner">
          <div className="schools-hero__copy">
            <span className="home-classic-section-eyebrow">
              Dayova für Schulen
            </span>
            <h1 id="schools-hero-title" className="dayova-hero-claim">
              Lernen begleiten. Unterricht entlasten.
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

          <div className="schools-hero__visual" aria-label="Dayova für Schüler und Lehrkräfte">
            <div className="schools-hero-dashboard" aria-hidden="true">
              <div className="schools-hero-dashboard__topbar">
                <span className="schools-hero-dashboard__brand">dayova.</span>
                <span>für Lehrkräfte</span>
              </div>
              <div className="schools-hero-dashboard__body">
                <div className="schools-hero-dashboard__nav">
                  <span className="is-active">
                    <DayovaIcon icon={DashboardSquare01Icon} size={15} />
                    Startseite
                  </span>
                  <span>
                    <DayovaIcon icon={UserGroupIcon} size={15} />
                    Klassen
                  </span>
                  <span>
                    <DayovaIcon icon={TaskDone01Icon} size={15} />
                    Aufgaben
                  </span>
                </div>
                <div className="schools-hero-dashboard__content">
                  <span className="schools-preview-kicker">Für morgen empfohlen</span>
                  <strong>Bruchgleichungen festigen</strong>
                  <p>Klasse 8A · Mathematik · 45 Min.</p>
                  <div className="schools-preview-progress">
                    <span />
                  </div>
                  <div className="schools-preview-actions">
                    <span>Stunde vorbereiten</span>
                    <span>Lernstand</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="schools-hero-phone">
              <Image
                src="/images/dayova-home-phone.png"
                alt="Dayova Lernbegleiter mit persönlichem Lernplan"
                width={872}
                height={1080}
                priority
                sizes="(max-width: 767px) 46vw, 280px"
              />
              <span>für Schüler:innen</span>
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
            <span className="home-classic-section-eyebrow">
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
              <div className="schools-product-card__student-visual">
                <Image
                  src="/images/dayova-screen-collage.png"
                  alt="Mehrere Ansichten des Dayova Lernbegleiters"
                  width={964}
                  height={883}
                  sizes="(max-width: 767px) 88vw, 520px"
                />
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

              <div className="schools-teacher-preview" aria-hidden="true">
                <div className="schools-teacher-preview__header">
                  <span>Guten Morgen, Frau Müller</span>
                  <span className="schools-teacher-preview__avatar">FM</span>
                </div>
                <div className="schools-teacher-preview__recommendation">
                  <span className="schools-preview-kicker">Nächste Klasse</span>
                  <strong>Klasse 8A vorbereiten</strong>
                  <p>Bruchgleichungen · 14 Schüler:innen benötigen Wiederholung</p>
                  <span className="schools-teacher-preview__button">
                    Unterricht vorbereiten
                  </span>
                </div>
                <div className="schools-teacher-preview__tiles">
                  <span>
                    <DayovaIcon icon={BookOpen01Icon} size={20} />
                    Klassen &amp; Klassenbuch
                  </span>
                  <span>
                    <DayovaIcon icon={TaskDone01Icon} size={20} />
                    Aufgaben &amp; Tests
                  </span>
                  <span>
                    <DayovaIcon icon={ChartHistogramIcon} size={20} />
                    Lernstände
                  </span>
                </div>
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
        className="home-classic-section schools-partnership-section"
        aria-labelledby="schools-partnership-title"
      >
        <div className="dayova-container schools-partnership">
          <div className="home-classic-advantages__intro">
            <span className="home-classic-section-eyebrow">Gemeinsam starten</span>
            <h2 id="schools-partnership-title" className="dayova-section-title">
              Von der ersten Idee zu einer Partnerschaft, die zu Ihrer Schule passt.
            </h2>
            <p>
              Wir führen Dayova nicht einfach ein. Wir lernen Ihren Alltag
              kennen, starten fokussiert und entwickeln den Einsatz gemeinsam
              mit Ihrer Schule weiter.
            </p>
          </div>

          <ol className="schools-partnership-steps">
            {partnershipSteps.map((step) => (
              <li className="schools-partnership-step" key={step.number}>
                <span className="schools-partnership-step__number">
                  {step.number}
                </span>
                <span className="schools-partnership-step__icon">
                  <DayovaIcon icon={step.icon} size={28} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="home-classic-section"
        aria-labelledby="schools-faq-title"
      >
        <div className="dayova-container schools-faq">
          <div className="schools-faq__intro">
            <span className="home-classic-section-eyebrow">Gut zu wissen</span>
            <h2 id="schools-faq-title" className="dayova-section-title">
              Fragen zur Zusammenarbeit mit Schulen
            </h2>
            <p>
              Der passende Einsatz hängt von Schulgröße, Zielgruppe und
              Ausgangslage ab. Diese Antworten geben eine erste Orientierung.
            </p>
          </div>
          <div className="schools-faq__list">
            {schoolFaq.map((item, index) => (
              <details key={item.question} name="schools-faq" open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-classic-section schools-cta-section"
        aria-labelledby="schools-cta-title"
      >
        <div className="dayova-container">
          <div className="schools-cta">
            <div className="schools-cta__copy">
              <span className="home-classic-section-eyebrow">
                Dayova an Ihrer Schule
              </span>
              <h2 id="schools-cta-title" className="dayova-section-title">
                Lassen Sie uns gemeinsam zeigen, wie digitale Lernbegleitung
                Schule wirklich entlasten kann.
              </h2>
              <p>
                Erzählen Sie uns von Ihrer Schule. Wir melden uns persönlich
                und besprechen einen sinnvollen nächsten Schritt – unverbindlich
                und ohne fertiges Standardpaket.
              </p>
              <div className="schools-cta__actions">
                <ButtonLink href={offerHref}>Gespräch vereinbaren</ButtonLink>
                <ButtonLink href={offerHref} variant="secondary">
                  Informationen anfordern
                </ButtonLink>
              </div>
            </div>
            <div className="schools-cta__seal" aria-hidden="true">
              <DayovaIcon icon={AiLearningIcon} size={44} />
              <strong>Ein Lernweg</strong>
              <span>für Schüler:innen, Lehrkräfte und Schulen</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
