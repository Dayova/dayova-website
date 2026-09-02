"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useEffect } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

function applyTheme(isDark: boolean, source: "manual" | "system") {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  document.documentElement.dataset.themeSource = source;
}

export function ThemeToggle() {
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    function syncWithSystemTheme(event: MediaQueryListEvent | MediaQueryList) {
      applyTheme(event.matches, "system");
    }

    syncWithSystemTheme(systemTheme);
    systemTheme.addEventListener("change", syncWithSystemTheme);

    return () => systemTheme.removeEventListener("change", syncWithSystemTheme);
  }, []);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    applyTheme(nextIsDark, "manual");
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
