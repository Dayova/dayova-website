import { siteConfig, getConversionMode } from "@/config/site";

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
    const storeLink =
      siteConfig.links.appStore || siteConfig.links.googlePlay || "#";

    return (
      <a
        className={`${variant === "primary" ? "button-primary" : "button-secondary"} ${
          compact ? "button-compact" : ""
        } ${className}`}
        href={storeLink}
        rel="noreferrer"
        target="_blank"
      >
        Dayova herunterladen
      </a>
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
