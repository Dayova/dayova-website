"use client";

import { useSyncExternalStore } from "react";

import { siteConfig } from "@/config/site";

type StoreDownloadLinkProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark";
  onClick?: () => void;
  showStoreName?: boolean;
};

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  dark: "button-dark",
} as const;

export function resolveStoreHref(userAgent: string) {
  const { appStore, googlePlay } = siteConfig.links;
  const store = resolveStore(userAgent);

  return store === "apple" ? appStore : googlePlay;
}

function resolveStore(userAgent: string) {
  const isAppleDevice = /iPhone|iPad|iPod|Macintosh/i.test(userAgent);
  const isAndroidDevice = /Android/i.test(userAgent);

  if (isAppleDevice) {
    return "apple";
  }

  if (isAndroidDevice) {
    return "android";
  }

  return "android";
}

function getStore() {
  return resolveStore(navigator.userAgent);
}

function subscribe() {
  return () => undefined;
}

export function StoreDownloadLink({
  children,
  className = "",
  variant = "primary",
  onClick,
  showStoreName = false,
}: StoreDownloadLinkProps) {
  const store = useSyncExternalStore(subscribe, getStore, () => "android");
  const href =
    store === "apple"
      ? siteConfig.links.appStore
      : siteConfig.links.googlePlay;

  return (
    <a
      className={`${variants[variant]} ${className}`.trim()}
      href={href}
      onClick={onClick}
    >
      {showStoreName
        ? store === "apple"
          ? "Im App Store herunterladen"
          : "Bei Google Play herunterladen"
        : children}
    </a>
  );
}
