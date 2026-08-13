import type { Metadata } from "next";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { StoreDownloadLink } from "@/components/store-download-link";

export const metadata: Metadata = {
  title: "Dayova herunterladen",
  description:
    "Lade Dayova in drei einfachen Schritten auf dein Smartphone und starte deinen persönlichen Lernplan.",
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
            Dein Download
          </span>
          <h1 id="download-page-title" className="dayova-hero-claim">
            Dayova herunterladen und direkt loslegen.
          </h1>
          <p>
            Ein Klick bringt dich automatisch in den passenden Store für dein
            Gerät. Danach ist dein persönlicher Lernbegleiter nur noch wenige
            Schritte entfernt.
          </p>
          <StoreDownloadLink className="download-page__store-button">
            App herunterladen
          </StoreDownloadLink>
          <span className="download-page-hero__hint">
            Kostenlos herunterladen · Für iOS und Android
          </span>
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
                So funktioniert der Download
              </span>
              <h2 id="download-process-title" className="dayova-section-title">
                In 3 Schritten zu Dayova
              </h2>
              <p>
                Vom QR-Code bis zur geöffneten App: So kommt Dayova schnell und
                sicher auf dein Smartphone.
              </p>
            </div>

            <ProcessTimeline variant="download" />
          </div>
        </div>
      </section>

      <section
        className="home-classic-section download-page-finish"
        aria-labelledby="download-finish-title"
      >
        <div className="dayova-container">
          <div className="download-page-finish__panel">
            <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
              Bereit für deinen Lernplan?
            </span>
            <h2 id="download-finish-title" className="dayova-section-title">
              Jetzt Dayova herunterladen
            </h2>
            <p>
              Starte mit einem klaren Plan, verständlichen nächsten Schritten
              und mehr Orientierung beim Lernen.
            </p>
            <StoreDownloadLink
              variant="secondary"
              className="download-page__store-button home-classic-download__button"
            >
              App herunterladen
            </StoreDownloadLink>
          </div>
        </div>
      </section>
    </>
  );
}
