import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";

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

const processSteps = [
  {
    number: "01",
    title: "Eintragen",
    description:
      "Füge Aufgaben, Prüfungen und deine verfügbaren Lernzeiten hinzu.",
    image: "/images/step-download.svg",
  },
  {
    number: "02",
    title: "Lernplan erhalten",
    description:
      "Dayova plant sinnvolle Lerneinheiten bis zu deiner Prüfung.",
    image: "/images/step-plan.svg",
  },
  {
    number: "03",
    title: "Mit Plan lernen",
    description:
      "Arbeite Schritt für Schritt und sieh, was schon sitzt und noch fehlt.",
    image: "/images/step-learn.svg",
  },
] as const;

const faqItems = [
  {
    question: "Wann kann ich Dayova herunterladen?",
    answer:
      "Dayova startet am 17. August. Auf unserer App-Start-Seite findest du alle wichtigen Informationen zum Start.",
  },
  {
    question: "Was kostet Dayova?",
    answer:
      "Alle aktuellen Preise und Abomodelle findest du transparent auf unserer Preisseite.",
  },
  {
    question: "Wie erstellt Dayova meinen Lernplan?",
    answer:
      "Du trägst Aufgaben, Prüfungen und deine Lernzeiten ein. Dayova verteilt passende Einheiten bis zu deinem Termin und passt den Plan an deinen Fortschritt an.",
  },
  {
    question: "Für wen ist Dayova geeignet?",
    answer:
      "Dayova ist für Schülerinnen und Schüler gedacht, die ihren Lernalltag strukturieren, gezielter üben und ihren Fortschritt besser verstehen möchten.",
  },
] as const;

export function HomeHeroSection() {
  return (
    <section className="home-classic-hero" aria-labelledby="home-hero-title">
      <div className="dayova-container home-classic-hero__inner">
        <div className="home-classic-hero__copy">
          <h1 id="home-hero-title" className="dayova-hero-claim">
            Endlich ein Lernbegleiter, der versteht, wo du stehst, und dir den
            nächsten Schritt zeigt.
          </h1>
          <p className="dayova-body home-classic-hero__description">
            <strong>Dayova ist dein Lernbegleiter:</strong> Du lernst direkt in
            der App, deine Prüfung wird individuell geplant und Analysen zeigen
            dir deine Wissenslücken und Stärken.
          </p>
          <div className="home-classic-actions" aria-label="Dayova entdecken">
            <ButtonLink href="/app-start" variant="primary">
              App herunterladen
            </ButtonLink>
            <ButtonLink href="#so-funktioniert-dayova" variant="secondary">
              So funktioniert Dayova
            </ButtonLink>
          </div>
        </div>

        <div className="home-classic-hero__visual">
          <Image
            src="/images/dayova-hero-phones.png"
            alt="Drei Smartphone-Ansichten der Dayova App"
            width={1423}
            height={800}
            priority
            sizes="(max-width: 767px) 108vw, (max-width: 1199px) 88vw, 920px"
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
            <h2 id="about-title" className="dayova-section-title">
              Aus unserer Arbeit mit Schülern wurde Dayova
            </h2>
            <p className="dayova-body">
              Das eigentliche Problem ist oft nicht der Wille, sondern zu viel
              auf einmal, kein klarer Plan und zu wenig Feedback. Genau das macht
              Lernen anstrengend und unübersichtlich.
            </p>
          </div>

          <div className="home-classic-metrics" aria-label="Dayova in Zahlen">
            <article className="home-classic-metric home-classic-metric--dark">
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
      className="home-classic-section home-classic-section--soft"
      aria-labelledby="companion-title"
    >
      <div className="dayova-container">
        <div className="home-classic-section-heading">
          <h2 id="companion-title" className="dayova-section-title">
            Was dein Lernbegleiter für dich übernimmt
          </h2>
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
                  sizes="(max-width: 767px) 86vw, (max-width: 1023px) 42vw, 360px"
                />
              </div>
            </article>
          ))}
        </div>
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
        <div className="home-classic-section-heading home-classic-section-heading--centered">
          <h2 id="process-title" className="dayova-section-title">
            In 3 Schritten zu deinem Lernplan
          </h2>
        </div>

        <ol className="home-classic-process-grid">
          {processSteps.map((step) => (
            <li className="home-classic-process-card" key={step.number}>
              <div className="home-classic-process-card__top">
                <span aria-hidden="true">{step.number}</span>
                <Image
                  src={step.image}
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
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
            <h2 id="download-title" className="dayova-section-title">
              Jetzt Dayova herunterladen
            </h2>
            <p>
              Dein nächster Schritt ist klar: Hol dir Dayova und starte mit
              einem Lernplan, der zu deinem Alltag passt.
            </p>
            <ButtonLink
              href="/app-start"
              variant="secondary"
              className="home-classic-download__button"
            >
              Jetzt App downloaden
            </ButtonLink>
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
    <section className="home-classic-section" aria-labelledby="faq-title">
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
          <h2 id="faq-title" className="dayova-section-title">
            Häufige Fragen
          </h2>
          <div className="home-classic-faq__list">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
