import {
  Analytics02Icon,
  Calendar03Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  Download04Icon,
  InstagramIcon,
  Target01Icon,
  Task01Icon,
} from "@hugeicons/core-free-icons";

import { LaunchCountdown } from "@/components/launch-countdown";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";

const challenges = [
  {
    title: "Zu viel gleichzeitig",
    text: "Prüfungen, Aufgaben und Termine verteilen sich über mehrere Listen und Apps.",
  },
  {
    title: "Kein klarer Anfang",
    text: "Du weißt, dass du lernen musst – aber nicht, welches Thema heute wirklich zählt.",
  },
  {
    title: "Zu wenig Rückmeldung",
    text: "Ohne konkrete Analyse bleibt unklar, was schon sitzt und wo noch Lücken sind.",
  },
];

const outcomes = [
  {
    title: "Heute klar starten",
    text: "Du öffnest Dayova und siehst direkt die nächste sinnvolle Lerneinheit.",
    icon: Task01Icon,
  },
  {
    title: "Realistisch bis zur Prüfung planen",
    text: "Dein Plan berücksichtigt Termine, verfügbare Zeit und den Umfang des Stoffes.",
    icon: Calendar03Icon,
  },
  {
    title: "Stärken und Lücken verstehen",
    text: "Deine Antworten zeigen, welche Inhalte sicher sind und was du wiederholen solltest.",
    icon: Analytics02Icon,
  },
];

const faqs = [
  {
    question: "Was genau macht Dayova?",
    answer:
      "Dayova verbindet deine Prüfungen, Aufgaben und verfügbaren Lernzeiten zu einem persönlichen Lernplan. Während du lernst, zeigen deine Antworten, welche Themen sicher sitzen und wo du noch üben solltest.",
  },
  {
    question: "Wann ist Dayova verfügbar?",
    answer:
      "Dayova startet am 17. August. Auf unserer App-Start-Seite findest du alle Informationen zum Launch. Über Instagram bleibst du bis dahin auf dem Laufenden.",
  },
  {
    question: "Was kostet Dayova?",
    answer:
      "Alle aktuellen Preise und Abomodelle findest du transparent auf unserer Preisseite. Schulen erhalten abhängig von Umfang und Anzahl der Schülerinnen und Schüler ein individuelles Angebot.",
  },
  {
    question: "Für wen ist Dayova gedacht?",
    answer:
      "Dayova richtet sich an Schülerinnen und Schüler, die Prüfungen und Aufgaben verlässlich planen, gezielter lernen und ihren Fortschritt besser verstehen möchten.",
  },
  {
    question: "Wie funktioniert der adaptive Lernplan?",
    answer:
      "Du trägst ein, was ansteht und wann du Zeit hast. Dayova plant passende Lerneinheiten. Erledigte Einheiten und deine Antworten beeinflussen anschließend, was als Nächstes sinnvoll ist.",
  },
  {
    question: "Wie geht Dayova mit meinen Daten um?",
    answer:
      "Wir verarbeiten nur Daten, die für die Funktionen von Dayova erforderlich sind. Details zu Speicherung, Verarbeitung und deinen Rechten findest du in unserer Datenschutzerklärung.",
  },
];

function SectionHeading({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <div className="home-v3-heading">
      <h2 id={id} className="dayova-section-title">{title}</h2>
      <p className="dayova-body home-v3-heading-text">{text}</p>
    </div>
  );
}

function DailyPlanIllustration() {
  return (
    <div className="home-v3-daily-scene" aria-hidden="true">
      <div className="home-v3-float-card home-v3-float-card--next">
        <span className="home-v3-ui-label">Als Nächstes</span>
        <strong>Bruchgleichungen</strong>
        <span>Heute · 16:00 · 30 Min.</span>
      </div>

      <div className="home-v3-phone">
        <div className="home-v3-phone-screen">
          <div className="home-v3-status-row">
            <strong>9:41</strong>
            <span>● ● ●</span>
          </div>
          <div className="home-v3-welcome-row">
            <div>
              <strong>Hi Mia,</strong>
              <span>dein nächster Schritt steht fest.</span>
            </div>
            <div className="home-v3-avatar">M</div>
          </div>
          <div className="home-v3-schedule-card">
            <div className="home-v3-schedule-meta">
              <span>August</span>
              <strong>11</strong>
            </div>
            <div>
              <strong>16:00 – 16:30</strong>
              <span>Mathematik</span>
            </div>
          </div>
          <div className="home-v3-today-card">
            <span className="home-v3-ui-label">Dein Fokus für heute</span>
            <strong>Bruchgleichungen sicher anwenden</strong>
            <p>Erst verstehen, dann mit zwei kurzen Aufgaben festigen.</p>
          </div>
          <div className="home-v3-mini-plan">
            <div className="home-v3-mini-plan-head">
              <strong>Plan bis zur Prüfung</strong>
              <span>68 %</span>
            </div>
            <div className="home-v3-progress"><span /></div>
            <div className="home-v3-day-row">
              <span>Di</span><span className="is-active">Mi</span><span>Do</span><span>Fr</span><span>Sa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-v3-float-card home-v3-float-card--analysis">
        <span className="home-v3-score">82 %</span>
        <div>
          <strong>Schon sicher</strong>
          <span>Lineare Gleichungen</span>
        </div>
      </div>
    </div>
  );
}

