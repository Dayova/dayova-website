"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type ReadingProgressProps = {
  readingTime: string;
};

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function ReadingProgress({ readingTime }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector<HTMLElement>(
        "[data-blog-article]",
      );

      if (!article) {
        return;
      }

      const articleTop = article.offsetTop;
      const readableDistance = Math.max(
        1,
        article.offsetHeight - window.innerHeight * 0.55,
      );
      const nextProgress =
        ((window.scrollY - articleTop + window.innerHeight * 0.22) /
          readableDistance) *
        100;

      setProgress(clamp(nextProgress));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const roundedProgress = Math.round(progress);

  return (
    <aside
      className="blog-reading-progress"
      aria-label={`${roundedProgress} Prozent des Beitrags gelesen`}
      style={
        { "--reading-progress": `${progress}%` } as CSSProperties
      }
    >
      <span className="blog-reading-progress__time">{readingTime} Lesezeit</span>
      <span className="blog-reading-progress__value">
        {roundedProgress}% gelesen
      </span>
      <span className="blog-reading-progress__track" aria-hidden="true">
        <span />
      </span>
    </aside>
  );
}
