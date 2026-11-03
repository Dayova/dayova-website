import Image from "next/image";
import type { ReactNode } from "react";
import { Download02Icon } from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { HomeIntro } from "./home-intro";
import { StoreDownloadLink } from "@/components/store-download-link";
import styles from "./home-hero.module.css";

type HomeHeroSectionProps = {
  id?: string;
  titleLines?: readonly string[];
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  intro?: boolean;
  className?: string;
};

export function HomeHeroSection({
  id = "home-hero-title",
  titleLines = ["Dein Lernen im Griff.", "Mehr Zeit für dich."],
  description = "Plane deine Hausaufgaben, bereite dich auf Prüfungen vor und lerne gezielt weiter. Dayova zeigt dir, was du schon kannst und was als Nächstes ansteht.",
  eyebrow,
  actions,
  intro = true,
  className = "",
}: HomeHeroSectionProps = {}) {
  return (
    <>
      {intro && <HomeIntro />}
    <section className={`${styles.hero} ${className}`} aria-labelledby={id} data-hero-ready={intro ? undefined : "true"}>
      <div className={styles.panel}>
        <div className={styles.copy} data-hero-copy>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h1 id={id} className={styles.title}>
            {titleLines.map(line => <span key={line} className={styles.titleLine}>{line}</span>)}
          </h1>
          <p className={styles.description}>
            {description}
          </p>
          <div className={styles.action}>
            {actions ?? <StoreDownloadLink variant="dark" className={styles.download}>
              <span>App herunterladen</span>
              <span className={styles.downloadIcon} aria-hidden="true">
                <DayovaIcon icon={Download02Icon} size={20} />
              </span>
            </StoreDownloadLink>}
            {!actions && <svg className={styles.arrow} viewBox="0 0 400 340" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path className={styles.arrowLine} pathLength="1" d="M330 18C409 37 402 108 374 183C359 224 331 278 325 308C318 339 350 340 346 314C341 282 129 263 12 270" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path className={styles.arrowTip} pathLength="1" d="M24 260L12 270L24 281" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
          </div>
          {!actions && <svg className={styles.mobileArrow} viewBox="-6 -4 132 284" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path className={styles.arrowLine} pathLength="1" d="M48 4C111 21 114 94 91 157C80 190 62 220 23 220C-12 220 2 181 68 187C130 191 119 215 85 228C60 238 32 248 5 250L16 241L5 250L16 259" stroke="currentColor" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
        </div>

        <div className={styles.visual}>
          <div className={styles.mockup} data-hero-devices>
            <div className={`${styles.device} ${styles.backDevice}`}>
              <Image src="/images/app-current/path-light.png" alt="Dayova Lernplan" width={1206} height={2440} sizes="(max-width: 767px) 46vw, (max-width: 1200px) 24vw, 340px" loading="eager" className={styles.lightScreen} />
              <Image src="/images/app-current/path-dark.png" alt="Dayova Lernplan" width={1206} height={2440} sizes="(max-width: 767px) 46vw, (max-width: 1200px) 24vw, 340px" loading="eager" className={styles.darkScreen} />
            </div>
            <div className={`${styles.device} ${styles.frontDevice}`}>
              <Image src="/images/app-current/today-light.png" alt="Dayova Tagesübersicht" width={1206} height={2440} sizes="(max-width: 767px) 46vw, (max-width: 1200px) 24vw, 340px" loading="eager" fetchPriority="high" className={styles.lightScreen} />
              <Image src="/images/app-current/today-dark.png" alt="Dayova Tagesübersicht" width={1206} height={2440} sizes="(max-width: 767px) 46vw, (max-width: 1200px) 24vw, 340px" loading="eager" fetchPriority="high" className={styles.darkScreen} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
