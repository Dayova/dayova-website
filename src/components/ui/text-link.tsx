import type { AnchorHTMLAttributes, ReactNode } from "react";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  arrow?: "right" | "down" | "external";
};

const arrowGlyph = {
  right: "→",
  down: "↓",
  external: "↗",
} as const;

export function TextLink({
  children,
  arrow = "right",
  className = "",
  ...props
}: TextLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-semibold text-ink transition-colors hover:text-brand-deep ${className}`}
      {...props}
    >
      {children}
      <span className="text-brand" aria-hidden="true">
        {arrowGlyph[arrow]}
      </span>
    </a>
  );
}
