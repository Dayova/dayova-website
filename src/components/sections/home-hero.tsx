import Image from "next/image";
import { Download02Icon } from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { HomeIntro } from "./home-intro";
import { StoreDownloadLink } from "@/components/store-download-link";
import styles from "./home-hero.module.css";

export function HomeHeroSection() {
  return (
    <>
      <HomeIntro />
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h1 id="home-hero-title" className={styles.title}>
            <span className={styles.titleLine}>Dein Lernen im Griff.</span>
            <span className={styles.titleLine}>Mehr Zeit für dich.</span>
          </h1>
          <p className={styles.description}>
            Plane deine Hausaufgaben, bereite dich auf Prüfungen vor und lerne
            gezielt weiter. Dayova zeigt dir, was du schon kannst und was als
            Nächstes ansteht.
          </p>
          <div className={styles.action}>
            <StoreDownloadLink variant="dark" className={styles.download}>
              <span>App herunterladen</span>
              <span className={styles.downloadIcon} aria-hidden="true">
                <DayovaIcon icon={Download02Icon} size={20} />
              </span>
            </StoreDownloadLink>
            <svg className={styles.arrow} viewBox="0 0 400 340" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path className={styles.arrowLine} pathLength="1" d="M330 18C409 37 402 108 374 183C359 224 331 278 325 308C318 339 350 340 346 314C341 282 129 263 12 270" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path className={styles.arrowTip} pathLength="1" d="M24 260L12 270L24 281" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <svg className={styles.mobileArrow} viewBox="-6 -4 132 284" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path className={styles.arrowLine} pathLength="1" d="M48 4C111 21 114 94 91 157C80 190 62 220 23 220C-12 220 2 181 68 187C130 191 119 215 85 228C60 238 32 248 5 250" stroke="currentColor" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
            <path className={styles.arrowTip} pathLength="1" d="M16 241L5 250L16 259" stroke="currentColor" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className={styles.visual}>
          <div className={styles.mockup}>
            <div className={`${styles.device} ${styles.backDevice}`}>
              <Image src="/images/hero/dayova-study-plan.png" alt="Dayova Lernplan" width={1206} height={2622} unoptimized loading="eager" className={styles.lightScreen} />
              <Image src="/images/hero/dayova-study-plan-dark.png" alt="Dayova Lernplan" width={1206} height={2622} unoptimized loading="eager" className={styles.darkScreen} />
              <span className={styles.island} aria-hidden="true" />
            </div>
            <div className={`${styles.device} ${styles.frontDevice}`}>
              <Image src="/images/hero/dayova-today.png" alt="Dayova Tagesübersicht" width={1206} height={2622} unoptimized loading="eager" fetchPriority="high" className={styles.lightScreen} />
              <Image src="/images/hero/dayova-today-dark.png" alt="Dayova Tagesübersicht" width={1206} height={2622} unoptimized loading="eager" fetchPriority="high" className={styles.darkScreen} />
              <span className={styles.island} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
