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
              Das Kontaktformular öffnet das lokale E-Mail-Programm; Eingaben
              werden nicht über die Website gespeichert. Zahlungen werden nur
              nach einer bewussten Auswahl über den jeweils angegebenen
              Zahlungsdienst ausgelöst.
            </p>
            <p className="mt-4 text-dayova-body text-muted">
              Mit deiner Einwilligung verwendet diese Website Google Analytics
              4, um Seitenaufrufe und Interaktionen in zusammengefasster Form
              auszuwerten. Die Analyse wird erst nach deiner Zustimmung geladen.
              Du kannst deine Auswahl jederzeit über „Cookie-Einstellungen“ im
              Footer ändern. Anbieter ist Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland. Die Rechtsgrundlage ist Art. 6
              Abs. 1 lit. a DSGVO. Deine Einwilligung kannst du jederzeit mit
              Wirkung für die Zukunft widerrufen.
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
