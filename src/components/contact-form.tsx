import { siteConfig } from "@/config/site";

export function ContactForm() {
  return (
    <section
      className="dayova-section"
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <div className="dayova-container">
        <div className="theme-panel grid gap-10 rounded-dayova-lg border border-line bg-elevated p-7 shadow-card sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <p className="section-label mb-4">Du hast Fragen?</p>
            <h2 className="text-ink" id="contact-title">
              Wir helfen dir gerne weiter.
            </h2>
            <p className="mt-5 max-w-lg text-dayova-body text-muted">
              Eine kurze Nachricht genügt. Beim Absenden öffnet sich dein
              E-Mail-Programm; deine Angaben werden nicht auf dieser Website
              gespeichert.
            </p>
          </div>

          <form
            className="grid gap-5"
            action={`mailto:${siteConfig.links.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label
                  className="text-dayova-small font-medium text-ink"
                  htmlFor="contact-name"
                >
                  Name
                </label>
                <input
                  className="min-h-12 rounded-xl border border-line bg-surface px-4 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
                  id="contact-name"
                  name="Name"
                  type="text"
                  autoComplete="name"
                  placeholder="Dein Name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-dayova-small font-medium text-ink"
                  htmlFor="contact-email"
                >
                  E-Mail
                </label>
                <input
                  className="min-h-12 rounded-xl border border-line bg-surface px-4 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
                  id="contact-email"
                  name="E-Mail"
                  type="email"
                  autoComplete="email"
                  placeholder="name@beispiel.de"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label
                className="text-dayova-small font-medium text-ink"
                htmlFor="contact-message"
              >
                Nachricht <span className="text-muted">(optional)</span>
              </label>
              <textarea
                className="min-h-28 resize-y rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
                id="contact-message"
                name="Nachricht"
                placeholder="Wobei können wir helfen?"
              />
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-dayova-small text-muted">
                Keine Registrierung erforderlich.
              </p>
              <button
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                type="submit"
              >
                Nachricht vorbereiten
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
