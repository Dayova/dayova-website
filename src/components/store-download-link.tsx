"use client";

import { useSyncExternalStore } from "react";

import { siteConfig } from "@/config/site";

type StoreDownloadLinkProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark";
  onClick?: () => void;
};

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  dark: "button-dark",
} as const;

export function resolveStoreHref(userAgent: string) {
  const { appStore, googlePlay } = siteConfig.links;
  const isAppleDevice = /iPhone|iPad|iPod|Macintosh/i.test(userAgent);
  const isAndroidDevice = /Android/i.test(userAgent);

  if (isAppleDevice) {
    return appStore;
  }

  if (isAndroidDevice) {
    return googlePlay;
  }

  return googlePlay;
}

function getStoreHref() {
  return resolveStoreHref(navigator.userAgent);
}

function subscribe() {
  return () => undefined;
}

export function StoreDownloadLink({
  children,
  className = "",
  variant = "primary",
  onClick,
}: StoreDownloadLinkProps) {
  const href = useSyncExternalStore(
    subscribe,
    getStoreHref,
    () => siteConfig.links.googlePlay,
  );

  return (
    <a
      className={`${variants[variant]} ${className}`.trim()}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
