"use client";

import { Fragment, type ReactNode, useEffect, useRef } from "react";
import type { IconSvgElement } from "@hugeicons/react";
import { BookOpen01Icon, BookOpen02Icon, Calendar03Icon, Clock01Icon, DashboardSquare01Icon, ArrowReloadHorizontalIcon } from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import styles from "./home-app-features.module.css";

const statementLines = [
  { start: "Stoff", word: "hochladen.", icon: BookOpen02Icon, motion: "bookMotion" },
  { start: "Lernzeiten", word: "festlegen.", icon: Clock01Icon, motion: "clockMotion" },
  { start: "Lernplan", word: "erhalten.", icon: Calendar03Icon, motion: "calendarMotion" },
] as const;


function FeatureIllustration({ screen, alt }: { screen: string; alt: string }) {
  return (
    <div className={styles.illustration}>
      <svg viewBox="0 0 520 440" fill="none" role="img" aria-label={alt}>
        {screen === "plans" ? (
          <>
            <g className={styles.paperBack}><rect x="177" y="40" width="292" height="348" rx="48" fill="currentColor" opacity=".14" /></g>
            <g className={styles.paperMiddle}><rect x="131" y="51" width="292" height="348" rx="48" fill="currentColor" opacity=".2" /></g>
            <g className={styles.paperFront}>
              <rect x="80" y="68" width="292" height="348" rx="48" fill="currentColor" opacity=".28" />
              <rect x="118" y="107" width="130" height="17" rx="8.5" fill="currentColor" opacity=".45" />
              {[0, 1, 2].map(i => (
                <g key={i} className={styles.planStep} style={{ animationDelay: `${i * .2}s` }}>
                  <rect x="115" y={155 + i * 72} width="43" height="43" rx="15" fill="currentColor" opacity=".25" />
                  <path d={`M125 ${177 + i * 72}L134 ${186 + i * 72}L149 ${168 + i * 72}`} stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity=".75" />
                  <rect x="180" y={164 + i * 72} width={i === 1 ? 112 : 140} height="12" rx="6" fill="currentColor" opacity=".5" />
                  <rect x="180" y={185 + i * 72} width="78" height="8" rx="4" fill="currentColor" opacity=".23" />
                </g>
              ))}
            </g>
          </>
        ) : screen === "today" ? (
          <g className={styles.calendarArt}>
            <rect x="78" y="66" width="366" height="354" rx="66" fill="currentColor" opacity=".22" />
            <rect x="137" y="30" width="25" height="85" rx="12.5" fill="currentColor" opacity=".6" />
            <rect x="357" y="30" width="25" height="85" rx="12.5" fill="currentColor" opacity=".6" />
            <rect x="114" y="139" width="294" height="8" rx="4" fill="currentColor" opacity=".22" />
            {[0, 1, 2].flatMap(row => [0, 1, 2, 3].map(col => <rect key={`${row}-${col}`} x={115 + col * 76} y={179 + row * 72} width="48" height="48" rx="17" fill="currentColor" opacity=".17" />))}
            <g className={styles.calendarSelection}>
              <rect x="111" y="247" width="56" height="56" rx="20" fill="currentColor" opacity=".65" />
              <path d="M126 275L136 285L153 265" stroke="var(--dayova-page)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        ) : screen === "feedback" ? (
          <>
            <rect x="111" y="47" width="316" height="348" rx="54" fill="currentColor" opacity=".12" transform="rotate(8 269 221)" />
            <rect x="75" y="65" width="316" height="348" rx="54" fill="currentColor" opacity=".2" />
            <rect x="113" y="109" width="146" height="15" rx="7.5" fill="currentColor" opacity=".4" />
            {[116, 196, 276].map((x, i) => <rect className={styles.feedbackBar} key={x} x={x} y={275 - i * 53} width="48" height={90 + i * 53} rx="18" fill="currentColor" opacity={.3 + i * .17} style={{ animationDelay: `${i * -.4}s` }} />)}
            <circle cx="389" cy="105" r="53" fill="currentColor" opacity=".65" />
            <path d="M365 104L381 120L412 88" stroke="var(--dayova-page)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <path d="M123 90H320Q410 90 410 180V208Q410 292 326 292H211Q123 292 123 380" stroke="currentColor" strokeWidth="45" strokeLinecap="round" opacity=".13" />
            <path className={styles.pathFlow} d="M123 90H320Q410 90 410 180V208Q410 292 326 292H211Q123 292 123 380" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="2 18" opacity=".45" />
            <circle cx="123" cy="90" r="53" fill="currentColor" opacity=".55" />
            <path d="M100 90L116 106L146 74" stroke="var(--dayova-page)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <g className={styles.activeStep}>
              <circle cx="410" cy="206" r="63" stroke="currentColor" strokeWidth="7" opacity=".28" />
              <circle cx="410" cy="206" r="46" fill="currentColor" opacity=".38" />
              <path d="M392 206H428M410 188V224" stroke="currentColor" strokeWidth="9" strokeLinecap="round" opacity=".75" />
            </g>
            <g className={styles.nextStep}>
              <circle cx="210" cy="292" r="45" fill="currentColor" opacity=".2" />
              <circle cx="210" cy="292" r="13" fill="currentColor" opacity=".4" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}

export function HomeLearningExperience({ children }: { children: ReactNode }) {
  return <div data-learning-experience className={styles.experience}>{children}</div>;
}

export function DayovaPlanStatement() {
  const statementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const statement = statementRef.current;
    const scene = statement?.closest<HTMLElement>("#lernplan-animation");
    const stage = scene?.querySelector<HTMLElement>("[data-learning-stage]");
    if (!statement || !scene || !stage) return;
    const rows = Array.from(statement.querySelectorAll<HTMLElement>("[data-statement-row]"));
    const traveler = rows[2]!;
    const heading = statement.querySelector<HTMLElement>("h2")!;
    const card = statement.querySelector<HTMLElement>("[data-intro-card]")!;
    const copy = statement.querySelector<HTMLElement>("[data-intro-copy]")!;
    const visual = statement.querySelector<HTMLElement>("[data-intro-visual]")!;
    const destination = statement.querySelector<HTMLElement>("[data-plan-card-title]")!;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastTime = 0;
    let progress = 0;
    let automaticStart: number | undefined;
    let automaticActive = false;
    let automaticScrollOrigin = 0;
    let commandedScrollY: number | undefined;
    let previousScrollBehavior: string | undefined;
    const restoreScrollBehavior = () => {
      if (previousScrollBehavior !== undefined) document.documentElement.style.scrollBehavior = previousScrollBehavior;
      previousScrollBehavior = undefined;
    };
    const ease = (value: number) => {
      const n = Math.max(0, Math.min(1, value));
      return n * n * n * (n * (n * 6 - 15) + 10);
    };
    const localPosition = (element: HTMLElement) => {
      let left = 0;
      let top = 0;
      let node: HTMLElement | null = element;
      while (node && node !== statement) {
        left += node.offsetLeft;
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return { left, top };
    };
    const titleParts = [
      traveler.querySelectorAll<HTMLElement>("[data-statement-mask]")[0]!,
      traveler.querySelector<HTMLElement>("[data-statement-slot]")!,
      traveler.querySelectorAll<HTMLElement>("[data-statement-mask]")[1]!,
    ];
    let geometry: { distance: number; top: number; parts: { x: number; y: number; sx: number; sy: number }[] } | undefined;
    const measure = () => {
      const surface = card.firstElementChild as HTMLElement;
      const surfacePosition = localPosition(surface);
      const headingPosition = localPosition(heading);
      const originX = surfacePosition.left + surface.offsetWidth / 2 - headingPosition.left;
      const originY = surfacePosition.top - headingPosition.top;
      const result = {
        distance: Math.max(1, scene.offsetHeight - stage.offsetHeight),
        top: parseFloat(getComputedStyle(stage).top) || 0,
        parts: titleParts.map((part, index) => {
          const targetPart = destination.children[index] as HTMLElement;
          const from = localPosition(part);
          const to = localPosition(targetPart);
          const textScale = parseFloat(getComputedStyle(targetPart).fontSize) / parseFloat(getComputedStyle(part).fontSize);
          return {
            x: to.left - from.left,
            y: to.top - from.top,
            sx: index === 1 ? targetPart.offsetWidth / part.offsetWidth : textScale,
            sy: index === 1 ? targetPart.offsetHeight / part.offsetHeight : textScale,
          };
        }),
      };
      heading.style.transformOrigin = `${originX}px ${originY}px`;
      heading.style.transform = "scale(var(--intro-stack-scale, 1))";
      return result;
    };
    const update = (time: number) => {
      frame = 0;
      const ready = scene.dataset.animationState === "complete";
      // The entrance owns these elements until its compositor timeline finishes.
      // Do not repeatedly read layout while it is playing.
      if (!ready && !preference.matches) return;
      geometry ??= measure();
      const { distance, top, parts } = geometry;
      const sceneTop = scene.getBoundingClientRect().top;
      const scrollProgress = ready && !preference.matches
        ? Math.max(0, Math.min(1, (top - sceneTop) / distance)) : 0;
      if (ready && !preference.matches && automaticStart === undefined) {
        automaticStart = time + 400;
        automaticScrollOrigin = window.scrollY + sceneTop - top;
        automaticActive = scrollProgress < .98;
        if (automaticActive) {
          previousScrollBehavior = document.documentElement.style.scrollBehavior;
          document.documentElement.style.scrollBehavior = "auto";
        }
      }
      const automaticProgress = automaticActive
        ? Math.max(0, Math.min(1, (time - automaticStart!) / 1450)) : 0;
      const target = automaticActive ? Math.max(scrollProgress, automaticProgress) : scrollProgress;
      const elapsed = lastTime ? Math.min(64, time - lastTime) : 16.7;
      lastTime = time;
      progress += (target - progress) * (1 - Math.exp(-elapsed / 65));
      if (Math.abs(target - progress) < 0.0005) progress = target;
      // Autoplay advances the real scroll timeline, so the very first upward
      // gesture starts at the same position as every later return. No handoff
      // switches from a completed visual pose back to scroll progress zero.
      if (automaticActive) {
        commandedScrollY = automaticScrollOrigin + distance * progress;
        if (Math.abs(window.scrollY - commandedScrollY) > .1) {
          window.scrollTo({ top: commandedScrollY, behavior: "auto" });
        }
        if (automaticProgress === 1 && progress === 1) { automaticActive = false; restoreScrollBehavior(); }
      }
      const fade = ease((progress - 0.03) / 0.47);
      rows.slice(0, 2).forEach((row, i) => {
        row.style.opacity = String(1 - fade);
        row.style.transform = `translate3d(0, ${-fade * (56 + i * 16)}px, 0)`;
      });
      const titleSwap = ease((progress - 0.94) / 0.06);
      traveler.style.opacity = String(1 - titleSwap);
      destination.style.opacity = String(titleSwap);
      const movement = ease(progress / 0.94);
      traveler.style.transform = "none";
      // Move words and calendar independently from the two-line layout into
      // their actual final slots. No miniature row or mid-flight layout switch.
      titleParts.forEach((part, index) => {
        const pose = parts[index]!;
        part.style.transformOrigin = "0 0";
        part.style.transform = `translate3d(${pose.x * movement}px, ${pose.y * movement}px, 0) scale(${1 + (pose.sx - 1) * movement}, ${1 + (pose.sy - 1) * movement})`;
      });
      const fill = ease((progress - 0.05) / 0.60);
      card.style.opacity = String(fill);
      card.style.transform = `translate3d(0, ${32 * (1 - movement)}px, 0) scale(${0.97 + 0.03 * movement})`;
      const reveal = ease((progress - 0.28) / 0.50);
      copy.style.opacity = String(reveal);
      copy.style.transform = `translate3d(0, ${20 * (1 - reveal)}px, 0)`;
      visual.style.opacity = String(ease((progress - 0.42) / 0.48));
      if (progress !== target || automaticActive) frame = requestAnimationFrame(update);
      else lastTime = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const stopAutomatic = () => {
      if (automaticStart === undefined) return;
      automaticActive = false;
      restoreScrollBehavior();
      schedule();
    };
    const stopOnKey = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) stopAutomatic();
    };
    const onScroll = () => {
      if (automaticActive && commandedScrollY !== undefined && Math.abs(window.scrollY - commandedScrollY) > 2) {
        automaticActive = false;
        restoreScrollBehavior();
      }
      schedule();
    };
    const invalidate = () => { geometry = undefined; schedule(); };
    let measuredWidth = window.innerWidth;
    const resize = () => {
      if (window.innerWidth < 768 && window.innerWidth === measuredWidth) return;
      measuredWidth = window.innerWidth;
      invalidate();
    };
    const observer = new MutationObserver(invalidate);
    observer.observe(scene, { attributes: true, attributeFilter: ["data-animation-state"] });
    const resizeObserver = new ResizeObserver(invalidate);
    resizeObserver.observe(card);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", stopAutomatic, { passive: true });
    window.addEventListener("touchstart", stopAutomatic, { passive: true });
    window.addEventListener("keydown", stopOnKey);
    window.addEventListener("resize", resize);
    preference.addEventListener("change", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      restoreScrollBehavior();
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", stopAutomatic);
      window.removeEventListener("touchstart", stopAutomatic);
      window.removeEventListener("keydown", stopOnKey);
      window.removeEventListener("resize", resize);
      preference.removeEventListener("change", schedule);
    };
  }, []);
  return (
    <div ref={statementRef} className={styles.statement}>
      <article data-feature-card data-intro-card className={styles.introCardFrame}>
        <div className={`${styles.surface} ${styles[features[0].color]}`}>
          <div data-intro-copy className={styles.copy}>
            <h3>{features[0].title.map((line, index) => <span key={line}>{line}{index === 0 ? " " : null}</span>)}</h3>
            <p>{features[0].description}</p>
          </div>
          <div data-intro-visual className={styles.visual}>
            <FeatureIllustration screen={features[0].screen} alt={features[0].screenAlt} />
            <span data-plan-card-title className={`${styles.bigWord} ${styles.planTitle}`} style={{ opacity: 0 }} aria-hidden="true">
              <span>Lernplan</span>
              <span className={`${styles.inlineIcon} ${styles.planMotion}`}><DayovaIcon icon={Calendar03Icon} size={56} strokeWidth={1.5} /></span>
              <span>erhalten.</span>
            </span>
          </div>
        </div>
      </article>
      <h2 className={styles.statementTitle}>
        {statementLines.map((line, index) => {
          const icon = (
            <span data-statement-slot className={styles.iconSlot} aria-hidden="true">
              <span data-statement-icon className={`${styles.statementIcon} ${styles[line.motion]}`}>
                {index === 0 ? (
                  <span className={styles.bookFlip}>
                    <DayovaIcon icon={BookOpen01Icon} size={64} strokeWidth={1.15} />
                    <DayovaIcon data-book-turning-page className={styles.bookTurningPage} icon={BookOpen02Icon} size={64} strokeWidth={1.15} />
                  </span>
                ) : index === 2 ? (
                  <span className={styles.calendarFlip}>
                    <DayovaIcon icon={Calendar03Icon} size={64} strokeWidth={1.15} />
                    <span data-calendar-leaf className={styles.calendarLeaf}>
                      <svg viewBox="0 10 24 14" fill="none" aria-hidden="true">
                        <path d="M3 10H21V14C21 17.77 21 19.66 19.83 20.83C18.66 22 16.77 22 13 22H11C7.23 22 5.34 22 4.17 20.83C3 19.66 3 17.77 3 14V10Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
                        <path d="M7.5 14H7.625M12 14H12.125M16.5 14H16.625M7.5 18H7.625M12 18H12.125" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                ) : <DayovaIcon icon={line.icon} size={64} strokeWidth={1.15} />}
              </span>
            </span>
          );
          return (
            <span className={styles.statementLine} data-statement-row key={line.word}>
              <span className={styles.statementLead}>
                <span data-statement-mask className={styles.wordMask}><span data-statement-word>{index === 1 ? <><span className={styles.desktopStatementWord}>{line.start}</span><span className={styles.mobileStatementWord}>Lernzeit</span></> : line.start}</span></span>
                {index !== 2 && icon}
              </span>
              <span className={styles.statementTail}>
                {index === 2 && icon}
                <span data-statement-mask className={styles.wordMask}><span data-statement-word>{line.word}</span></span>
              </span>
            </span>
          );
        })}
      </h2>

    </div>
  );
}

const features = [
  {
    word: ["Lernplan", "erhalten."], title: ["Dein Stoff.", "In kleinen Schritten."],
    description: "Dayova teilt deinen Stoff in kleine Lernschritte auf und plant sie in deine freien Zeiten ein. Du siehst deinen Lernweg bis zur Prüfung.",
    icon: Calendar03Icon, color: "blue", screen: "plans", screenAlt: "Illustration: Unterlagen ordnen sich zu einem Lernplan",
  },
  {
    word: ["Alles", "überblicken."], title: ["App auf. Wissen,", "was heute dran ist."],
    description: "Unter „Heute“ siehst du deine Hausaufgaben, Prüfungen und Lernzeiten. Dein nächster Lernschritt steht schon bereit.",
    icon: DashboardSquare01Icon, color: "lilac", screen: "today", screenAlt: "Illustration: Ein Kalender hebt deinen nächsten Lerntag hervor",
  },
  {
    word: ["Lernplan", "anpassen."], title: ["Dein Lernplan.", "Passt sich dir an."],
    description: "Mal geht es schneller, mal brauchst du mehr Zeit. Dayova passt deinen Lernplan nach jedem Lernschritt an.",
    icon: ArrowReloadHorizontalIcon, color: "blue", screen: "path", screenAlt: "Illustration: Dein Lernpfad mit abgeschlossenen und kommenden Schritten",
  },
] as const;

export type FeatureCardContent = {
  word: readonly [string, string];
  title: readonly string[];
  description: string;
  icon: IconSvgElement;
  color: "blue" | "lilac" | "lime";
  screen: "plans" | "today" | "path" | "feedback";
  screenAlt: string;
};

export function HomeAppFeatures({
  items = features.slice(1),
  id = "so-funktioniert-dayova",
  labelledBy,
  className = "",
}: {
  items?: readonly FeatureCardContent[];
  id?: string;
  labelledBy?: string;
  className?: string;
} = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const experience = section.closest<HTMLElement>("[data-learning-experience]") ?? section;
    const cards = Array.from(experience.querySelectorAll<HTMLElement>("[data-feature-card]"));
    const surfaces = cards.map((card) => card.firstElementChild as HTMLElement);
    let frame = 0;
    let visible = false;
    let tops: number[] = [];
    const measure = () => {
      experience.style.removeProperty("--stack-card-height");
      const cardHeight = Math.max(...cards.map((card) => card.offsetHeight));
      experience.style.setProperty("--stack-card-height", `${cardHeight}px`);
      // All cards share one landing plane and leave together after the last card.
      const stage = experience.querySelector<HTMLElement>("[data-learning-stage]");
      // CSS uses svh; innerHeight changes as Safari's toolbar moves. Derive the
      // landing plane from that same stable viewport instead of chasing it.
      const stableHeight = stage ? stage.offsetHeight + (parseFloat(getComputedStyle(stage).top) || 0) + 16 : window.innerHeight;
      const top = Math.max(16, Math.min(96, stableHeight - cardHeight - 24));
      experience.style.setProperty("--stack-top", `${top}px`);
      tops = cards.map(() => top);
    };
    const amounts = cards.map(() => 0);
    let previousTime = 0;
    const update = (time: number) => {
      frame = 0;
      const elapsed = previousTime ? Math.min(64, time - previousTime) : 16.7;
      previousTime = time;
      let settling = false;
      const nextTops = cards.map((card) => card.getBoundingClientRect().top);
      // Once a card is completely covered, keep it covered during the exit.
      // The introductory scene has a taller sticky container than the cards;
      // otherwise its first card can emerge above the third on the way out.
      const covered = cards.map((_, i) => !preference.matches && nextTops[i + 1] !== undefined && nextTops[i + 1]! <= tops[i]! + .5);
      cards.forEach((card, i) => { card.style.visibility = covered[i] ? "hidden" : "visible"; });
      experience.style.setProperty("--intro-stack-visibility", covered[0] ? "hidden" : "visible");
      surfaces.forEach((surface, i) => {
        const next = nextTops[i + 1];
        const progress = preference.matches || next === undefined ? 0
          : Math.max(0, Math.min(1, (window.innerHeight - next) / Math.max(1, window.innerHeight - tops[i]!)));
        amounts[i] = visible ? amounts[i]! + (progress - amounts[i]!) * (1 - Math.exp(-elapsed / 65)) : progress;
        if (Math.abs(progress - amounts[i]!) < 0.0005) amounts[i] = progress;
        else settling = true;
        surface.style.transform = `translate3d(0, 0, 0) scale(${1 - amounts[i]! * 0.025})`;
        surface.style.setProperty("--stack-shade", String(amounts[i]! * 0.1));
      });
      experience.style.setProperty("--intro-stack-scale", String(1 - amounts[0]! * 0.025));
      if (settling && visible) frame = requestAnimationFrame(update);
      else previousTime = 0;
    };
    const schedule = () => { if (visible && !frame) frame = requestAnimationFrame(update); };
    let viewportWidth = window.innerWidth;
    const resize = () => {
      if (window.innerWidth < 768 && window.innerWidth === viewportWidth) return;
      viewportWidth = window.innerWidth;
      measure(); schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry!.isIntersecting;
      if (!frame) frame = requestAnimationFrame(update);
    }, { rootMargin: "100px" });
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.cardRevealed = "true";
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.18 });
    if (!preference.matches) {
      cards.forEach((card) => {
        if (card.getBoundingClientRect().top < window.innerHeight) card.dataset.cardRevealed = "true";
        revealObserver.observe(card);
      });
      section.dataset.featureMotion = "true";
    }
    let measuredWidth = 0;
    const resizeObserver = new ResizeObserver(([entry]) => {
      const width = entry?.contentRect.width ?? 0;
      if (Math.abs(width - measuredWidth) < 1) return;
      measuredWidth = width;
      measure(); schedule();
    });
    resizeObserver.observe(section);
    measure();
    observer.observe(section);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      preference.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`${styles.features} ${className}`} aria-labelledby={labelledBy ?? "features-title"}>
      {!labelledBy && <h2 id="features-title" className={styles.srOnly}>So begleitet dich Dayova beim Lernen</h2>}
      <div className={styles.cards}>
        {items.map((feature, index) => (
          <Fragment key={feature.word[0]}>
          <article data-feature-card className={styles.card} style={{ zIndex: index + 2 }} key={feature.word[0]}>
            <div className={`${styles.surface} ${styles[feature.color]}`}>
            <div className={styles.copy}>
              <h3>{feature.title.map((line, index) => <span key={line}>{line}{index === 0 ? " " : null}</span>)}</h3>
              <p>{feature.description}</p>
            </div>
            <div className={styles.visual}>
              <FeatureIllustration screen={feature.screen} alt={feature.screenAlt} />
              <span className={styles.bigWord} aria-hidden="true">
                <span>{feature.word[0]}</span>
                <span className={`${styles.inlineIcon} ${feature.screen === "plans" ? styles.planMotion : feature.screen === "path" ? styles.adaptMotion : styles.overviewMotion}`}><DayovaIcon icon={feature.icon} size={56} strokeWidth={1.5} /></span>
                {feature.word[1] && <span>{feature.word[1]}</span>}
              </span>
            </div>
            </div>
          </article>
          {index < items.length - 1 && <div className={styles.stackGap} aria-hidden="true" />}
          </Fragment>
        ))}
        <div className={styles.stackRunway} aria-hidden="true" />
      </div>
    </section>
  );
}
