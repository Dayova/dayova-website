import Link from "next/link";
import { Brand } from "@/components/brand";
import { SocialLinks } from "@/components/social-links";
import { ButtonLink } from "@/components/ui/button-link";
import { CookieSettingsButton } from "@/components/analytics-consent";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-dark-panel text-white">
      <div className="dayova-container site-footer__container py-12 lg:py-16">
        <div className="section-inner border-b border-white/12 pb-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <Link href="/" aria-label="Dayova Startseite">
              <Brand inverse />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Dein persönlicher Lernbegleiter für einen klaren Plan, verständliche
              nächste Schritte und mehr Orientierung beim Lernen.
            </p>
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-white/70">Folge uns</p>
              <SocialLinks />
            </div>
          </div>

          <nav
            className="grid gap-8 sm:grid-cols-2"
            aria-label="Footer Navigation"
          >
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold tracking-normal text-white">
                  {group.title}
                </h2>
                <ul className="mt-4 grid gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="inline-flex min-h-11 items-center py-2 text-sm text-white/65 transition hover:text-white"
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

        <div className="flex flex-col gap-6 border-b border-white/12 py-8 md:flex-row md:items-center md:justify-between">
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

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright © 2026 Dayova</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <CookieSettingsButton />
            <span>Mit Klarheit für Schülerinnen und Schüler entwickelt.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
