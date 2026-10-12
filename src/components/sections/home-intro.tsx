"use client";

import { useEffect, useState, type CSSProperties } from "react";
import styles from "./home-intro.module.css";

type IntroPhase = "loading" | "blooming" | "complete";

export function HomeIntro() {
  const [phase, setPhase] = useState<IntroPhase>("loading");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    let assetTimeout: ReturnType<typeof setTimeout>;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateSize = () => {
      // The flower's smallest outer radius is about 165px. Cover every corner
      // without enlarging it far beyond the viewport and creating a long pause.
      setScale((Math.hypot(window.innerWidth, window.innerHeight) / 2 + 24) / 165);
    };
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('img[src*="dayova-phones"]'));
    const assetsReady = Promise.allSettled([
      document.fonts.ready,
      ...images.map((image) => image.decode().catch(() => undefined)),
    ]);
    const boundedWait = new Promise<void>((resolve) => {
      assetTimeout = setTimeout(resolve, 1000);
    });
    void Promise.race([assetsReady, boundedWait]).then(() => {
      if (cancelled) return;
      clearTimeout(assetTimeout);
      frame = requestAnimationFrame(() => {
        updateSize();
        setPhase(reducedMotion.matches ? "complete" : "blooming");
      });
    });
    // A failed image, interrupted animation, or preference change must never
    // leave the content permanently hidden.
    const fallback = setTimeout(() => setPhase("complete"), 4500);
    const onMotionChange = () => { if (reducedMotion.matches) setPhase("complete"); };
    reducedMotion.addEventListener("change", onMotionChange);
    window.addEventListener("resize", updateSize);
    return () => {
      cancelled = true;
      clearTimeout(assetTimeout);
      clearTimeout(fallback);
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", onMotionChange);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <>
    <noscript><style>{`[data-home-intro] { display: none !important; } [aria-labelledby="home-hero-title"] *, body:has(#home-hero-title) header * { animation: none !important; }`}</style></noscript>
    <svg className={styles.intro} data-home-intro={phase} style={{ "--flower-scale": scale } as CSSProperties} aria-hidden="true" focusable="false" width="100%" height="100%">
      <defs>
        <mask id="dayova-intro-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" style={{ maskType: "luminance" }}>
          <rect width="100%" height="100%" fill="white" />
          <svg x="50%" y="50%" width="1" height="1" overflow="visible">
            <g className={styles.flower} fill="black" onAnimationEnd={(event) => {
              if (event.target === event.currentTarget) setPhase((current) => current === "blooming" ? "complete" : current);
            }}>
              {Array.from({ length: 9 }, (_, index) => {
                const angle = (index * 40 * Math.PI) / 180;
                return <circle key={index} className={styles.petal} r="87" style={{
                  "--x": `${(Math.sin(angle) * 86).toFixed(4)}px`,
                  "--y": `${(-Math.cos(angle) * 86).toFixed(4)}px`,
                } as CSSProperties} />;
              })}
            </g>
          </svg>
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="var(--color-page)" mask="url(#dayova-intro-reveal)" />
    </svg>
    </>
  );
}
