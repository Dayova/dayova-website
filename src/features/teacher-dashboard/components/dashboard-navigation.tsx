"use client";

import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { dashboardNavigation } from "../navigation";
import type { DashboardRole } from "../types";

type DashboardNavigationProps = {
  role: DashboardRole;
};

export function DashboardNavigation({ role }: DashboardNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const items = dashboardNavigation.filter(
    (item) => !item.adminOnly || role !== "teacher",
  );

  return (
    <>
      <button
        type="button"
        className="teacher-mobile-menu-button"
        aria-label={isOpen ? "Navigation schließen" : "Navigation öffnen"}
        aria-expanded={isOpen}
        aria-controls="teacher-navigation"
        onClick={() => setIsOpen((value) => !value)}
      >
        <DayovaIcon icon={isOpen ? Cancel01Icon : Menu01Icon} />
      </button>

      <nav
        id="teacher-navigation"
        className="teacher-sidebar-navigation"
        data-open={isOpen}
        aria-label="Hauptnavigation"
      >
        {items.map((item) => {
          const activePaths = item.activePaths ?? [item.href];
          const isActive = activePaths.some((path) =>
            path === "/teachers"
              ? pathname === path
              : pathname === path || pathname.startsWith(`${path}/`),
          );

          return (
            <Link
              key={item.href}
              href={item.href}
              className="teacher-nav-link"
              data-active={isActive}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              <DayovaIcon icon={item.icon} size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
