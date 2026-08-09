"use client";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { useRef, useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import type { LessonRecommendation } from "../types";
import { PrimaryAction, SecondaryAction } from "./dashboard-ui";

export function TomorrowRecommendationsCarousel({
  recommendations,
}: {
  recommendations: LessonRecommendation[];
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const moveTo = (index: number) => {
    const rail = railRef.current;
    if (!rail || recommendations.length === 0) return;

    const nextIndex = (index + recommendations.length) % recommendations.length;
    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>(".teacher-tomorrow-slide"),
    );
    const target = cards[nextIndex];
    const first = cards[0];
    if (!target || !first) return;

    rail.scrollTo({
      left: target.offsetLeft - first.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  };

  const updateActiveCard = () => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>(".teacher-tomorrow-slide"),
    );
    const first = cards.at(0);
    if (!first) return;
    const firstOffset = first.offsetLeft;
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.offsetLeft - firstOffset - rail.scrollLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActiveIndex(nearest.index);
  };

  if (recommendations.length === 0) return null;

  return (
    <section className="teacher-tomorrow-carousel" aria-labelledby="tomorrow-heading">
      <header className="teacher-tomorrow-carousel-header">
        <div>
          <div className="teacher-tomorrow-label">
            <DayovaIcon icon={SparklesIcon} size={18} />
            <span>Für morgen empfohlen</span>
          </div>
          <h2 id="tomorrow-heading">Ihre nächsten Klassen vorbereitet</h2>
          <p>Wählen Sie eine Klasse und starten Sie direkt mit dem wichtigsten Schwerpunkt.</p>
        </div>
        {recommendations.length > 1 ? (
          <div className="teacher-carousel-controls" aria-label="Empfehlungen wechseln">
            <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Vorherige Klasse">
              <DayovaIcon icon={ArrowLeft01Icon} size={20} />
            </button>
            <span>{activeIndex + 1} / {recommendations.length}</span>
            <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Nächste Klasse">
              <DayovaIcon icon={ArrowRight01Icon} size={20} />
            </button>
          </div>
        ) : null}
      </header>

      <div
        className="teacher-tomorrow-rail"
        ref={railRef}
        onScroll={updateActiveCard}
        tabIndex={0}
        aria-label="Empfehlungen für morgige Klassen"
      >
        {recommendations.map((recommendation, index) => (
          <article
            className="teacher-tomorrow-slide"
            data-active={index === activeIndex}
            key={recommendation.id}
            aria-label={`${recommendation.className} ${recommendation.subject}, Empfehlung ${index + 1} von ${recommendations.length}`}
          >
            <div className="teacher-tomorrow-slide-meta">
              <strong>{recommendation.className}</strong>
              <span>{recommendation.subject}</span>
              <span>{recommendation.durationMinutes} Min.</span>
            </div>
            <h3>{recommendation.lessonTitle}</h3>
            <p>{recommendation.whyThisMattersNow}</p>
            <div className="teacher-tomorrow-slide-focus">
              <span>Schwerpunkt</span>
              <strong>{recommendation.primaryTopic}</strong>
            </div>
            <div className="teacher-tomorrow-actions">
              <PrimaryAction href="/lehrkraefte/assistent">Stunde vorbereiten</PrimaryAction>
              <SecondaryAction href={`/lehrkraefte/analysen/${recommendation.teachingGroupId}`}>
                Lernstand
              </SecondaryAction>
            </div>
          </article>
        ))}
      </div>

      <div className="teacher-carousel-dots" aria-label="Klasse direkt auswählen">
        {recommendations.map((recommendation, index) => (
          <button
            type="button"
            key={recommendation.id}
            data-active={index === activeIndex}
            onClick={() => moveTo(index)}
            aria-label={`${recommendation.className} ${recommendation.subject} anzeigen`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
