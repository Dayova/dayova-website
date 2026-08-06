"use client";

import { MenuTwoLineIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { primaryNavigation } from "@/content/navigation";

export function HeaderNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  const closeNavigation = () => {
    detailsRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname]);

  return (
    <details className="group relative" ref={detailsRef}>
      <summary
        className="grid size-12 cursor-pointer list-none place-items-center rounded-dayova-pill bg-ink text-page transition-colors hover:bg-brand hover:text-white"
        aria-label="Navigation öffnen"
      >
        <DayovaIcon
          icon={MenuTwoLineIcon}
          size={23}
          strokeWidth={1.9}
          aria-hidden="true"
        />
      </summary>
      <nav
        className="absolute right-0 mt-3 grid min-w-72 gap-1 rounded-dayova-xl border border-line bg-elevated p-3 shadow-card-strong"
        aria-label="Hauptnavigation"
      >
        {primaryNavigation.map((link) => (
          <Link
            className="rounded-dayova-sm px-4 py-3 transition-colors hover:bg-subtle"
            href={link.href}
            key={link.href}
            onNavigate={closeNavigation}
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
        <StoreDownloadLink
          className="button-compact mt-1 sm:hidden"
          onClick={closeNavigation}
        >
          App herunterladen
        </StoreDownloadLink>
      </nav>
    </details>
  );
}
