import Link from "next/link";
import { Brand } from "@/components/brand";
import { HeaderNavigation } from "@/components/header-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button-link";

export function Header() {
  return (
    <header className="pointer-events-none sticky top-4 z-50 pt-4">
      <div className="dayova-container pointer-events-auto flex min-h-20 items-center justify-between gap-4 rounded-dayova-xl border border-line bg-elevated/90 px-4 shadow-card backdrop-blur-xl sm:min-h-[88px] sm:px-6">
        <Link
          className="inline-flex rounded-dayova-sm"
          href="/"
          aria-label="Dayova Startseite"
        >
          <Brand />
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink
              className="button-compact"
              href="/app-start"
              variant="primary"
            >
              App herunterladen
            </ButtonLink>
          </div>
          <ThemeToggle />
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
}
