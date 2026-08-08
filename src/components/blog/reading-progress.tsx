"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector<HTMLElement>(
        "[data-blog-article]",
      );

      if (!article) {
        return;
      }

      const articleRect = article.getBoundingClientRect();
      const articleTop = window.scrollY + articleRect.top;
      const articleBottom = articleTop + article.offsetHeight;
      const readingStart = articleTop - window.innerHeight * 0.2;
      const readingEnd = articleBottom - window.innerHeight * 0.72;
      const readableDistance = Math.max(1, readingEnd - readingStart);
      const nextProgress =
        ((window.scrollY - readingStart) / readableDistance) * 100;

      setProgress(clamp(nextProgress));
      setIsActive(
        articleRect.top < window.innerHeight && articleRect.bottom > 112,
      );
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
      className={`blog-reading-progress${isActive ? " blog-reading-progress--active" : ""}`}
      aria-label="Lesefortschritt"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={roundedProgress}
      role="progressbar"
      style={
        { "--reading-progress": `${progress}%` } as CSSProperties
      }
    >
      <span className="blog-reading-progress__track" aria-hidden="true">
        <span className="blog-reading-progress__fill" />
      </span>
    </aside>
  );
}
