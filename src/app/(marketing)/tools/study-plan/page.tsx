import { ContentSection } from "@/components/content/content-section";
import { JsonLd } from "@/components/seo/json-ld";
import { StudyPlanBuilder } from "@/components/tools/study-plan-builder";
import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const description = "Erstelle deinen kostenlosen Lernplan mit Fach, Klasse, Themen, Termin und bis zu 4 Stunden Lernzeit pro Tag – direkt druckbar.";
export const metadata = createPageMetadata({ title: "Lernplan erstellen: kostenlos & ohne Anmeldung", description, path: "/tools/study-plan" });

export default function StudyPlanPage() {
  return <div className="content-page study-plan-page">
    <JsonLd data={createPageStructuredData({ name: "Kostenloser Lernplan-Ersteller", description, path: "/tools/study-plan", breadcrumbs: [{ name: "Dayova", path: "/" }, { name: "Lernplan erstellen", path: "/tools/study-plan" }] })} />
    <PageHero eyebrow="Kostenloser Lernplan" title="Dein Fach. Dein Termin. Dein Lernplan." description="Wähle Fach, Klasse und Prüfungstag, beschreibe die Themen und lege deine tägliche Lernzeit fest. Dayova erstellt dir einen übersichtlichen Lernplan mit Theorie, Üben und Praxis – kostenlos und ohne Anmeldung." />
    <div className="dayova-container content-body">
      <ContentSection id="builder" title="Deinen Lernplan erstellen"><StudyPlanBuilder /><noscript><p>Bitte aktiviere JavaScript, um deinen Lernplan zu erstellen.</p></noscript></ContentSection>
    </div>
  </div>;
}
