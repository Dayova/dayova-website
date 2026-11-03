"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { StoreDownloadLink } from "@/components/store-download-link";
import styles from "./home-download-showcase.module.css";

const illustrations = [
  { name: "calendar", x: -60, y: -35 },
  { name: "camera", x: -60, y: 45 },
  { name: "grades", x: 60, y: 35 },
] as const;

function DownloadIllustration({ illustration }: { illustration: typeof illustrations[number] }) {
  return (
    <div className={`${styles.illustrationAnchor} ${styles[illustration.name]}`} aria-hidden="true">
      <div data-download-tile data-enter-x={illustration.x} data-enter-y={illustration.y}>
        <div className={styles.illustrationFloat}>
          <svg viewBox="0 0 400 400" fill="none">
            {illustration.name === "calendar" ? <>
              <rect x="35" y="74" width="330" height="284" rx="62" fill="currentColor" opacity=".3" />
              <path d="M103 45V104M297 45V104" stroke="currentColor" strokeWidth="25" strokeLinecap="round" />
              <path d="M36 148H364" stroke="currentColor" strokeWidth="9" opacity=".5" />
              {[0, 1, 2].map(row => [0, 1, 2, 3].map(col => <rect key={`${row}-${col}`} x={81 + col * 62} y={181 + row * 51} width="30" height="22" rx="10" fill="currentColor" opacity={row === 1 && col === 2 ? 1 : .45} />))}
            </> : illustration.name === "camera" ? <>
              <path d="M113 106L137 66H259L284 106H316C346 106 368 130 368 158V303C368 333 346 354 316 354H84C54 354 32 333 32 303V158C32 130 54 106 84 106H113Z" fill="currentColor" opacity=".32" />
              <circle cx="200" cy="230" r="85" fill="currentColor" opacity=".35" />
              <circle cx="200" cy="230" r="58" fill="currentColor" opacity=".55" />
              <path d="M176 216C181 205 190 199 202 199" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
              <rect x="290" y="133" width="35" height="16" rx="8" fill="currentColor" opacity=".8" />
            </> : <>
              <rect x="69" y="42" width="276" height="330" rx="47" fill="currentColor" opacity=".18" transform="rotate(11 207 207)" />
              <rect x="43" y="28" width="276" height="330" rx="47" fill="currentColor" opacity=".34" />
              <path d="M142 137L178 107V225M144 225H210" stroke="currentColor" strokeWidth="23" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M252 93L268 110L299 75" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M96 279H258M96 309H206" stroke="currentColor" strokeWidth="14" strokeLinecap="round" opacity=".45" />
            </>}
          </svg>
        </div>
      </div>
    </div>
  );
}

export function HomeDownloadShowcase({
  id = "download",
  titleLines = ["Lerne mit Plan.", "Für bessere Noten."],
  description,
  secondaryHref,
  secondaryLabel,
  className = "",
}: {
  id?: string;
  titleLines?: readonly string[];
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
} = {}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (!preference.matches) panel.dataset.motionReady = "true";
    let animations: Animation[] = [];
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      if (preference.matches) { panel.removeAttribute("data-motion-ready"); return; }
      const elements = Array.from(panel.querySelectorAll<HTMLElement>("[data-download-reveal]"));
      const startTime = document.timeline.currentTime;
      const panelAnimation = panel.animate([
        { transform: "translate3d(0, 48px, 0) scale(.97)" },
        { transform: "translate3d(0, 0, 0) scale(1)" },
      ], { duration: 950, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" });
      panelAnimation.startTime = startTime;
      animations = [panelAnimation, ...elements.map((element, index) => {
        const animation = element.animate([
          { opacity: 0, transform: `translate3d(0, ${index < 2 ? "110%" : "24px"}, 0)` },
          { opacity: 1, transform: "translate3d(0, 0, 0)" },
        ], {
          duration: 850,
          delay: 100 + index * 90,
          easing: "cubic-bezier(.22,1,.36,1)",
          fill: "both",
        });
        animation.startTime = startTime;
        return animation;
      })];
      const tiles = Array.from(panel.querySelectorAll<HTMLElement>("[data-download-tile]"));
      tiles.forEach((tile, index) => {
        const animation = tile.animate([
          { opacity: 0, transform: `translate3d(${tile.dataset.enterX}px, ${tile.dataset.enterY}px, 0) scale(.88)` },
          { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
        ], { duration: 1000, delay: 300 + index * 110, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" });
        animation.startTime = startTime;
        animations.push(animation);
      });
      animations.at(-1)!.onfinish = () => {
        panel.removeAttribute("data-motion-ready");
        panel.dataset.tilesRevealed = "true";
        animations.forEach(animation => animation.cancel());
      };
    };
    const observer = new IntersectionObserver(([entry]) => {
      panel.dataset.inView = String(Boolean(entry?.isIntersecting));
      if (entry?.isIntersecting) reveal();
    }, { threshold: .2 });
    observer.observe(panel);
    const motionChange = () => {
      if (preference.matches) {
        panel.removeAttribute("data-motion-ready");
        animations.forEach(animation => animation.cancel());
      }
    };
    preference.addEventListener("change", motionChange);
    return () => {
      observer.disconnect();
      panel.removeAttribute("data-motion-ready");
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", motionChange);
    };
  }, []);

  return (
    <section id={id} className={`${styles.section} ${className}`} aria-labelledby={`${id}-title`}>
      <div ref={panelRef} className={styles.panel} data-download-panel>
        {illustrations.map(illustration => <DownloadIllustration key={illustration.name} illustration={illustration} />)}
        <div className={styles.copy}>
          <h2 id={`${id}-title`} className={styles.title}>
            {titleLines.map((line, index) => <span className={styles.line} key={line}><span data-download-reveal>{line}{index < titleLines.length - 1 ? " " : null}</span></span>)}
          </h2>
          {description && <p data-download-reveal className={styles.description}>{description}</p>}
          <div data-download-reveal className={styles.action}>
            <StoreDownloadLink variant="dark" className={styles.button}>Dayova herunterladen</StoreDownloadLink>
          </div>
          <p data-download-reveal className={styles.note}>14 Tage testen. Ohne Zahlungsdaten.</p>
          {secondaryHref && secondaryLabel && <Link data-download-reveal href={secondaryHref} className={styles.secondary}>{secondaryLabel}</Link>}
        </div>
      </div>
    </section>
  );
}
