export function Footer() {
  return (
    <footer className="bg-[#191a1a] text-white">
      <div className="dayova-container py-12 sm:py-14">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-7 sm:gap-9">
            <span className="text-sm text-white/85">Folge uns</span>
            <a
              className="font-semibold hover:text-brand"
              href="https://www.facebook.com/"
              aria-label="Dayova auf Facebook"
            >
              f
            </a>
            <a
              className="font-semibold hover:text-brand"
              href="https://www.instagram.com/dayova/"
              aria-label="Dayova auf Instagram"
            >
              ◎
            </a>
            <a
              className="font-semibold hover:text-brand"
              href="https://www.youtube.com/"
              aria-label="Dayova auf YouTube"
            >
              ▶
            </a>
            <a
              className="font-semibold hover:text-brand"
              href="https://www.linkedin.com/company/dayova"
              aria-label="Dayova auf LinkedIn"
            >
              in
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <span className="text-sm text-white/85">Du hast Fragen?</span>
            <a className="waitlist-button" href="mailto:kontakt@dayova.de">
              Kontakt
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-7">
            <a href="https://dayova.com/impressum/">Impressum</a>
            <a href="https://dayova.com/datenschutz/">Datenschutz</a>
          </div>
          <span>Copyright © 2026 Dayova</span>
        </div>
      </div>
    </footer>
  );
}
