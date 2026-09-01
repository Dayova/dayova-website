import {
  Calendar03Icon,
  ChartHistogramIcon,
  ChatNotification01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  Compass01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";

import { JsonLd } from "@/components/seo/json-ld";
import { BlueCtaSection } from "@/components/sections/blue-cta-section";
import { FaqAccordionSection } from "@/components/sections/faq-accordion-section";
import { StoreDownloadLink } from "@/components/store-download-link";
import { ScrollActiveAdvantages } from "@/components/sections/scroll-active-advantages";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { IconBadge } from "@/components/ui/icon-badge";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const parentsDescription =
  "Dayova ist die Lernplan-App für Schüler und Familien: weniger Lernstress, mehr Selbstständigkeit und klare nächste Schritte im Schulalltag.";

export const metadata: Metadata = createPageMetadata({
  title: "Lernplan-App für Schüler: Weniger Lernstress",
  description: parentsDescription,
  path: "/parents",
});

const parentsStructuredData = createPageStructuredData({
  name: "Dayova für Eltern – weniger Lernstress im Familienalltag",
  description: parentsDescription,
  path: "/parents",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Für Eltern", path: "/parents" },
  ],
});

const parentBenefits = [
  {
    icon: Clock01Icon,
    title: "Weniger organisieren",
    text: "Aufgaben, Prüfungen und Lernzeiten kommen in einen klaren Plan. Du musst nicht mehr alles selbst im Kopf behalten.",
  },
  {
    icon: ChatNotification01Icon,
    title: "Weniger erinnern",
    text: "Dein Kind sieht selbst, was als Nächstes ansteht. Aus täglichen Nachfragen wird ein verlässlicher Ablauf.",
  },
  {
    icon: UserGroupIcon,
    title: "Mehr Eigenständigkeit",
    text: "Dayova gibt Orientierung, ohne dass du jeden Lernschritt kontrollieren oder vorgeben musst.",
  },
] as const;

const parentRelief = [
  {
    label: "Alles im Blick",
    title: "Du musst nicht mehr jeden Termin im Kopf behalten.",
    description:
      "Dayova bündelt Prüfungen, Aufgaben und verfügbare Lernzeiten. So entsteht an einem Ort die Übersicht, die im Familienalltag sonst schnell verloren geht.",
    icon: Calendar03Icon,
    imageLight: "/images/dayova-product-1-light.png",
    imageDark: "/images/dayova-product-1-dark.png",
    alt: "Dayova zeigt Aufgaben und wichtige Benachrichtigungen übersichtlich an",
    className: "home-classic-advantage--overview",
  },
  {
    label: "Klarer nächster Schritt",
    title: "Aus täglichem Nachfragen wird ein machbarer Plan.",
    description:
      "Dayova verteilt den Lernstoff in sinnvolle Einheiten. Dein Kind weiß, was heute wichtig ist – und du musst nicht immer wieder fragen, ob schon gelernt wurde.",
    icon: Compass01Icon,
    imageLight: "/images/dayova-product-2-light.png",
    imageDark: "/images/dayova-product-2-dark.png",
    alt: "Dayova Tagesansicht mit einer klar geplanten Lerneinheit",
    className: "home-classic-advantage--planning",
  },
  {
    label: "Verständliche Rückmeldung",
    title: "Fortschritt wird sichtbar – ohne tägliche Kontrolle.",
    description:
      "Dayova erkennt Lücken in Antworten und passt den Plan an Stärken und Schwächen an. Dadurch wird Lernen nachvollziehbar, ohne dass du ständig daneben sitzen musst.",
    icon: ChartHistogramIcon,
    imageLight: "/images/dayova-product-3-light.png",
    imageDark: "/images/dayova-product-3-dark.png",
    alt: "Dayova zeigt eine verständliche Analyse einer Antwort",
    className: "home-classic-advantage--analysis",
  },
] as const;

