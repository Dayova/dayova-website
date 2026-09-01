import type { Metadata } from "next";

import { BlueCtaSection } from "@/components/sections/blue-cta-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dayova mit TestFlight testen",
  description:
    "Installiere die aktuelle Dayova-Testversion über TestFlight auf deinem iPhone oder iPad.",
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
            Dayova testen
          </span>
          <h1 id="download-page-title" className="dayova-hero-claim">
            Dayova über TestFlight installieren.
          </h1>
          <p>
            Über unsere öffentliche TestFlight-Einladung installierst du die
            aktuelle Testversion direkt auf deinem iPhone oder iPad.
          </p>
          <a
            className="button-primary download-page__store-button"
            href={siteConfig.links.testFlight}
          >
            TestFlight-Einladung öffnen
          </a>
          <span className="download-page-hero__hint">
            Kostenlos · Für iPhone und iPad
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
                So installierst du Dayova
              </span>
              <h2 id="download-process-title" className="dayova-section-title">
                In 3 Schritten zur Testversion
              </h2>
              <p>
                Du brauchst nur dein Apple-Gerät und wenige Minuten Zeit.
              </p>
            </div>

            <ProcessTimeline variant="download" />
          </div>
        </div>
      </section>

      <BlueCtaSection
        id="download-finish"
        eyebrow="Bereit zum Testen?"
        title="Öffne die Einladung auf deinem Apple-Gerät"
        description="Nach der Installation kannst du Dayova direkt öffnen und dich mit deinem Konto anmelden."
        sectionClassName="download-page-finish"
      >
        <a className="button-secondary" href={siteConfig.links.testFlight}>
          Dayova in TestFlight öffnen
        </a>
      </BlueCtaSection>
    </>
  );
}
