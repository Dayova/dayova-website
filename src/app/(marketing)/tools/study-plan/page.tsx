import Link from "next/link";
import { ContentSection } from "@/components/content/content-section";
import { JsonLd } from "@/components/seo/json-ld";
import { StudyPlanBuilder } from "@/components/tools/study-plan-builder";
import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const description = "Erstelle kostenlos einen Lernplan für deine Prüfung – ohne Anmeldung. Verteile Themen auf freie Tage, sieh Zeitlücken und speichere oder drucke deinen Plan.";
export const metadata = createPageMetadata({ title: "Lernplan erstellen: kostenlos & ohne Anmeldung", description, path: "/tools/study-plan" });

export default function StudyPlanPage() {
  return <div className="content-page study-plan-page">
    <JsonLd data={createPageStructuredData({ name: "Kostenloser Lernplan-Ersteller", description, path: "/tools/study-plan", breadcrumbs: [{ name: "Dayova", path: "/" }, { name: "Lernplan erstellen", path: "/tools/study-plan" }] })} />
    <PageHero eyebrow="Kostenlose Lernhilfe" title="Passt dein Prüfungsstoff in deine Lernzeit?" description="Trage Themen, Zeitschätzungen und freie Tage ein. Du bekommst einen Lernplan mit Wiederholungen und Puffer – oder siehst früh, was noch nicht hineinpasst." />
    <div className="dayova-container content-body">
      <ContentSection id="builder" title="Deinen Lernplan erstellen"><StudyPlanBuilder /><noscript><p>Der interaktive Rechner benötigt JavaScript. Die Anleitung und das Beispiel darunter kannst du auch ohne JavaScript nutzen und ausdrucken.</p></noscript></ContentSection>
      <ContentSection id="method" title="So rechnet die Planungshilfe">
        <ol className="content-steps"><li><strong>Deine Zeit ist die Grenze.</strong> Geplant wird vom Lernstart bis zum Tag vor der Prüfung, nur an ausgewählten Wochentagen. Mindestens 20 % der Tageszeit bleiben für Pausen und Verzögerungen frei.</li><li><strong>Übungszeit wird verteilt.</strong> Der Rechner wechselt zwischen deinen Themen in Abschnitten von höchstens 25 Minuten. Das ist eine Rechengröße, keine Vorgabe für deine Konzentrationsspanne.</li><li><strong>Wiederholung braucht einen späteren Tag.</strong> Zusätzlich zur geschätzten Übungszeit reserviert das Modell 25 %, mindestens zehn Minuten je Thema, für Wiederholung. Sie liegt frühestens an einem Tag nach Abschluss der ersten Übungszeit.</li><li><strong>Was nicht passt, bleibt sichtbar.</strong> Offene Minuten werden ausgewiesen. Der Rechner kürzt weder den Stoff heimlich noch plant er über deine Zeitgrenze hinaus.</li></ol>
        <p>Die Prozentwerte sind bewusst einfache Annahmen. Schwieriger Stoff kann mehr Wiederholung brauchen; vorhandenes Wissen weniger. Passe die Zeitschätzungen nach den ersten Aufgaben an. Der Rechner bewertet weder deine Antworten noch deine Prüfungsreife.</p>
      </ContentSection>
      <ContentSection id="example" title="Beispiel: Ein kleines Thema über mehrere Tage verteilen">
        <p>Für 60 Minuten Übungszeit kommen in diesem Modell 15 Minuten Wiederholung hinzu. Bei 30 verfügbaren Minuten pro Lerntag werden jeweils höchstens 20 Minuten verplant; der Rest bleibt frei.</p>
        <div className="content-table-wrap" role="region" aria-label="Beispielplan" tabIndex={0}><table className="content-table"><caption>Ein Thema, vier aufeinanderfolgende Lerntage</caption><thead><tr><th scope="col">Tag</th><th scope="col">Vorhaben</th><th scope="col">Frei / Puffer</th></tr></thead><tbody>{["Montag", "Dienstag", "Mittwoch", "Donnerstag"].map((day, index) => <tr key={day}><th scope="row">{day}</th><td>{index === 3 ? "15 Min. Wiederholen ohne Vorlage" : "20 Min. Üben"}</td><td>{index === 3 ? "15 Min." : "10 Min."}</td></tr>)}</tbody></table></div>
        <p>Die Wiederholung am Donnerstag ist eine Gelegenheit zum Prüfen, keine Garantie, dass der Stoff sitzt. Wenn du eine Aufgabe noch nicht lösen kannst, verändere den nächsten Plan.</p>
      </ContentSection>
      <ContentSection id="questions" title="Fragen zum kostenlosen Lernplan">
        <h3>Kann ich den Plan speichern oder als PDF ausgeben?</h3><p>Nach dem Berechnen kannst du eine Textdatei herunterladen oder den Plan drucken. Wenn dein Browser eine PDF-Ausgabe anbietet, wähle dort „Als PDF speichern“. Der Rechner speichert deine Eingaben nicht dauerhaft; beim Neuladen gehen sie verloren.</p>
        <h3>Kann ich mehrere Prüfungen gleichzeitig planen?</h3><p>Dieser Rechner plant für einen Prüfungstermin mit bis zu acht Themen und einem Zeitraum von höchstens 90 Tagen. Für mehrere Termine musst du die verfügbare Tageszeit zwischen den Plänen aufteilen. Sonst verplanst du dieselbe Stunde mehrfach. Nutze dazu unseren <Link href="/blog/mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst">Ratgeber zum Priorisieren mehrerer Prüfungen</Link>.</p>
        <h3>Wie schätze ich die benötigte Lernzeit?</h3><p>Bearbeite zunächst eine typische Aufgabe und prüfe deinen Lösungsweg. Schätze dann die noch fehlenden Schritte. Wiederhole diese Einschätzung nach dem ersten Lerntag. Unser Artikel erklärt, <Link href="/blog/wie-lange-sollte-ich-fuer-eine-pruefung-lernen">wie du die Lernzeit für eine Prüfung einschätzt</Link>.</p>
        <h3>Worin unterscheidet sich der Rechner von der Dayova-App?</h3><p>Der kostenlose Rechner verteilt deine eigenen Zeitschätzungen. Die App verbindet Prüfungsthemen und freie Zeiten mit Rückmeldungen aus deinen Antworten. <Link href="/downloads">Dayova-App herunterladen</Link>.</p>
      </ContentSection>
    </div>
  </div>;
}
