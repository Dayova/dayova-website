import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/content/content-section";
import { siteConfig } from "@/config/site";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const aboutDescription =
  "Lerne die Geschichte von Dayova kennen: Wie aus der Lernbegleitung seit 2023 eine App für Lernplanung und Prüfungsvorbereitung entstand.";

export const metadata: Metadata = createPageMetadata({
  title: "Über uns: Von der Lernbegleitung zur Lern-App",
  description: aboutDescription,
  path: "/about",
});

const aboutStructuredData = createPageStructuredData({
  type: "AboutPage",
  name: "Über Dayova",
  description: aboutDescription,
  path: "/about",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Über uns", path: "/about" },
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutStructuredData} />
      <section
        className="home-classic-section home-classic-process about-timeline-section"
        aria-labelledby="about-timeline-title"
      >
        <div className="dayova-container">
          <div className="home-classic-process__panel">
            <div className="home-classic-process__intro">
              <span className="home-classic-section-eyebrow">Über Dayova</span>
              <h1 id="about-timeline-title" className="dayova-section-title">
                Bevor es die App gab, haben wir Schüler beim Lernen begleitet.
              </h1>
              <p>
                Seit 2023 haben wir Lernprogramme, Videos und einen eigenen
                Campus aufgebaut. Dabei wurde immer deutlicher: Schüler brauchen
                nicht noch mehr Material, sondern einen Plan, der ihnen den
                nächsten Schritt zeigt.
              </p>
            </div>

            <ProcessTimeline variant="about" />
          </div>
        </div>
      </section>
      <div className="dayova-container content-body">
        <ContentSection id="experience" title="Was wir aus der Lernbegleitung in die App übernommen haben">
          <p>Unsere Geschichte begann 2023 mit der Nachhilfe von Julius Dietrich und Philipp Schossig. Daraus entstanden ein Lernprogramm, ein eigener Campus und später die App. Die wiederkehrende Frage vor Prüfungen war: Wie wird aus dem vorhandenen Material ein machbarer nächster Schritt?</p>
          <p>Deshalb beginnt Dayova heute bei Prüfungsthemen und freien Zeiten. Ein Lernschritt soll eine Aufgabe, ein Ziel und eine Dauer haben. So wird aus dem Prüfungstermin eine konkrete Aufgabe für den nächsten Lerntag.</p>
          <p>Das ist die Erfahrung hinter unserer Produktentscheidung. Sie ist kein wissenschaftlicher Beleg für eine bestimmte Notenverbesserung. Den Nutzen musst du an deinem eigenen Lernalltag prüfen.</p>
          <p><Link href="/tools/study-plan">Kostenlosen Lernplan erstellen</Link> · <Link href="/blog/warum-fortschritt-unsichtbar-bleibt">Lernfortschritte selbst überprüfen</Link></p>
        </ContentSection>
        <ContentSection id="public-feedback" title="Erfahrungen aus erster Hand nachlesen">
          <p>Öffentlich veröffentlichte Rückmeldungen zur App findest du im App Store. Dort kannst du die Rezensionen mit ihrem jeweiligen Datum und Kontext selbst lesen. Einzelne Erfahrungen sagen nicht voraus, wie die App für dich funktioniert.</p>
          <a className="content-link" href={siteConfig.links.appStore}>Dayova-Rezensionen im App Store lesen</a>
        </ContentSection>
      </div>
    </>
  );
}
