import type { Metadata } from "next";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Über uns: Die Geschichte von Dayova",
  description:
    "Vom ersten 16-Wochen-Lernprogramm über den eigenen Campus bis zur Lern-App: Erfahre, wie Dayova entstanden ist.",
  path: "/ueber-uns",
});

export default function AboutPage() {
  return (
    <section
      className="home-classic-section home-classic-process about-timeline-section"
      aria-labelledby="about-timeline-title"
    >
      <div className="dayova-container">
        <div className="home-classic-process__panel">
          <div className="home-classic-process__intro">
            <span className="home-classic-section-eyebrow">Über Dayova</span>
            <h1 id="about-timeline-title" className="dayova-section-title">
              Aus Nachhilfe wurde ein Lernbegleiter.
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
  );
}
