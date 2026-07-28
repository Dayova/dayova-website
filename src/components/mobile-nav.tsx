"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#produkt", label: "Produkt" },
  { href: "#unterschied", label: "Unterschied" },
  { href: "#so-funktionierts", label: "So funktioniert’s" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="relative lg:hidden">
      <button
        className="theme-panel grid size-11 place-items-center rounded-full bg-ink text-white"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="text-lg leading-none" aria-hidden="true">
          {open ? "×" : "≡"}
        </span>
      </button>
      {open ? (
        <nav
          className="theme-panel absolute right-0 top-[calc(100%+12px)] grid min-w-64 gap-1 rounded-dayova-md border border-line bg-elevated p-3 shadow-card-strong"
          id="mobile-navigation"
          aria-label="Mobile Navigation"
        >
          {links.map((link) => (
            <a
              className="rounded-xl px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-subtle"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