function CaptureIllustration() {
  return (
    <div className="home-v3-capture" aria-hidden="true">
      <div className="home-v3-capture-toolbar">
        <span>Was steht an?</span>
        <strong>+</strong>
      </div>
      <div className="home-v3-capture-item">
        <span className="home-v3-capture-icon"><DayovaIcon icon={Target01Icon} size={20} /></span>
        <div><strong>Matheprüfung</strong><span>17. August · Algebra</span></div>
        <small>Prüfung</small>
      </div>
      <div className="home-v3-capture-item">
        <span className="home-v3-capture-icon"><DayovaIcon icon={Task01Icon} size={20} /></span>
        <div><strong>Deutsch-Hausaufgabe</strong><span>Argumentation vorbereiten</span></div>
        <small>Aufgabe</small>
      </div>
      <div className="home-v3-availability">
        <span className="home-v3-ui-label">Deine Lernzeiten</span>
        <div><span>Di</span><span className="is-selected">30</span><span>Mi</span><span className="is-selected">20</span><span>Do</span><span className="is-selected">25</span></div>
      </div>
    </div>
  );
}

function LearningPathIllustration() {
  return (
    <div className="home-v3-path" aria-hidden="true">
      <div className="home-v3-path-summary">
        <span className="home-v3-ui-label">Lernplan · Mathematik</span>
        <strong>5 Einheiten bis zur Prüfung</strong>
      </div>
      <div className="home-v3-path-track">
        <span className="home-v3-path-line" />
        <div className="home-v3-path-node is-done"><DayovaIcon icon={CheckmarkCircle02Icon} size={20} /></div>
        <div className="home-v3-path-copy"><strong>Grundlagen auffrischen</strong><span>Erledigt</span></div>
        <div className="home-v3-path-node is-current"><DayovaIcon icon={Task01Icon} size={20} /></div>
        <div className="home-v3-path-copy"><strong>Bruchgleichungen üben</strong><span>Heute · 30 Min.</span></div>
        <div className="home-v3-path-node"><DayovaIcon icon={Target01Icon} size={20} /></div>
        <div className="home-v3-path-copy"><strong>Wissenscheck</strong><span>Samstag · 20 Min.</span></div>
      </div>
    </div>
  );
}

function AnalysisIllustration() {
  return (
    <div className="home-v3-analysis" aria-hidden="true">
      <div className="home-v3-analysis-top">
        <span className="home-v3-analysis-state">Noch nicht sicher</span>
        <strong>Warum gilt hier dieselbe Lösungsmenge?</strong>
      </div>
      <div className="home-v3-answer-card">
        <span className="home-v3-ui-label">Deine Antwort</span>
        <p>Ich kann beide Seiten verändern, solange ich auf beiden Seiten dasselbe mache.</p>
      </div>
      <div className="home-v3-feedback-card">
        <span className="home-v3-ui-label">Dayova erklärt</span>
        <p>Richtig gedacht. Entscheidend ist, dass die Umformung die Lösungsmenge nicht verändert.</p>
      </div>
      <div className="home-v3-confidence"><span style={{ width: "72%" }} /></div>
    </div>
  );
}

