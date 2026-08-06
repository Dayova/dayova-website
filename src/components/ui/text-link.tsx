import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  arrow?: "right" | "down" | "external";
};

const arrowIcon = {
  right: ArrowRight01Icon,
  down: ArrowDown01Icon,
  external: ArrowUpRight01Icon,
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
      <DayovaIcon
        className="text-brand"
        icon={arrowIcon[arrow]}
        size={17}
        aria-hidden="true"
      />
    </a>
  );
}