const comparison = {
  before: [
    "Termine und Aufgaben selbst im Blick behalten",
    "Immer wieder ans Lernen erinnern",
    "Schwer einschätzen, wo Unterstützung nötig ist",
  ],
  after: [
    "Ein übersichtlicher Plan für alles, was ansteht",
    "Klare nächste Schritte für dein Kind",
    "Sichtbare Stärken, Lücken und Lernfortschritte",
  ],
} as const;

const parentFaqItems = [
  {
    question: "Muss ich den Lernplan selbst erstellen?",
    answer:
      "Nein. Aufgaben, Prüfungen und verfügbare Lernzeiten werden eingetragen. Dayova macht daraus einen passenden Plan und hält ihn anhand des Lernfortschritts aktuell.",
  },
  {
    question: "Muss ich mein Kind mit Dayova weiterhin täglich erinnern?",
    answer:
      "Dayova ist darauf ausgelegt, den nächsten Schritt für dein Kind sichtbar zu machen. So kann es seinen Lernalltag zunehmend selbst organisieren und du kannst dich aus der täglichen Kontrolle zurückziehen.",
  },
  {
    question: "Kann ich Dayova erst ausprobieren?",
    answer:
      "Ja. Du kannst Dayova 14 Tage testen und danach in Ruhe entscheiden, welches Abomodell zu eurem Alltag passt.",
  },
] as const;

