import { CheckmarkCircle02Icon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { StoreDownloadLink } from "@/components/store-download-link";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { getSafeRevenueCatRedemptionUrl } from "@/lib/revenuecat";

export const metadata: Metadata = {
  title: "Abo erfolgreich abgeschlossen – Dayova",
  description:
    "Schließe die Einrichtung deines Dayova-Abos ab und starte mit deinem persönlichen Lernplan.",
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const redeemUrl = getSafeRevenueCatRedemptionUrl(query.redeem_url);

  return (
    <section
      className="home-classic-section checkout-result-page"
      aria-labelledby="checkout-success-title"
    >
      <div className="dayova-container checkout-result-page__inner">
        <div className="checkout-result-page__icon" aria-hidden="true">
          <DayovaIcon icon={CheckmarkCircle02Icon} size={32} strokeWidth={2} />
        </div>
        <span className="home-classic-section-eyebrow">Zahlung bestätigt</span>
        <h1 className="dayova-hero-claim" id="checkout-success-title">
          Dein Dayova-Abo ist bereit.
        </h1>
        <p>
          {redeemUrl
            ? "Verbinde den Kauf jetzt sicher mit deinem Dayova-Konto. Der persönliche Einlöse-Link ist 60 Minuten gültig."
            : "Öffne Dayova und melde dich mit deinem Lernkonto an. Dein Abo wird dort über RevenueCat bereitgestellt."}
        </p>
        <div className="checkout-result-page__actions">
          {redeemUrl ? (
            <a className="button-primary" href={redeemUrl}>
              <span className="checkout-result-page__button-label">
                Abo mit Dayova verbinden
                <DayovaIcon icon={LinkSquare02Icon} size={20} />
              </span>
            </a>
          ) : (
            <StoreDownloadLink variant="primary">Dayova öffnen</StoreDownloadLink>
          )}
          <ButtonLink href="/" variant="secondary">
            Zur Startseite
          </ButtonLink>
        </div>
        {redeemUrl ? (
          <p className="checkout-result-page__note">
            Teile diesen Link nicht. Er ordnet das gekaufte Abo dem Konto zu, in
            dem du ihn öffnest.
          </p>
        ) : null}
      </div>
    </section>
  );
}
