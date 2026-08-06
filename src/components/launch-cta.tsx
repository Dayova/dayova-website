import { siteConfig, getConversionMode } from "@/config/site";
import { StoreDownloadLink } from "@/components/store-download-link";

type LaunchCtaProps = {
  compact?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
};

export function LaunchCta({
  compact = false,
  className = "",
  variant = "primary",
}: LaunchCtaProps) {
  const mode = getConversionMode();

  if (mode === "download") {
    return (
      <StoreDownloadLink
        className={`${compact ? "button-compact" : ""} ${className}`}
        variant={variant}
      >
        Dayova herunterladen
      </StoreDownloadLink>
    );
  }

  return (
    <a
      className={`${variant === "primary" ? "button-primary" : "button-secondary"} ${
        compact ? "button-compact" : ""
      } ${className}`}
      href={siteConfig.links.instagram}
      rel="noreferrer"
      target="_blank"
    >
      {compact ? "Auf Instagram folgen" : "Dayova auf Instagram folgen"}
    </a>
  );
}
