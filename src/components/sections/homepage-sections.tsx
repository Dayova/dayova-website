import {
  ArrowDown01Icon,
  Calendar03Icon,
  ChartHistogramIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ScrollActiveAdvantages } from "@/components/sections/scroll-active-advantages";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";

const companionFeatures = [
  {
    title: "Trag ein, was ansteht",
    description:
      "Trage deine Aufgaben und Prüfungen ein. Über deine Lernzeiten weiß Dayova, wann du lernen kannst und was bis dahin wichtig wird.",
    image: "/images/dayova-home-phone.png",
    alt: "Dayova Startansicht mit anstehender Lerneinheit",
    width: 872,
    height: 1080,
    className: "home-classic-feature-card--home",
  },
  {
    title: "Bekomm deinen Lernplan",
    description:
      "Dayova erstellt daraus einen Plan, der dir zeigt, was du lernen musst und wie viel bis zur Prüfung sinnvoll ist.",
    image: "/images/dayova-hand-home.png",
    alt: "Dayova Lernplan auf einem Smartphone in einer Hand",
    width: 1206,
    height: 2622,
    className: "home-classic-feature-card--plan",
  },
  {
    title: "Lerne und sieh, was noch fehlt",
    description:
      "Während du lernst, passt sich dein Plan an deinen Lernstand an. So siehst du Stärken, Schwächen und was du noch üben solltest.",
    image: "/images/dayova-feedback-phone.png",
    alt: "Dayova Auswertung mit Feedback zu einer Antwort",
    width: 512,
    height: 512,
    className: "home-classic-feature-card--feedback",
  },
] as const;

const dayovaAdvantages = [
  {
    label: "Lernbegleitung",
    title: "Mehr als Antworten",
    description:
      "Viele Lern-Tools erklären dir Themen – lassen dich aber mit zu viel Stoff und ohne klaren nächsten Schritt zurück. Dayova setzt genau dort an, ordnet, was ansteht, und macht daraus einen verständlichen Lernweg.",
    icon: SmartPhone01Icon,
    image: "/images/dayova-hero-phones.png",
    alt: "Mehrere Ansichten der Dayova Lern-App",
    width: 4269,
    height: 2400,
    className: "home-classic-advantage--app",
  },
  {
    label: "Lernplanung",
    title: "Plan statt Lernchaos",
    description:
      "Dayova kennt deine Aufgaben, Prüfungen und Lernzeiten und verbindet alles zu einem Plan, der in deinen Alltag passt. Du siehst, womit du anfangen kannst, wie viel pro Tag sinnvoll ist und was rechtzeitig vor der Prüfung wichtig wird.",
    icon: Calendar03Icon,
    image: "/images/dayova-notifications.png",
    alt: "Dayova App mit Aufgaben und wichtigen Benachrichtigungen",
    width: 512,
    height: 512,
    className: "home-classic-advantage--planning",
  },
  {
    label: "Wissensanalyse",
    title: "Fortschritt, den du sehen kannst",
    description:
      "Während du in Dayova lernst, werden deine Antworten ausgewertet: Die App erkennt Lücken, stärkt deine Stärken und passt deinen Plan an. So weißt du jederzeit, wo du stehst und worauf du dich als Nächstes konzentrieren solltest.",
    icon: ChartHistogramIcon,
    image: "/images/dayova-feedback-phone.png",
    alt: "Dayova Wissensanalyse mit Feedback zu einer Antwort",
    width: 512,
    height: 512,
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
    <section className="home-classic-hero" aria-labelledby="home-hero-title">
      <div className="dayova-container home-classic-hero__inner">
        <div className="home-classic-hero__copy">
          <h1 id="home-hero-title" className="dayova-hero-claim">
            Dein Lernbegleiter. Dein nächster Schritt.
          </h1>
          <p className="dayova-body home-classic-hero__description">
            <strong>Dayova ist dein Lernbegleiter:</strong> Du lernst direkt in
            der App, deine Prüfung wird individuell geplant und Analysen zeigen
            dir deine Wissenslücken und Stärken.
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
              auf einmal, kein klarer Plan und zu wenig Feedback. Genau das macht
              Lernen anstrengend und unübersichtlich.
            </p>
            <ButtonLink
              className="home-classic-about__link"
              href="/ueber-uns"
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

        <article className="home-classic-about__visual">
          <h3>Dein Lernweg, dein Erfolg!</h3>
          <Image
            src="/images/dayova-learning-path.png"
            alt="Dayova Lernpfad auf einem Smartphone"
            width={872}
            height={1080}
            sizes="(max-width: 1023px) 88vw, 480px"
          />
        </article>
      </div>
    </section>
  );
}

