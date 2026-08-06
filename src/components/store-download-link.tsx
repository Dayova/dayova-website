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

function getStoreHref() {
  const { appStore, googlePlay } = siteConfig.links;

  if (!appStore && !googlePlay) {
    return "/app-start";
  }

  const userAgent = navigator.userAgent;
  const isAppleDevice = /iPhone|iPad|iPod|Macintosh/i.test(userAgent);
  const isAndroidDevice = /Android/i.test(userAgent);

  if (isAppleDevice) {
    return appStore || googlePlay || "/app-start";
  }

  if (isAndroidDevice) {
    return googlePlay || appStore || "/app-start";
  }

  return googlePlay || appStore || "/app-start";
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
  const href = useSyncExternalStore(subscribe, getStoreHref, () => "/app-start");

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
