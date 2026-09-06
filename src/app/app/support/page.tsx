import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Support für die Dayova App",
  description:
    "Hilfe zur Dayova App, zu Benutzerkonto, Lernplänen, Apple-Abonnements und Datenschutz.",
  alternates: { canonical: "/app/support" },
  robots: { index: false, follow: false },
};

const supportEmail = `mailto:${siteConfig.links.email}?subject=Dayova%20App-Support`;

export default function AppSupportPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dayova App"
        title="Wie können wir dir helfen?"
        description="Hier findest du Hilfe zu deinem Konto, Lernplänen, Apple-Abonnements und Datenschutz."
        className="legal-page-hero"
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Persönlicher App-Support
            </span>

            <section aria-labelledby="app-support-contact">
              <h2 id="app-support-contact">Kontakt</h2>
              <p>
                Schreib uns an <a href={supportEmail}>{siteConfig.links.email}</a>.
                Beschreibe kurz, was nicht funktioniert, welches Gerät du
                verwendest und welche App-Version installiert ist. Sende uns
                niemals dein Passwort oder vollständige Zahlungsdaten.
              </p>
            </section>

            <section aria-labelledby="app-support-account">
              <h2 id="app-support-account">Anmeldung und Benutzerkonto</h2>
              <p>
                Prüfe zunächst deine Internetverbindung und ob du die richtige
                E-Mail-Adresse verwendest. Dein Konto kannst du in der App unter
                „Einstellungen → Konto → Konto löschen“ vollständig entfernen.
                Wenn du keinen Zugriff mehr auf die App hast, kontaktiere uns
                über die oben genannte Support-Adresse.
              </p>
            </section>

            <section aria-labelledby="app-support-subscription">
              <h2 id="app-support-subscription">
                Abonnement auf iPhone oder iPad
              </h2>
              <p>
                Käufe in der iOS-App werden ausschließlich über Apple
                abgewickelt. Wenn ein bereits gekauftes Abo nicht erkannt wird,
                öffne in Dayova die Abo-Auswahl und wähle „Käufe
                wiederherstellen“.
              </p>
              <p>
                Dein Abo kannst du in den iOS-Einstellungen unter deinem Namen
                und „Abonnements“ verwalten oder kündigen. Für Erstattungen und
                Probleme mit einer Apple-Zahlung nutze bitte{" "}
                <a
                  href="https://reportaproblem.apple.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Apples Seite „Problem melden“
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="app-support-learning">
              <h2 id="app-support-learning">Lernplan und Material-Upload</h2>
              <p>
                Prüfe bei einem fehlgeschlagenen Upload Dateityp, Dateigröße
                und Verbindung. Entferne personenbezogene Daten Dritter aus
                deinen Unterlagen und lade nur Materialien hoch, die du
                verwenden darfst. KI-generierte Lerninhalte können Fehler
                enthalten und sollten mit deinen Unterrichtsmaterialien
                abgeglichen werden.
              </p>
            </section>

            <section aria-labelledby="app-support-privacy">
              <h2 id="app-support-privacy">Datenschutz und Löschung</h2>
              <p>
                Fragen zu gespeicherten Daten, Auskunft, Berichtigung oder
                Löschung kannst du an <a href={supportEmail}>{siteConfig.links.email}</a>{" "}
                senden. Weitere Informationen findest du in den{" "}
                <a href="/app/privacy">Datenschutzhinweisen für die App</a>.
              </p>
            </section>

            <section aria-labelledby="app-support-terms">
              <h2 id="app-support-terms">Nutzungsbedingungen</h2>
              <p>
                Für die Dayova iOS-App und Käufe über Apple gelten die{" "}
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Standard-Nutzungsbedingungen von Apple
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
