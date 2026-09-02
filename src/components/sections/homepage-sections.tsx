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
    label: "Dein Plan",
    title: "Aus deiner Prüfung wird ein Plan für jeden Lerntag.",
    description:
      "Trage den Termin, die Themen und deine freien Zeiten ein. Dayova verteilt den Stoff bis zur Prüfung und legt fest, was an welchem Tag dran ist.",
    icon: SmartPhone01Icon,
    imageLight: "/images/dayova-product-1-light.png",
    imageDark: "/images/dayova-product-1-dark.png",
    alt: "Dayova Startansicht mit Aufgaben, Prüfung und nächstem Lernschritt",
    className: "home-classic-advantage--overview",
  },
  {
    label: "Heute dran",
    title: "Beim Öffnen wartet dein nächster Lernschritt.",
    description:
      "Du siehst Fach, Thema, Ziel und Dauer. Tippe auf Start und beginne, ohne den Stoff vorher selbst einzuteilen.",
    icon: Calendar03Icon,
    imageLight: "/images/dayova-product-2-light.png",
    imageDark: "/images/dayova-product-2-dark.png",
    alt: "Dayova Lernplan mit dem nächsten sinnvollen Lernschritt",
    className: "home-classic-advantage--planning",
  },
  {
    label: "Dein Wissen",
    title: "Was du antwortest, verändert deinen Plan.",
    description:
      "Sichere Themen rücken in den Hintergrund. Lücken kommen noch einmal dran. So übst du dort weiter, wo es für dich sinnvoll ist.",
    icon: ChartHistogramIcon,
    imageLight: "/images/dayova-product-3-light.png",
    imageDark: "/images/dayova-product-3-dark.png",
    alt: "Dayova Wissensanalyse mit Prüfungsthemen, Stärken und Lernstand",
    className: "home-classic-advantage--analysis",
  },
] as const;

const faqItems = [
  {
    question: "Wie kann ich Dayova nutzen?",
    answer:
      "Installiere Dayova auf Android über Google Play oder auf dem iPhone und iPad über unsere öffentliche TestFlight-Einladung. Danach kannst du direkt in der App dein Konto erstellen.",
  },
  {
    question: "Was kostet Dayova?",
    answer:
      "Du kannst Dayova 14 Tage kostenlos und ohne Zahlungsdaten testen. Danach entscheidest du selbst, ob du ein Monats- oder Jahresabo abschließen möchtest. Alle Preise findest du transparent auf unserer Preisseite.",
  },
  {
    question: "Wie erstelle ich meinen Lernplan?",
    answer:
      "Trage deine Prüfung, die Themen und deine freien Zeiten ein. Dayova verteilt den Stoff bis zum Termin. Deine Antworten entscheiden danach mit, welche Themen noch einmal in den Plan kommen.",
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
            Einfach loslernen. Der Plan steht schon.
          </h1>
          <p className="dayova-body home-classic-hero__description">
            Dayova macht aus deinem Prüfungsstoff und deinen freien Zeiten einen
            Plan für jeden Lerntag. Beim Öffnen siehst du, was heute dran ist.
            Deine Antworten legen fest, welcher Lernschritt danach folgt.
          </p>
          <div className="home-classic-actions" aria-label="Dayova entdecken">
            <StoreDownloadLink variant="primary">
              14 Tage kostenlos testen
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
              In unserer Lernbegleitung kam vor Prüfungen immer wieder dieselbe
              Frage auf: Wie teile ich den Stoff so auf, dass er bis zum Termin
              sitzt? Aus dieser Frage entstand Dayova.
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
            Dein Lernplan verändert sich mit deinem Wissen.
          </h2>
          <p>
            Der Plan bleibt nicht gleich. Nach jedem Lernschritt zeigen deine
            Antworten, welche Themen noch einmal drankommen und welche du schon
            beherrschst.
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
              Eintragen, Plan ansehen, loslernen
            </h2>
            <p>
              Die App führt dich durch das Einrichten. Sobald deine erste
              Prüfung angelegt ist, wartet der erste Lernschritt.
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
      eyebrow="Dein erster Plan"
      title="Hol dir Dayova und leg los."
      description="Installiere Dayova auf Android über Google Play oder teste die iOS-Version über TestFlight. Du kannst alle Funktionen 14 Tage ohne Zahlungsdaten ausprobieren."
    >
      <StoreDownloadLink variant="secondary">App herunterladen</StoreDownloadLink>
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
