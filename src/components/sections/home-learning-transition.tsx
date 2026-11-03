"use client";

import { useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen02Icon, Calendar03Icon, Clock01Icon, HelpCircleIcon, Calculator01Icon, Leaf01Icon } from "@hugeicons/core-free-icons";
import { DayovaPlanStatement } from "./home-app-features";
import styles from "./home-learning-transition.module.css";
import { getAnimatedFlowerGeometry, getAnimatedFlowerPetalPosition } from "./learning-flower-geometry";

const flowerGeometry = getAnimatedFlowerGeometry(280);
const badges = [
  { text: "Matheprüfung", icon: Calculator01Icon, x: -255, y: -65, r: -14, color: "blue" },
  { text: "Noch 19 Tage", icon: Calendar03Icon, x: 155, y: -85, r: 12, color: "white" },
  { text: "Eigenschaften", icon: BookOpen02Icon, x: -75, y: -140, r: 8, color: "lime" },
  { text: "10 Minuten Zeit", icon: Clock01Icon, x: -160, y: 12, r: 9, color: "white" },
  { text: "Vokabeln", icon: BookOpen02Icon, x: 95, y: 3, r: -11, color: "purple" },
  { text: "Bio wiederholen", icon: Leaf01Icon, x: 255, y: 85, r: 13, color: "blue" },
  { text: "Unterlagen", icon: BookOpen02Icon, x: -270, y: 102, r: -7, color: "purple" },
  { text: "Was zuerst?", icon: HelpCircleIcon, x: -5, y: 120, r: 6, color: "dark" },
];
const DURATION = 6560;
const PUSH_DURATION = 750;
const INCOMING_LEAD = 650;
const FALL_SLOWDOWN = 4.3;
const BADGE_STAGGER = 150;
const clamp = (n: number) => Math.max(0, Math.min(1, n));
const smooth = (n: number) => n * n * n * (n * (n * 6 - 15) + 10);
const phase = (t: number, start: number, duration: number) => smooth(clamp((t - start) / duration));
// A continuous upward spring; the scroll entry feeds directly into the same timeline.
const fallOffset = (elapsed: number) => {
  const u = Math.max(0, elapsed) / 1050;
  return 620 * Math.exp(-6 * u) * (Math.cos(8 * u) + 0.75 * Math.sin(8 * u)) * (1 - phase(elapsed, 1100, 300));
};

// One continuous outer silhouette, with matching velocity at every join.
// Radius is independent of petal separation, avoiding compounded scale jumps.
const radiusKeys = [
  { t: 1500, r: 6, velocity: 0 },
  { t: 3500, r: 34, velocity: 0.04 },
  { t: 3880, r: 135, velocity: 0 },
  { t: 4580, r: 135, velocity: 0 },
  { t: 4960, r: 9, velocity: 0 },
];
const flowerRadius = (t: number) => {
  if (t <= radiusKeys[0]!.t) return radiusKeys[0]!.r;
  for (let i = 1; i < radiusKeys.length; i++) {
    const a = radiusKeys[i - 1]!;
    const b = radiusKeys[i]!;
    if (t > b.t) continue;
    const duration = b.t - a.t;
    const u = (t - a.t) / duration;
    const u2 = u * u;
    const u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * a.r
      + (u3 - 2 * u2 + u) * duration * a.velocity
      + (-2 * u3 + 3 * u2) * b.r
      + (u3 - u2) * duration * b.velocity;
  }
  return radiusKeys.at(-1)!.r;
};

