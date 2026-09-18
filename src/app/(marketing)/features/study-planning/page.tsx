import Image from "next/image";
import Link from "next/link";
import { ContentSection, FeaturePricing } from "@/components/content/content-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const description = "So erstellt Dayova deinen Lernplan aus Prüfungsstoff und freien Zeiten. Ablauf, Voraussetzungen, Preise und Grenzen – mit konkretem Beispiel erklärt.";
export const metadata = createPageMetadata({ title: "Automatischer Lernplan: So plant die Dayova-App", description, path: "/features/study-planning" });

export default function StudyPlanningPage() {
  return <div className="content-page">
    <JsonLd data={createPageStructuredData({ name: "Lernplanung mit Dayova", description, path: "/features/study-planning", breadcrumbs: [{ name: "Dayova", path: "/" }, { name: "Lernplanung", path: "/features/study-planning" }] })} />
    <PageHero eyebrow="Lernplanung mit Dayova" title="Aus Prüfungsstoff wird dein nächster Lernschritt." description="Du kennst den Termin. Dayova verteilt die Themen auf deine freien Lernzeiten und zeigt beim Öffnen, womit du anfangen kannst." actions={<><ButtonLink href="/downloads">Dayova herunterladen</ButtonLink><ButtonLink href="/tools/study-plan" variant="secondary">Kostenlosen Lernplan erstellen</ButtonLink></>} />
    <div className="dayova-container content-body">
      <nav className="content-toc" aria-label="Auf dieser Seite"><a href="#process">Ablauf</a><a href="#requirements">Voraussetzungen</a><a href="#example">Beispiel</a><a href="#costs">Kosten</a><a href="#limits">Grenzen</a></nav>
      <ContentSection id="process" title="Wie erstellt Dayova deinen Lernplan?">
        <div className="content-grid">
          <div><ol className="content-steps"><li><strong>Prüfung und Themen eintragen.</strong> Termin und Stoff bilden den Rahmen. Nutze die Themenliste aus dem Unterricht, damit die Planung zur tatsächlichen Prüfung passt.</li><li><strong>Freie Lernzeiten angeben.</strong> Trage Zeit ein, die neben Schule, Hausaufgaben und anderen Terminen wirklich verfügbar ist.</li><li><strong>Den nächsten Lernschritt öffnen.</strong> Du siehst Thema, Lernziel und Dauer. Deine Antworten helfen anschließend dabei, weitere Übungen auszuwählen.</li></ol><p>Der Unterschied zum Kalender: Ein Termin reserviert Zeit. Dayova verbindet die Zeit mit einer Lernaufgabe und Rückmeldungen zu deinem Wissen.</p></div>
          <figure className="content-product"><Image src="/images/dayova-product-2-light.png" width={1200} height={1200} sizes="(max-width: 767px) 80vw, 320px" alt="Dayova-Lernplan mit Thema, Lernziel, Dauer und Start der Lerneinheit" /><figcaption>Ein Lernschritt zeigt dir, was du in deiner Lernzeit bearbeiten sollst.</figcaption></figure>
        </div>
      </ContentSection>
      <ContentSection id="requirements" title="Was brauchst du für den Start?">
        <ul><li>Die Dayova-App auf einem kompatiblen iPhone, iPad oder Android-Gerät und ein Benutzerkonto.</li><li>Einen Prüfungstermin, die relevanten Themen und eine realistische Einschätzung deiner freien Zeiten.</li><li>Eigene Unterrichtsunterlagen zum Lernen und zum Prüfen von Erklärungen und Ergebnissen.</li></ul>
        <p>Die aktuellen Geräteanforderungen stehen im jeweiligen Store. Ein fertiger schulweiter Zugang oder ein bestimmtes Lehrbuch ist für die hier beschriebene persönliche Planung keine Voraussetzung.</p>
        <p>Für den begleiteten Einsatz in einer Lerngruppe gibt es ein eigenes <Link href="/schools">Pilotangebot für Schulen</Link>.</p>
      </ContentSection>
      <ContentSection id="example" title="Beispiel: Mathearbeit in zwei Wochen">
        <p className="content-small">Illustratives Anwendungsbeispiel, kein dokumentierter Kundenfall.</p>
        <p>Du trägst Bruchrechnung, Gleichungen und Textaufgaben als Themen ein. An Trainingstagen ist nur ein kurzes Zeitfenster frei. Statt überall „Mathe lernen“ einzutragen, brauchst du konkrete Aufgaben: Brüche addieren, Gleichungen umformen und einen Lösungsweg erklären.</p>
        <div className="content-card"><h3>Was du selbst überprüfen kannst</h3><p>Öffne den vorgeschlagenen Lernschritt und prüfe: Passt das Thema zur Arbeit? Reicht meine Zeit? Kann ich die Aufgabe danach ohne Vorlage lösen? Eine passende Planung beantwortet die ersten beiden Fragen. Die dritte prüfst du durch Lernen.</p></div>
        <p>Wenn deine Antworten eine Lücke zeigen, soll die weitere Vorbereitung dort ansetzen. Wie du solche Rückmeldungen einordnest, erklärt die Seite zur <Link href="/features/learning-progress">Lernstandsanalyse in Dayova</Link>.</p>
      </ContentSection>
      <FeaturePricing />
      <ContentSection id="limits" title="Wann reicht eine Lernplan-App nicht aus?">
        <p>Ein Plan schafft keine zusätzlichen Stunden und kann nicht garantieren, dass du einen Stoff in der verbleibenden Zeit beherrschst. Unklare Prüfungsanforderungen klärst du mit deiner Lehrkraft. Wenn Grundlagen fehlen und Erklärungen nicht helfen, ist persönliche Unterstützung sinnvoll.</p>
        <p>KI-generierte Lerninhalte können Fehler enthalten. Vergleiche sie mit deinen Unterrichtsmaterialien. Dayova ersetzt weder fachliche Prüfung noch Unterricht oder persönliche Nachhilfe.</p>
        <p><Link href="/blog/eine-lern-app-sollte-dir-arbeit-abnehmen">Lern-App, Lernvideos oder Nachhilfe: Welche Hilfe passt?</Link></p>
      </ContentSection>
      <ContentSection id="next" title="Erst selbst einen Plan ausprobieren">
        <p>Mit unserem kostenlosen Rechner kannst du Themen und verfügbare Zeit aufteilen – ohne Konto. Er arbeitet mit deinen Zeitschätzungen und wertet keine Antworten aus. Die App verbindet den Plan zusätzlich mit deinem Lernstand.</p>
        <div className="content-actions"><ButtonLink href="/tools/study-plan">Lernplan ohne Anmeldung erstellen</ButtonLink><ButtonLink href="/blog/ein-lernplan-der-in-deinen-alltag-passt" variant="secondary">Anleitung zur Lernplanung lesen</ButtonLink></div>
      </ContentSection>
    </div>
  </div>;
}