export default function ParentsPage() {
  return (
    <>
      <JsonLd data={parentsStructuredData} />
      <section
        className="home-classic-hero home-classic-hero--homepage parents-hero"
        aria-labelledby="parents-hero-title"
      >
        <div className="dayova-container home-classic-hero__inner">
          <div className="home-classic-hero__copy">
            <span className="home-classic-section-eyebrow">Für Eltern</span>
            <h1 id="parents-hero-title" className="dayova-hero-claim">
              Weniger Lernstress. Mehr Selbstständigkeit für dein Kind.
            </h1>
            <p className="dayova-body home-classic-hero__description">
              <strong>Dayova bringt Ruhe in euren Lernalltag:</strong> Die App
              plant Aufgaben, Prüfungen und Lernzeiten, zeigt den nächsten
              Schritt und macht Fortschritte verständlich.
            </p>
            <div className="home-classic-actions" aria-label="Dayova für Eltern">
              <ButtonLink href="#eltern-vorteile">
                So entlastet Dayova
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                Preise ansehen
              </ButtonLink>
            </div>
          </div>

          <div className="home-classic-hero__visual parents-hero__visual">
            <Image
              src="/images/dayova-hero-app-light.png"
              alt="Drei Smartphones mit Lernplan, Tagesübersicht und Wissensanalyse in Dayova"
              width={1800}
              height={1200}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 767px) 128vw, (max-width: 1199px) 92vw, 56vw"
              className="home-classic-hero__theme-image home-classic-hero__theme-image--light"
            />
            <Image
              src="/images/dayova-hero-app-dark.png"
              alt=""
              width={1800}
              height={1200}
              loading="eager"
              sizes="(max-width: 767px) 128vw, (max-width: 1199px) 92vw, 56vw"
              className="home-classic-hero__theme-image home-classic-hero__theme-image--dark"
            />
          </div>
        </div>
      </section>

      <section
        className="home-classic-section parents-benefits"
        aria-labelledby="parents-benefits-title"
      >
        <div className="dayova-container">
          <div className="marketing-section-heading">
            <span className="home-classic-section-eyebrow">
              Mehr Ruhe im Alltag
            </span>
            <h2 className="dayova-section-title" id="parents-benefits-title">
              Dayova übernimmt Lernorganisation, damit du wieder Elternteil
              sein kannst.
            </h2>
            <p>
              Dein Kind bekommt Orientierung und du gewinnst Zeit, Vertrauen
              und einen entspannteren Blick auf das Lernen.
            </p>
          </div>

          <div className="marketing-feature-grid parents-benefit-grid">
            {parentBenefits.map((benefit) => (
              <article
                className="section-card marketing-feature-card parents-benefit-card"
                key={benefit.title}
              >
                <IconBadge>
                  <DayovaIcon icon={benefit.icon} size={30} strokeWidth={1.8} />
                </IconBadge>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-classic-section"
        id="eltern-vorteile"
        aria-labelledby="parents-relief-title"
      >
        <div className="dayova-container home-classic-advantages parents-relief">
          <div className="home-classic-advantages__intro">
            <span className="home-classic-section-eyebrow">
              Entlastung, die ankommt
            </span>
            <h2 id="parents-relief-title" className="dayova-section-title">
              Was sich für dich im Familienalltag verändert
            </h2>
            <p>
              Du begleitest, wenn es darauf ankommt. Dayova übernimmt die
              Lernorganisation, die im Alltag Zeit und Energie kostet.
            </p>
          </div>

          <ScrollActiveAdvantages>
            {parentRelief.map((item) => (
              <article
                className={`home-classic-advantage ${item.className}`}
                key={item.title}
              >
                <div className="home-classic-advantage__copy">
                  <span className="home-classic-advantage__label">
                    <span className="home-classic-advantage__icon">
                      <DayovaIcon
                        icon={item.icon}
                        size={30}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                    {item.label}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="home-classic-advantage__visual">
                  <Image
                    src={item.imageLight}
                    alt={item.alt}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 520px"
                    className="home-classic-advantage__theme-image home-classic-advantage__theme-image--light"
                  />
                  <Image
                    src={item.imageDark}
                    alt=""
                    width={1200}
                    height={1200}
                    sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 520px"
                    className="home-classic-advantage__theme-image home-classic-advantage__theme-image--dark"
                  />
                </div>
              </article>
            ))}
          </ScrollActiveAdvantages>
        </div>
      </section>

      <section
        className="home-classic-section"
        aria-labelledby="parents-comparison-title"
      >
        <div className="dayova-container parents-comparison-section">
          <div className="marketing-section-heading">
            <span className="home-classic-section-eyebrow">
              Der Unterschied
            </span>
            <h2 className="dayova-section-title" id="parents-comparison-title">
              Weniger Verantwortung auf deinen Schultern
            </h2>
          </div>

          <div className="parents-comparison">
            <article className="parents-comparison__column">
              <span className="parents-comparison__label">Ohne klaren Plan</span>
              <h3>Du hältst den Lernalltag zusammen.</h3>
              <ul className="parents-comparison__list">
                {comparison.before.map((item) => (
                  <li key={item}>
                    <DayovaIcon
                      icon={CheckmarkCircle01Icon}
                      size={22}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="parents-comparison__column parents-comparison__column--dayova">
              <span className="parents-comparison__label">Mit Dayova</span>
              <h3>Dein Kind kennt den nächsten Schritt.</h3>
              <ul className="parents-comparison__list">
                {comparison.after.map((item) => (
                  <li key={item}>
                    <DayovaIcon
                      icon={CheckmarkCircle01Icon}
                      size={22}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <BlueCtaSection
        id="parents-download"
        eyebrow="Bereit für mehr Entlastung"
        title="Mehr Zeit für Familie. Weniger Streit ums Lernen."
        description="Starte mit Dayova und gib deinem Kind einen Lernbegleiter, der Orientierung schafft und Selbstständigkeit stärkt."
      >
        <StoreDownloadLink variant="secondary">Dayova herunterladen</StoreDownloadLink>
        <ButtonLink href="/pricing" variant="secondary">
          Abos ansehen
        </ButtonLink>
      </BlueCtaSection>

      <FaqAccordionSection
        id="parents-faq"
        title="Häufige Fragen von Eltern"
        items={parentFaqItems}
        name="parents-faq"
      />
    </>
  );
}
