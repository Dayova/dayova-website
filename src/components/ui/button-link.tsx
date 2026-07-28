import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "text";
  className?: string;
  external?: boolean;
  dataPlanId?: string;
};

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  dark: "button-dark",
  text: "button-text",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  dataPlanId,
}: ButtonLinkProps) {
  const classes = `${variants[variant]} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </>
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        className={classes}
        data-plan-id={dataPlanId}
        href={href}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} data-plan-id={dataPlanId} href={href}>
      {content}
    </Link>
  );
}
