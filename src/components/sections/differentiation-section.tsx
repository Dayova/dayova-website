import { comparisonRows } from "@/content/home";

export function DifferentiationSection() {
  return (
    <section
      className="dayova-section"
      id="unterschied"
      aria-labelledby="difference-title"
    >
      <div className="dayova-container">
        <h2 className="text-center" id="difference-title">
          Warum ein KI-Lerntool nicht reicht
        </h2>

        <div className="mt-10 hidden overflow-hidden rounded-[30px] bg-white md:grid md:grid-cols-[1.4fr_1fr_1.65fr]">
          <div className="pt-16">
            <span className="block border-b border-line px-6 pb-5 text-transparent">
              Vergleich
            </span>
            {comparisonRows.map((row) => (
              <div
                className="border-b border-line px-6 py-5 text-sm font-semibold text-ink last:border-b-0"
                key={row.need}
              >
                {row.need}
              </div>
            ))}
          </div>
          <div className="pt-8">
            <h3 className="border-b border-line px-6 pb-5 text-center text-ink">
              KI-Lerntool
            </h3>
            {comparisonRows.map((row) => (
              <div
                className="border-b border-line px-6 py-5 text-center text-sm text-muted last:border-b-0"
                key={row.need}
              >
                {row.generic}
              </div>
            ))}
          </div>
          <div className="rounded-[30px] bg-ink px-6 py-8 text-white shadow-card-strong">
            <h3 className="border-b border-white/15 pb-5 text-center">Dayova</h3>
            {comparisonRows.map((row) => (
              <div
                className="border-b border-white/15 py-5 text-center text-sm text-white/55 last:border-b-0"
                key={row.need}
              >
                {row.dayova}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-4 md:hidden">
          {comparisonRows.map((row) => (
            <article className="section-card" key={row.need}>
              <h3 className="border-b border-line p-5 text-ink">{row.need}</h3>
              <div className="grid sm:grid-cols-2">
                <div className="p-5">
                  <span className="text-xs font-semibold text-muted">
                    KI-Lerntool
                  </span>
                  <p className="mt-2 text-sm text-muted">{row.generic}</p>
                </div>
                <div className="bg-ink p-5 text-white">
                  <span className="text-xs font-semibold text-brand">Dayova</span>
                  <p className="mt-2 text-sm text-white/65">{row.dayova}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
