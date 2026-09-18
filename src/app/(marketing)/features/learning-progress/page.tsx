import Image from "next/image";
import Link from "next/link";
import { ContentSection, FeaturePricing } from "@/components/content/content-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const description = "Lernfortschritte nachvollziehen mit Dayova: Antworten und offene Prüfungsthemen einordnen, die nächste Übung wählen und Grenzen der Lernanalyse verstehen.";
export const metadata = createPageMetadata({ title: "Lernstandsanalyse: Lernfortschritte nachvollziehen", description, path: "/features/learning-progress" });

export default function LearningProgressPage() {
  return <div className="content-page">
    <JsonLd data={createPageStructuredData({ name: "Lernstandsanalyse mit Dayova", description, path: "/features/learning-progress", breadcrumbs: [{ name: "Dayova", path: "/" }, { name: "Lernstandsanalyse", path: "/features/learning-progress" }] })} />
    <PageHero eyebrow="Lernstandsanalyse mit Dayova" title="Du hast gelernt. Was sitzt schon?" description="Dayova verbindet Antworten mit deinen Prüfungsthemen. Du erkennst, wo weitere Übung nötig ist, und kannst den nächsten Lernschritt besser einordnen." actions={<><ButtonLink href="/downloads">Dayova ausprobieren</ButtonLink><ButtonLink href="/blog/warum-fortschritt-unsichtbar-bleibt" variant="secondary">Lernfortschritt selbst prüfen</ButtonLink></>} />
    <div className="dayova-container content-body">
      <ContentSection id="analysis" title="Was zeigt dir die Lernanalyse?">
        <div className="content-grid"><div><p>Erledigte Lernzeit und fachlicher Lernstand beantworten unterschiedliche Fragen. Eine abgeschlossene Einheit zeigt, dass du eine Aufgabe bearbeitet hast. Deine Antworten geben Hinweise darauf, welche Inhalte du bereits anwenden kannst.</p><p>In der Dayova-Analyse siehst du Prüfungsthemen mit einer Einordnung des Lernstands. Nutze sie als Ausgangspunkt für die nächste Übung. Eine einzelne Antwort ist noch kein vollständiges Bild deines Wissens.</p><p>Du brauchst ein Konto, angelegte Prüfungsthemen und eigene Antworten aus deinen Lernschritten. Ohne solche Antworten gibt es keine verlässliche Grundlage, um daraus Fortschritt abzuleiten.</p></div><figure className="content-product"><Image src="/images/dayova-product-3-light.png" width={1200} height={1200} sizes="(max-width: 767px) 80vw, 320px" alt="Dayova-Analyse mit Prüfungsthemen, Antwortanzahl und Lernstand je Thema" /><figcaption>Die Themenübersicht zeigt, wo dein Lernen weitergehen kann.</figcaption></figure></div>
      </ContentSection>
      <ContentSection id="example" title="Ein Fehler wird zu einer konkreten nächsten Aufgabe">
        <p className="content-small">Illustratives Beispiel; die folgenden Schritte sind eine Lernhilfe, keine Messung an einem Kunden.</p>
        <div className="content-grid"><div className="content-card"><h3>Beobachten</h3><p>Bei zwei Gleichungen stimmt das Ergebnis nicht. Beim Vergleichen der Lösungswege fällt auf: Beim Umformen wechselt ein Vorzeichen falsch.</p></div><div className="content-card"><h3>Gezielt üben</h3><p>Prüfe die Regel im Unterrichtsmaterial, erkläre den fehlerhaften Schritt und löse eine neue Gleichung. Vergleiche anschließend eine ähnliche Aufgabe an einem späteren Tag.</p></div></div>
        <p>„Zwei Aufgaben ohne Hinweis gelöst“ beschreibt deinen Lernstand genauer als „30 Minuten gelernt“. Bewerte dabei auch die Schwierigkeit: Ein leichterer Aufgabentyp ist kein direkter Vergleich zu einem schwierigeren.</p>
        <p><Link href="/blog/warum-fortschritt-unsichtbar-bleibt">Die Vorlage zum Beobachten deiner Lernfortschritte nutzen</Link></p>
      </ContentSection>
      <ContentSection id="plan" title="Wie wird daraus der nächste Lernschritt?">
        <p>Dayova nutzt Rückmeldungen aus Antworten für die weitere Lernplanung. Unsichere Inhalte brauchen andere nächste Aufgaben als Themen, die du bereits sicher anwenden kannst. Der Prüfungstermin und deine verfügbaren Zeiten bleiben dabei Teil des Plans.</p>
        <p><Link href="/features/study-planning">So funktioniert die Lernplanung in Dayova</Link></p>
      </ContentSection>
      <FeaturePricing />
      <ContentSection id="limits" title="Was eine Lernstandsanalyse nicht aussagt">
        <ul><li>Sie prognostiziert keine Note und ersetzt keine schulische Leistungsbewertung.</li><li>Sie ist von deinen Antworten und den gestellten Aufgaben abhängig. Raten, Hilfen und unterschiedliche Schwierigkeit verändern das Ergebnis.</li><li>KI-Auswertungen können falsch liegen. Prüfe unklare Rückmeldungen anhand von Lösungen oder mit deiner Lehrkraft.</li></ul>
        <p>Für Eltern ist die persönliche App kein Versprechen eines separaten Eltern-Dashboards. Ihr könnt gemeinsam über die nächsten Schritte sprechen. Ansichten und Funktionen für Lehrkräfte werden im <Link href="/schools">Schul-Pilotprojekt</Link> ausdrücklich vereinbart.</p>
      </ContentSection>
      <ContentSection id="basis" title="Warum wir Planung mit Rückmeldung verbinden">
        <p>Die Education Endowment Foundation empfiehlt, Lernende beim Planen, Beobachten und Auswerten ihres Lernens zu unterstützen – eingebettet in konkrete Fachaufgaben. Das stützt den pädagogischen Ansatz, ist aber kein Wirksamkeitsnachweis für Dayova.</p>
        <p><a href="https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition">EEF-Leitfaden zu selbstreguliertem Lernen</a> · <Link href="/about">Wie Dayova aus Lernbegleitung entstand</Link></p>
      </ContentSection>
    </div>
  </div>;
}
