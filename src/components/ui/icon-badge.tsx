import type { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
  inverse?: boolean;
};

export function IconBadge({ children, inverse = false }: IconBadgeProps) {
  return (
    <span
      className={`dayova-icon-card${inverse ? " dayova-icon-card--inverse" : ""}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
