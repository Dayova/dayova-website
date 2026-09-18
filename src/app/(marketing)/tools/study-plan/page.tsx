import { FaqAccordionSection } from "@/components/sections/faq-accordion-section";
import { siteConfig } from "@/config/site";
import { ContentSection } from "@/components/content/content-section";
import { JsonLd } from "@/components/seo/json-ld";
import { StudyPlanBuilder } from "@/components/tools/study-plan-builder";
import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";
import { studyPhases } from "@/lib/study-plan";

const description = "Erstelle kostenlos deinen Lernplan: Fach und Prüfungsdatum auswählen, mit Theorie, Üben und Praxis vorbereiten und direkt drucken. Ohne Anmeldung.";
export const metadata = createPageMetadata({ title: "Lernplan erstellen: kostenlos & ohne Anmeldung", description, path: "/tools/study-plan" });

export default function StudyPlanPage() {
  return <div className="content-page study-plan-page">
    <JsonLd data={createPageStructuredData({ name: "Kostenloser Lernplan-Ersteller", description, path: "/tools/study-plan", breadcrumbs: [{ name: "Dayova", path: "/" }, { name: "Lernplan erstellen", path: "/tools/study-plan" }] })} />
    <PageHero eyebrow="Kostenloser Lernplan" title="Dein Fach. Dein Termin. Dein Lernplan." description="Wähle dein Fach und deinen Prüfungstag. Dayova erstellt dir einen übersichtlichen Lernplan mit Theorie, Üben und Praxis – kostenlos und ohne Anmeldung." />
    <div className="dayova-container content-body">
      <ContentSection id="builder" title="Deinen Lernplan erstellen"><StudyPlanBuilder /><noscript><p>Bitte aktiviere JavaScript, um deinen Lernplan zu erstellen. Die drei Lernphasen findest du auch in der Erklärung darunter.</p></noscript></ContentSection>
      <ContentSection id="method" title="In drei Phasen zur Prüfung">
        <div className="study-plan-method">{studyPhases.map((phase) => <div key={phase.id}><h3>{phase.name}</h3><p>{phase.description}</p></div>)}</div>
        <p>Dein Lernplan verteilt die Phasen von heute bis zum Tag vor deiner Prüfung. Du entscheidest, wann du innerhalb dieser Zeiträume lernst.</p>
      </ContentSection>
      <ContentSection id="app" title="In der App wird dein Plan persönlicher">
        <p>In der Dayova-App gibt es zusätzlich eine Wissensanalyse und Lernmaterial. Damit kann Dayova genauer bestimmen, welche Themen du noch lernen musst, und deinen Lernplan besser auf dich abstimmen.</p>
        <p>Hol dir Dayova <a href={siteConfig.links.appStore}>im App Store für iPhone und iPad</a> oder <a href={siteConfig.links.googlePlay}>bei Google Play für Android</a>.</p>
      </ContentSection>
    </div>
    <FaqAccordionSection id="questions" name="study-plan-faq" title="Fragen zum kostenlosen Lernplan" items={[
      { question: "Was brauche ich für meinen Lernplan?", answer: "Wähle eines der vorgegebenen Schulfächer und trage deinen Prüfungstag ab morgen ein. Dein Lernplan startet automatisch heute und enthält die drei Phasen Theorie, Üben und Praxis." },
      { question: "Ist der Lernplan kostenlos?", answer: "Ja. Du kannst deinen Lernplan hier kostenlos und ohne Anmeldung erstellen." },
      { question: "Wie kann ich meinen Lernplan drucken?", answer: "Klicke nach dem Erstellen auf „Lernplan drucken“. Im Druckfenster deines Browsers kannst du einen Drucker wählen oder den Plan als PDF speichern. Beim Neuladen der Website geht dein erstellter Plan verloren." },
      { question: "Was bietet die Dayova-App zusätzlich?", answer: "Der Website-Plan orientiert sich an deinem Fach und Prüfungstermin. In der App kommen eine Wissensanalyse und Lernmaterial hinzu. Damit kann Dayova genauer einschätzen, welche Themen du noch lernen musst, und die Planung auf deinen Wissensstand abstimmen." },
    ]} />
  </div>;
}