export function HomeLearningTransition({ autoPlay = false }: { autoPlay?: boolean }) {
  const rootRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const main = rootRef.current;
    if (!main) return;
    const tiles = Array.from(main.querySelectorAll<HTMLElement>("[data-badge]"));
    const tints = Array.from(main.querySelectorAll<HTMLElement>("[data-tint]"));
    const petals = Array.from(main.querySelectorAll<HTMLElement>("[data-petal]"));
    const flower = main.querySelector<HTMLElement>("[data-flower]")!;
    const panel = main.querySelector<HTMLElement>("[data-panel]")!;
    const statementMasks = Array.from(main.querySelectorAll<HTMLElement>("[data-statement-mask]"));
    const statementWords = Array.from(main.querySelectorAll<HTMLElement>("[data-statement-word]"));
    const statementSlots = Array.from(main.querySelectorAll<HTMLElement>("[data-statement-slot]"));
    const statementIcons = Array.from(main.querySelectorAll<HTMLElement>("[data-statement-icon]"));
    const about = document.querySelector<HTMLElement>('[aria-labelledby="about-title"]');
    const liveNodes = { tiles, tints, petals, flower, panel, statementMasks, statementWords, statementSlots, statementIcons };
    let viewportWidth = window.innerWidth;
    const headerOffset = () => (document.querySelector("header")?.offsetHeight ?? 0) + 16;
    main.style.setProperty("--learning-top-space", `${headerOffset()}px`);
    const paint = (t: number, nodes = liveNodes) => {
      const { tiles, tints, petals, flower, panel, statementMasks, statementWords, statementSlots, statementIcons } = nodes;
      const compact = viewportWidth < 700;
      const spread = compact ? 0.36 : Math.min(1, (viewportWidth - 260) / 650);
      const open = phase(t, 3500, 380);
      const close = phase(t, 4580, 380);
      const fold = open * (1 - close);
      const reveal = phase(t, 4910, 500);
      const appear = phase(t, 1500, 240);
      const localRadius = flowerGeometry.petalSize / 2 + flowerGeometry.petalDistance * fold;
      const size = (compact ? 0.8 : 1) * flowerRadius(t) / localRadius;
      flower.style.opacity = String(appear * (1 - phase(t, 4960, 160)));
      flower.style.transform = `translate(-50%, -50%) rotate(${45 * phase(t, 3400, 1560)}deg) scale(${size})`;
      flowerGeometry.petals.forEach((petal, i) => {
        const position = getAnimatedFlowerPetalPosition(petal, fold, flowerGeometry.center);
        petals[i]!.style.transform = `translate3d(${position.cx - flowerGeometry.center}px, ${position.cy - flowerGeometry.center}px, 0)`;
      });
      // Avoid a full-screen animated clipping layer around the sticky cards.
      // WebKit can retain stale clip bounds when its browser bars change size.
      panel.style.opacity = String(reveal);
      statementWords.forEach((word, i) => {
        const line = Math.floor(i / 2);
        const side = i % 2;
        const progress = phase(t, 4960 + line * 95 + side * 45, 540);
        word.style.opacity = String(phase(progress, 0, 0.55));
        word.style.transform = `translate3d(0, ${110 * (1 - progress)}%, 0)`;
      });
      statementSlots.forEach((slot, i) => {
        const progress = phase(t, 5780 + i * 80, 540);
        // Reserve the final layout from the start. Only the masks move to open
        // the gap: animating width here reflowed all three text rows every frame.
        const gap = 1.79 * (1 - progress);
        // On phones each verb sits beneath its noun and icon. There is no
        // horizontal gap to open between words on separate lines.
        const leftShift = compact ? 0 : i === 1 ? 0 : i === 2 ? gap : gap / 2;
        const rightShift = compact ? 0 : i === 1 ? -gap : i === 2 ? 0 : -gap / 2;
        statementMasks[i * 2]!.style.transform = `translate3d(${leftShift}em, 0, 0)`;
        statementMasks[i * 2 + 1]!.style.transform = `translate3d(${rightShift}em, 0, 0)`;
        slot.style.transform = `translate3d(${(leftShift + rightShift) / 2}em, 0, 0)`;
        slot.style.opacity = String(phase(progress, 0, 0.5));
        statementIcons[i]!.style.transform = compact
          ? `scale(${0.7 + progress * 0.3})`
          : `perspective(400px) rotateY(${(1 - progress) * -55}deg) scale(${0.7 + progress * 0.3})`;
      });
      badges.forEach((badge, i) => {
        const elapsed = t - 70 - i * BADGE_STAGGER;
        // Begin gathering during this badge's first upward rebound.
        const collect = phase(elapsed, 360 * FALL_SLOWDOWN, 1000);
        const arc = Math.sin(Math.PI * collect) * (i % 2 ? 24 : -24);
        const x = badge.x * spread * (1 - collect) + arc;
        const y = (badge.y * (compact ? 0.85 : 1) + fallOffset(elapsed / FALL_SLOWDOWN)) * (1 - collect);
        const angle = (badge.r - 6 * Math.exp(-Math.max(0, elapsed) / 400)) * (1 - collect);
        const scale = (0.94 + 0.06 * phase(elapsed, 0, 500)) * (1 - collect * 0.98);
        tiles[i]!.style.opacity = String(phase(elapsed, 0, 140) * (1 - phase(collect, 0.90, 0.10)));
        tiles[i]!.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${angle}deg) scale(${scale})`;
        tints[i]!.style.opacity = String(phase(collect, 0.65, 0.30));
      });
    };

    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const previousGutter = root.style.scrollbarGutter;
    let previousScrollBehavior: string | undefined;
    let animations: Animation[] = [];
    let readyAnimations: Animation[] | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let locked = false;
    let started = false;
    let aligning = false;
    let pushFrame = 0;
    let pushTarget: number | undefined;
    let prepared: { width: number; tracks: Keyframe[][] } | undefined;
    let lockedScrollY = 0;
    let finished = false;
    let playbackFrame = 0;
    let playbackElapsed = 0;
    let positionInitialized = false;

    const preventScroll = (event: Event) => event.preventDefault();
    const preventScrollKey = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) event.preventDefault();
    };
    const unlock = () => {
      if (!locked) return;
      locked = false;
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScrollKey);
      if (previousScrollBehavior !== undefined) root.style.scrollBehavior = previousScrollBehavior;
      previousScrollBehavior = undefined;
    };
    const cancelPlayback = () => {
      cancelAnimationFrame(playbackFrame);
      playbackFrame = 0;
      animations.forEach((animation) => { animation.onfinish = null; animation.cancel(); });
      animations = [];
    };
    const commitPush = () => {
      if (pushTarget === undefined) return;
      const target = pushTarget;
      pushTarget = undefined;
      cancelAnimationFrame(pushFrame);
      pushFrame = 0;
      lockedScrollY = target;
      window.scrollTo({ top: target, behavior: "auto" });
      aligning = false;
    };
    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      readyAnimations?.forEach((animation) => animation.cancel());
      readyAnimations = undefined;
      // Keep the original title nodes and their CSS icon animations alive. The
      // native page position was committed at the end of the initial push, so
      // releasing input here needs no scroll jump, cloned cover, or layout switch.
      paint(DURATION);
      cancelPlayback();
      commitPush();
      main.dataset.animationState = "complete";
      unlock();
    };
    const prepareTracks = () => {
      if (prepared?.width === viewportWidth) return prepared.tracks;
      const clone = (node: HTMLElement) => node.cloneNode(false) as HTMLElement;
      const detached = {
        flower: clone(flower), panel: clone(panel),
        petals: petals.map(clone), tiles: tiles.map(clone), tints: tints.map(clone),
        statementMasks: statementMasks.map(clone), statementWords: statementWords.map(clone), statementSlots: statementSlots.map(clone), statementIcons: statementIcons.map(clone),
      };
      const elements = [detached.flower, ...detached.petals, ...detached.tiles, ...detached.tints, detached.panel, ...detached.statementMasks, ...detached.statementWords, ...detached.statementSlots, ...detached.statementIcons];
      const tracks: Keyframe[][] = elements.map(() => []);
      const samples = Math.ceil(DURATION / (1000 / 60));
      // Build on detached nodes, never mutating the visible page during preparation.
      for (let sample = 0; sample <= samples; sample++) {
        paint(sample * DURATION / samples, detached);
        elements.forEach((element, i) => {
          const keyframe: Keyframe = { offset: sample / samples };
          if (element.style.transform) keyframe.transform = element.style.transform;
          if (element.style.opacity) keyframe.opacity = element.style.opacity;
          if (element.style.clipPath) keyframe.clipPath = element.style.clipPath;
          tracks[i]!.push(keyframe);
        });
      }
      // Retain plateau endpoints, but omit identical samples in between.
      // This keeps the exact timing while reducing compositor setup at takeover.
      tracks.forEach((track, index) => {
        const same = (a: Keyframe, b: Keyframe) => a.transform === b.transform
          && a.opacity === b.opacity && a.clipPath === b.clipPath;
        tracks[index] = track.filter((frame, i) => i === 0 || i === track.length - 1
          || !same(frame, track[i - 1]!) || !same(frame, track[i + 1]!));
      });
      prepared = { width: viewportWidth, tracks };
      return tracks;
    };
    const preparePlayback = () => {
      if (readyAnimations) return readyAnimations;
      const tracks = prepareTracks();
      const elements = [flower, ...petals, ...tiles, ...tints, panel, ...statementMasks, ...statementWords, ...statementSlots, ...statementIcons];
      readyAnimations = elements.map((element, i) => {
        const animation = element.animate(tracks[i]!, { duration: DURATION, easing: "linear", fill: "both" });
        animation.pause();
        animation.currentTime = 0;
        return animation;
      });
      return readyAnimations;
    };
    const play = (elapsed = 0) => {
      cancelPlayback();
      // Drive the phone timeline directly. A single frame loop avoids relying
      // on dozens of paused compositor animations resuming together in WebKit.
      if (viewportWidth < 768) {
        const startTime = performance.now() + 40 - elapsed;
        paint(elapsed);
        const tick = (time: number) => {
          playbackElapsed = Math.max(0, Math.min(DURATION, time - startTime));
          paint(playbackElapsed);
          if (playbackElapsed < DURATION) playbackFrame = requestAnimationFrame(tick);
          else finish();
        };
        playbackFrame = requestAnimationFrame(tick);
        return startTime;
      }
      animations = preparePlayback();
      readyAnimations = undefined;
      const startTime = Number(document.timeline.currentTime ?? performance.now()) + 40 - elapsed;
      animations.forEach((animation) => {
        animation.play();
        animation.startTime = startTime;
      });
      animations[0]!.onfinish = finish;
      return startTime;
    };
    const resize = () => {
      const widthChanged = viewportWidth !== window.innerWidth;
      viewportWidth = window.innerWidth;
      main.style.setProperty("--learning-top-space", `${headerOffset()}px`);
      // Mobile browser bars resize the height while scrolling. The stable-vh
      // scene and its animation need no restart when its width is unchanged.
      if (!widthChanged) return;
      readyAnimations?.forEach((animation) => animation.cancel());
      readyAnimations = undefined;
      checkPosition();
      if (pushTarget !== undefined) { finish(); return; }
      if (locked) play(Number(animations[0]?.currentTime ?? playbackElapsed));
      else if (started || preference.matches) paint(DURATION);
    };
    const motionChange = () => { if (preference.matches) { started = true; finish(); } };
    const begin = (pushTo?: number) => {
      if (started) return;
      started = true;
      main.dataset.animationState = pushTo === undefined ? "playing" : "pushing";
      if (preference.matches) { finish(); return; }
      lockedScrollY = window.scrollY;
      previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      // Cancel native smooth-scroll/momentum before the compositor takes over.
      // Otherwise both movements can overlap despite overflow being hidden.
      window.scrollTo({ top: lockedScrollY, behavior: "auto" });
      locked = true;
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventScrollKey);
      let startTime: number;
      try { startTime = play(INCOMING_LEAD); } catch { finish(); return; }
      if (pushTo !== undefined) {
        aligning = true;
        pushTarget = pushTo;
        const origin = lockedScrollY;
        const distance = pushTo - origin;
        const pushStart = startTime + INCOMING_LEAD;
        // Move the actual scroll container throughout the entrance. Transforming
        // <main> temporarily changed the containing block of its sticky scenes,
        // then jumped when that transform was removed at the landing position.
        const align = (time: number) => {
          const progress = clamp((time - pushStart) / PUSH_DURATION);
          lockedScrollY = origin + distance * smooth(progress);
          window.scrollTo({ top: lockedScrollY, behavior: "auto" });
          if (progress < 1) pushFrame = requestAnimationFrame(align);
          else {
            commitPush();
            main.dataset.animationState = "playing";
          }
        };
        pushFrame = requestAnimationFrame(align);
      }
      timer = setTimeout(finish, DURATION - INCOMING_LEAD + 250);
    };
    const checkPosition = () => {
      if (started || aligning || preference.matches || !about) return;
      const aboutRect = about.getBoundingClientRect();
      const rect = main.getBoundingClientRect();
      const initialPosition = !positionInitialized;
      positionInitialized = true;
      // Sticky positioning keeps this scene visible beneath later cards. On a
      // restored deep scroll, show its completed state instead of pulling back.
      const target = Math.max(0, window.scrollY + aboutRect.bottom - headerOffset());
      // Only bypass playback when opening the page at an already deep position.
      // Normal scrolling beyond this point must still play the entrance.
      if ((initialPosition && window.scrollY > target + 48) || rect.bottom <= 0) {
        started = true;
        finish();
        return;
      }
      // Mobile cards stack vertically. Wait until their final illustration has
      // been seen before taking over; the desktop quarter-height trigger would
      // interrupt the second card while it is still entering the viewport.
      if (viewportWidth < 768) {
        if (aboutRect.bottom > window.innerHeight * 0.65) return;
      } else if (aboutRect.top > -aboutRect.height * 0.25) return;
      begin(target);
    };
    const onScroll = () => checkPosition();
    const observer = new IntersectionObserver(() => checkPosition(), { threshold: [0, 0.3, 0.6, 0.8, 1] });
    root.style.scrollbarGutter = "stable";
    main.dataset.animationState = "waiting";
    paint(preference.matches ? DURATION : 0);
    if (autoPlay) begin();
    else {
      if (about) observer.observe(about);
      observer.observe(main);
      window.addEventListener("scroll", onScroll, { passive: true });
      checkPosition();
    }
    const preparation = "requestIdleCallback" in window
      ? window.requestIdleCallback(() => { if (viewportWidth >= 768 && !started && !preference.matches) preparePlayback(); }, { timeout: 1200 })
      : undefined;
    window.addEventListener("resize", resize);
    preference.addEventListener("change", motionChange);
    return () => {
      observer.disconnect();
      if (preparation !== undefined) window.cancelIdleCallback(preparation);
      cancelAnimationFrame(pushFrame);
      window.removeEventListener("scroll", onScroll);
      readyAnimations?.forEach((animation) => animation.cancel());
      cancelPlayback(); clearTimeout(timer); unlock();
      root.style.scrollbarGutter = previousGutter;
      window.removeEventListener("resize", resize);
      preference.removeEventListener("change", motionChange);
    };
  }, [autoPlay]);

  return (
    <section id="lernplan-animation" ref={rootRef} className={styles.scene} aria-label="Aus deinen Lerninhalten entsteht ein Plan">
        <div data-learning-stage className={styles.stage}>
          <div data-panel className={styles.newSection}><DayovaPlanStatement /></div>
          <div data-flower className={styles.flower} role="img" aria-label="Dayova-Ladeblume" style={{ opacity: 0 }}>
            {flowerGeometry.petals.map((petal) => <span data-petal key={petal.id} className={styles.petal} style={{ width: flowerGeometry.petalSize, height: flowerGeometry.petalSize, left: flowerGeometry.center - flowerGeometry.petalSize / 2, top: flowerGeometry.center - flowerGeometry.petalSize / 2 }} />)}
          </div>
          <div className={styles.badgeField} aria-hidden="true">
            {badges.map((badge) => <div data-badge key={badge.text} className={`${styles.badge} ${styles[badge.color]}`} style={{ opacity: 0 }}><span data-tint className={styles.mergeTint} style={{ opacity: 0 }} /><span className={styles.badgeIcon}><HugeiconsIcon icon={badge.icon} size={24} strokeWidth={1.7} /></span>{badge.text}</div>)}
          </div>
        </div>
    </section>
  );
}
