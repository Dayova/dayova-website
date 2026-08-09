"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const consentStorageKey = "dayova-analytics-consent";

type ConsentState = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function AnalyticsPageView({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!enabled || typeof window.gtag !== "function") return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    });
  }, [enabled, pathname, searchParams]);

  return null;
}

export function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [tagReady, setTagReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(consentStorageKey);
      if (stored === "granted" || stored === "denied") {
        queueMicrotask(() => setConsent(stored));
      }
    } catch {}

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("dayova:open-cookie-settings", openSettings);
    return () =>
      window.removeEventListener("dayova:open-cookie-settings", openSettings);
  }, []);

  const saveConsent = (nextConsent: Exclude<ConsentState, null>) => {
    try {
      window.localStorage.setItem(consentStorageKey, nextConsent);
    } catch {}

    setConsent(nextConsent);
    setSettingsOpen(false);
  };

  const showDialog = consent === null || settingsOpen;

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
            onReady={() => setTagReady(true)}
          />
          <Script id="dayova-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                send_page_view: false,
                anonymize_ip: true
              });
            `}
          </Script>
          <Suspense fallback={null}>
            <AnalyticsPageView enabled={tagReady} />
          </Suspense>
        </>
      ) : null}

      {showDialog ? (
        <section
          className="analytics-consent"
          aria-label="Datenschutzeinstellungen"
          role="dialog"
          aria-modal="false"
        >
          <div className="analytics-consent__copy">
            <strong>Hilf uns, Dayova weiterzuentwickeln.</strong>
            <p>
              Mit deiner Zustimmung messen wir anonymisiert, welche Seiten
              genutzt werden. Notwendige Funktionen laufen auch ohne Analyse.
            </p>
          </div>
          <div className="analytics-consent__actions">
            <button
              className="button-secondary button-compact"
              type="button"
              onClick={() => saveConsent("denied")}
            >
              Nur notwendig
            </button>
            <button
              className="button-primary button-compact"
              type="button"
              onClick={() => saveConsent("granted")}
            >
              Analyse erlauben
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      className="footer-cookie-settings"
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("dayova:open-cookie-settings"))
      }
    >
      Cookie-Einstellungen
    </button>
  );
}
