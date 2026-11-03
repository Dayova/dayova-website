"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./parents.module.css";

export function ParentsMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = ref.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = Array.from(page.querySelectorAll<HTMLElement>("[data-parent-reveal]"));
    const cards = Array.from(page.querySelectorAll<HTMLElement>("[data-parent-art]"));
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.parentEntered = "true";
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    const artObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        (entry.target as HTMLElement).dataset.parentInView = String(entry.isIntersecting);
      });
    });

    if (!preference.matches) {
      items.forEach(item => {
        // Restored scroll positions and anchor links must not hide earlier content.
        item.dataset.parentEntered = item.getBoundingClientRect().bottom <= 0 ? "true" : "false";
        if (item.dataset.parentEntered === "false") revealObserver.observe(item);
      });
    }
    cards.forEach(card => artObserver.observe(card));

    const showAll = () => {
      if (!preference.matches) return;
      revealObserver.disconnect();
      items.forEach(item => item.removeAttribute("data-parent-entered"));
    };
    const revealFocused = (event: FocusEvent) => {
      const item = (event.target as HTMLElement).closest<HTMLElement>("[data-parent-reveal]");
      if (!item) return;
      item.dataset.parentEntered = "true";
      revealObserver.unobserve(item);
    };
    preference.addEventListener("change", showAll);
    page.addEventListener("focusin", revealFocused);
    return () => {
      revealObserver.disconnect();
      artObserver.disconnect();
      preference.removeEventListener("change", showAll);
      page.removeEventListener("focusin", revealFocused);
      items.forEach(item => item.removeAttribute("data-parent-entered"));
      cards.forEach(card => card.removeAttribute("data-parent-in-view"));
    };
  }, []);

  return <div ref={ref} className={styles.motion}>{children}</div>;
}
