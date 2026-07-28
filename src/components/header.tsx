import Link from "next/link";
import { Brand } from "@/components/brand";
import { LaunchCta } from "@/components/launch-cta";
import { ThemeToggle } from "@/components/theme-toggle";
import { primaryNavigation } from "@/content/navigation";

export function Header() {
  return (
    <header className="pointer-events-none sticky top-4 z-50 pt-4 sm:top-5 sm:pt-5">
      <div className="dayova-container pointer-events-auto flex min-h-20 items-center justify-between gap-5 rounded-[30px] border border-line bg-elevated/90 px-5 shadow-[0_12px_36px_rgba(45,67,80,0.06)] backdrop-blur-xl sm:min-h-[88px] sm:px-6">
        <Link
          className="inline-flex rounded-md"
          href="/"
          aria-label="Dayova Startseite"
        >
          <Brand />
        </Link>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <LaunchCta compact />
          </div>
          <ThemeToggle />
          <details className="group relative">
            <summary
              className="grid size-12 cursor-pointer list-none place-items-center rounded-full bg-[#171819] text-white transition-transform hover:scale-[1.03] sm:size-[50px]"
              aria-label="Navigation öffnen"
            >
              <span className="grid gap-[5px]" aria-hidden="true">
                <span className="block h-[1.5px] w-5 bg-white" />
                <span className="ml-1 block h-[1.5px] w-4 bg-white" />
              </span>
            </summary>
            <nav
              className="absolute right-0 mt-3 grid min-w-72 gap-1 rounded-[22px] border border-line bg-elevated p-3 shadow-card-strong"
              aria-label="Hauptnavigation"
            >
              {primaryNavigation.map((link) => (
                <Link
                  className="rounded-2xl px-4 py-3 transition-colors hover:bg-subtle"
                  href={link.href}
                  key={link.href}
                >
                  <span className="block text-sm font-semibold text-ink">
                    {link.label}
                  </span>
                  {link.description ? (
                    <span className="mt-0.5 block text-xs text-muted">
                      {link.description}
                    </span>
                  ) : null}
                </Link>
              ))}
              <LaunchCta className="mt-1 sm:hidden" compact />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
