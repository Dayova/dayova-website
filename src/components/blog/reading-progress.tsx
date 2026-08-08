"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [trackBottom, setTrackBottom] = useState(28);

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
      const isMobile = window.innerWidth < 600;
      const trackTop = isMobile
        ? 128
        : Math.min(196, Math.max(152, window.innerHeight * 0.18));
      const defaultBottom = isMobile
        ? 16
        : Math.min(72, Math.max(28, window.innerHeight * 0.07));
      const articleInset = isMobile ? 16 : 24;
      const articleBoundBottom =
        window.innerHeight - articleRect.bottom + articleInset;
      const maximumBottom = Math.max(
        defaultBottom,
        window.innerHeight - trackTop - 24,
      );

      setProgress(clamp(nextProgress));
      setTrackBottom(
        Math.min(maximumBottom, Math.max(defaultBottom, articleBoundBottom)),
      );
      setIsActive(
        articleRect.top < window.innerHeight && articleRect.bottom > trackTop + 24,
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
        {
          "--reading-progress": `${progress}%`,
          "--reading-progress-bottom": `${trackBottom}px`,
        } as CSSProperties
      }
    >
      <span className="blog-reading-progress__track" aria-hidden="true">
        <span className="blog-reading-progress__fill" />
        <span className="blog-reading-progress__thumb" />
      </span>
    </aside>
  );
}
