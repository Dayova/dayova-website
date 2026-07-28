import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
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
    <section className="pb-14 pt-24 sm:pb-20 sm:pt-28 lg:pt-32">
      <div
        className={`dayova-container grid items-center gap-10 ${
          aside ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
        }`}
      >
        <div className={aside ? "" : "mx-auto max-w-3xl text-center"}>
          <p className="section-label">{eyebrow}</p>
          <h1 className="mt-5 text-balance text-ink">{title}</h1>
          <p
            className={`mt-5 text-dayova-body-lg text-muted ${
              aside ? "max-w-2xl" : "mx-auto max-w-2xl"
            }`}
          >
            {description}
          </p>
          {actions ? (
            <div
              className={`mt-8 flex flex-wrap gap-3 ${
                aside ? "" : "justify-center"
              }`}
            >
              {actions}
            </div>
          ) : null}
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
    </section>
  );
}
