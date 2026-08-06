import type { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
  inverse?: boolean;
};

export function IconBadge({ children, inverse = false }: IconBadgeProps) {
  return (
    <span
      className={`grid size-12 place-items-center rounded-dayova-sm text-lg font-semibold ${
        inverse ? "bg-white/12 text-white" : "bg-brand-soft text-brand-deep"
      }`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
