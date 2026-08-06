import {
  Notification01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { DashboardNavigation } from "./dashboard-navigation";
import type { DashboardSession } from "../types";

type DashboardShellProps = {
  session: DashboardSession;
  children: ReactNode;
};

export function DashboardShell({ session, children }: DashboardShellProps) {
  return (
    <div className="teacher-app-shell">
      <aside className="teacher-sidebar">
        <div className="teacher-sidebar-brand">
          <Link href="/lehrkraefte" aria-label="Dayova Lehrkräfte Startseite">
            <Brand />
          </Link>
          <span className="teacher-product-label">für Lehrkräfte</span>
        </div>

        <DashboardNavigation role={session.role} />

        <Link className="teacher-sidebar-profile" href="/lehrkraefte/profil">
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
          <div className="teacher-search">
            <DayovaIcon icon={Search01Icon} size={18} />
            <span>Klassen und Schüler:innen suchen</span>
          </div>
          <Link
            href="/lehrkraefte/benachrichtigungen"
            className="teacher-icon-button"
            aria-label="Benachrichtigungen anzeigen"
          >
            <DayovaIcon icon={Notification01Icon} size={20} />
            <span className="teacher-notification-dot" />
          </Link>
          <span className="teacher-topbar-school">Albert-Einstein-Schule</span>
        </header>

        <main className="teacher-main">{children}</main>
      </div>
    </div>
  );
}
