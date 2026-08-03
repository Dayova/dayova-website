import { siteConfig } from "@/config/site";

export function ContactForm() {
  return (
    <section
      className="section"
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <div className="dayova-container">
        <div className="theme-panel grid gap-6 rounded-dayova-xl border border-line bg-elevated p-6 shadow-card lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <h2 className="dayova-section-title text-ink" id="contact-title">
              Wir helfen dir gerne weiter.
            </h2>
            <p className="mt-4 max-w-lg text-dayova-body text-muted">
              Eine kurze Nachricht genügt. Beim Absenden öffnet sich dein
              E-Mail-Programm; deine Angaben werden nicht auf dieser Website
              gespeichert.
            </p>
          </div>

          <form
            className="grid gap-4"
            action={`mailto:${siteConfig.links.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label
                  className="text-dayova-small font-medium text-ink"
                  htmlFor="contact-name"
                >
                  Name
                </label>
                <input
                  className="min-h-12 rounded-dayova-control border border-line bg-surface px-4 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
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
                  className="min-h-12 rounded-dayova-control border border-line bg-surface px-4 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
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
                className="min-h-28 resize-y rounded-dayova-control border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
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
                className="button-dark cursor-pointer"
                type="submit"
              >
                Nachricht vorbereiten
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
