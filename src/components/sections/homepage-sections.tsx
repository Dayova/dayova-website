import {
  Analytics02Icon,
  BookOpen01Icon,
  Calendar03Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  Download04Icon,
  Idea01Icon,
  InstagramIcon,
  Shield01Icon,
  StudentIcon,
  Target01Icon,
  Task01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

import { LaunchCountdown } from "@/components/launch-countdown";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";

const problemSolutions = [
  {
    problem: "Alles fühlt sich dringend an",
    solution: "Ein klarer nächster Schritt",
    description:
      "Dayova macht aus Prüfungen und Aufgaben einen übersichtlichen Plan für heute.",
    icon: Task01Icon,
  },
  {
    problem: "Deine Woche verändert sich",
    solution: "Ein Plan, der zu deinem Alltag passt",
    description:
      "Lerneinheiten orientieren sich an deiner verfügbaren Zeit und lassen sich anpassen, wenn etwas dazwischenkommt.",
    icon: Calendar03Icon,
  },
  {
    problem: "Du weißt nicht, was noch fehlt",
    solution: "Wissenslücken, die du gezielt schließen kannst",
    description:
      "Deine Antworten zeigen Stärken und Lücken – damit du weißt, was als Nächstes zählt.",
    icon: Analytics02Icon,
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Trag ein, was ansteht.",
    description:
      "Erfasse Prüfungen oder Aufgaben, Termine und die Zeiten, in denen du lernen kannst.",
    icon: Calendar03Icon,
  },
  {
    number: "02",
    title: "Erhalte deinen persönlichen Lernplan.",
    description:
      "Dayova teilt den Stoff in machbare Einheiten und zeigt dir, womit du beginnen solltest.",
    icon: Target01Icon,
  },
  {
    number: "03",
    title: "Lerne – Dayova passt den Plan an.",
    description:
      "Mit jeder Einheit werden Fortschritt und Antworten berücksichtigt, damit dein Plan relevant bleibt.",
    icon: BookOpen01Icon,
  },
] as const;

const benefits = [
  {
    title: "Schneller anfangen",
    description:
      "Öffne Dayova und starte mit einer klaren Aufgabe, statt lange zu überlegen, wo du beginnen sollst.",
    icon: Idea01Icon,
  },
  {
    title: "Zeit sinnvoll nutzen",
    description:
      "Kurze, realistische Lerneinheiten machen auch volle Wochen planbar.",
    icon: Clock01Icon,
  },
  {
    title: "Fortschritt verstehen",
    description:
      "Sieh, was schon sitzt, was noch Übung braucht und wie gut du vorbereitet bist.",
    icon: Analytics02Icon,
  },
  {
    title: "Flexibel bleiben",
    description:
      "Wenn sich dein Alltag ändert, kann sich dein Lernplan mitverändern – ohne dass du die Orientierung verlierst.",
    icon: CheckmarkCircle02Icon,
  },
] as const;

const faqs = [
  {
    question: "Was genau macht Dayova?",
    answer:
      "Dayova erstellt aus deinen Prüfungen, Aufgaben, verfügbaren Lernzeiten und deinem Lernfortschritt einen persönlichen Lernplan. Du siehst, was als Nächstes wichtig ist, und der Plan passt sich beim Lernen an.",
  },
  {
    question: "Wann ist Dayova verfügbar?",
    answer:
      "Dayova startet am 17. August 2026. Bis dahin findest du auf unserer App-Start-Seite aktuelle Informationen sowie die Links zu Instagram und unserer Discord-Community.",
  },
  {
    question: "Was kostet Dayova?",
    answer:
      "Unsere aktuellen Abonnements und individuellen Angebote für Schulen findest du transparent auf der Preisseite.",
    link: { href: "/pricing", label: "Preise ansehen" },
  },
  {
    question: "Für wen ist Dayova gedacht?",
    answer:
      "Dayova richtet sich an Schülerinnen und Schüler, die sich strukturierter und entspannter auf Prüfungen vorbereiten und Aufgaben erledigen möchten. Informationen zur Geräteverfügbarkeit findest du auf der App-Start-Seite.",
  },
  {
    question: "Wie funktioniert der adaptive Lernplan?",
    answer:
      "Dayova verbindet deine Termine, verfügbare Lernzeit, abgeschlossene Einheiten und Antworten. So reagiert der Plan auf deinen tatsächlichen Fortschritt, statt nur eine starre Checkliste zu sein.",
  },
  {
    question: "Wie geht Dayova mit meinen Daten um?",
    answer:
      "Wir behandeln die Daten von Schülerinnen und Schülern verantwortungsvoll und erklären transparent, welche Daten wir wofür verwenden.",
    link: { href: "/datenschutz", label: "Datenschutz lesen" },
  },
] as const;

function IconBadge({ icon }: { icon: IconSvgElement }) {
  return (
    <span className="home-icon-badge" aria-hidden="true">
      <DayovaIcon icon={icon} size={22} />
    </span>
  );
}

export function HomeHeroSection() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-container home-hero-layout">
        <div className="home-hero-copy">
          <h1 id="home-hero-title" className="dayova-hero-claim">
            Endlich ein Lernbegleiter, der versteht, wo ich stehe, und mir den
            nächsten Schritt zeigt.
          </h1>
          <p className="home-hero-description">
            <strong>Dayova ist dein Lernbegleiter:</strong> Du lernst direkt in
            der App, deine Prüfung wird individuell geplant und Analysen zeigen
            dir deine Wissenslücken und Stärken.
          </p>

          <div className="home-button-row">
            <ButtonLink href="/app-start" variant="primary">
              <DayovaIcon icon={Download04Icon} size={19} />
              App herunterladen
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              So funktioniert Dayova
            </ButtonLink>
          </div>

          <div className="home-proof-line" aria-label="Erfahrung mit Dayova">
            <span>Aus echter Arbeit mit Schülerinnen und Schülern entwickelt</span>
            <span aria-hidden="true">·</span>
            <span>150+ Schülerinnen und Schüler begleitet</span>
          </div>
        </div>

        <div className="home-product-stage" aria-label="Vorschau der Dayova App">
          <div className="home-float-card home-float-card-plan">
            <span className="home-float-label">Heute im Fokus</span>
            <strong>Klammern &amp; Brüche</strong>
            <span>25 Minuten</span>
          </div>

          <div className="home-phone" aria-hidden="true">
            <div className="home-phone-screen">
              <div className="home-phone-status">
                <span>9:41</span>
                <span className="home-phone-island" />
                <span>●●●</span>
              </div>
              <div className="home-phone-greeting">
                <span>Guten Morgen</span>
                <strong>Dein nächster Schritt ist bereit.</strong>
              </div>
              <div className="home-phone-session">
                <span className="home-phone-session-label">
                  NÄCHSTE LERNEINHEIT
                </span>
                <div>
                  <strong>Klammern &amp; Brüche</strong>
                  <span>25 Min.</span>
                </div>
                <p>
                  Übe Gleichungen und schließe die Lücken aus deinen letzten
                  Antworten.
                </p>
                <span className="home-phone-session-button">
                  Lerneinheit starten
                </span>
              </div>
              <div className="home-phone-progress">
                <span>Diese Woche</span>
                <strong>3 von 4 Einheiten abgeschlossen</strong>
                <span className="home-progress-track">
                  <span />
                </span>
              </div>
            </div>
          </div>

          <div className="home-float-card home-float-card-progress">
            <span className="home-float-label">Lernfortschritt</span>
            <strong>75 % geschafft</strong>
            <span>Im Plan für Freitag</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemSolutionSection() {
  return (
    <section className="home-section" aria-labelledby="problem-title">
      <div className="home-container">
        <div className="home-heading-group home-heading-centered">
          <h2 id="problem-title" className="dayova-section-title">
            Weniger Überforderung. Mehr Orientierung.
          </h2>
          <p>
            Lernen wird anstrengend, wenn alles gleichzeitig wichtig wirkt.
            Dayova ordnet, was ansteht, und zeigt dir einen nächsten Schritt,
            den du direkt umsetzen kannst.
          </p>
        </div>

        <div className="home-problem-grid">
          {problemSolutions.map((item) => (
            <article className="home-problem-card" key={item.problem}>
              <IconBadge icon={item.icon} />
              <div className="home-problem-transition">
                <span>{item.problem}</span>
                <span aria-hidden="true">→</span>
              </div>
              <h3>{item.solution}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section
      className="home-section home-section-muted"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="home-container">
        <div className="home-heading-group">
          <h2 id="how-title" className="dayova-section-title">
            Von der Prüfung zum Lernplan, der wirklich zu dir passt.
          </h2>
          <p>
            Du gibst an, was ansteht. Dayova übernimmt die Struktur und hält
            deinen Plan aktuell.
          </p>
        </div>

        <ol className="home-step-grid">
          {steps.map((step) => (
            <li className="home-step-card" key={step.number}>
              <div className="home-step-topline">
                <span className="home-step-number">{step.number}</span>
                <IconBadge icon={step.icon} />
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

export function BenefitsSection() {
  return (
    <section className="home-section" aria-labelledby="benefits-title">
      <div className="home-container home-benefits-layout">
        <div className="home-heading-group home-benefits-copy">
          <h2 id="benefits-title" className="dayova-section-title">
            Ruhiger lernen. Gezielter vorankommen.
          </h2>
          <p>
            Dayova nimmt dir Planungsarbeit ab, damit mehr Energie für das
            eigentliche Lernen bleibt.
          </p>
          <div className="home-audience-note">
            <DayovaIcon icon={StudentIcon} size={22} aria-hidden="true" />
            <p>
              Schülerinnen und Schüler gewinnen Klarheit und Motivation. Eltern
              sehen transparenter, wie die Vorbereitung aufgebaut ist.
            </p>
          </div>
        </div>

        <div className="home-benefit-grid">
          {benefits.map((benefit) => (
            <article className="home-benefit-card" key={benefit.title}>
              <IconBadge icon={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="home-section home-trust" aria-labelledby="trust-title">
      <div className="home-container home-trust-layout">
        <div className="home-heading-group home-trust-copy">
          <h2 id="trust-title" className="dayova-section-title">
            Mit Schülerinnen und Schülern entwickelt – nicht am Alltag vorbei.
          </h2>
          <p>
            Dayova ist aus der direkten Arbeit mit Schülerinnen und Schülern
            entstanden: Viele waren motiviert, aber von zu vielen Aufgaben,
            unklaren Prioritäten und zu wenig Rückmeldung überfordert.
          </p>
          <p>
            Diese Erfahrung prägt Dayova bis heute – mit verständlicher
            Orientierung, realistischen Lernplänen und Fortschritt, den man
            sehen kann.
          </p>
        </div>

        <div className="home-metric-grid" aria-label="Fakten zu Dayova">
          <article className="home-metric-card home-metric-card-dark">
            <strong>150+</strong>
            <span>Schülerinnen und Schüler begleitet</span>
          </article>
          <article className="home-metric-card">
            <strong>2023</strong>
            <span>Dayova gegründet</span>
          </article>
          <article className="home-metric-card home-metric-card-wide">
            <DayovaIcon icon={Shield01Icon} size={24} aria-hidden="true" />
            <div>
              <strong>Für echtes Lernen entwickelt</strong>
              <span>
                Klare Planung und hilfreiches Feedback – ohne leere
                KI-Versprechen.
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function LaunchCtaSection() {
  return (
    <section
      className="home-section home-launch-section"
      aria-labelledby="launch-title"
      aria-describedby="launch-description"
    >
      <div className="home-container home-launch-panel">
        <div className="home-launch-copy">
          <h2 id="launch-title" className="dayova-section-title">
            Dayova startet am <time dateTime="2026-08-17">17. August.</time>
          </h2>
          <p id="launch-description" className="home-launch-text">
            Auf unserer App-Start-Seite findest du alle wichtigen Informationen
            zum Start von Dayova. Folge uns auf Instagram und bleibe auf dem
            Laufenden, damit du den offiziellen Launch nicht verpasst.
          </p>
          <ButtonLink
            href={siteConfig.links.instagram}
            variant="primary"
            className="home-launch-cta"
            external
          >
            <DayovaIcon icon={InstagramIcon} size={19} />
            Launch Day nicht verpassen – auf Instagram folgen
          </ButtonLink>
        </div>

        <div className="home-launch-countdown-wrap">
          <p className="home-launch-countdown-label">
            Noch bis zum App-Start
          </p>
          <LaunchCountdown targetDate={siteConfig.launch.date} />
        </div>
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  return (
    <section className="home-section" aria-labelledby="home-faq-title">
      <div className="home-container home-faq-layout">
        <div className="home-heading-group home-faq-heading">
          <h2 id="home-faq-title" className="dayova-section-title">
            Häufige Fragen
          </h2>
          <p>
            Die wichtigsten Antworten zu Dayova, zum App-Start und zu deinem
            persönlichen Lernplan.
          </p>
        </div>

        <div className="home-faq-list">
          {faqs.map((faq) => (
            <details className="home-faq-item" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="home-faq-plus" aria-hidden="true" />
              </summary>
              <div className="home-faq-answer">
                <p>{faq.answer}</p>
                {"link" in faq ? (
                  <ButtonLink href={faq.link.href} variant="text">
                    {faq.link.label}
                  </ButtonLink>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
