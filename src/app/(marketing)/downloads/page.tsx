import type { Metadata } from "next";
import {
  PlayStoreIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dayova herunterladen – iOS & Android",
  description:
    "Installiere Dayova auf Android über Google Play oder teste die iOS-App über TestFlight.",
  alternates: {
    canonical: "/downloads",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadsPage() {
  return (
    <>
      <section
        className="download-page-hero"
        aria-labelledby="download-page-title"
      >
        <div className="dayova-container download-page-hero__inner">
          <span className="home-classic-section-eyebrow">
            Dayova herunterladen
          </span>
          <h1 id="download-page-title" className="dayova-hero-claim">
            Dayova auf deinem Gerät installieren.
          </h1>
          <p className="download-page-hero__lead">
            Auf Android bekommst du Dayova regulär über Google Play. Auf dem
            iPhone und iPad kannst du die aktuelle Version über TestFlight
            testen.
          </p>

          <div className="download-platform-grid">
            <article className="download-platform-card download-platform-card--ios">
              <div className="download-platform-card__header">
                <span className="download-platform-card__icon" aria-hidden="true">
                  <DayovaIcon icon={SmartPhone01Icon} size={28} />
                </span>
                <span className="download-platform-card__status">
                  Testversion
                </span>
              </div>
              <div className="download-platform-card__copy">
                <span className="download-platform-card__eyebrow">
                  iOS und iPadOS
                </span>
                <h2>iPhone &amp; iPad</h2>
                <p>
                  Die iOS-App ist noch nicht regulär im App Store verfügbar.
                  Installiere die aktuelle Testversion über Apples TestFlight.
                </p>
              </div>
              <a className="button-primary" href={siteConfig.links.testFlight}>
                Über TestFlight installieren
              </a>
              <span className="download-platform-card__hint">
                Öffnet die öffentliche TestFlight-Einladung
              </span>
            </article>

            <article className="download-platform-card download-platform-card--android">
              <div className="download-platform-card__header">
                <span className="download-platform-card__icon" aria-hidden="true">
                  <DayovaIcon icon={PlayStoreIcon} size={28} />
                </span>
                <span className="download-platform-card__status download-platform-card__status--available">
                  Verfügbar
                </span>
              </div>
              <div className="download-platform-card__copy">
                <span className="download-platform-card__eyebrow">
                  Android
                </span>
                <h2>Google Play</h2>
                <p>
                  Die Android-App ist regulär im Google Play Store verfügbar
                  und kann direkt installiert werden.
                </p>
              </div>
              <a className="button-primary" href={siteConfig.links.googlePlay}>
                Bei Google Play installieren
              </a>
              <span className="download-platform-card__hint">
                Öffnet den offiziellen Dayova-Eintrag
              </span>
            </article>
          </div>
        </div>
      </section>

      <section
        className="home-classic-section home-classic-process download-page-process"
        aria-labelledby="download-process-title"
      >
        <div className="dayova-container">
          <div className="home-classic-process__panel">
            <div className="home-classic-process__intro">
              <span className="home-classic-section-eyebrow">
                Für iPhone &amp; iPad
              </span>
              <h2 id="download-process-title" className="dayova-section-title">
                Dayova über TestFlight installieren
              </h2>
              <p>
                Die Installation unterscheidet sich nur beim ersten Schritt
                vom App Store und dauert wenige Minuten.
              </p>
            </div>

            <ProcessTimeline variant="download" />
            <div className="download-page-process__action">
              <a className="button-secondary" href={siteConfig.links.testFlight}>
                TestFlight-Einladung öffnen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
