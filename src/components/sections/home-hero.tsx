import Image from "next/image";
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
              Jetzt kostenlos testen
            </StoreDownloadLink>
            <svg className={styles.arrow} viewBox="0 0 400 340" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path className={styles.arrowLine} pathLength="1" d="M330 18C409 37 402 108 374 183C359 224 331 278 325 308C318 339 350 340 346 314C341 282 129 263 12 270" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path className={styles.arrowTip} pathLength="1" d="M24 260L12 270L24 281" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.mockup}>
            <Image
              src="/images/hero/dayova-phones-light.png"
              alt="Dayova auf zwei Smartphones: Tagesübersicht und Lernplan"
              width={769}
              height={915}
              sizes="(max-width: 699px) 90vw, (max-width: 1099px) 46vw, 600px"
              loading="eager"
              fetchPriority="high"
              className={styles.lightScreen}
            />
            <Image
              src="/images/hero/dayova-phones-dark.png"
              alt="Dayova auf zwei Smartphones: Tagesübersicht und Lernplan"
              width={769}
              height={915}
              sizes="(max-width: 699px) 90vw, (max-width: 1099px) 46vw, 600px"
              loading="eager"
              fetchPriority="high"
              className={styles.darkScreen}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
