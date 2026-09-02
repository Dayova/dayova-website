import Link from "next/link";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { DashboardNavigation } from "./dashboard-navigation";
import { DashboardNotificationLink } from "./dashboard-notification-link";
import { DashboardSettingsMenu } from "./dashboard-settings-menu";
import {
  GlobalDashboardSearch,
  type DashboardSearchItem,
} from "./global-dashboard-search";
import type { DashboardSession } from "../types";

type DashboardShellProps = {
  session: DashboardSession;
  children: ReactNode;
  searchItems: DashboardSearchItem[];
};

export function DashboardShell({ session, children, searchItems }: DashboardShellProps) {
  return (
    <div className="teacher-app-shell">
      <aside className="teacher-sidebar">
        <div className="teacher-sidebar-brand">
          <Link href="/teachers" aria-label="Dayova Lehrkräfte Startseite">
            <Brand />
          </Link>
          <span className="teacher-product-label">für Lehrkräfte</span>
        </div>

        <div className="teacher-mobile-header-actions">
          <DashboardNotificationLink />
          <DashboardSettingsMenu />
        </div>

        <DashboardNavigation role={session.role} />

        <Link className="teacher-sidebar-profile" href="/teachers/profile">
          <span className="teacher-avatar" aria-hidden="true">
            FM
          </span>
          <span>
            <strong>{session.displayName}</strong>
            <small>Albert-Einstein-Schule</small>
          </span>
        </Link>
      </aside>

      <div className="teacher-app-content">
        <header className="teacher-topbar">
          <GlobalDashboardSearch items={searchItems} />
          <DashboardNotificationLink />
          <DashboardSettingsMenu />
          <span className="teacher-topbar-school">Albert-Einstein-Schule</span>
        </header>

        <main className="teacher-main">{children}</main>
      </div>
    </div>
  );
}
