import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Hilfe zu Dayova, Benutzerkonto, Lernplänen, Abonnements, Käufen und Datenschutz.",
  alternates: { canonical: "/support" },
};

const supportEmail = `mailto:${siteConfig.links.email}?subject=Dayova%20Support`;

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Dayova Support"
        title="Wie können wir dir helfen?"
        description="Hier findest du Hilfe zu deinem Konto, Lernplänen, Abonnements und Datenschutz."
        className="legal-page-hero"
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Persönlicher Support
            </span>

            <section aria-labelledby="support-contact">
              <h2 id="support-contact">Kontakt</h2>
              <p>
                Schreib uns an{" "}
                <a href={supportEmail}>{siteConfig.links.email}</a>. Beschreibe
                kurz, was nicht funktioniert, welches Gerät du verwendest und
                welche App-Version installiert ist. Sende uns niemals dein
                Passwort oder vollständige Zahlungsdaten.
              </p>
            </section>

            <section aria-labelledby="support-account">
              <h2 id="support-account">Anmeldung und Benutzerkonto</h2>
              <p>
                Prüfe zunächst deine Internetverbindung und ob du die richtige
                E-Mail-Adresse verwendest. Wenn du keinen Zugriff mehr auf dein
                Konto hast oder dein Konto vollständig löschen lassen möchtest,
                kontaktiere uns über die oben genannte Support-Adresse.
              </p>
            </section>

            <section aria-labelledby="support-subscription">
              <h2 id="support-subscription">
                Abonnement und Käufe auf iPhone oder iPad
              </h2>
              <p>
                Käufe in der iOS-App werden über Apple abgewickelt. Wenn ein
                bereits gekauftes Abo nicht erkannt wird, öffne in Dayova die
                Abo-Auswahl und wähle „Käufe wiederherstellen“.
              </p>
              <p>
                Dein Apple-Abo kannst du unter Einstellungen → dein Name →
                Abonnements verwalten oder kündigen. Für Erstattungen und
                Probleme mit der Apple-Zahlung nutze bitte{" "}
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

            <section aria-labelledby="support-learning-plan">
              <h2 id="support-learning-plan">Lernplan und Material-Upload</h2>
              <p>
                Prüfe bei einem fehlgeschlagenen Upload Dateityp, Dateigröße
                und Verbindung. Entferne personenbezogene Daten Dritter aus
                deinen Unterlagen und lade nur Materialien hoch, die du
                verwenden darfst. KI-generierte Lerninhalte können Fehler
                enthalten und sollten mit deinen Unterrichtsmaterialien
                abgeglichen werden.
              </p>
            </section>

            <section aria-labelledby="support-privacy">
              <h2 id="support-privacy">Datenschutz und Löschung</h2>
              <p>
                Fragen zu gespeicherten Daten, Auskunft, Berichtigung oder
                Löschung kannst du an{" "}
                <a href={supportEmail}>{siteConfig.links.email}</a> senden.
                Einzelne Lernpläne und hochgeladene Materialien kannst du in
                der App entfernen. Weitere Informationen findest du in unserer{" "}
                <a href="/privacy">Datenschutzerklärung</a>.
              </p>
            </section>

            <section aria-labelledby="support-terms">
              <h2 id="support-terms">Nutzungsbedingungen</h2>
              <p>
                Für Käufe über die iOS-App gelten die{" "}
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Standard-Nutzungsbedingungen von Apple
                </a>
                . Die Bedingungen für Käufe über die Dayova-Website findest du
                in unseren <a href="/terms">Nutzungsbedingungen</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
