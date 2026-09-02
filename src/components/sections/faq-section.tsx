import { ArrowDown01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { faqs } from "@/content/home";

const reasons = [
  "A plan shaped around your real week",
  "Clear priorities instead of another task list",
  "Try every feature free for 14 days",
] as const;

export function FaqSection() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="dayova-container faq-layout">
        <article className="faq-lead-card">
          <div className="stack-md">
            <h2>Still deciding?</h2>
            <p>
              Download Dayova from the App Store or Google Play and turn exam
              pressure into a plan you can actually follow.
            </p>
          </div>
          <ul>
            {reasons.map((reason) => (
              <li key={reason}>
                <DayovaIcon icon={CheckmarkCircle02Icon} size={20} aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
          <StoreDownloadLink>Download Dayova</StoreDownloadLink>
        </article>

        <div>
          <h2 className="dayova-section-title faq-title" id="faq-title">
            Questions before you start
          </h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <DayovaIcon
                    className="faq-chevron"
                    icon={ArrowDown01Icon}
                    size={20}
                    aria-hidden="true"
                  />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
