import {
  Add01Icon,
  ArrowRight01Icon,
  ChartLineData01Icon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import type { ReactNode } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import type { RiskLevel, Trend } from "../types";

type PageHeadingProps = {
  title: string;
  description: string;
  eyebrow?: string;
  actions?: ReactNode;
};

export function PageHeading({
  title,
  description,
  eyebrow,
  actions,
}: PageHeadingProps) {
  return (
    <header className="teacher-page-heading">
      <div>
        {eyebrow ? <p className="teacher-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {actions ? <div className="teacher-heading-actions">{actions}</div> : null}
    </header>
  );
}

type PanelProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  emphasis?: "default" | "priority" | "dark";
};

export function Panel({
  title,
  description,
  action,
  children,
  className = "",
  emphasis = "default",
}: PanelProps) {
  return (
    <section
      className={`teacher-panel ${className}`.trim()}
      data-emphasis={emphasis}
    >
      {title || action ? (
        <header className="teacher-panel-header">
          <div>
            {title ? <h2>{title}</h2> : null}
            {description ? <p>{description}</p> : null}
          </div>
          {action}
        </header>
      ) : null}
      {children}
    </section>
  );
}

type MetricProps = {
  label: string;
  value: string;
  detail?: string;
  tone?: "default" | "brand" | "warning" | "positive";
};

export function Metric({
  label,
  value,
  detail,
  tone = "default",
}: MetricProps) {
  return (
    <div className="teacher-metric" data-tone={tone}>
      <span>{label}</span>
      <strong>{value}</strong>
      {detail ? <small>{detail}</small> : null}
    </div>
  );
}

export function ProgressBar({
  value,
  label,
}: {
  value: number;
  label?: string;
}) {
  return (
    <div className="teacher-progress">
      {label ? (
        <span>
          {label}
          <strong>{value} %</strong>
        </span>
      ) : null}
      <div
        className="teacher-progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label ?? "Fortschritt"}
      >
        <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  );
}

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "warning" | "danger" | "positive";
}) {
  return (
    <span className="teacher-status" data-tone={tone}>
      {children}
    </span>
  );
}

export function RiskBadge({ risk }: { risk: RiskLevel }) {
  const labels: Record<RiskLevel, string> = {
    niedrig: "Stabil",
    mittel: "Beobachten",
    hoch: "Unterstützung",
  };

  return (
    <StatusBadge
      tone={
        risk === "hoch" ? "danger" : risk === "mittel" ? "warning" : "positive"
      }
    >
      {labels[risk]}
    </StatusBadge>
  );
}

export function TrendLabel({ trend }: { trend: Trend }) {
  const labels: Record<Trend, string> = {
    steigend: "Verbessert sich",
    stabil: "Stabil",
    fallend: "Rückläufig",
  };
  return (
    <span className="teacher-trend" data-trend={trend}>
      <DayovaIcon icon={ChartLineData01Icon} size={16} />
      {labels[trend]}
    </span>
  );
}

export function PrimaryAction({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="teacher-button teacher-button-primary" href={href}>
      <DayovaIcon icon={Add01Icon} size={18} />
      {children}
    </Link>
  );
}

export function TextAction({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="teacher-text-action" href={href}>
      {children}
      <DayovaIcon icon={ArrowRight01Icon} size={16} />
    </Link>
  );
}

export function RowActions({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="teacher-row-action"
      aria-label={`${label}: Weitere Aktionen`}
    >
      <DayovaIcon icon={MoreHorizontalIcon} size={20} />
    </button>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="teacher-empty-state">
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}

export function SecondaryAction({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="teacher-button teacher-button-secondary" href={href}>
      {children}
    </Link>
  );
}
