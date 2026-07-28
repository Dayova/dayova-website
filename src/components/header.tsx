import Link from "next/link";
import { Brand } from "@/components/brand";
import { LaunchCta } from "@/components/launch-cta";
const navigation = [
  { href: "#produkt", label: "Produkt" },
  { href: "#unterschied", label: "Unterschied" },
  { href: "#so-funktionierts", label: "So funktioniert’s" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  return (
    <header className="pointer-events-none sticky top-4 z-50 pt-4 sm:top-5 sm:pt-5">
      <div className="dayova-container pointer-events-auto flex min-h-20 items-center justify-between gap-5 rounded-[30px] border border-white/70 bg-white/90 px-5 shadow-[0_12px_36px_rgba(45,67,80,0.06)] backdrop-blur-xl sm:min-h-[88px] sm:px-6">
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
          <details className="group relative">
            <summary
              className="grid size-12 cursor-pointer list-none place-items-center rounded-full bg-ink text-white transition-transform hover:scale-[1.03] sm:size-[50px]"
              aria-label="Navigation öffnen"
            >
              <span className="grid gap-[5px]" aria-hidden="true">
                <span className="block h-[1.5px] w-5 bg-white" />
                <span className="ml-1 block h-[1.5px] w-4 bg-white" />
              </span>
            </summary>
            <nav
              className="absolute right-0 mt-3 grid min-w-56 gap-1 rounded-[22px] border border-line bg-white p-3 shadow-card-strong"
              aria-label="Hauptnavigation"
            >
              {navigation.map((link) => (
                <a
                  className="rounded-2xl px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-subtle hover:text-ink"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
              <LaunchCta className="mt-1 sm:hidden" compact />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
