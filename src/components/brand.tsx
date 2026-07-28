type BrandProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function Brand({ compact = false, inverse = false }: BrandProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold leading-none tracking-[-0.045em] ${
        compact ? "text-xl" : "text-[24px]"
      } ${inverse ? "text-white" : "text-ink"}`}
    >
      dayova.
    </span>
  );
}
