import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";

export const metadata: Metadata = {
  title: "Bezahlvorgang abgebrochen",
  description: "Kehre zu den Dayova-Abos zurück und wähle deinen Tarif.",
  robots: { index: false, follow: false },
};

export default function CheckoutCanceledPage() {
  return (
    <section
      className="home-classic-section checkout-result-page"
      aria-labelledby="checkout-cancel-title"
    >
      <div className="dayova-container checkout-result-page__inner">
        <span className="home-classic-section-eyebrow">Nicht abgeschlossen</span>
        <h1 className="dayova-hero-claim" id="checkout-cancel-title">
          Es wurde nichts berechnet.
        </h1>
        <p>
          Du kannst deinen Tarif noch einmal prüfen oder den Bezahlvorgang
          später fortsetzen.
        </p>
        <div className="checkout-result-page__actions">
          <ButtonLink href="/pricing" variant="primary">
            <span className="checkout-result-page__button-label">
              <DayovaIcon icon={ArrowLeft02Icon} size={20} />
              Zurück zu den Preisen
            </span>
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Zur Startseite
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