export function HomeCompanionSection() {
  return (
    <section
      className="home-classic-section"
      aria-labelledby="companion-title"
    >
      <div className="dayova-container">
        <div className="home-classic-companion">
          <div className="home-classic-companion__intro">
            <span className="home-classic-section-eyebrow">
              Alles an einem Ort
            </span>
            <h2 id="companion-title" className="dayova-section-title">
              Was dein Lernbegleiter für dich <span>übernimmt</span>
            </h2>
            <p>
              Von deinen Terminen bis zum nächsten sinnvollen Lernschritt:
              Dayova hält deinen Lernweg übersichtlich und aktuell.
            </p>
          </div>

          <div className="home-classic-feature-grid">
            {companionFeatures.map((feature) => (
              <article
                className={`home-classic-feature-card ${feature.className}`}
                key={feature.title}
              >
                <div className="home-classic-feature-card__copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="home-classic-feature-card__visual">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={feature.width}
                    height={feature.height}
                    sizes="(max-width: 767px) 78vw, (max-width: 1023px) 38vw, 320px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeAdvantagesSection() {
  return (
    <section
      className="home-classic-section"
      aria-labelledby="advantages-title"
    >
      <div className="dayova-container home-classic-advantages">
        <div className="home-classic-advantages__intro">
          <span className="home-classic-section-eyebrow">Darum Dayova</span>
          <h2 id="advantages-title" className="dayova-section-title">
            Warum ein Lernbegleiter mehr hilft als ein Tool, das nur Antworten
            ausspuckt.
          </h2>
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
                  src={advantage.image}
                  alt={advantage.alt}
                  width={advantage.width}
                  height={advantage.height}
                  sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 520px"
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
      id="so-funktioniert-dayova"
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
    <section className="home-classic-section" aria-labelledby="download-title">
      <div className="dayova-container">
        <div className="home-classic-download">
          <div className="home-classic-download__copy">
            <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
              Bereit zum Start
            </span>
            <h2 id="download-title" className="dayova-section-title">
              Jetzt Dayova herunterladen
            </h2>
            <p>
              Dein nächster Schritt ist klar: Hol dir Dayova und starte mit
              einem Lernplan, der zu deinem Alltag passt.
            </p>
            <StoreDownloadLink
              variant="secondary"
              className="home-classic-download__button"
            >
              Jetzt App downloaden
            </StoreDownloadLink>
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
  );
}

export function HomeFaqSection() {
  return (
    <section
      className="home-classic-section"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="dayova-container home-classic-faq">
        <article className="home-classic-faq__visual">
          <h3>Bereit für deinen Lernweg?</h3>
          <Image
            src="/images/dayova-home-phone.png"
            alt="Dayova App mit einer geplanten Lerneinheit"
            width={872}
            height={1080}
            sizes="(max-width: 1023px) 88vw, 440px"
          />
        </article>

        <div className="home-classic-faq__content">
          <span className="home-classic-section-eyebrow">Gut zu wissen</span>
          <h2 id="faq-title" className="dayova-section-title">
            Häufige Fragen
          </h2>
          <div className="home-classic-faq__list">
            {faqItems.map((item) => (
              <details key={item.question} name="home-faq">
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
  );
}
