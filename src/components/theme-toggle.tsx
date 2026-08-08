"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useEffect } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

const themeStorageKey = "dayova-theme";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
}

export function ThemeToggle() {
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    function syncWithSystemTheme(event: MediaQueryListEvent | MediaQueryList) {
      try {
        if (localStorage.getItem(themeStorageKey)) return;
      } catch {}

      applyTheme(event.matches);
    }

    syncWithSystemTheme(systemTheme);
    systemTheme.addEventListener("change", syncWithSystemTheme);

    return () => systemTheme.removeEventListener("change", syncWithSystemTheme);
  }, []);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    applyTheme(nextIsDark);

    try {
      localStorage.setItem(themeStorageKey, nextIsDark ? "dark" : "light");
    } catch {}
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
