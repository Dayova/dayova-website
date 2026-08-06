import {
  BookOpen02Icon,
  Calendar03Icon,
  ChartHistogramIcon,
} from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { problemOutcomes } from "@/content/home";

const outcomeIcons = [
  Calendar03Icon,
  BookOpen02Icon,
  ChartHistogramIcon,
] as const;

export function CompanionSection() {
  return (
    <section
      className="section dayova-benefits-section"
      id="outcomes"
      aria-labelledby="companion-title"
    >
      <div className="dayova-container">
        <div className="dayova-benefits-panel">
          <div className="dayova-benefits-heading">
            <h2 className="dayova-section-title" id="companion-title">
              Learning should not feel like guessing.
            </h2>
            <p>
              When everything feels urgent, even starting can feel difficult.
              Dayova turns that pressure into a clear, manageable path toward
              your exams.
            </p>
          </div>

          <div className="dayova-benefits-grid">
            {problemOutcomes.map((item, index) => (
              <article className="dayova-benefit-card" key={item.problem}>
                <div className="problem-outcome-problem">
                  <span className="problem-outcome-icon" aria-hidden="true">
                    <DayovaIcon
                      icon={outcomeIcons[index] ?? Calendar03Icon}
                      size={22}
                    />
                  </span>
                  <span className="problem-outcome-label">The problem</span>
                  <h3>{item.problem}</h3>
                  <p>{item.problemText}</p>
                </div>

                <div className="problem-outcome-result">
                  <span className="problem-outcome-label">With Dayova</span>
                  <h3>{item.outcome}</h3>
                  <p>{item.outcomeText}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
