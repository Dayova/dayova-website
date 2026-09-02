"use client";

import {
  ComputerIcon,
  Moon02Icon,
  Settings02Icon,
  Sun03Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useRef, useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

type ThemePreference = "light" | "system" | "dark";

const themeStorageKey = "dayova-theme";

const themeOptions = [
  {
    value: "light" as const,
    label: "Hell",
    description: "Dayova immer im hellen Modus anzeigen",
    icon: Sun03Icon,
  },
  {
    value: "system" as const,
    label: "System",
    description: "Die Einstellung Ihres Geräts übernehmen",
    icon: ComputerIcon,
  },
  {
    value: "dark" as const,
    label: "Dunkel",
    description: "Dayova immer im dunklen Modus anzeigen",
    icon: Moon02Icon,
  },
];

function getStoredTheme(): ThemePreference {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {}

  return "system";
}

function applyTheme(preference: ThemePreference) {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const isDark =
    preference === "dark" ||
    (preference === "system" && systemPrefersDark);

  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
}

export function DashboardSettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ThemePreference>(getStoredTheme);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    function syncSystemTheme() {
      if (theme === "system") {
        applyTheme("system");
      }
    }

    systemTheme.addEventListener("change", syncSystemTheme);
    return () => systemTheme.removeEventListener("change", syncSystemTheme);
  }, [theme]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnOutsideClick(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function selectTheme(preference: ThemePreference) {
    setTheme(preference);
    applyTheme(preference);

    try {
      window.localStorage.setItem(themeStorageKey, preference);
    } catch {}

    setIsOpen(false);
  }

  return (
    <div className="teacher-settings" ref={menuRef}>
      <button
        type="button"
        className="teacher-icon-button"
        aria-label="Darstellung und Einstellungen öffnen"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((value) => !value)}
      >
        <DayovaIcon icon={Settings02Icon} size={20} />
      </button>

      {isOpen ? (
        <div
          className="teacher-settings-popover"
          role="menu"
          aria-label="Darstellung auswählen"
        >
          <div className="teacher-settings-heading">
            <strong>Darstellung</strong>
            <span>Wählen Sie Ihren bevorzugten Modus.</span>
          </div>

          <div className="teacher-theme-options">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={theme === option.value}
                data-active={theme === option.value}
                onClick={() => selectTheme(option.value)}
              >
                <span className="teacher-theme-option-icon" aria-hidden="true">
                  <DayovaIcon icon={option.icon} size={19} />
                </span>
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.description}</small>
                </span>
                <span className="teacher-theme-check" aria-hidden="true">
                  {theme === option.value ? (
                    <DayovaIcon icon={Tick02Icon} size={17} />
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
