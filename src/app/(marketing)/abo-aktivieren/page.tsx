import { SmartPhone01Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Link from "next/link";

import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { getSafeRevenueCatRedemptionUrl } from "@/lib/revenuecat";

export const metadata: Metadata = {
  title: "Dein Dayova-Abo ist bereit",
  description:
    "Öffne Dayova und verbinde das bereitgestellte Abo mit deinem Lernkonto.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Dein Dayova-Abo ist bereit",
    description:
      "Öffne Dayova auf deinem Gerät und verbinde das Abo mit deinem Lernkonto.",
    images: [
      {
        url: "/images/dayova-hero-phones.png",
        width: 4269,
        height: 2400,
        alt: "Dayova – persönlicher Lernbegleiter mit Lernplan und Wissensanalyse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dein Dayova-Abo ist bereit",
    description:
      "Öffne Dayova auf deinem Gerät und verbinde das Abo mit deinem Lernkonto.",
    images: ["/images/dayova-hero-phones.png"],
  },
};

export default async function ActivateSubscriptionPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const redeemUrl = getSafeRevenueCatRedemptionUrl(query.redeem_url);

  return (
    <section
      className="home-classic-section checkout-result-page checkout-result-page--activation"
      aria-labelledby="subscription-activation-title"
    >
      <div className="dayova-container checkout-result-page__inner">
        <div className="checkout-result-page__icon" aria-hidden="true">
          <DayovaIcon icon={SmartPhone01Icon} size={32} strokeWidth={2} />
        </div>
        <span className="home-classic-section-eyebrow">
          {redeemUrl ? "Für dich bereit" : "Link nicht verfügbar"}
        </span>
        <h1 className="dayova-hero-claim" id="subscription-activation-title">
          {redeemUrl
            ? "Dein Dayova-Abo ist bereit."
            : "Dieser Einlöse-Link ist ungültig."}
        </h1>
        <p>
          {redeemUrl
            ? "Öffne Dayova auf diesem Gerät und melde dich mit deinem Lernkonto an. Das Abo wird anschließend diesem Konto zugeordnet."
            : "Bitte die Person, die das Abo gekauft hat, den persönlichen Link erneut mit dir zu teilen."}
        </p>

        {redeemUrl ? (
          <div className="checkout-activation-panel">
            <a
              aria-describedby="subscription-activation-description subscription-activation-expiry"
              className="button-primary"
              href={redeemUrl}
            >
              <span className="checkout-result-page__button-label">
                <DayovaIcon icon={SmartPhone01Icon} size={20} />
                In Dayova öffnen
              </span>
            </a>
            <p
              className="checkout-activation-panel__description"
              id="subscription-activation-description"
            >
              Melde dich in Dayova mit dem Konto an, das das Abo nutzen soll.
            </p>
            <div className="checkout-activation-panel__divider" aria-hidden="true" />
            <p className="checkout-activation-panel__label">
              Dayova noch nicht installiert?
            </p>
            <StoreDownloadLink variant="secondary">
              Dayova herunterladen
            </StoreDownloadLink>
          </div>
        ) : (
          <div className="checkout-result-page__actions">
            <Link className="button-primary" href="/">
              Zur Dayova-Startseite
            </Link>
          </div>
        )}

        {redeemUrl ? (
          <p
            className="checkout-result-page__note"
            id="subscription-activation-expiry"
          >
            Der persönliche Link ist 60 Minuten gültig und kann nur einem
            Dayova-Konto zugeordnet werden. Öffne ihn nur auf deinem eigenen
            Gerät.
          </p>
        ) : null}
      </div>
    </section>
  );
}
