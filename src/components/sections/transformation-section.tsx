const trustMetrics = [
  { value: "150+", label: "Students supported" },
  { value: "2023", label: "The year Dayova began" },
  { value: "Tutoring-led", label: "Built from real learning experience" },
] as const;

export function TransformationSection() {
  return (
    <section className="section trust-section" aria-labelledby="trust-title">
      <div className="dayova-container">
        <div className="section-heading trust-heading">
          <h2 className="dayova-section-title" id="trust-title">
            Built from real work with students.
          </h2>
          <p>
            Dayova began in tutoring sessions—not in a feature brainstorm. The
            product is shaped around the moments students lose orientation and
            need a clear way forward.
          </p>
        </div>

        <div className="trust-metrics" aria-label="Dayova experience">
          {trustMetrics.map((metric) => (
            <article className="trust-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>

        <div className="trust-grid">
          <article className="trust-story-card">
            <span className="trust-card-label">Why Dayova exists</span>
            <h3>Created around the moments students get stuck.</h3>
            <p>
              Too much at once, no clear plan, and too little feedback make
              learning feel heavier than it needs to. Dayova brings those
              missing pieces together in one calm learning flow.
            </p>
          </article>

          <article className="testimonial-placeholder">
            <span className="trust-card-label">Student story</span>
            <blockquote>
              A verified Dayova student quote will appear here before launch.
            </blockquote>
            <p>Testimonial placeholder</p>
          </article>

          <article className="testimonial-placeholder">
            <span className="trust-card-label">Parent story</span>
            <blockquote>
              A verified parent perspective will appear here before launch.
            </blockquote>
            <p>Testimonial placeholder</p>
          </article>
        </div>
      </div>
    </section>
  );
}
