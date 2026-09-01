import {
  Calendar03Icon,
  ChartHistogramIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";

import { BlueCtaSection } from "@/components/sections/blue-cta-section";
import { FaqAccordionSection } from "@/components/sections/faq-accordion-section";
import { ButtonLink } from "@/components/ui/button-link";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ScrollActiveAdvantages } from "@/components/sections/scroll-active-advantages";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";

const dayovaAdvantages = [
  {
    label: "Übersicht",
    title: "Aus Terminen und Lernzeit entsteht dein Plan.",
    description:
      "Trage Prüfungen, Aufgaben und deine verfügbare Lernzeit ein. Dayova ordnet den Stoff nach Termin, Umfang und deinem Lernstand und verteilt ihn auf die Tage bis zur Prüfung.",
    icon: SmartPhone01Icon,
    imageLight: "/images/dayova-product-1-light.png",
    imageDark: "/images/dayova-product-1-dark.png",
    alt: "Dayova Startansicht mit Aufgaben, Prüfung und nächster Lerneinheit",
    className: "home-classic-advantage--overview",
  },
  {
    label: "Nächster Schritt",
    title: "Du startest mit dem Lernschritt, der jetzt ansteht.",
    description:
      "Beim Öffnen der App siehst du Thema, Ziel und Dauer deiner nächsten Einheit. Du kannst anfangen, ohne den Lernstoff jedes Mal neu einteilen zu müssen.",
    icon: Calendar03Icon,
    imageLight: "/images/dayova-product-2-light.png",
    imageDark: "/images/dayova-product-2-dark.png",
    alt: "Dayova Lernplan mit dem nächsten sinnvollen Lernschritt",
    className: "home-classic-advantage--planning",
  },
  {
    label: "Wissensanalyse",
    title: "Deine Antworten bestimmen, wie es weitergeht.",
    description:
      "Dayova wertet deine Antworten aus und erkennt, was du beherrschst und wo noch Lücken sind. Die folgenden Einheiten werden danach angepasst, damit du nichts unnötig wiederholst.",
    icon: ChartHistogramIcon,
    imageLight: "/images/dayova-product-3-light.png",
    imageDark: "/images/dayova-product-3-dark.png",
    alt: "Dayova Wissensanalyse mit Prüfungsthemen, Stärken und Lernstand",
    className: "home-classic-advantage--analysis",
  },
] as const;

const faqItems = [
  {
    question: "Wie kann ich mich anmelden?",
    answer:
      "Trag dich einfach auf die Warteliste ein und sichere dir deinen Platz zum Start von Dayova.",
  },
  {
    question: "Was kostet Dayova?",
    answer:
      "Alle aktuellen Preise und Abomodelle findest du transparent auf unserer Preisseite.",
  },
  {
    question: "Wie erstelle ich meinen Lernplan?",
    answer:
      "Du trägst Aufgaben, Prüfungen und deine Lernzeiten ein. Dayova verteilt passende Einheiten bis zu deinem Termin und passt den Plan an deinen Fortschritt an.",
  },
] as const;

export function HomeHeroSection() {
  return (
    <section
      className="home-classic-hero home-classic-hero--homepage"
      aria-labelledby="home-hero-title"
    >
      <div className="dayova-container home-classic-hero__inner">
        <div className="home-classic-hero__copy">
          <h1 id="home-hero-title" className="dayova-hero-claim">
            Du hast keine Zeit für falsches Lernen.
          </h1>
          <p className="dayova-body home-classic-hero__description">
            Auch gute Noten sollten nicht mehr Zeit kosten als nötig. Dayova
            zeigt dir, was du lernen musst, um dein Thema sicher zu beherrschen.
          </p>
          <div className="home-classic-actions" aria-label="Dayova entdecken">
            <StoreDownloadLink variant="primary">
              App herunterladen
            </StoreDownloadLink>
            <ButtonLink href="#so-funktioniert-dayova" variant="secondary">
              So funktioniert Dayova
            </ButtonLink>
          </div>
        </div>

        <div className="home-classic-hero__visual">
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
            alt="Drei Smartphones mit Lernplan, Tagesübersicht und Wissensanalyse in Dayova"
            width={1800}
            height={1200}
            loading="eager"
            sizes="(max-width: 767px) 128vw, (max-width: 1199px) 92vw, 56vw"
            className="home-classic-hero__theme-image home-classic-hero__theme-image--dark"
          />
        </div>
      </div>
    </section>
  );
}

