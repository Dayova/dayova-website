import {
  Calendar03Icon,
  ChartHistogramIcon,
  CheckmarkCircle01Icon,
  Compass01Icon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";

import { HomeHeroSection } from "@/components/sections/home-hero";
import { HomeDownloadShowcase } from "@/components/sections/home-download-showcase";
import { HomeAppFeatures, HomeLearningExperience, type FeatureCardContent } from "@/components/sections/home-app-features";
import styles from "./parents.module.css";
import { ParentsMotion } from "./parents-motion";

import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const parentsDescription =
  "Wie du dein Kind beim selbstständigen Lernen unterstützt: Dayova plant Prüfungen und Lernzeiten, damit der nächste Schritt klar ist. Für Eltern erklärt.";

export const metadata: Metadata = createPageMetadata({
  title: "Für Eltern: Selbstständig lernen mit einem Lernplan",
  description: parentsDescription,
  path: "/parents",
});

const parentsStructuredData = createPageStructuredData({
  name: "Dayova für Eltern, selbstständiger lernen mit Plan",
  description: parentsDescription,
  path: "/parents",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Für Eltern", path: "/parents" },
  ],
});

const parentBenefits = [
  {
    illustration: "time",
    title: "Lernzeit lässt sich einplanen",
    text: "Jeder Lernschritt hat ein Thema, ein Ziel und eine Dauer. Dein Kind weiß vorher, was es sich für diesen Nachmittag vornimmt.",
  },
  {
    illustration: "feedback",
    title: "Erfolge werden sichtbar",
    text: "Erledigte Lernschritte und Rückmeldungen auf Antworten zeigen deinem Kind, was es bereits geschafft hat.",
  },
  {
    illustration: "family",
    title: "Du bleibst Begleiter",
    text: "Der Plan gibt den nächsten Schritt vor. Du kannst zuhören und helfen, wenn dein Kind an einer Stelle nicht weiterkommt.",
  },
] as const;

const parentRelief: readonly FeatureCardContent[] = [
  {
    word: ["Alles", "an einem Ort"],
    title: ["Prüfungen und Aufgaben", "landen in einem Plan."],
    description: "Dein Kind trägt ein, was ansteht und wann Zeit zum Lernen ist. Dayova teilt den Stoff auf und hält den Plan bis zur Prüfung bereit.",
    icon: Calendar03Icon,
    color: "blue",
    screen: "plans",
    screenAlt: "Illustration: Aufgaben und Prüfungen ordnen sich zu einem Lernplan",
  },
  {
    word: ["Selbst", "anfangen"],
    title: ["Dein Kind sieht,", "was heute dran ist."],
    description: "Fach, Thema, Ziel und Dauer stehen im nächsten Lernschritt. Dein Kind kann starten, ohne den Stoff vorher neu einzuteilen.",
    icon: Compass01Icon,
    color: "lilac",
    screen: "today",
    screenAlt: "Illustration: Der nächste Lerntag ist im Kalender markiert",
  },
  {
    word: ["Rückmeldung", ""],
    title: ["Die App zeigt,", "was schon sitzt."],
    description: "Dayova prüft die Antworten und passt die nächsten Lernschritte an. So erkennt dein Kind selbst, welche Themen noch Übung brauchen.",
    icon: ChartHistogramIcon,
    color: "lime",
    screen: "feedback",
    screenAlt: "Illustration: Lernfortschritte werden mit Balken und einem Haken sichtbar",
  },
];

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

