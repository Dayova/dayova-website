"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type ScrollActiveAdvantagesProps = {
  children: ReactNode;
};

export function ScrollActiveAdvantages({
  children,
}: ScrollActiveAdvantagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = Array.from(
      list.querySelectorAll<HTMLElement>(".home-classic-advantage"),
    );
    let animationFrame = 0;

    const updateActiveItem = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const focusLine = window.innerHeight * 0.52;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - focusLine);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex((currentIndex) =>
          currentIndex === closestIndex ? currentIndex : closestIndex,
        );
      });
    };

    const observer = new IntersectionObserver(updateActiveItem, {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    items.forEach((item) => observer.observe(item));
    updateActiveItem();
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
    };
  }, []);

  return (
    <div
      className="home-classic-advantages__list"
      data-scroll-active-index={activeIndex}
      ref={listRef}
    >
      {children}
    </div>
  );
}
