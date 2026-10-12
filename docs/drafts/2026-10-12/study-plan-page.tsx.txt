import { ContentSection } from "@/components/content/content-section";
import { FaqAccordionSection } from "@/components/sections/faq-accordion-section";
import { JsonLd } from "@/components/seo/json-ld";
import { StudyPlanBuilder } from "@/components/tools/study-plan-builder";
import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const description = "Erstelle kostenlos einen Lernplan mit freien Tagen: Fach, Klasse, Themen, Prüfungstermin, Lernrhythmus und Dauer angeben – direkt druckbar.";
export const metadata = createPageMetadata({ title: "Lernplan erstellen: kostenlos & ohne Anmeldung", description, path: "/tools/study-plan" });

export default function StudyPlanPage() {
  return <div className="content-page study-plan-page">
    <JsonLd data={createPageStructuredData({ name: "Kostenloser Lernplan-Ersteller", description, path: "/tools/study-plan", breadcrumbs: [{ name: "Dayova", path: "/" }, { name: "Lernplan erstellen", path: "/tools/study-plan" }] })} />
    <PageHero eyebrow="Kostenloser Lernplan" title="Dein Fach. Dein Termin. Dein Lernplan." description="Wähle Fach, Klasse und Prüfungstag, beschreibe die Themen und lege Dauer und Rhythmus fest. Dayova verteilt Theorie, Üben und Praxis auf konkrete Lerntermine mit freien Tagen dazwischen." />
    <div className="dayova-container content-body">
      <ContentSection id="builder" title="Deinen Lernplan erstellen"><StudyPlanBuilder /><noscript><p>Bitte aktiviere JavaScript, um deinen Lernplan zu erstellen.</p></noscript></ContentSection>
    </div>
    <FaqAccordionSection id="questions" name="study-plan-faq" title="Fragen zum Lernplansimulator" items={[
      { question: "Muss ich jeden Tag lernen?", answer: "Nein. Du wählst zwei bis fünf Lerneinheiten pro Woche. Der Simulator verteilt die Termine möglichst gleichmäßig bis zur Prüfung und lässt freie Tage dazwischen. Nur bei einem sehr nahen Prüfungstermin können Termine dichter zusammenliegen." },
      { question: "Wie wird die Lernzeit berechnet?", answer: "Du bestimmst die Dauer einer Lerneinheit und wie oft du pro Woche lernen möchtest. Daraus berechnet der Simulator die möglichen Termine bis zum Tag vor der Prüfung. Die Gesamtzeit ist die Anzahl der Termine multipliziert mit der Dauer pro Einheit." },
      { question: "Kann ich den Lernplan ausdrucken?", answer: "Ja. Klicke nach dem Erstellen auf „Lernplan drucken“. Im Druckfenster deines Browsers kannst du einen Drucker wählen oder den Plan als PDF speichern. Beim Neuladen der Seite geht der Plan verloren." },
      { question: "Was macht die Dayova-App automatisch?", answer: "Der Simulator verteilt deine Angaben nach einem einfachen Modell. In der App berücksichtigt Dayova zusätzlich deine verfügbaren Lernzeiten, Wissensanalyse, Lernmaterialien und deinen Fortschritt. Dadurch kann dein Lernplan genauer erstellt und bei Änderungen neu angepasst werden." },
    ]} />
  </div>;
}
