"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SectionReveal({ children, className }: { children: ReactNode; className: string | undefined }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = section.querySelectorAll<HTMLElement>("[data-reveal-item]");
    // Observe each group separately so cards do not animate below the viewport.
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.reveal = "visible";
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: .15, rootMargin: "0px 0px -12% 0px" });
    for (const item of items) {
      item.dataset.reveal = "waiting";
      observer.observe(item);
    }
    const revealFocused = (event: FocusEvent) => {
      const item = (event.target as HTMLElement).closest<HTMLElement>("[data-reveal-item]");
      if (item) {
        item.dataset.reveal = "visible";
        observer.unobserve(item);
      }
    };
    section.addEventListener("focusin", revealFocused);
    return () => {
      observer.disconnect();
      section.removeEventListener("focusin", revealFocused);
      items.forEach((item) => delete item.dataset.reveal);
    };
  }, []);
  return <section ref={ref} className={className} aria-labelledby="about-title">{children}</section>;
}
