import Link from "next/link";
import { Brand } from "@/components/brand";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-[#171a1f] text-white">
      <div className="dayova-container py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/12 pb-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link href="/" aria-label="Dayova Startseite">
              <Brand inverse />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              Dein persönlicher Lernbegleiter für einen klaren Plan, verständliche
              nächste Schritte und mehr Orientierung beim Lernen.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span className="text-sm text-white/70">Folge uns</span>
              <a
                className="grid size-10 place-items-center rounded-full border border-white/15 font-semibold transition hover:border-brand hover:text-brand"
                href={siteConfig.links.instagram}
                rel="noreferrer"
                target="_blank"
                aria-label="Dayova auf Instagram"
              >
                ◎
              </a>
              <a
                className="grid size-10 place-items-center rounded-full border border-white/15 text-xs font-semibold transition hover:border-brand hover:text-brand"
                href={siteConfig.links.linkedin}
                rel="noreferrer"
                target="_blank"
                aria-label="Dayova auf LinkedIn"
              >
                in
              </a>
              {siteConfig.links.discord ? (
                <a
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-xs font-semibold transition hover:border-brand hover:text-brand"
                  href={siteConfig.links.discord}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Dayova auf Discord"
                >
                  dc
                </a>
              ) : null}
            </div>
          </div>

          <nav
            className="grid gap-8 sm:grid-cols-3"
            aria-label="Footer Navigation"
          >
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold tracking-normal text-white">
                  {group.title}
                </h2>
                <ul className="mt-4 grid gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="text-sm text-white/65 transition hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-7 border-b border-white/12 py-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">Du hast Fragen?</p>
            <p className="mt-1 text-sm text-white/60">
              Schreib uns – wir melden uns persönlich bei dir.
            </p>
          </div>
          <ButtonLink
            href={`mailto:${siteConfig.links.email}`}
            variant="primary"
          >
            Kontakt aufnehmen
          </ButtonLink>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright © 2026 Dayova</span>
          <span>Mit Klarheit für Schülerinnen und Schüler entwickelt.</span>
        </div>
      </div>
    </footer>
  );
}
