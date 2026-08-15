"use client";

import {
  ErrorCode,
  type Package,
  Purchases,
  PurchasesError,
} from "@revenuecat/purchases-js";
import { LockKeyIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import type {
  BillingCycle,
  StudentPricingOption,
} from "@/content/pricing";

const anonymousUserStorageKey = "dayova_revenuecat_anonymous_user_id";

type CheckoutState = "loading" | "ready" | "purchasing" | "error";

type RevenueCatCheckoutProps = {
  apiKey: string;
  billingCycle: BillingCycle | null;
  packageId: string;
  pricingOption: StudentPricingOption | null;
};

function getOrCreateAnonymousUserId() {
  const storedId = window.localStorage.getItem(anonymousUserStorageKey);

  if (storedId?.startsWith("$RCAnonymousID:")) {
    return storedId;
  }

  const anonymousId = Purchases.generateRevenueCatAnonymousAppUserId();
  window.localStorage.setItem(anonymousUserStorageKey, anonymousId);
  return anonymousId;
}

function getPurchases(apiKey: string) {
  if (Purchases.isConfigured()) {
    return Purchases.getSharedInstance();
  }

  return Purchases.configure({
    apiKey,
    appUserId: getOrCreateAnonymousUserId(),
  });
}

export function RevenueCatCheckout({
  apiKey,
  billingCycle,
  packageId,
  pricingOption,
}: RevenueCatCheckoutProps) {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>("loading");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isCurrent = true;

    async function prepareCheckout() {
      if (!billingCycle || !pricingOption) {
        setErrorMessage("Bitte wähle zuerst ein gültiges Monats- oder Jahresabo aus.");
        setCheckoutState("error");
        return;
      }

      if (!apiKey.startsWith("rcb_") || !packageId) {
        setErrorMessage(
          "Der Bezahlvorgang ist gerade nicht verfügbar. Bitte versuche es später erneut.",
        );
        setCheckoutState("error");
        return;
      }

      try {
        const purchases = getPurchases(apiKey);
        const [offerings] = await Promise.all([
          purchases.getOfferings({ currency: "EUR" }),
          purchases.preload(),
        ]);
        const rcPackage =
          offerings.current?.packagesById[packageId] ??
          offerings.current?.availablePackages.find(
            (availablePackage) => availablePackage.identifier === packageId,
          );

        if (!rcPackage) {
          throw new Error("RevenueCat-Paket nicht gefunden");
        }

        if (isCurrent) {
          setSelectedPackage(rcPackage);
          setCheckoutState("ready");
        }
      } catch {
        if (isCurrent) {
          setErrorMessage(
            "Der Bezahlvorgang konnte nicht geladen werden. Bitte versuche es erneut.",
          );
          setCheckoutState("error");
        }
      }
    }

    void prepareCheckout();

    return () => {
      isCurrent = false;
    };
  }, [apiKey, billingCycle, packageId, pricingOption]);

  async function startPurchase() {
    if (!selectedPackage || checkoutState === "purchasing") {
      return;
    }

    setErrorMessage("");
    setCheckoutState("purchasing");

    try {
      const purchaseResult = await Purchases.getSharedInstance().purchase({
        rcPackage: selectedPackage,
        selectedLocale: "de",
        defaultLocale: "de",
        skipSuccessPage: true,
      });
      const successUrl = new URL("/kasse/erfolgreich", window.location.origin);
      const redeemUrl = purchaseResult.redemptionInfo?.redeemUrl;

      if (redeemUrl) {
        successUrl.searchParams.set("redeem_url", redeemUrl);
      }

      window.location.assign(successUrl.toString());
    } catch (error) {
      if (
        error instanceof PurchasesError &&
        error.errorCode === ErrorCode.UserCancelledError
      ) {
        setCheckoutState("ready");
        return;
      }

      setErrorMessage(
        "Die Zahlung konnte nicht abgeschlossen werden. Bitte prüfe deine Angaben und versuche es erneut.",
      );
      setCheckoutState("ready");
    }
  }

  return (
    <section
      className="home-classic-section checkout-page"
      aria-labelledby="checkout-title"
    >
      <div className="dayova-container checkout-page__inner">
        <div className="checkout-page__intro">
          <div className="checkout-result-page__icon" aria-hidden="true">
            <DayovaIcon icon={LockKeyIcon} size={30} strokeWidth={2} />
          </div>
          <span className="home-classic-section-eyebrow">Sicher bezahlen</span>
          <h1 className="dayova-hero-claim" id="checkout-title">
            Dein Dayova-Abo
          </h1>
          <p>
            Der gesamte Bezahlvorgang wird auf Deutsch angezeigt und sicher von
            RevenueCat mit Stripe verarbeitet.
          </p>
        </div>

        {pricingOption ? (
          <article className="checkout-page__summary">
            <div>
              <span>Ausgewählter Tarif</span>
              <h2>
                {billingCycle === "annual" ? "Dayova Jahresabo" : "Dayova Monatsabo"}
              </h2>
            </div>
            <div className="checkout-page__price">
              <strong>{pricingOption.price}</strong>
              <span>{pricingOption.period}</span>
              <p>{pricingOption.supportingPrice}</p>
            </div>

            {errorMessage ? (
              <p className="checkout-page__error" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <button
              className="button-primary checkout-page__pay-button"
              disabled={checkoutState !== "ready"}
              onClick={() => void startPurchase()}
              type="button"
            >
              {checkoutState === "loading"
                ? "Sichere Zahlung wird geladen …"
                : checkoutState === "purchasing"
                  ? "Bezahlvorgang geöffnet …"
                  : "Weiter zur sicheren Zahlung"}
            </button>

            <p className="checkout-page__legal">
              Vor dem Kauf werden Gesamtpreis, Laufzeit und Verlängerung noch
              einmal angezeigt. Es gelten unsere{" "}
              <Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link>.
            </p>
          </article>
        ) : (
          <article className="checkout-page__summary checkout-page__summary--error">
            <p className="checkout-page__error" role="alert">
              {errorMessage || "Bitte wähle zuerst einen gültigen Tarif aus."}
            </p>
            <Link className="button-primary checkout-page__pay-button" href="/preise">
              Zurück zu den Preisen
            </Link>
          </article>
        )}
      </div>
    </section>
  );
}
