import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { RedemptionLinkActions } from "@/components/redemption-link-actions";
import { StoreDownloadLink } from "@/components/store-download-link";
import { ButtonLink } from "@/components/ui/button-link";
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
            ? "Verbinde den Kauf mit deinem Dayova-Konto oder sende den persönlichen Link an die Person, die das Abo nutzen soll. Der Link ist 60 Minuten gültig."
            : "Öffne Dayova und melde dich mit deinem Lernkonto an. Dein Abo wird dort über RevenueCat bereitgestellt."}
        </p>
        {redeemUrl ? (
          <RedemptionLinkActions redeemUrl={redeemUrl} />
        ) : (
          <div className="checkout-result-page__actions">
            <StoreDownloadLink variant="primary">Dayova öffnen</StoreDownloadLink>
            <ButtonLink href="/" variant="secondary">
              Zur Startseite
            </ButtonLink>
          </div>
        )}
        {redeemUrl ? (
          <p className="checkout-result-page__note">
            Der Link kann einmal eingelöst werden und ordnet das Abo dem
            Dayova-Konto zu, das beim Öffnen angemeldet ist. Teile ihn nur mit
            der vorgesehenen Person.
          </p>
        ) : null}
      </div>
    </section>
  );
}
