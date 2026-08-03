"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useEffect } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

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
      className="theme-panel grid size-11 shrink-0 place-items-center rounded-dayova-md border border-line bg-elevated text-lg text-ink transition hover:border-brand hover:text-brand-deep"
      type="button"
      onClick={toggleTheme}
      aria-label="Farbschema wechseln"
      title="Farbschema wechseln"
    >
      <DayovaIcon
        className="theme-moon"
        icon={Moon02Icon}
        size={20}
        aria-hidden="true"
      />
      <DayovaIcon
        className="theme-sun"
        icon={Sun03Icon}
        size={20}
        aria-hidden="true"
      />
    </button>
  );
}
