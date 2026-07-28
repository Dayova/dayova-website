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
      <section className="dayova-section pt-0">
        <div className="dayova-container">
          <div className="section-card mx-auto max-w-3xl p-7 sm:p-10">
            <h2>Aktueller Stand</h2>
            <p className="mt-4 text-dayova-body text-muted">
              Diese Website verwendet aktuell keine öffentliche
              Vorabregistrierung und führt noch keine Zahlungen durch. Das
              Kontaktformular öffnet das lokale E-Mail-Programm; Eingaben
              werden nicht über die Website gespeichert.
            </p>
            <p className="mt-5 text-dayova-body text-muted">
              Der vollständige, rechtlich geprüfte Datenschutzhinweis wird vor
              Veröffentlichung und vor der Anbindung von Analyse-, Newsletter-
              oder Checkout-Diensten ergänzt.
            </p>
            <p className="mt-7 text-sm text-muted">
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
