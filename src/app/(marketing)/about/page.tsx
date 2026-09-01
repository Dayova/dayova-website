import type { Metadata } from "next";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const aboutDescription =
  "Dayova entstand aus echter Lernbegleitung: Erfahre, wie aus Nachhilfe, Lernprogrammen und einem Campus eine persönliche Lernplan-App wurde.";

export const metadata: Metadata = createPageMetadata({
  title: "Über Dayova: Lern-App aus echter Lernbegleitung",
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
                Aus Lernbegleitung wurde eine persönliche Lern-App.
              </h1>
              <p>
                Dayova ist aus der täglichen Arbeit mit Schülerinnen und Schülern
                entstanden. Sieben Meilensteine zeigen den Weg vom ersten
                16-Wochen-Programm über einen eigenen Campus bis zur Lern-App.
              </p>
            </div>

            <ProcessTimeline variant="about" />
          </div>
        </div>
      </section>
    </>
  );
}