function BenefitIllustration({ kind }: { kind: (typeof parentBenefits)[number]["illustration"] }) {
  return (
    <svg className={styles.benefitArt} viewBox="0 0 300 280" fill="none" aria-hidden="true" focusable="false">
      {kind === "time" ? (
        <g transform="rotate(-12 150 140)">
          <rect x="34" y="14" width="232" height="252" rx="50" fill="currentColor" opacity=".4" />
          <circle cx="150" cy="144" r="84" fill="currentColor" opacity=".55" />
          <circle cx="150" cy="144" r="64" stroke="currentColor" strokeWidth="9" />
          <path className={styles.clockHand} d="M150 104v43l28 17" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M116 34h68" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
        </g>
      ) : kind === "feedback" ? (
        <g transform="rotate(9 150 140)">
          <path d="M28 64a34 34 0 0 1 34-34h174a34 34 0 0 1 34 34v120a34 34 0 0 1-34 34h-94l-57 39v-39H62a34 34 0 0 1-34-34Z" fill="currentColor" opacity=".4" />
          <path d="M75 84h96M75 112h62" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />
          <circle cx="215" cy="181" r="55" fill="currentColor" opacity=".65" />
          <path className={styles.confirmation} pathLength="1" d="m192 181 16 17 30-34" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : (
        <g transform="rotate(-6 150 140)">
          <rect x="28" y="22" width="244" height="238" rx="54" fill="currentColor" opacity=".25" />
          <circle cx="101" cy="87" r="31" fill="currentColor" opacity=".85" />
          <path d="M48 214v-44a53 53 0 0 1 106 0v44Z" fill="currentColor" opacity=".5" />
          <circle cx="187" cy="124" r="25" fill="currentColor" />
          <path d="M147 218v-29a40 40 0 0 1 80 0v29Z" fill="currentColor" opacity=".8" />
          <g className={styles.bookMotion}>
            <path d="M76 184c27-6 51 0 76 16 25-16 49-22 76-16v54c-27-6-51 0-76 16-25-16-49-22-76-16Z" fill="currentColor" />
            <path d="M152 201v39M92 204c14 0 28 4 43 12M169 216c15-8 29-12 43-12" stroke="var(--benefit-book-line)" strokeWidth="6" strokeLinecap="round" />
          </g>
        </g>
      )}
    </svg>
  );
}

function ComparisonIllustration({ planned = false }: { planned?: boolean }) {
  return (
    <svg className={styles.comparisonArt} viewBox="0 0 300 280" fill="none" aria-hidden="true" focusable="false">
      {planned ? (
        <g transform="rotate(8 150 140)">
          <rect x="38" y="36" width="222" height="218" rx="42" fill="currentColor" opacity=".35" />
          <path d="M40 100h218M96 22v40M202 22v40" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />
          <rect x="73" y="132" width="28" height="25" rx="9" fill="currentColor" opacity=".55" />
          <rect className={styles.calendarDay} x="118" y="132" width="28" height="25" rx="9" fill="currentColor" opacity=".55" />
          <rect x="73" y="179" width="28" height="25" rx="9" fill="currentColor" opacity=".55" />
          <circle cx="218" cy="207" r="54" fill="currentColor" opacity=".7" />
          <path className={styles.confirmation} pathLength="1" d="m196 206 15 16 30-32" stroke="var(--comparison-cutout)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : (
        <g transform="rotate(-10 150 140)">
          <rect x="30" y="48" width="172" height="208" rx="30" fill="currentColor" opacity=".2" transform="rotate(-10 116 152)" />
          <rect x="85" y="24" width="174" height="216" rx="32" fill="currentColor" opacity=".35" transform="rotate(12 172 132)" />
          <rect x="62" y="49" width="176" height="214" rx="32" fill="currentColor" opacity=".45" />
          <path d="M96 99h98M96 135h72M96 171h87M96 207h55" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

export default function ParentsPage() {
  return (
    <>
      <JsonLd data={parentsStructuredData} />
      <ParentsMotion>
      <HomeHeroSection
        id="parents-hero-title"
        className={styles.hero}
        intro={false}
        eyebrow="Für Eltern"
        titleLines={["Ein Lernplan,", "mit dem dein Kind", "selbst anfangen kann."]}
        description="Dayova macht aus Aufgaben, Prüfungen und freien Zeiten einen Plan. Dein Kind öffnet die App, sieht den nächsten Lernschritt und kann anfangen. Du begleitest dort, wo du gebraucht wirst."
        actions={<div className={styles.heroActions}>
          <ButtonLink href="#eltern-vorteile" variant="dark" className={styles.primaryAction}>So unterstützt Dayova dein Kind</ButtonLink>
        </div>}
      />

      <section
        className="home-classic-section parents-benefits"
        aria-labelledby="parents-benefits-title"
      >
        <div className="dayova-container">
          <div data-parent-reveal className={`marketing-section-heading ${styles.benefitHeading}`}>
            <span className={styles.eyebrow}>
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

          <div className={styles.benefitGrid}>
            {parentBenefits.map((benefit, index) => (
              <article
                className={styles.benefitCard}
                data-benefit={benefit.illustration}
                data-parent-reveal
                data-parent-art
                data-parent-delay={index}
                key={benefit.title}
              >
                <BenefitIllustration kind={benefit.illustration} />
                <div className={styles.benefitCopy}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="eltern-vorteile" className={styles.relief}>
        <HomeLearningExperience>
          <div data-parent-reveal className={styles.centeredHeading}>
            <span className={styles.eyebrow}>Im Familienalltag</span>
            <h2 id="parents-relief-title">Du begleitest.<br />Dayova hält den Plan.</h2>
            <p>Dein Kind sieht selbst, was ansteht und wo es weitergeht. So bleibt deine Unterstützung für die Momente, in denen sie zählt.</p>
          </div>
          <HomeAppFeatures
            items={parentRelief}
            id="parents-learning-cards"
            labelledBy="parents-relief-title"
            className={styles.cardsSection}
          />
        </HomeLearningExperience>
      </div>

      <section
        className={`home-classic-section ${styles.comparisonSection}`}
        aria-labelledby="parents-comparison-title"
      >
        <div className="dayova-container parents-comparison-section">
          <div data-parent-reveal className={`${styles.centeredHeading} ${styles.comparisonHeading}`}>
            <span className={styles.eyebrow}>
              Der Unterschied
            </span>
            <h2 className="dayova-section-title" id="parents-comparison-title">
              So wird aus Erinnern wieder Begleiten.
            </h2>
          </div>

          <div className={styles.comparisonGrid}>
            <article data-parent-reveal data-parent-art className={styles.comparisonCard}>
              <ComparisonIllustration />
              <span className={`${styles.eyebrow} ${styles.comparisonLabel}`}>Ohne klaren Plan</span>
              <h3>Viele kleine Aufgaben landen bei dir.</h3>
              <ul className={styles.comparisonList}>
                {comparison.before.map((item) => (
                  <li key={item}>
                    <span className={styles.comparisonDash} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article data-parent-reveal data-parent-art data-parent-delay="1" className={`${styles.comparisonCard} ${styles.comparisonPlanned}`}>
              <ComparisonIllustration planned />
              <span className={`${styles.eyebrow} ${styles.comparisonLabel}`}>Mit Dayova</span>
              <h3>Der Plan gibt deinem Kind den nächsten Schritt.</h3>
              <ul className={styles.comparisonList}>
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

      <HomeDownloadShowcase
        id="parents-download"
        className={styles.download}
        titleLines={["Mehr Zeit für Familie.", "Mehr Vertrauen beim Lernen."]}
        description="Probiert Dayova 14 Tage ohne Zahlungsdaten aus. Dein Kind legt die erste Prüfung an und sieht, wie daraus ein eigener Lernplan entsteht."
        secondaryHref="/pricing"
        secondaryLabel="Dayova Preise und Abos ansehen"
      />
      </ParentsMotion>
    </>
  );
}