function PlansOverviewIllustration() {
  const plans = [
    ["Mathematik", "Heute", "3 von 5 Einheiten", "72%"],
    ["Deutsch", "Morgen", "2 von 4 Einheiten", "48%"],
    ["Geschichte", "Freitag", "1 von 3 Einheiten", "30%"],
  ];

  return (
    <div className="home-v3-plans" aria-hidden="true">
      <div className="home-v3-plans-head">
        <div><span className="home-v3-ui-label">Deine Pläne</span><strong>Was als Nächstes zählt</strong></div>
        <span className="home-v3-plans-add">+</span>
      </div>
      {plans.map(([subject, due, progress, width]) => (
        <div className="home-v3-plan-card" key={subject}>
          <div className="home-v3-plan-card-head"><strong>{subject}</strong><span>{due}</span></div>
          <p>{progress}</p>
          <div className="home-v3-progress"><span style={{ width }} /></div>
        </div>
      ))}
    </div>
  );
}

export function HomeHeroSection() {
  return (
    <section className="home-v3-hero" aria-labelledby="home-hero-title">
      <div className="home-v3-container home-v3-hero-grid">
        <div className="home-v3-hero-copy">
          <h1 id="home-hero-title" className="dayova-hero-claim">
            Endlich ein Lernbegleiter, der versteht, wo du stehst – und dir den nächsten Schritt zeigt.
          </h1>
          <p className="dayova-body home-v3-hero-text">
            Trag Prüfungen, Aufgaben und deine Lernzeiten ein. Dayova erstellt daraus einen realistischen
            Lernplan, plant konkrete Einheiten und erkennt anhand deiner Antworten, was schon sitzt und
            was du noch üben solltest.
          </p>
          <div className="home-v3-actions" aria-label="Dayova kennenlernen">
            <ButtonLink href="/app-start" variant="primary">
              <DayovaIcon icon={Download04Icon} size={20} aria-hidden="true" />
              App herunterladen
            </ButtonLink>
            <ButtonLink href="#so-funktioniert-dayova" variant="secondary">
              So funktioniert Dayova
            </ButtonLink>
          </div>
          <div className="home-v3-proof" aria-label="Vertrauenssignale">
            <span><DayovaIcon icon={CheckmarkCircle02Icon} size={18} aria-hidden="true" /> Aus echter Lernbegleitung entwickelt</span>
            <span><DayovaIcon icon={CheckmarkCircle02Icon} size={18} aria-hidden="true" /> 150+ Schülerinnen und Schüler begleitet</span>
          </div>
        </div>
        <DailyPlanIllustration />
      </div>
    </section>
  );
}