export function HomeAboutSection() {
  return (
    <section className="home-classic-section" aria-labelledby="about-title">
      <div className="dayova-container home-classic-about">
        <div className="home-classic-about__content">
          <div className="home-classic-heading-group">
            <span className="home-classic-section-eyebrow">Über Dayova</span>
            <h2 id="about-title" className="dayova-section-title">
              <span className="home-classic-about__title-line">
                Aus unserer Arbeit mit Schülern
              </span>{" "}
              <span className="home-classic-about__title-line">
                wurde Dayova
              </span>
            </h2>
            <p className="dayova-body">
              Das eigentliche Problem ist oft nicht der Wille, sondern zu viel
              auf einmal, fehlende Planung und zu wenig Feedback. Dadurch wird
              Lernen anstrengend und unübersichtlich.
            </p>
            <ButtonLink
              className="home-classic-about__link"
              href="/about"
              variant="secondary"
            >
              Unsere Geschichte
            </ButtonLink>
          </div>

          <div className="home-classic-metrics" aria-label="Dayova in Zahlen">
            <article className="home-classic-metric">
              <strong>150+</strong>
              <span>Schüler begleitet</span>
            </article>
            <article className="home-classic-metric">
              <strong>2023</strong>
              <span>entstanden</span>
            </article>
          </div>
        </div>

        <article className="home-classic-about__visual home-classic-about__visual--learning-path">
          <Image
            src="/images/dayova-faq-white.png"
            alt="Dayova verbindet Prüfung, Lernstand und verfügbare Zeit mit dem nächsten sinnvollen Schritt"
            width={1200}
            height={1200}
            sizes="(max-width: 1023px) 88vw, 560px"
            className="home-classic-about__theme-image home-classic-about__theme-image--light"
          />
          <Image
            src="/images/dayova-faq-dark.png"
            alt=""
            width={1200}
            height={1200}
            sizes="(max-width: 1023px) 88vw, 560px"
            className="home-classic-about__theme-image home-classic-about__theme-image--dark"
          />
        </article>
      </div>
    </section>
  );
}

export function HomeAdvantagesSection() {
  return (
    <section
      id="so-funktioniert-dayova"
      className="home-classic-section home-classic-advantages-section"
      aria-labelledby="advantages-title"
    >
      <div className="dayova-container home-classic-advantages">
        <div className="home-classic-advantages__intro">
          <span className="home-classic-section-eyebrow">
            So funktioniert Dayova
          </span>
          <h2 id="advantages-title" className="dayova-section-title">
            Dein Lernplan passt sich deinem Wissen an.
          </h2>
          <p>
            Du trägst ein, was ansteht und wann du Zeit hast. Dayova plant die
            Einheiten, begleitet dich beim Lernen und passt den weiteren Weg an
            deine Antworten an.
          </p>
        </div>

        <ScrollActiveAdvantages>
          {dayovaAdvantages.map((advantage) => (
            <article
              className={`home-classic-advantage ${advantage.className}`}
              key={advantage.title}
            >
              <div className="home-classic-advantage__copy">
                <span className="home-classic-advantage__label">
                  <span className="home-classic-advantage__icon">
                    <DayovaIcon
                      icon={advantage.icon}
                      size={30}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                  {advantage.label}
                </span>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>

              <div className="home-classic-advantage__visual">
                <Image
                  src={advantage.imageLight}
                  alt={advantage.alt}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 520px"
                  className="home-classic-advantage__theme-image home-classic-advantage__theme-image--light"
                />
                <Image
                  src={advantage.imageDark}
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
  );
}

export function HomeProcessSection() {
  return (
    <section
      className="home-classic-section home-classic-process"
      aria-labelledby="process-title"
    >
      <div className="dayova-container">
        <div className="home-classic-process__panel">
          <div className="home-classic-process__intro">
            <span className="home-classic-section-eyebrow">So startest du</span>
            <h2 id="process-title" className="dayova-section-title">
              In 3 Schritten zu deinem Lernplan
            </h2>
            <p>
              Vom Download bis zur ersten Lerneinheit: Dayova führt dich durch
              jeden Schritt und macht aus deinen Zielen einen Plan, der in
              deinen Alltag passt.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}

export function HomeDownloadSection() {
  return (
    <BlueCtaSection
      id="download"
      eyebrow="Bereit zum Start"
      title="Jetzt Dayova herunterladen"
      description="Hol dir Dayova und starte mit einem Lernplan, der zu deinem Alltag passt."
    >
      <StoreDownloadLink variant="secondary">Jetzt App downloaden</StoreDownloadLink>
    </BlueCtaSection>
  );
}

export function HomeFaqSection() {
  return (
    <FaqAccordionSection
      id="faq"
      title="Häufige Fragen"
      items={faqItems}
      name="home-faq"
    />
  );
}
