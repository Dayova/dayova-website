import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section
      className={`marketing-page-hero ${aside ? "marketing-page-hero--with-aside" : ""}`}
    >
      <div
        className={`dayova-container marketing-page-hero__inner ${
          aside ? "marketing-page-hero__inner--with-aside" : ""
        }`}
      >
        <div className="marketing-page-hero__copy">
          {eyebrow ? (
            <span className="home-classic-section-eyebrow">{eyebrow}</span>
          ) : null}
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? (
            <div className="marketing-page-hero__actions">
              {actions}
            </div>
          ) : null}
        </div>
        {aside ? (
          <div className="marketing-page-hero__aside">{aside}</div>
        ) : null}
      </div>
    </section>
  );
}
