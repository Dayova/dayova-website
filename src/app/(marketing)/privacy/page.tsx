import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf der Dayova Website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        description="Hier erfährst du, welche Daten beim Besuch der Dayova Website verarbeitet werden und welche Rechte du hast."
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
                Verantwortlich für die Verarbeitung personenbezogener Daten auf
                dieser Website ist:
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
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>
              </p>
            </section>

            <section aria-labelledby="privacy-hosting">
              <h2 id="privacy-hosting">2. Hosting und Server-Protokolle</h2>
              <p>
                Die Website wird bei Vercel Inc. in den USA gehostet. Beim
                Aufruf der Website werden technisch erforderliche
                Verbindungsdaten verarbeitet. Dazu können IP-Adresse, Datum und
                Uhrzeit, aufgerufene Adresse, übertragene Datenmenge, Referrer,
                Browser, Betriebssystem und HTTP-Status gehören.
              </p>
              <p>
                Die Verarbeitung dient der sicheren und zuverlässigen
                Bereitstellung der Website sowie der Erkennung technischer
                Fehler und missbräuchlicher Zugriffe. Rechtsgrundlage ist Art.
                6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im
                sicheren Betrieb der Website. Mit Vercel besteht eine
                Vereinbarung zur Auftragsverarbeitung. Soweit Daten in den USA
                verarbeitet werden, stützt Vercel die Übermittlung auf
                anerkannte Garantien, insbesondere Standardvertragsklauseln und
                – soweit anwendbar – das EU-US Data Privacy Framework. Daten
                werden nur so lange gespeichert, wie dies für Betrieb,
                Sicherheit und gesetzliche Pflichten erforderlich ist.
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
              <h2 id="privacy-contact">3. Kontaktaufnahme</h2>
              <p>
                Das Kontaktformular auf der Website überträgt keine Eingaben an
                einen Dayova-Webserver. Es öffnet dein eingerichtetes
                E-Mail-Programm. Wenn du uns eine E-Mail sendest, verarbeiten
                wir deine E-Mail-Adresse, deinen Namen, den Inhalt deiner
                Nachricht und weitere von dir mitgeteilte Angaben, um dein
                Anliegen zu beantworten.
              </p>
              <p>
                Geht es um einen Vertrag oder vorvertragliche Maßnahmen, ist
                Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. Bei allgemeinen
                Anfragen beruht die Verarbeitung auf Art. 6 Abs. 1 lit. f
                DSGVO. Unser berechtigtes Interesse ist die Bearbeitung deiner
                Anfrage. Wir löschen die Daten, wenn das Anliegen erledigt ist
                und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section aria-labelledby="privacy-storage">
              <h2 id="privacy-storage">
                4. Erforderliche Speicherung im Browser
              </h2>
              <p>
                Wir speichern deine Entscheidung zur Reichweitenmessung im
                lokalen Speicher deines Browsers. Dadurch wird deine Auswahl
                bei einem späteren Besuch berücksichtigt. Diese Speicherung ist
                für die von dir gewählte Datenschutzeinstellung erforderlich.
                Rechtsgrundlagen sind § 25 Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <p>
                Im Lehrerdashboard werden Demo-Daten, Einstellungen und
                Einladungen lokal im Browser gespeichert. Auch die gewählte
                Farbdarstellung kann auf deinem Gerät gespeichert werden. Diese
                Daten werden nicht an einen Dayova-Server übertragen. Du kannst
                sie über die Einstellungen deines Browsers entfernen.
              </p>
            </section>

            <section aria-labelledby="privacy-analytics">
              <h2 id="privacy-analytics">5. Google Analytics 4</h2>
              <p>
                Wenn du ausdrücklich zustimmst, verwenden wir Google Analytics
                4 zur Reichweitenmessung. Anbieter ist Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland. Eine Verarbeitung
                durch Google LLC in den USA kann nicht ausgeschlossen werden.
                Google Analytics wird vor deiner Zustimmung nicht geladen.
              </p>
              <p>
                Dabei können aufgerufene Seiten, Herkunftsseite, Interaktionen,
                Zeitpunkt, ungefähre Region, Geräte- und Browserinformationen
                sowie pseudonyme Kennungen verarbeitet und Cookies wie
                <code>_ga</code> und <code>_ga_*</code> gesetzt werden. Google
                verwendet die IP-Adresse bei der Erfassung zur Bestimmung einer
                ungefähren Region und speichert sie nach eigenen Angaben in
                Google Analytics 4 nicht dauerhaft.
              </p>
              <p>
                Rechtsgrundlagen sind deine Einwilligung nach Art. 6 Abs. 1 lit.
                a DSGVO und § 25 Abs. 1 TDDDG. Du kannst deine Einwilligung
                jederzeit mit Wirkung für die Zukunft über
                „Cookie-Einstellungen“ im Footer widerrufen. Die
                Aufbewahrungsdauer für nutzerbezogene Ereignisdaten richtet sich
                nach der im Google-Analytics-Konto gewählten Frist von zwei oder
                vierzehn Monaten. Zusammengefasste Standardberichte können
                länger bestehen.
              </p>
              <p>
                Für Übermittlungen in die USA nutzt Google anerkannte
                Übermittlungsmechanismen, darunter – soweit anwendbar – das
                EU-US Data Privacy Framework und Standardvertragsklauseln. Mehr
                erfährst du in der{" "}
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

            <section aria-labelledby="privacy-payment">
              <h2 id="privacy-payment">6. Abonnements und Bezahlung</h2>
              <p>
                Wenn du auf der Preisseite ein Abonnement auswählst, wirst du zu
                einem von RevenueCat bereitgestellten Bezahlvorgang
                weitergeleitet. Anbieter ist RevenueCat, Inc., 1032 E Brandon
                Blvd #3003, Brandon, FL 33511, USA. RevenueCat setzt für die
                Zahlungsabwicklung Stripe ein.
              </p>
              <p>
                Dabei können technische Verbindungsdaten, die gewählte Leistung,
                Kontakt- und Rechnungsangaben, Zahlungsstatus und für die
                Zahlung erforderliche Daten verarbeitet werden. Dayova erhält
                keine vollständigen Kartenangaben. Die Verarbeitung ist für
                Vertragsabschluss und Zahlung erforderlich und beruht auf Art.
                6 Abs. 1 lit. b DSGVO. Gesetzlich aufzubewahrende Rechnungs- und
                Buchungsdaten verarbeiten wir auf Grundlage von Art. 6 Abs. 1
                lit. c DSGVO. Bei einer Verarbeitung in den USA nutzen die
                Anbieter die jeweils anwendbaren Garantien für
                Drittlandübermittlungen.
              </p>
              <p>
                Weitere Informationen findest du bei{" "}
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

            <section aria-labelledby="privacy-external-links">
              <h2 id="privacy-external-links">7. Externe Links</h2>
              <p>
                Die Website enthält Links zu sozialen Netzwerken, App-Stores
                und weiteren externen Angeboten. Erst wenn du einen solchen
                Link öffnest, erhält der jeweilige Anbieter Verbindungsdaten und
                verarbeitet sie nach seinen eigenen Datenschutzbestimmungen.
                Auf diese Verarbeitung haben wir keinen Einfluss.
              </p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention">8. Speicherdauer</h2>
              <p>
                Soweit in dieser Erklärung keine konkrete Frist genannt ist,
                speichern wir personenbezogene Daten nur so lange, wie sie für
                den jeweiligen Zweck benötigt werden. Anschließend löschen wir
                sie, sofern keine gesetzlichen Aufbewahrungspflichten oder die
                Sicherung und Durchsetzung von Ansprüchen eine weitere
                Speicherung erfordern.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights">9. Deine Rechte</h2>
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
                <li>
                  Widerruf einer Einwilligung für die Zukunft (Art. 7 Abs. 3)
                  sowie
                </li>
                <li>
                  Beschwerde bei einer Datenschutzaufsichtsbehörde (Art. 77).
                </li>
              </ul>
              <p>
                Zur Ausübung deiner Rechte genügt eine Nachricht an{" "}
                <a href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-authority">
              <h2 id="privacy-authority">10. Datenschutzaufsicht</h2>
              <p>
                Zuständige Aufsichtsbehörde ist die Sächsische Datenschutz- und
                Transparenzbeauftragte, Maternistraße 17, 01067 Dresden. Weitere
                Informationen und das Beschwerdeformular findest du unter{" "}
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
              <h2 id="privacy-update">11. Stand dieser Erklärung</h2>
              <p>Stand: 10. August 2026</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
