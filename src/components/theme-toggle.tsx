"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("dayova-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle(
      "dark",
      savedTheme ? savedTheme === "dark" : prefersDark,
    );
  }, []);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("dayova-theme", nextIsDark ? "dark" : "light");
  }

  return (
    <button
      className="theme-panel grid size-11 shrink-0 place-items-center rounded-full border border-line bg-elevated text-lg text-ink transition hover:border-brand hover:text-brand-deep"
      type="button"
      onClick={toggleTheme}
      aria-label="Farbschema wechseln"
      title="Farbschema wechseln"
    >
      <span className="theme-moon" aria-hidden="true">
        ☾
      </span>
      <span className="theme-sun" aria-hidden="true">
        ☼
      </span>
    </button>
  );
}
