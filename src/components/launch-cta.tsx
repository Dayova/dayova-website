type LaunchCtaProps = {
  compact?: boolean;
  className?: string;
};

export function LaunchCta({
  compact = false,
  className = "",
}: LaunchCtaProps) {
  return (
    <a
      className={`waitlist-button ${compact ? "!min-h-11 !px-6" : ""} ${className}`}
      href="#warteliste"
    >
      Warteliste
    </a>
  );
}
