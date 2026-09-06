import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutz in der Dayova App",
  description:
    "App-spezifische Datenschutzhinweise zu Dayova, Benutzerkonto, Lerninhalten, KI-Funktionen und In-App-Abonnements.",
  alternates: { canonical: "/app/privacy" },
  robots: { index: false, follow: false },
};

function PrivacyEmailLink() {
  return (
    <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>
  );
}

export default function AppPrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dayova App"
        title="Datenschutz"
        description="Hier erfährst du, welche Daten die Dayova App verarbeitet, wofür wir sie benötigen und welche Rechte du hast."
        className="legal-page-hero"
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Datenschutz in der App
            </span>

            <section aria-labelledby="app-privacy-controller">
              <h2 id="app-privacy-controller">1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten in
                der Dayova App ist Julius Dietrich, Dayova, Hohe Straße 54,
                01187 Dresden, Deutschland. Du erreichst uns unter{" "}
                <PrivacyEmailLink />.
              </p>
            </section>

            <section aria-labelledby="app-privacy-account">
              <h2 id="app-privacy-account">2. Konto und Profildaten</h2>
              <p>
                Für Registrierung, Anmeldung und Kontoverwaltung verarbeitet
                die App deine E-Mail-Adresse, eine interne Benutzerkennung und
                Anmeldedaten. Im Onboarding verarbeiten wir außerdem deinen
                Namen, deine Klassenstufe, deine Schulart und dein Bundesland.
                Die aktuelle App fragt kein Geburtsdatum ab. Passwörter werden
                von Dayova nicht im Klartext gespeichert.
              </p>
              <p>
                Clerk, Inc. stellt die Authentifizierung bereit. Convex, Inc.
                verarbeitet und speichert Konto-, Profil- und Anwendungsdaten,
                damit wir dein Konto und die App-Funktionen bereitstellen
                können. Grundlage ist Art. 6 Abs. 1 lit. b DSGVO;
                Sicherheits- und Missbrauchsschutzmaßnahmen beruhen zusätzlich
                auf Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section aria-labelledby="app-privacy-learning">
              <h2 id="app-privacy-learning">3. Lern- und Planungsdaten</h2>
              <p>
                Wir verarbeiten insbesondere Prüfungsfach und -termin,
                Lernziele, verfügbare Lernzeiten, Aufgaben, Notizen, Antworten
                auf Diagnosefragen, Lernfortschritt und Ergebnisse einzelner
                Lerneinheiten. Diese Daten sind deinem Konto zugeordnet und
                werden verwendet, um deinen Lernplan zu erstellen, anzupassen
                und anzuzeigen. Grundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section aria-labelledby="app-privacy-files">
              <h2 id="app-privacy-files">4. Dateien, Kamera und Fotos</h2>
              <p>
                Wenn du Lernmaterial oder einen Stundenplan auswählst,
                verarbeiten wir Dateiinhalt, Dateiname, Dateityp und Dateigröße.
                Dateien werden geschützt bei Cloudflare R2 oder Convex
                gespeichert und deinem Lernplan zugeordnet. Kamera,
                Fotomediathek und Dateiauswahl verwendet die App erst nach
                deiner Gerätefreigabe und nur für die von dir gestartete
                Funktion. Geräteberechtigungen kannst du jederzeit in den
                iOS-Einstellungen ändern.
              </p>
            </section>

            <section aria-labelledby="app-privacy-ai">
              <h2 id="app-privacy-ai">5. KI-Verarbeitung</h2>
              <p>
                Bevor Dayova erstmals Daten an Google Cloud Vertex AI
                übermittelt, zeigt dir die App den Empfänger, die betroffenen
                Datenkategorien und den Zweck. Erst nach deiner ausdrücklichen
                Zustimmung übermitteln wir die für die gewählte Funktion
                erforderlichen Inhalte. Dazu können Inhalte und Dateinamen von
                Lernmaterialien und Stundenplänen, Prüfungsangaben, Themen,
                Notizen, Lernzeiten, Antworten und Lernfortschritt gehören.
              </p>
              <p>
                Die Übermittlung dient ausschließlich dazu, Diagnosefragen,
                Lernpläne, Lerninhalte oder die Stundenplan-Erkennung
                bereitzustellen. KI-Ausgaben können Fehler enthalten. Grundlage
                ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Ohne
                Einwilligung wird die betroffene KI-Funktion nicht ausgeführt;
                andere App-Funktionen bleiben nutzbar. Du kannst die
                Einwilligung unter „Einstellungen → KI &amp; Datenschutz“
                jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
            </section>

            <section aria-labelledby="app-privacy-notifications">
              <h2 id="app-privacy-notifications">
                6. Erinnerungen und Mitteilungen
              </h2>
              <p>
                Wenn du Mitteilungen erlaubst, verarbeitet Dayova deine
                Einstellungen sowie geplante Zustell- und Lesestatus, um dich
                an Lernzeiten, Prüfungen und Aufgaben zu erinnern. Die
                Berechtigung ist freiwillig und kann in den iOS-Einstellungen
                widerrufen werden.
              </p>
            </section>

            <section aria-labelledby="app-privacy-analytics">
              <h2 id="app-privacy-analytics">
                7. Keine optionale Nutzungsanalyse unter iOS
              </h2>
              <p>
                Die über den Apple App Store bereitgestellte iOS-Version sendet
                keine optionalen Nutzungsereignisse an PostHog. Technisch
                notwendige Protokolle können weiterhin bei den oben genannten
                Dienstleistern entstehen, um Anmeldung, Datenspeicherung,
                Käufe, Sicherheit und Fehlerbehebung bereitzustellen.
              </p>
            </section>

            <section aria-labelledby="app-privacy-payment">
              <h2 id="app-privacy-payment">8. Abonnements in der App</h2>
              <p>
                Käufe auf iPhone und iPad werden ausschließlich über Apple
                In-App Purchase abgewickelt. Apple verarbeitet Zahlungs- und
                Apple-Account-Daten. Dayova erhält keine vollständigen
                Zahlungsdaten, sondern insbesondere Produkt, Kaufstatus,
                Laufzeit und eine technische Transaktionskennung. RevenueCat
                verarbeitet diese Angaben, damit wir den Abo-Status und deine
                Zugriffsberechtigung verwalten können.
              </p>
            </section>

            <section aria-labelledby="app-privacy-providers">
              <h2 id="app-privacy-providers">
                9. Empfänger und Schutz der Daten
              </h2>
              <p>
                Daten erhalten nur die in diesen Hinweisen genannten
                Dienstleister und nur soweit es für ihre jeweilige Aufgabe
                erforderlich ist. Wir verpflichten Auftragsverarbeiter
                vertraglich zu einem angemessenen Schutz, der den hier
                beschriebenen Anforderungen entspricht. Für Übermittlungen
                außerhalb des Europäischen Wirtschaftsraums verwenden wir,
                soweit erforderlich, Angemessenheitsbeschlüsse, das EU-US Data
                Privacy Framework oder Standardvertragsklauseln mit ergänzenden
                Schutzmaßnahmen.
              </p>
            </section>

            <section aria-labelledby="app-privacy-retention">
              <h2 id="app-privacy-retention">
                10. Speicherdauer und Kontolöschung
              </h2>
              <p>
                Konto- und Lerninhalte speichern wir grundsätzlich so lange,
                wie dein Konto besteht und die jeweilige Funktion genutzt wird.
                Hochgeladene Materialien werden entfernt, wenn du das
                zugehörige Material, den Lernplan oder dein Konto löschst,
                soweit keine gesetzlichen Pflichten entgegenstehen.
                Technische Protokolle bewahren wir nur so lange auf, wie sie für
                Sicherheit und Fehleranalyse erforderlich sind.
              </p>
              <p>
                Dein vollständiges Konto kannst du direkt in der App unter
                „Einstellungen → Konto → Konto löschen“ entfernen. Dabei werden
                dein Dayova-Konto, Lern- und Planungsdaten sowie hochgeladene
                Materialien gelöscht. Ohne App-Zugriff kannst du die Löschung
                über <PrivacyEmailLink /> beantragen. Gesetzlich
                aufzubewahrende Nachweise und technisch notwendige Sicherungen
                werden nach Ablauf der jeweiligen Frist beziehungsweise des
                regulären Sicherungszyklus gelöscht.
              </p>
              <p>
                Die Kontolöschung beendet ein Apple-Abonnement nicht
                automatisch. Ein aktives Abonnement verwaltest oder kündigst du
                zusätzlich in deinem App-Store-Konto.
              </p>
            </section>

            <section aria-labelledby="app-privacy-minors">
              <h2 id="app-privacy-minors">11. Minderjährige</h2>
              <p>
                Dayova richtet sich auch an Schülerinnen und Schüler. Soweit
                für Registrierung, Einwilligung oder Vertragsschluss die
                Zustimmung einer sorgeberechtigten Person erforderlich ist,
                darf die App nur mit dieser Zustimmung verwendet werden. Wir
                verwenden Daten Minderjähriger nicht für personalisierte
                Werbung.
              </p>
            </section>

            <section aria-labelledby="app-privacy-rights">
              <h2 id="app-privacy-rights">12. Deine Rechte</h2>
              <p>
                Du hast insbesondere Rechte auf Auskunft, Berichtigung,
                Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und
                Widerruf einer Einwilligung für die Zukunft. Du kannst dich
                außerdem bei einer Datenschutzaufsichtsbehörde beschweren. Zur
                Ausübung deiner Rechte genügt eine Nachricht an{" "}
                <PrivacyEmailLink />.
              </p>
              <p>Stand: 6. September 2026</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
