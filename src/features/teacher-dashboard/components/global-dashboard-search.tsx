"use client";

import { Search01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

export type DashboardSearchItem = {
  id: string;
  label: string;
  meta: string;
  href: string;
  keywords: string;
};

export function GlobalDashboardSearch({ items }: { items: DashboardSearchItem[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const results = query.trim()
    ? items
        .filter((item) =>
          `${item.label} ${item.meta} ${item.keywords}`
            .toLocaleLowerCase("de")
            .includes(query.trim().toLocaleLowerCase("de")),
        )
        .slice(0, 8)
    : items.slice(0, 5);

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  return (
    <div className="teacher-global-search" ref={containerRef}>
      <label className="teacher-search">
        <DayovaIcon icon={Search01Icon} size={18} />
        <span className="sr-only">Dashboard durchsuchen</span>
        <input
          type="search"
          value={query}
          placeholder="Klassen und Schüler:innen suchen"
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        />
      </label>
      {open ? (
        <div className="teacher-search-popover" role="listbox">
          {results.length ? (
            results.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
              >
                <strong>{item.label}</strong>
                <span>{item.meta}</span>
              </Link>
            ))
          ) : (
            <p>Keine passenden Klassen oder Schüler:innen gefunden.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
