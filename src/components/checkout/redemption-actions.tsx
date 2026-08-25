"use client";

import {
  Share08Icon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";

import { DayovaIcon } from "@/components/ui/huge-icon";

type ShareStatus = "idle" | "shared" | "copied" | "error";

type RedemptionActionsProps = {
  redeemUrl: string;
};

const statusMessages: Record<Exclude<ShareStatus, "idle">, string> = {
  shared: "Einlöse-Link wurde geteilt.",
  copied: "Link kopiert – sende ihn jetzt an die Schüler:in.",
  error:
    "Teilen ist hier nicht verfügbar. Kopiere bitte die aktuelle Seitenadresse aus deinem Browser.",
};

export function RedemptionActions({ redeemUrl }: RedemptionActionsProps) {
  const [shareStatus, setShareStatus] = useState<ShareStatus>("idle");

  async function shareWithStudent() {
    setShareStatus("idle");

    const shareData: ShareData = {
      title: "Dein Dayova-Abo",
      text: "Öffne diesen Link auf deinem Gerät, um das Dayova-Abo mit deinem Konto zu verbinden.",
      url: redeemUrl,
    };

    if (
      typeof navigator.share === "function" &&
      (typeof navigator.canShare !== "function" || navigator.canShare(shareData))
    ) {
      try {
        await navigator.share(shareData);
        setShareStatus("shared");
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(redeemUrl);
      setShareStatus("copied");
    } catch {
      setShareStatus("error");
    }
  }

  return (
    <div className="checkout-redemption-panel">
      <div className="checkout-redemption-panel__intro">
        <h2>Wer soll das Abo nutzen?</h2>
        <p>
          Aktiviere es direkt für dich oder sende den sicheren Link an die
          Person, die mit Dayova lernt.
        </p>
      </div>

      <div className="checkout-redemption-actions">
        <div className="checkout-redemption-action">
          <p className="checkout-redemption-action__label">
            Du nutzt Dayova selbst
          </p>
          <a
            aria-describedby="checkout-redemption-self-description checkout-redemption-expiry"
            className="button-primary"
            href={redeemUrl}
          >
            <span className="checkout-result-page__button-label">
              <DayovaIcon icon={SmartPhone01Icon} size={20} />
              Mit Dayova verbinden
            </span>
          </a>
          <p
            className="checkout-redemption-action__description"
            id="checkout-redemption-self-description"
          >
            Öffnet Dayova auf diesem Gerät und verbindet dein Konto.
          </p>
        </div>

        <div className="checkout-redemption-actions__divider" aria-hidden="true">
          <span>oder</span>
        </div>

        <div className="checkout-redemption-action">
          <p className="checkout-redemption-action__label">
            Das Abo ist für eine:n Schüler:in
          </p>
          <button
            aria-describedby="checkout-redemption-share-description checkout-redemption-expiry"
            className="button-secondary checkout-redemption-actions__share"
            onClick={shareWithStudent}
            type="button"
          >
            <DayovaIcon icon={Share08Icon} size={20} />
            Mit Schüler:in teilen
          </button>
          <p
            className="checkout-redemption-action__description"
            id="checkout-redemption-share-description"
          >
            Die Person öffnet den Link auf ihrem Gerät und aktiviert das Abo.
          </p>
        </div>
      </div>

      <p
        className="checkout-redemption-panel__status"
        aria-live="polite"
        role="status"
      >
        {shareStatus === "idle" ? "" : statusMessages[shareStatus]}
      </p>
    </div>
  );
}
