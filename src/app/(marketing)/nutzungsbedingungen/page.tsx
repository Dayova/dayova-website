import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen",
  description:
    "Vertragsbedingungen für Dayova-Abonnements, Laufzeiten, Kündigung und Widerruf.",
  alternates: { canonical: "/nutzungsbedingungen" },
  robots: { index: false, follow: true },
};

const providerAddress = (
  <>
    Julius Dietrich, Dayova
    <br />
    Hohe Straße 54
    <br />
    01187 Dresden
    <br />
    Deutschland
  </>
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Nutzungsbedingungen"
        description="Die wichtigsten Bedingungen für dein Dayova-Abo – verständlich zusammengefasst."
        className="legal-page-hero"
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Bedingungen für Dayova-Abos
            </span>

            <section aria-labelledby="terms-provider">
              <h2 id="terms-provider">1. Anbieter und Geltungsbereich</h2>
              <p>
                Diese Nutzungsbedingungen gelten für kostenpflichtige
                Dayova-Abonnements, die über die Dayova-Website abgeschlossen
                werden. Anbieter und Vertragspartner ist:
              </p>
              <p>
                {providerAddress}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>
              </p>
            </section>

            <section aria-labelledby="terms-service">
              <h2 id="terms-service">2. Leistung</h2>
              <p>
                Das Dayova-Abo gewährt für seine Laufzeit Zugang zu den im
                ausgewählten Tarif beschriebenen Funktionen der Dayova-App.
                Der konkrete Leistungsumfang ergibt sich aus der Preis- und
                Bestellseite. Dayova darf Funktionen weiterentwickeln, sofern
                der wesentliche Nutzen des gebuchten Tarifs erhalten bleibt.
              </p>
            </section>

            <section aria-labelledby="terms-contract">
              <h2 id="terms-contract">3. Vertragsschluss</h2>
              <p>
                Auf der Preisseite wählst du einen Tarif und wirst zum sicheren
                Bezahlvorgang von RevenueCat weitergeleitet. Vor der
                zahlungspflichtigen Bestellung werden Tarif, Laufzeit,
                Gesamtpreis und Verlängerung angezeigt. Der Vertrag kommt mit
                der Bestätigung der zahlungspflichtigen Bestellung zustande.
                Die Vertragsbestätigung wird an die beim Kauf angegebene
                E-Mail-Adresse gesendet.
              </p>
              <p>
                Minderjährige dürfen ein kostenpflichtiges Abo nur mit der
                erforderlichen Zustimmung ihrer gesetzlichen Vertreter
                abschließen.
              </p>
            </section>

            <section aria-labelledby="terms-price">
              <h2 id="terms-price">4. Preise und Zahlung</h2>
              <p>
                Es gilt der unmittelbar vor der Bestellung angezeigte
                Gesamtpreis. Umsatzsteuer wird berücksichtigt und ausgewiesen,
                soweit dies gesetzlich erforderlich ist. RevenueCat wickelt das
                Abo ab und setzt Stripe als Zahlungsdienstleister ein. Dayova
                erhält keine vollständigen Kartenangaben.
              </p>
            </section>

            <section aria-labelledby="terms-trial">
              <h2 id="terms-trial">5. Kostenlose Testphase</h2>
              <p>
                Die separat angebotene 14-tägige Testphase erfordert keine
                Zahlungsdaten, endet automatisch und wird nicht automatisch in
                ein kostenpflichtiges Abo umgewandelt. Ein kostenpflichtiges
                Abo beginnt erst nach einer eigenständigen Bestellung.
              </p>
            </section>

            <section aria-labelledby="terms-duration">
              <h2 id="terms-duration">6. Laufzeit, Verlängerung und Kündigung</h2>
              <p>
                Monatsabos verlängern sich jeweils um einen weiteren Monat,
                Jahresabos jeweils um ein weiteres Jahr, wenn sie nicht vor dem
                nächsten Verlängerungszeitpunkt gekündigt werden. Der genaue
                Zeitpunkt wird im Bezahlvorgang und in der Bestätigung
                angezeigt.
              </p>
              <p>
                Die Kündigung ist über den Verwaltungslink in den Kauf- und
                Beleg-E-Mails oder per Nachricht an{" "}
                <a href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>{" "}
                möglich. Nach einer Kündigung bleibt der Zugang bis zum Ende
                des bereits bezahlten Zeitraums bestehen. Das gesetzliche Recht
                zur außerordentlichen Kündigung bleibt unberührt.
              </p>
            </section>

            <section aria-labelledby="terms-access">
              <h2 id="terms-access">7. Freischaltung und Einlöse-Link</h2>
              <p>
                Nach einem anonymen Webkauf stellt RevenueCat einen
                persönlichen Einlöse-Link bereit. Dieser Link ordnet das Abo
                dem Dayova-Konto zu, in dem er geöffnet wird, und darf nicht an
                Dritte weitergegeben werden. Ist der Link abgelaufen, kann über
                die Kauf-E-Mail ein neuer Link angefordert werden.
              </p>
            </section>

            <section aria-labelledby="terms-availability">
              <h2 id="terms-availability">8. Verfügbarkeit und Nutzerpflichten</h2>
              <p>
                Wartung, Sicherheitsmaßnahmen oder Umstände außerhalb unseres
                Einflusses können die Verfügbarkeit vorübergehend
                einschränken. Zugangsdaten und Einlöse-Links sind vertraulich zu
                behandeln. Eine missbräuchliche, rechtswidrige oder die
                Sicherheit anderer beeinträchtigende Nutzung ist unzulässig.
              </p>
            </section>

            <section aria-labelledby="terms-rights">
              <h2 id="terms-rights">9. Mängelrechte und Haftung</h2>
              <p>
                Es gelten die gesetzlichen Mängelrechte für digitale Produkte.
                Dayova haftet unbeschränkt bei Vorsatz, grober Fahrlässigkeit,
                Verletzung von Leben, Körper oder Gesundheit sowie in allen
                Fällen zwingender gesetzlicher Haftung. Im Übrigen gelten die
                gesetzlichen Haftungsregelungen.
              </p>
            </section>

            <section aria-labelledby="terms-withdrawal">
              <h2 id="terms-withdrawal">10. Widerrufsbelehrung</h2>
              <p>
                Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe
                von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist
                beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
              </p>
              <p>
                Um das Widerrufsrecht auszuüben, musst du uns unter der oben
                genannten Anschrift oder per E-Mail an{" "}
                <a href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>{" "}
                mittels einer eindeutigen Erklärung über deinen Entschluss
                informieren. Zur Wahrung der Frist reicht es aus, dass du die
                Mitteilung vor Ablauf der Widerrufsfrist absendest.
              </p>
              <h3>Folgen des Widerrufs</h3>
              <p>
                Im Widerrufsfall erstatten wir alle erhaltenen Zahlungen
                unverzüglich und spätestens binnen vierzehn Tagen ab Eingang
                des Widerrufs. Für die Rückzahlung verwenden wir grundsätzlich
                dasselbe Zahlungsmittel. Hast du ausdrücklich verlangt, dass
                die Leistung während der Widerrufsfrist beginnt, kann der
                gesetzlich zulässige Wertersatz für bereits erbrachte
                Leistungen anfallen.
              </p>
              <h3>Muster-Widerrufsformular</h3>
              <p>
                Wenn du den Vertrag widerrufen willst, kannst du folgende
                Angaben per E-Mail übermitteln: „Hiermit widerrufe ich den von
                mir abgeschlossenen Vertrag über das Dayova-Abo.“ Ergänze
                Bestelldatum, verwendete E-Mail-Adresse, deinen Namen, deine
                Anschrift und das Datum der Erklärung.
              </p>
            </section>

            <section aria-labelledby="terms-dispute">
              <h2 id="terms-dispute">11. Streitbeilegung und Schlussbestimmungen</h2>
              <p>
                Wir sind nicht bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen. Es gilt deutsches
                Recht unter Wahrung zwingender Verbraucherschutzvorschriften
                des Staates, in dem du deinen gewöhnlichen Aufenthalt hast.
              </p>
            </section>

            <section aria-labelledby="terms-version">
              <h2 id="terms-version">12. Stand</h2>
              <p>Stand: 15. August 2026</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
