"use client";

import { useEffect, useRef } from "react";
import { Mortarboard01Icon } from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import styles from "./home-adaptive-learning.module.css";

export function HomeAdaptiveLearning() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const stage = section.querySelector<HTMLElement>("[data-adaptive-stage]")!;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let current = 0;
    let lastTime = 0;
    let pinTop = 96;
    let distance = 1;
    const measure = () => {
      pinTop = Math.min(96, window.innerHeight - stage.offsetHeight - 24);
      distance = Math.max(1, section.offsetHeight - stage.offsetHeight);
      section.style.setProperty("--potential-top", `${pinTop}px`);
    };
    const update = (time: number) => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const target = preference.matches ? 1 : Math.max(0, Math.min(1,
        (pinTop - rect.top) / (distance * .95)));
      const elapsed = lastTime ? Math.min(64, time - lastTime) : 16.7;
      lastTime = time;
      current += (target - current) * (1 - Math.exp(-elapsed / 80));
      if (Math.abs(target - current) < .0005) current = target;
      section.style.setProperty("--adapt-progress", String(current));
      if (current !== target) frame = requestAnimationFrame(update);
      else lastTime = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = () => { measure(); schedule(); };
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    preference.addEventListener("change", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      preference.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section id="lernfortschritt" ref={sectionRef} className={styles.section} aria-labelledby="adaptive-learning-title">
      <div data-adaptive-stage className={styles.viewport}>
      <div className={styles.layout}>
        <div data-learning-gap className={styles.diagram} role="img" aria-label="Der Balken zeigt, wie du dich von deinem heutigen Stand auf deine Prüfung vorbereitest.">
          <div className={styles.chart} aria-hidden="true">
            <div className={styles.goalIcon}><DayovaIcon icon={Mortarboard01Icon} size={28} strokeWidth={1.5} /></div>
            <span className={styles.potential}>Prüfungsbereit</span>
            <div className={styles.guide} />
            <span className={styles.current}>Heute<span /></span>
            <div className={styles.bar}>
              <div className={styles.steps}>{Array.from({ length: 10 }, (_, i) => <span key={i} />)}</div>
              <div className={styles.fill}>
                <div className={styles.steps}>{Array.from({ length: 10 }, (_, i) => <span key={i} />)}</div>
              </div>
            </div>
            <span className={styles.caption}>Deine Vorbereitung</span>
          </div>
        </div>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Mit Dayova</span>
          <h2 id="adaptive-learning-title">Lernlücken schließen.</h2>
          <p>Du übst, was dir noch schwerfällt. Dayova erkennt das an deinen Antworten und gibt dir passende Aufgaben. So gehst du sicherer in die Prüfung und arbeitest auf bessere Noten hin.</p>
        </div>
      </div>
      </div>
      <div className={styles.runway} aria-hidden="true" />
    </section>
  );
}
