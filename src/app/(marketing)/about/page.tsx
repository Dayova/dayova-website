import type { Metadata } from "next";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata, createPageStructuredData } from "@/lib/seo";

const aboutDescription =
  "Bevor es Dayova als App gab, begleiteten wir Schüler beim Lernen. Hier zeigen wir den Weg von der Nachhilfe bis zum heutigen Lernplan.";

export const metadata: Metadata = createPageMetadata({
  title: "Wie aus Lernbegleitung Dayova wurde",
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
    </>
  );
}
