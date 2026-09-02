"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { StoreDownloadLink } from "@/components/store-download-link";
import { primaryNavigation } from "@/content/navigation";

const menuMotion =
  "transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export function HeaderNavigation() {
  const navigationRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeNavigation = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) {
        closeNavigation();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNavigation();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={navigationRef}>
      <button
        ref={buttonRef}
        type="button"
        className={`group relative grid size-12 place-items-center rounded-dayova-pill text-page transition-[background-color,color,transform] duration-300 ease-out hover:scale-105 hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none ${
          isOpen ? "bg-brand text-white" : "bg-ink"
        }`}
        aria-controls="dayova-primary-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Navigation schließen" : "Navigation öffnen"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="relative block h-5 w-6" aria-hidden="true">
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isOpen
                ? "-translate-y-1/2 rotate-45"
                : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isOpen
                ? "-translate-y-1/2 -rotate-45"
                : "translate-y-[3px]"
            }`}
          />
        </span>
      </button>

      <nav
        id="dayova-primary-navigation"
        className={`absolute right-0 top-full mt-3 grid min-w-72 origin-top-right gap-1 overflow-hidden rounded-dayova-xl border border-line bg-elevated/95 p-3 shadow-card-strong backdrop-blur-xl ${menuMotion} ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "pointer-events-none invisible -translate-y-3 scale-95 opacity-0"
        }`}
        aria-label="Hauptnavigation"
        aria-hidden={!isOpen}
      >
        {primaryNavigation.map((link, index) => (
          <Link
            className={`rounded-dayova-sm px-4 py-3 transition-[background-color,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-subtle focus-visible:outline-2 focus-visible:outline-brand motion-reduce:transition-none ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            href={link.href}
            key={link.href}
            onNavigate={closeNavigation}
            style={{ transitionDelay: isOpen ? `${70 + index * 40}ms` : "0ms" }}
          >
            <span className="block text-sm font-semibold text-ink">
              {link.label}
            </span>
            {link.description ? (
              <span className="mt-1 block text-xs text-muted">
                {link.description}
              </span>
            ) : null}
          </Link>
        ))}
        <div
          className={`transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{
            transitionDelay: isOpen
              ? `${70 + primaryNavigation.length * 40}ms`
              : "0ms",
          }}
        >
          <StoreDownloadLink
            className="button-compact mt-1 w-full sm:hidden"
            onClick={closeNavigation}
          >
            App herunterladen
          </StoreDownloadLink>
        </div>
      </nav>
    </div>
  );
}
