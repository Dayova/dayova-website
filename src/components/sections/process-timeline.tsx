"use client";

import {
  CalendarAdd02Icon,
  PlayCircle02Icon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useRef, useState } from "react";

import { DayovaIcon } from "@/components/ui/huge-icon";

const processSteps = [
  {
    number: "01",
    title: "App herunterladen",
    description:
      "Lade Dayova herunter und richte dein Profil ein. Danach ist dein persönlicher Lernbegleiter startklar.",
    icon: SmartPhone01Icon,
  },
  {
    number: "02",
    title: "Termine und Lernzeiten eintragen",
    description:
      "Füge Prüfungen, Aufgaben und die Zeiten hinzu, an denen du lernen kannst. So weiß Dayova, was wann wichtig ist.",
    icon: CalendarAdd02Icon,
  },
  {
    number: "03",
    title: "Mit deinem Lernplan loslegen",
    description:
      "Dayova teilt deine Ziele in klare Lerneinheiten. Du arbeitest Schritt für Schritt und dein Plan passt sich deinem Fortschritt an.",
    icon: PlayCircle02Icon,
  },
] as const;

type LineMetrics = {
  height: number;
  progress: number;
  top: number;
};

const emptyLineMetrics: LineMetrics = { height: 0, progress: 0, top: 0 };

export function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineMetrics, setLineMetrics] = useState(emptyLineMetrics);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const activateStep = (index: number) => {
    setActiveIndex(index);

    const step = stepRefs.current[index];
    if (!step) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    step.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveStep = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const focusLine = window.innerHeight * 0.48;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        stepRefs.current.forEach((step, index) => {
          if (!step) return;
          const rect = step.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - focusLine);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      });
    };

    const observer = new IntersectionObserver(updateActiveStep, {
      root: null,
      rootMargin: "-36% 0px -36% 0px",
      threshold: [0, 0.5, 1],
    });

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    document.addEventListener("scroll", updateActiveStep, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveStep);
      document.removeEventListener("scroll", updateActiveStep, {
        capture: true,
      });
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  useEffect(() => {
    const timeline = timelineRef.current;
    const firstNode = nodeRefs.current[0];
    const activeNode = nodeRefs.current[activeIndex];
    const lastNode = nodeRefs.current[processSteps.length - 1];

    if (!timeline || !firstNode || !activeNode || !lastNode) return;

    const updateLine = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const firstRect = firstNode.getBoundingClientRect();
      const activeRect = activeNode.getBoundingClientRect();
      const lastRect = lastNode.getBoundingClientRect();
      const firstCenter = firstRect.top + firstRect.height / 2 - timelineRect.top;
      const activeCenter =
        activeRect.top + activeRect.height / 2 - timelineRect.top;
      const lastCenter = lastRect.top + lastRect.height / 2 - timelineRect.top;

      setLineMetrics({
        top: firstCenter,
        height: Math.max(0, lastCenter - firstCenter),
        progress: Math.max(0, activeCenter - firstCenter),
      });
    };

    updateLine();
    const observer = new ResizeObserver(updateLine);
    observer.observe(timeline);
    window.addEventListener("resize", updateLine);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLine);
    };
  }, [activeIndex]);

  return (
    <div className="home-classic-process-timeline" ref={timelineRef}>
      <span
        className="home-classic-process-timeline__track"
        style={{ top: lineMetrics.top, height: lineMetrics.height }}
        aria-hidden="true"
      >
        <span
          className="home-classic-process-timeline__progress"
          style={{ height: lineMetrics.progress }}
        />
      </span>

      <ol className="home-classic-process-timeline__list">
        {processSteps.map((step, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              className={`home-classic-process-step${isActive ? " home-classic-process-step--active" : ""}${index % 2 === 1 ? " home-classic-process-step--reverse" : ""}`}
              key={step.number}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
            >
              <button
                className="home-classic-process-step__button"
                type="button"
                aria-pressed={isActive}
                onClick={() => activateStep(index)}
              >
                <div className="home-classic-process-step__copy">
                  <span aria-hidden="true">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <span
                  className="home-classic-process-step__node"
                  aria-hidden="true"
                  ref={(element) => {
                    nodeRefs.current[index] = element;
                  }}
                />

                <span
                  className="home-classic-process-step__icon"
                  aria-hidden="true"
                >
                  <DayovaIcon
                    icon={step.icon}
                    size={30}
                    strokeWidth={1.8}
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
