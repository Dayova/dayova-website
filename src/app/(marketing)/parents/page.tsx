import {
  ArrowDown01Icon,
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

import { StoreDownloadLink } from "@/components/store-download-link";
import { ScrollActiveAdvantages } from "@/components/sections/scroll-active-advantages";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { IconBadge } from "@/components/ui/icon-badge";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Für Eltern: Weniger Lernstress im Familienalltag",
  description:
    "Dayova entlastet Eltern bei der Lernorganisation, stärkt die Selbstständigkeit ihrer Kinder und schafft mehr Ruhe im Familienalltag.",
  path: "/parents",
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
    image: "/images/dayova-notifications.png",
    alt: "Dayova zeigt Aufgaben und wichtige Benachrichtigungen übersichtlich an",
    width: 512,
    height: 512,
    className: "home-classic-advantage--planning",
  },
  {
    label: "Klarer nächster Schritt",
    title: "Aus täglichem Nachfragen wird ein machbarer Plan.",
    description:
      "Dayova verteilt den Lernstoff in sinnvolle Einheiten. Dein Kind weiß, was heute wichtig ist – und du musst nicht immer wieder fragen, ob schon gelernt wurde.",
    icon: Compass01Icon,
    image: "/images/dayova-home-phone.png",
    alt: "Dayova Tagesansicht mit einer klar geplanten Lerneinheit",
    width: 872,
    height: 1080,
    className: "parents-advantage--plan",
  },
  {
    label: "Verständliche Rückmeldung",
    title: "Fortschritt wird sichtbar – ohne tägliche Kontrolle.",
    description:
      "Dayova erkennt Lücken in Antworten und passt den Plan an Stärken und Schwächen an. Dadurch wird Lernen nachvollziehbar, ohne dass du ständig daneben sitzen musst.",
    icon: ChartHistogramIcon,
    image: "/images/dayova-feedback-phone.png",
    alt: "Dayova zeigt eine verständliche Analyse einer Antwort",
    width: 512,
    height: 512,
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
      <section
        className="home-classic-hero parents-hero"
        aria-labelledby="parents-hero-title"
      >
        <div className="dayova-container home-classic-hero__inner">
          <div className="home-classic-hero__copy">
            <span className="home-classic-section-eyebrow">Für Eltern</span>
            <h1 id="parents-hero-title" className="dayova-hero-claim">
              Weniger organisieren. Mehr Selbstständigkeit für dein Kind.
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
              src="/images/dayova-hero-hand.png"
              alt="Dayova App auf einem Smartphone in einer Hand"
              width={650}
              height={1084}
              priority
              sizes="(max-width: 767px) 88vw, (max-width: 1199px) 48vw, 620px"
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

          <ScrollActiveAdvantages
            className="marketing-feature-grid parents-benefit-grid"
            itemSelector=".parents-benefit-card"
          >
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
          </ScrollActiveAdvantages>
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

          <div className="home-classic-advantages__list">
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
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 520px"
                  />
                </div>
              </article>
            ))}
          </div>
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

      <section
        className="home-classic-section"
        aria-labelledby="parents-faq-title"
      >
        <div className="dayova-container home-classic-faq parents-faq">
          <article className="home-classic-faq__visual">
            <h3>Mehr Eigenständigkeit. Weniger Nachfragen.</h3>
            <Image
              src="/images/dayova-home-phone.png"
              alt="Dayova App mit einer geplanten Lerneinheit"
              width={872}
              height={1080}
              sizes="(max-width: 1023px) 88vw, 440px"
            />
          </article>

          <div className="home-classic-faq__content">
            <span className="home-classic-section-eyebrow">
              Gut zu wissen
            </span>
            <h2 id="parents-faq-title" className="dayova-section-title">
              Häufige Fragen von Eltern
            </h2>
            <div className="home-classic-faq__list">
              {parentFaqItems.map((item) => (
                <details key={item.question} name="parents-faq">
                  <summary>
                    <span>{item.question}</span>
                    <DayovaIcon
                      className="home-classic-faq__icon"
                      icon={ArrowDown01Icon}
                      size={24}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-classic-section"
        aria-labelledby="parents-download-title"
      >
        <div className="dayova-container">
          <div className="home-classic-download parents-download">
            <div className="home-classic-download__copy">
              <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
                Bereit für mehr Entlastung
              </span>
              <h2 id="parents-download-title" className="dayova-section-title">
                Mehr Zeit für Familie. Weniger Streit ums Lernen.
              </h2>
              <p>
                Starte mit Dayova und gib deinem Kind einen Lernbegleiter, der
                Orientierung schafft und Selbstständigkeit stärkt.
              </p>
              <div className="parents-download__actions">
                <StoreDownloadLink
                  variant="secondary"
                  className="home-classic-download__button"
                >
                  Dayova herunterladen
                </StoreDownloadLink>
                <ButtonLink href="/pricing" variant="secondary">
                  Abos ansehen
                </ButtonLink>
              </div>
            </div>
            <div className="home-classic-download__visual">
              <Image
                src="/images/dayova-screen-collage.png"
                alt="Mehrere Ansichten der Dayova App"
                width={964}
                height={883}
                sizes="(max-width: 1023px) 90vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
