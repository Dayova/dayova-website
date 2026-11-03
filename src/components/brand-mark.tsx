type BrandMarkProps = {
  className?: string;
};

// Identical petals rotated around one center; all tips share the same radius.
export const brandPetal =
  "M128 116C99 89 92 57 123.6 17.1Q128 11.3 132.4 17.1C164 57 157 89 128 116Z";

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 256 256"
      width="32"
      height="32"
      fill="currentColor"
      className={className}
      data-brand-mark="circle-flower"
    >
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <path key={angle} d={brandPetal} transform={`rotate(${angle} 128 128)`} />
      ))}
    </svg>
  );
}
