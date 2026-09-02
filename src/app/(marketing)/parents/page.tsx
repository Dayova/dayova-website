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
  "Dayova plant Aufgaben, Prüfungen und Lernzeiten für dein Kind. Der nächste Lernschritt steht in der App bereit, damit dein Kind selbst anfangen kann.";

export const metadata: Metadata = createPageMetadata({
  title: "Lernplan-App für mehr Selbstständigkeit",
  description: parentsDescription,
  path: "/parents",
});

const parentsStructuredData = createPageStructuredData({
  name: "Dayova für Eltern – selbstständiger lernen mit Plan",
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
    title: "Lernzeit lässt sich einplanen",
    text: "Jeder Lernschritt hat ein Thema, ein Ziel und eine Dauer. Dein Kind weiß vorher, was es sich für diesen Nachmittag vornimmt.",
  },
  {
    icon: ChatNotification01Icon,
    title: "Erfolge werden sichtbar",
    text: "Erledigte Lernschritte und Rückmeldungen auf Antworten zeigen deinem Kind, was es bereits geschafft hat.",
  },
  {
    icon: UserGroupIcon,
    title: "Du bleibst Begleiter",
    text: "Der Plan gibt den nächsten Schritt vor. Du kannst zuhören und helfen, wenn dein Kind an einer Stelle nicht weiterkommt.",
  },
] as const;

const parentRelief = [
  {
    label: "Alles an einem Ort",
    title: "Prüfungen und Aufgaben landen in einem Plan.",
    description:
      "Dein Kind trägt ein, was ansteht und wann Zeit zum Lernen ist. Dayova teilt den Stoff auf und hält den Plan bis zur Prüfung bereit.",
    icon: Calendar03Icon,
    imageLight: "/images/dayova-product-1-light.png",
    imageDark: "/images/dayova-product-1-dark.png",
    alt: "Dayova zeigt Aufgaben und wichtige Benachrichtigungen übersichtlich an",
    className: "home-classic-advantage--overview",
  },
  {
    label: "Selbst anfangen",
    title: "Dein Kind sieht, was heute dran ist.",
    description:
      "Fach, Thema, Ziel und Dauer stehen im nächsten Lernschritt. Dein Kind kann starten, ohne den Stoff vorher neu einzuteilen.",
    icon: Compass01Icon,
    imageLight: "/images/dayova-product-2-light.png",
    imageDark: "/images/dayova-product-2-dark.png",
    alt: "Dayova Tagesansicht mit einem klar geplanten Lernschritt",
    className: "home-classic-advantage--planning",
  },
  {
    label: "Rückmeldung",
    title: "Die App zeigt, was schon sitzt.",
    description:
      "Dayova prüft die Antworten und passt die nächsten Lernschritte an. So erkennt dein Kind selbst, welche Themen noch Übung brauchen.",
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
    "Aufgaben und Prüfungen in einem Plan",
    "Ein fertiger Lernschritt für die nächste Lernzeit",
    "Rückmeldung zu Antworten und offenen Themen",
  ],
} as const;

const parentFaqItems = [
  {
    question: "Muss ich den Lernplan selbst erstellen?",
    answer:
      "Nein. Dein Kind trägt Aufgaben, Prüfungen und freie Zeiten ein. Dayova verteilt den Stoff bis zum Termin und verändert die nächsten Lernschritte anhand der Antworten.",
  },
  {
    question: "Muss ich mein Kind mit Dayova weiterhin täglich erinnern?",
    answer:
      "Der nächste Lernschritt steht beim Öffnen der App bereit. Das hilft deinem Kind, selbst anzufangen. Ob es zusätzliche Erinnerung braucht, hängt weiterhin von eurem Alltag ab.",
  },
  {
    question: "Kann ich Dayova erst ausprobieren?",
    answer:
      "Ja. Ihr könnt alle Funktionen 14 Tage ohne Zahlungsdaten ausprobieren. Danach entscheidet ihr, ob ihr ein Monats- oder Jahresabo möchtet.",
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
              Dein Kind findet den nächsten Schritt selbst.
            </h1>
            <p className="dayova-body home-classic-hero__description">
              Dayova macht aus Aufgaben, Prüfungen und freien Zeiten einen Plan.
              Dein Kind öffnet die App, sieht den nächsten Lernschritt und kann
              anfangen. Du begleitest dort, wo du gebraucht wirst.
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
              Selbstständiger lernen
            </span>
            <h2 className="dayova-section-title" id="parents-benefits-title">
              Ein Plan, an dem sich dein Kind selbst orientieren kann.
            </h2>
            <p>
              Dein Kind weiß, was es sich vornimmt, erkennt erledigte Lernschritte
              und kann bei Fragen direkt auf dich zukommen.
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
              Im Familienalltag
            </span>
            <h2 id="parents-relief-title" className="dayova-section-title">
              Du begleitest. Dayova hält den Plan.
            </h2>
            <p>
              Dein Kind sieht selbst, was ansteht und wo es weitergeht. So
              bleibt deine Unterstützung für die Momente, in denen sie zählt.
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
              So wird aus Erinnern wieder Begleiten.
            </h2>
          </div>

          <div className="parents-comparison">
            <article className="parents-comparison__column">
              <span className="parents-comparison__label">Ohne klaren Plan</span>
              <h3>Viele kleine Aufgaben landen bei dir.</h3>
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
              <h3>Der Plan gibt deinem Kind den nächsten Schritt.</h3>
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
        eyebrow="Gemeinsam entspannter lernen"
        title="Mehr Zeit für Familie. Mehr Vertrauen beim Lernen."
        description="Probiert Dayova 14 Tage ohne Zahlungsdaten aus. Dein Kind legt die erste Prüfung an und sieht, wie daraus ein eigener Lernplan entsteht."
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
