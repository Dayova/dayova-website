import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        description="Transparente Informationen zum Umgang mit personenbezogenen Daten auf der Dayova Website."
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Datenschutz bei Dayova
            </span>
            <h2 className="dayova-section-title">Aktueller Stand</h2>
            <p className="mt-4 text-dayova-body text-muted">
              Diese Website verwendet aktuell keine öffentliche
              Vorabregistrierung und führt noch keine Zahlungen durch. Das
              Kontaktformular öffnet das lokale E-Mail-Programm; Eingaben
              werden nicht über die Website gespeichert.
            </p>
            <p className="mt-4 text-dayova-body text-muted">
              Der vollständige, rechtlich geprüfte Datenschutzhinweis wird vor
              Veröffentlichung und vor der Anbindung von Analyse-, Newsletter-
              oder Checkout-Diensten ergänzt.
            </p>
            <p className="mt-6 text-sm text-muted">
              Datenschutzanfragen:{" "}
              <a className="font-medium text-ink underline" href={`mailto:${siteConfig.links.email}`}>
                {siteConfig.links.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
