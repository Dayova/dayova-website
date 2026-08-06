import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  title,
  description,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="section">
      <div
        className={`dayova-container grid items-center gap-6 ${
          aside ? "lg:grid-cols-2" : ""
        }`}
      >
        <div className={aside ? "" : "mx-auto max-w-3xl text-center"}>
          <h1 className="text-balance text-ink">{title}</h1>
          <p
            className={`mt-4 text-dayova-body-lg text-muted ${
              aside ? "max-w-2xl" : "mx-auto max-w-2xl"
            }`}
          >
            {description}
          </p>
          {actions ? (
            <div
              className={`mt-6 flex flex-wrap gap-3 ${
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
