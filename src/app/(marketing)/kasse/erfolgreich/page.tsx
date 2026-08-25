import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { RedemptionActions } from "@/components/checkout/redemption-actions";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { getSafeRevenueCatRedemptionUrl } from "@/lib/revenuecat";

export const metadata: Metadata = {
  title: "Abo erfolgreich abgeschlossen",
  description:
    "Schließe die Einrichtung deines Dayova-Abos ab und starte mit deinem persönlichen Lernplan.",
  robots: { index: false, follow: false },
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
      className="home-classic-section checkout-result-page checkout-result-page--success"
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
            ? "Nur noch ein Schritt: Entscheide, wer das Abo mit einem Dayova-Konto verbinden soll."
            : "Öffne Dayova und melde dich mit deinem Lernkonto an. Dein Abo ist anschließend direkt in der App verfügbar."}
        </p>
        {redeemUrl ? (
          <RedemptionActions redeemUrl={redeemUrl} />
        ) : (
          <div className="checkout-result-page__actions">
            <StoreDownloadLink variant="primary">Dayova öffnen</StoreDownloadLink>
          </div>
        )}
        {redeemUrl ? (
          <p
            className="checkout-result-page__note"
            id="checkout-redemption-expiry"
          >
            Der persönliche Link ist 60 Minuten gültig und aktiviert das Abo
            für das Dayova-Konto, in dem er geöffnet wird. Teile ihn nur mit der
            vorgesehenen Person.
          </p>
        ) : null}
      </div>
    </section>
  );
}
