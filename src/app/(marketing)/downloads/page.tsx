import type { Metadata } from "next";

import { BlueCtaSection } from "@/components/sections/blue-cta-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { StoreDownloadLink } from "@/components/store-download-link";

export const metadata: Metadata = {
  title: "Dayova herunterladen",
  description:
    "Lade Dayova im App Store oder bei Google Play herunter, trage deine erste Prüfung ein und starte deinen Lernplan.",
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
            App laden. Erste Prüfung eintragen. Loslernen.
          </h1>
          <p>
            Der Button öffnet den passenden Store für dein Gerät. Nach dem
            Download kannst du alle Funktionen 14 Tage ohne Zahlungsdaten
            ausprobieren.
          </p>
          <StoreDownloadLink className="download-page__store-button">
            App herunterladen
          </StoreDownloadLink>
          <span className="download-page-hero__hint">
            14 Tage kostenlos testen · Für iOS und Android
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
                So kommt Dayova auf dein Smartphone.
              </h2>
              <p>
                Store öffnen, App installieren und Profil anlegen. Danach kannst
                du direkt deine erste Prüfung eintragen.
              </p>
            </div>

            <ProcessTimeline variant="download" />
          </div>
        </div>
      </section>

      <BlueCtaSection
        id="download-finish"
        eyebrow="Bereit zum Loslernen?"
        title="Dein erster Lernplan beginnt in der App."
        description="Lade Dayova herunter und probiere 14 Tage ohne Zahlungsdaten aus, wie aus deiner Prüfung ein Plan für jeden Lerntag wird."
        sectionClassName="download-page-finish"
      >
        <StoreDownloadLink variant="secondary">App herunterladen</StoreDownloadLink>
      </BlueCtaSection>
    </>
  );
}
