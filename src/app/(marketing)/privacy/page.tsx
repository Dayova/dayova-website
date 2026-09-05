import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzhinweise für die Dayova App und Website, einschließlich Benutzerkonto, Lerninhalten, KI-Funktionen und Abonnements.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

function PrivacyEmailLink() {
  return (
    <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        description="Hier erfährst du, welche Daten in der Dayova App und auf unserer Website verarbeitet werden, wofür wir sie benötigen und welche Rechte du hast."
        className="legal-page-hero"
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Datenschutz bei Dayova
            </span>

            <section aria-labelledby="privacy-controller">
              <h2 id="privacy-controller">1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten in
                der Dayova App und auf der Dayova Website ist:
              </p>
              <p>
                Julius Dietrich, Dayova
                <br />
                Hohe Straße 54
                <br />
                01187 Dresden
                <br />
                Deutschland
                <br />
                E-Mail: <PrivacyEmailLink />
              </p>
            </section>

            <section aria-labelledby="privacy-scope">
              <h2 id="privacy-scope">2. Geltungsbereich</h2>
              <p>
                Diese Datenschutzerklärung gilt für die mobile Dayova App und
                die Website dayova.com. Die App unterstützt dich bei der
                Planung und Durchführung von Lernaufgaben. Dafür verarbeitet
                sie Konto-, Lern-, Nutzungs- und gegebenenfalls Kaufdaten.
              </p>
            </section>

            <section aria-labelledby="privacy-account">
              <h2 id="privacy-account">3. Benutzerkonto und Profildaten</h2>
              <p>
                Für Registrierung, Anmeldung und Kontoverwaltung verarbeiten
                wir insbesondere deine E-Mail-Adresse, eine interne
                Benutzerkennung und Anmeldedaten. Im Onboarding verarbeiten wir
                außerdem deinen Namen, deine Klassenstufe, deine Schulart und
                dein Bundesland. Ein genaues Geburtsdatum fragen wir in der
                aktuellen App nicht ab. Passwörter werden nicht im Klartext von
                Dayova gespeichert.
              </p>
              <p>
                Bei älteren Konten können freiwillig hinterlegte Profildaten,
                etwa eine Telefonnummer, ein Geburtsdatum oder ein Profilbild,
                bis zu ihrer gesonderten Löschung oder Kontolöschung weiterhin
                gespeichert sein. Die aktuelle App erhebt diese Angaben nicht
                neu.
              </p>
              <p>
                Für die Authentifizierung nutzen wir Clerk, Inc. Die
                Anwendungs- und Profildaten werden über Convex, Inc. verarbeitet
                und gespeichert. Die Verarbeitung ist erforderlich, um dein
                Konto und die vereinbarten App-Funktionen bereitzustellen. Ihre
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Sicherheits- und
                Missbrauchsschutzmaßnahmen beruhen zusätzlich auf Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <p>
                Weitere Informationen findest du in den
                Datenschutzhinweisen von{" "}
                <a
                  href="https://clerk.com/legal/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Clerk
                </a>{" "}
                und{" "}
                <a
                  href="https://www.convex.dev/legal/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Convex
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-learning-data">
              <h2 id="privacy-learning-data">4. Lern- und Planungsdaten</h2>
              <p>
                Zur Erstellung und Nutzung deiner Lernpläne verarbeiten wir
                unter anderem Prüfungsfach und -termin, Lernziele, verfügbare
                Lernzeiten, Aufgaben, Notizen, Antworten auf Diagnosefragen,
                Lernfortschritt, Ergebnisse einzelner Lerneinheiten und Angaben
                dazu, warum eine Einheit verschoben oder nicht abgeschlossen
                wurde. Diese Daten sind deinem Konto zugeordnet.
              </p>
              <p>
                Die Verarbeitung dient der Erstellung, Anpassung und Anzeige
                deines persönlichen Lernplans sowie der Lernanalyse. Grundlage
                ist Art. 6 Abs. 1 lit. b DSGVO. Bitte trage keine besonders
                sensiblen personenbezogenen Daten über dich oder andere
                Personen ein, die für den Lernzweck nicht erforderlich sind.
              </p>
            </section>

            <section aria-labelledby="privacy-uploads-ai">
              <h2 id="privacy-uploads-ai">
                5. Hochgeladene Materialien und KI-Verarbeitung
              </h2>
              <p>
                Du kannst Lernmaterialien wie PDFs, Office-Dokumente, Bilder
                und Textdateien hochladen. Dabei verarbeiten wir Dateiinhalt,
                Dateiname, Dateityp und Dateigröße. Die Dateien werden in einem
                geschützten Speicher von Cloudflare R2 oder Convex gespeichert
                und sind dem jeweiligen Lernplan zugeordnet.
              </p>
              <p>
                Bevor Dayova erstmals Daten für eine KI-gestützte Funktion
                übermittelt, zeigen wir dir in der App den Empfänger, die
                betroffenen Datenkategorien und den Verwendungszweck. Erst wenn
                du dort ausdrücklich zustimmst, übermittelt Dayova die für die
                gewählte Funktion erforderlichen Inhalte an Google Cloud Vertex
                AI. Google Cloud ist dabei ein externer KI-Dienstleister. Je
                nach Funktion können Inhalte und Dateinamen deiner
                Lernmaterialien und Stundenpläne, Prüfungsfach, Prüfungsart und
                -termin, Themen, Notizen, Lernzeiten, deine Antworten und dein
                bisheriger Lernfortschritt übermittelt werden. Die Daten
                übermittelt Dayova ausschließlich, um Diagnosefragen,
                Lernpläne, Lerninhalte oder die Stundenplan-Erkennung
                bereitzustellen.
              </p>
              <p>
                Dabei kann eine automatisierte Ausgabe entstehen. Die
                KI-Ausgabe kann Fehler enthalten und ersetzt keine fachliche
                oder schulische Bewertung. Rechtsgrundlage für die
                Übermittlung an Google Cloud Vertex AI ist deine Einwilligung
                nach Art. 6 Abs. 1 lit. a DSGVO. Ohne deine Einwilligung findet
                diese Übermittlung nicht statt; die betroffene KI-Funktion kann
                dann nicht ausgeführt werden. Andere Funktionen der App kannst
                du weiterhin verwenden.
              </p>
              <p>
                Du kannst deine Einwilligung jederzeit in der App unter
                „Einstellungen → KI &amp; Datenschutz“ mit Wirkung für die
                Zukunft widerrufen. Die Rechtmäßigkeit der Verarbeitung bis
                zum Widerruf bleibt unberührt. Damit wir deine Auswahl
                zuverlässig berücksichtigen und bei geänderten Hinweisen
                erneut fragen können, speichern wir den Einwilligungsstatus,
                die Version des angezeigten Hinweises sowie die Zeitpunkte der
                Erteilung, Änderung oder des Widerrufs.
              </p>
              <p>
                Lade nur Materialien hoch, die du verwenden darfst, und
                entferne Namen oder andere personenbezogene Daten Dritter,
                sofern sie nicht erforderlich sind. Informationen zum
                Datenschutz findest du bei{" "}
                <a
                  href="https://cloud.google.com/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Google Cloud
                </a>{" "}
                und{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Cloudflare
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-device-access">
              <h2 id="privacy-device-access">
                6. Kamera, Fotos und Dateien
              </h2>
              <p>
                Mit deiner vorherigen Gerätefreigabe kann Dayova auf Kamera,
                Fotomediathek und die von dir über die Dateiauswahl gewählten
                Dateien zugreifen. Der Zugriff erfolgt nur, wenn du die
                jeweilige Funktion verwendest, etwa um Lernmaterial zu
                fotografieren oder eine Datei auszuwählen. Du kannst erteilte
                Geräteberechtigungen jederzeit in den Systemeinstellungen
                ändern.
              </p>
              <p>
                Ausgewählte Dateien und Bilder werden wie in Abschnitt 5
                beschrieben verarbeitet.
              </p>
            </section>

            <section aria-labelledby="privacy-notifications">
              <h2 id="privacy-notifications">
                7. Erinnerungen und Mitteilungen
              </h2>
              <p>
                Wenn du Mitteilungen erlaubst, plant Dayova auf deinem Gerät
                Erinnerungen an Lernzeiten, Prüfungen und Aufgaben. Wir
                verarbeiten dafür deine Benachrichtigungseinstellungen,
                geplante Zeitpunkte und den Zustell- beziehungsweise Lesestatus.
                Die Systemberechtigung ist freiwillig und kann jederzeit in den
                Geräteeinstellungen widerrufen werden.
              </p>
            </section>

            <section aria-labelledby="privacy-app-analytics">
              <h2 id="privacy-app-analytics">8. App-Analyse mit PostHog</h2>
              <p>
                Zur Verbesserung der App kann Dayova PostHog auf europäischen
                Servern einsetzen. Nach der Anmeldung werden dabei eine
                pseudonyme Benutzerkennung, App- und Geräteinformationen sowie
                ausgewählte Nutzungsereignisse verarbeitet, beispielsweise ob
                das Onboarding abgeschlossen, ein Lernplan erstellt oder eine
                Lerneinheit begonnen wurde. Rohinhalte hochgeladener Dateien,
                Namen, E-Mail-Adressen, Notizen und Antworten werden nicht als
                Analyse-Ereignisse übermittelt.
              </p>
              <p>
                Die Verarbeitung beruht auf Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse ist die sichere, stabile und
                nutzerfreundliche Weiterentwicklung der App. Mehr erfährst du
                in der{" "}
                <a
                  href="https://posthog.com/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Datenschutzerklärung von PostHog
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-payment">
              <h2 id="privacy-payment">9. Abonnements und Bezahlung</h2>
              <p>
                Käufe in der iOS-App werden über Apple In-App Purchase
                abgewickelt. Apple verarbeitet dabei die Zahlungs- und
                Apple-Account-Daten nach eigener Verantwortlichkeit. Dayova
                erhält keine vollständigen Zahlungsdaten, sondern insbesondere
                Produkt, Kaufstatus, Laufzeit und eine technische
                Transaktionskennung. Für die Verwaltung des Abo-Status und der
                Zugriffsberechtigung nutzen wir RevenueCat.
              </p>
              <p>
                Bei einem Kauf über die Website wird der von RevenueCat
                bereitgestellte Bezahlvorgang verwendet; RevenueCat setzt dort
                Stripe ein. Dabei können technische Verbindungsdaten, gewählte
                Leistung, Kontakt- und Rechnungsangaben sowie Zahlungsstatus
                verarbeitet werden. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b
                und, für gesetzlich aufzubewahrende Buchungsdaten, Art. 6 Abs. 1
                lit. c DSGVO.
              </p>
              <p>
                Weitere Informationen findest du bei{" "}
                <a
                  href="https://www.apple.com/legal/privacy/de-ww/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Apple
                </a>
                ,{" "}
                <a
                  href="https://www.revenuecat.com/privacy-policy/"
                  rel="noreferrer"
                  target="_blank"
                >
                  RevenueCat
                </a>{" "}
                und{" "}
                <a
                  href="https://stripe.com/de/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Stripe
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-hosting">
              <h2 id="privacy-hosting">
                10. Website-Hosting und Server-Protokolle
              </h2>
              <p>
                Die Website wird bei Vercel Inc. gehostet. Beim Aufruf werden
                technisch erforderliche Verbindungsdaten verarbeitet. Dazu
                können IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse,
                Referrer, Browser, Betriebssystem und HTTP-Status gehören. Die
                Verarbeitung dient dem sicheren und zuverlässigen Betrieb der
                Website und beruht auf Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Weitere Informationen findest du in der{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Datenschutzerklärung von Vercel
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-contact">
              <h2 id="privacy-contact">11. Kontaktaufnahme und Support</h2>
              <p>
                Wenn du uns kontaktierst, verarbeiten wir deine E-Mail-Adresse,
                deinen Namen, den Inhalt deiner Nachricht und weitere von dir
                mitgeteilte Angaben, um dein Anliegen zu bearbeiten. Bei
                Vertrags- und Supportanfragen ist Art. 6 Abs. 1 lit. b DSGVO
                die Rechtsgrundlage; bei allgemeinen Anfragen Art. 6 Abs. 1
                lit. f DSGVO. Wir löschen die Daten, sobald das Anliegen
                erledigt ist und keine Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section aria-labelledby="privacy-website-storage">
              <h2 id="privacy-website-storage">
                12. Website-Speicherung und Google Analytics 4
              </h2>
              <p>
                Die Website speichert deine Entscheidung zur Reichweitenmessung
                im lokalen Speicher des Browsers. Im Lehrerdashboard werden
                Demo-Daten und Einstellungen lokal gespeichert. Diese
                erforderliche Speicherung beruht auf § 25 Abs. 2 Nr. 2 TDDDG
                und Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Nur nach deiner ausdrücklichen Einwilligung verwenden wir auf
                der Website Google Analytics 4. Dabei können Seitenaufrufe,
                Interaktionen, ungefähre Region, Geräte- und
                Browserinformationen sowie pseudonyme Kennungen verarbeitet
                werden. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. a DSGVO und §
                25 Abs. 1 TDDDG. Du kannst deine Einwilligung über
                „Cookie-Einstellungen“ im Footer widerrufen.
              </p>
              <p>
                Weitere Informationen findest du in der{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  rel="noreferrer"
                  target="_blank"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-transfers">
              <h2 id="privacy-transfers">13. Empfänger und Drittländer</h2>
              <p>
                Wir geben Daten nur weiter, wenn dies für die beschriebenen
                Funktionen, zur Vertragserfüllung, aufgrund einer gesetzlichen
                Pflicht oder mit deiner Einwilligung erforderlich ist. Unsere
                technischen Dienstleister erhalten nur die für ihre jeweilige
                Aufgabe notwendigen Daten und werden vertraglich verpflichtet.
              </p>
              <p>
                Soweit Anbieter Daten außerhalb des Europäischen
                Wirtschaftsraums verarbeiten, stützen wir die Übermittlung auf
                einen Angemessenheitsbeschluss, das EU-US Data Privacy
                Framework oder Standardvertragsklauseln und ergänzende
                Schutzmaßnahmen, soweit erforderlich.
              </p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention">14. Speicherdauer und Löschung</h2>
              <p>
                Konto- und Lerninhalte speichern wir grundsätzlich so lange,
                wie dein Konto besteht und die jeweilige Funktion genutzt wird.
                Hochgeladene Materialien werden gelöscht, wenn du das
                zugehörige Material oder den Lernplan entfernst beziehungsweise
                dein Konto gelöscht wird, soweit keine gesetzlichen Pflichten
                entgegenstehen. Technische Protokolle und Analysedaten werden
                nur so lange vorgehalten, wie sie für Sicherheit, Fehleranalyse
                und Produktverbesserung erforderlich sind.
              </p>
              <p>
                Du kannst die vollständige Löschung direkt in der App unter
                Einstellungen → Konto → Konto löschen veranlassen. Dabei werden
                dein Dayova-Konto, deine Lern- und Planungsdaten sowie deine
                hochgeladenen Materialien gelöscht. Wenn du keinen Zugriff auf
                die App hast, kannst du dich alternativ an <PrivacyEmailLink />
                wenden.
              </p>
              <p>
                Die Kontolöschung beendet ein über Apple oder Google
                abgeschlossenes Abonnement nicht automatisch. Ein aktives
                Store-Abonnement musst du zusätzlich in deinem App-Store-Konto
                kündigen. Gesetzlich aufzubewahrende Vertrags-, Steuer- und
                Zahlungsnachweise werden erst nach Ablauf der jeweiligen
                Fristen gelöscht. Daten können außerdem vorübergehend in
                technisch erforderlichen Sicherungen verbleiben und werden
                dort nach dem regulären Löschzyklus entfernt.
              </p>
            </section>

            <section aria-labelledby="privacy-minors">
              <h2 id="privacy-minors">15. Minderjährige</h2>
              <p>
                Dayova richtet sich auch an Schülerinnen und Schüler. Soweit
                für Registrierung, Einwilligung oder Vertragsschluss die
                Zustimmung einer sorgeberechtigten Person erforderlich ist,
                darf die App nur mit dieser Zustimmung verwendet werden. Wir
                verwenden Daten Minderjähriger nicht für personalisierte
                Werbung und bitten darum, keine unnötigen Daten über andere
                Schülerinnen, Schüler oder Lehrkräfte hochzuladen.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights">16. Deine Rechte</h2>
              <p>Du hast nach der DSGVO insbesondere das Recht auf:</p>
              <ul>
                <li>Auskunft über deine personenbezogenen Daten (Art. 15),</li>
                <li>Berichtigung unrichtiger Daten (Art. 16),</li>
                <li>Löschung deiner Daten (Art. 17),</li>
                <li>Einschränkung der Verarbeitung (Art. 18),</li>
                <li>Datenübertragbarkeit (Art. 20),</li>
                <li>
                  Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6
                  Abs. 1 lit. e oder f DSGVO (Art. 21),
                </li>
                <li>Widerruf einer Einwilligung für die Zukunft sowie</li>
                <li>
                  Beschwerde bei einer Datenschutzaufsichtsbehörde (Art. 77).
                </li>
              </ul>
              <p>
                Zur Ausübung deiner Rechte genügt eine Nachricht an{" "}
                <PrivacyEmailLink />.
              </p>
            </section>

            <section aria-labelledby="privacy-authority">
              <h2 id="privacy-authority">17. Datenschutzaufsicht</h2>
              <p>
                Zuständige Aufsichtsbehörde ist die Sächsische Datenschutz- und
                Transparenzbeauftragte, Maternistraße 17, 01067 Dresden. Weitere
                Informationen findest du unter{" "}
                <a
                  href="https://www.datenschutz.sachsen.de/"
                  rel="noreferrer"
                  target="_blank"
                >
                  datenschutz.sachsen.de
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-update">
              <h2 id="privacy-update">18. Stand dieser Erklärung</h2>
              <p>Stand: 5. September 2026</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