export function ProblemSolutionSection() {
  return (
    <section className="home-v3-section" aria-labelledby="problem-solution-title">
      <div className="home-v3-container home-v3-problem-grid">
        <div className="home-v3-problem-intro">
          <h2 id="problem-solution-title" className="dayova-section-title">
            Lernen wird nicht leichter, wenn einfach nur mehr auf der Liste steht.
          </h2>
          <p className="dayova-body">
            Dayova ordnet deinen Schulalltag, bevor du dich im Stoff verlierst. Aus Aufgaben,
            Prüfungen und deiner verfügbaren Zeit entsteht ein klarer, machbarer Weg.
          </p>
        </div>
        <div className="home-v3-challenges">
          {challenges.map((challenge, index) => (
            <article className="home-v3-challenge" key={challenge.title}>
              <span>0{index + 1}</span>
              <div><h3>{challenge.title}</h3><p>{challenge.text}</p></div>
            </article>
          ))}
        </div>
        <div className="home-v3-orientation-panel">
          <span className="home-v3-ui-label">Dayova macht daraus</span>
          <h3>Einen nächsten Schritt, der zu deinem Tag passt.</h3>
          <div className="home-v3-orientation-task">
            <div><span>Heute · 16:00</span><strong>Bruchgleichungen üben</strong></div>
            <span>30 Min.</span>
          </div>
          <div className="home-v3-orientation-note">
            <DayovaIcon icon={Clock01Icon} size={20} aria-hidden="true" />
            <span>Passt in deine freie Lernzeit vor dem Training.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section id="so-funktioniert-dayova" className="home-v3-section home-v3-section-soft" aria-labelledby="workflow-title">
      <div className="home-v3-container">
        <SectionHeading
          id="workflow-title"
          title="Dein Lernplan entsteht aus deinem echten Alltag."
          text="Dayova verbindet, was ansteht, wann du Zeit hast und was du beim Lernen bereits verstanden hast."
        />
        <div className="home-v3-product-stories">
          <article className="home-v3-story home-v3-story--wide">
            <div className="home-v3-story-copy">
              <span>01</span>
              <h3>Alles, was ansteht, an einem Ort.</h3>
              <p>Trag Prüfungen, Aufgaben und freie Lernzeiten ein. Dayova erkennt Prioritäten und plant mit deinem tatsächlichen Wochenrhythmus.</p>
            </div>
            <CaptureIllustration />
          </article>
          <article className="home-v3-story">
            <div className="home-v3-story-copy">
              <span>02</span>
              <h3>Ein Lernweg, der sich anpasst.</h3>
              <p>Der Stoff wird in konkrete Einheiten geteilt. Wenn sich deine Woche oder dein Lernstand verändert, verändert sich auch der Plan.</p>
            </div>
            <LearningPathIllustration />
          </article>
          <article className="home-v3-story home-v3-story--dark">
            <div className="home-v3-story-copy">
              <span>03</span>
              <h3>Rückmeldung, die dir wirklich weiterhilft.</h3>
              <p>Dayova analysiert deine Antworten, erklärt Unsicherheiten und macht sichtbar, was du schon kannst.</p>
            </div>
            <AnalysisIllustration />
          </article>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="home-v3-section" aria-labelledby="benefits-title">
      <div className="home-v3-container home-v3-benefits-layout">
        <div className="home-v3-benefits-copy">
          <SectionHeading
            id="benefits-title"
            title="Du siehst nicht nur, was du tun sollst – sondern warum."
            text="Dayova macht Lernen planbar, ohne deinen Alltag in einen starren Kalender zu pressen."
          />
          <div className="home-v3-outcomes">
            {outcomes.map((outcome) => (
              <article className="home-v3-outcome" key={outcome.title}>
                <DayovaIcon icon={outcome.icon} size={22} aria-hidden="true" />
                <div><h3>{outcome.title}</h3><p>{outcome.text}</p></div>
              </article>
            ))}
          </div>
        </div>
        <PlansOverviewIllustration />
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="home-v3-section" aria-labelledby="trust-title">
      <div className="home-v3-container home-v3-trust">
        <div className="home-v3-trust-grid">
          <h2 id="trust-title" className="dayova-section-title">Aus echter Lernbegleitung entstanden.</h2>
          <div className="home-v3-trust-copy">
            <p>Seit 2023 arbeiten wir mit Schülerinnen und Schülern, die lernen wollen, aber zwischen Prüfungen, Aufgaben und fehlender Rückmeldung den Überblick verlieren.</p>
            <p>Deshalb beginnt Dayova nicht mit einem leeren Chatfenster, sondern mit deinem Alltag: deinen Terminen, deiner Zeit und dem, was du bereits verstanden hast.</p>
          </div>
        </div>
        <div className="home-v3-facts" aria-label="Erfahrung hinter Dayova">
          <div><strong>150+</strong><span>begleitete Schülerinnen und Schüler</span></div>
          <div><strong>Seit 2023</strong><span>aus praktischer Lernbegleitung entwickelt</span></div>
          <div><strong>Ein klarer Plan</strong><span>statt allgemeiner KI-Antworten</span></div>
        </div>
      </div>
    </section>
  );
}

export function LaunchCtaSection() {
  return (
    <section className="home-v3-launch-section" aria-labelledby="launch-title">
      <div className="home-v3-container home-v3-launch">
        <div className="home-v3-launch-copy">
          <h2 id="launch-title" className="dayova-section-title">Dayova startet am 17. August.</h2>
          <p className="dayova-body">Auf unserer App-Start-Seite findest du alle wichtigen Informationen zum Start von Dayova. Folge uns auf Instagram und bleibe auf dem Laufenden, damit du den offiziellen Launch nicht verpasst.</p>
          <ButtonLink href={siteConfig.links.instagram} variant="primary" external>
            <DayovaIcon icon={InstagramIcon} size={20} aria-hidden="true" />
            Launch Day nicht verpassen – auf Instagram folgen
          </ButtonLink>
        </div>
        <div className="home-v3-countdown-wrap">
          <span>Noch bis zum App-Start</span>
          <LaunchCountdown targetDate={siteConfig.launch.date} />
        </div>
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  return (
    <section className="home-v3-section" aria-labelledby="faq-title">
      <div className="home-v3-container home-v3-faq-grid">
        <div className="home-v3-faq-intro">
          <h2 id="faq-title" className="dayova-section-title">Fragen, die vor dem Start wichtig sind.</h2>
          <p className="dayova-body">Die wichtigsten Antworten zum Lernplan, zum App-Start und zum Umgang mit deinen Daten.</p>
        </div>
        <div className="home-v3-faq-list">
          {faqs.map((faq, index) => (
            <details className="home-v3-faq-item" key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
