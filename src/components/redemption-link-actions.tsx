"use client";

import { LinkSquare02Icon, Share08Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

const SHARE_TITLE = "Dayova-Abo aktivieren";
const SHARE_TEXT =
  "Ich habe ein Dayova-Abo für dich gekauft. Öffne den persönlichen Link auf deinem Smartphone und melde dich mit deinem Dayova-Konto an, um das Abo zu aktivieren.";

type ShareStatus = "idle" | "copied" | "error";

const isAbortError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "name" in error &&
  error.name === "AbortError";

export function RedemptionLinkActions({ redeemUrl }: { redeemUrl: string }) {
  const [shareStatus, setShareStatus] = useState<ShareStatus>("idle");

  const shareRedemptionLink = async () => {
    setShareStatus("idle");

    if (navigator.share) {
      try {
        await navigator.share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: redeemUrl,
        });
        return;
      } catch (error) {
        if (isAbortError(error)) return;
      }
    }

    try {
      await navigator.clipboard.writeText(redeemUrl);
      setShareStatus("copied");
    } catch {
      setShareStatus("error");
    }
  };

  return (
    <>
      <div className="checkout-result-page__actions">
        <a className="button-primary" href={redeemUrl}>
          <span className="checkout-result-page__button-label">
            Abo mit Dayova verbinden
            <DayovaIcon icon={LinkSquare02Icon} size={20} />
          </span>
        </a>
        <button
          className="button-secondary"
          type="button"
          onClick={shareRedemptionLink}
        >
          <span className="checkout-result-page__button-label">
            <DayovaIcon icon={Share08Icon} size={20} />
            Link teilen
          </span>
        </button>
        <Link className="button-secondary" href="/">
          Zur Startseite
        </Link>
      </div>
      {shareStatus !== "idle" ? (
        <p
          className="checkout-result-page__share-status"
          aria-live="polite"
          role="status"
        >
          {shareStatus === "copied"
            ? "Link kopiert – du kannst ihn jetzt an die Person senden, die das Abo verwenden soll."
            : "Der Link konnte nicht automatisch geteilt werden. Halte „Abo mit Dayova verbinden“ gedrückt, um ihn zu kopieren."}
        </p>
      ) : null}
    </>
  );
}
