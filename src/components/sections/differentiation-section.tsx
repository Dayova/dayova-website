import { comparisonRows } from "@/content/home";

export function DifferentiationSection() {
  return (
    <section
      className="section comparison-section"
      id="difference"
      aria-labelledby="difference-title"
    >
      <div className="dayova-container">
        <div className="section-heading comparison-heading">
          <h2 className="dayova-section-title" id="difference-title">
            More than answers. A system for what comes next.
          </h2>
          <p>
            Typical AI tools help when you ask. Dayova connects your deadlines,
            available time, and learning progress—then keeps the next useful
            step visible.
          </p>
        </div>

        <div className="comparison-table" role="table" aria-label="Dayova comparison">
          <div className="comparison-column comparison-labels" role="rowgroup">
            <div className="comparison-column-heading" aria-hidden="true">
              What students need
            </div>
            {comparisonRows.map((row) => (
              <div className="comparison-cell comparison-need" role="rowheader" key={row.need}>
                {row.need}
              </div>
            ))}
          </div>
          <div className="comparison-column" role="rowgroup">
            <h3 className="comparison-column-heading">Typical AI tool</h3>
            {comparisonRows.map((row) => (
              <div className="comparison-cell" role="cell" key={row.need}>
                {row.generic}
              </div>
            ))}
          </div>
          <div className="comparison-column comparison-column-dayova" role="rowgroup">
            <h3 className="comparison-column-heading">Dayova</h3>
            {comparisonRows.map((row) => (
              <div className="comparison-cell" role="cell" key={row.need}>
                {row.dayova}
              </div>
            ))}
          </div>
        </div>

        <div className="comparison-mobile">
          {comparisonRows.map((row) => (
            <article className="section-card comparison-mobile-card" key={row.need}>
              <h3>{row.need}</h3>
              <div className="comparison-mobile-options">
                <div>
                  <span>Typical AI tool</span>
                  <p>{row.generic}</p>
                </div>
                <div className="comparison-mobile-dayova">
                  <span>Dayova</span>
                  <p>{row.dayova}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
