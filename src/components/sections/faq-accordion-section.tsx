import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

import { DayovaIcon } from "@/components/ui/huge-icon";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionSectionProps = {
  id: string;
  title: string;
  items: readonly FaqItem[];
  name: string;
};

export function FaqAccordionSection({
  id,
  title,
  items,
  name,
}: FaqAccordionSectionProps) {
  return (
    <section className="home-classic-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="dayova-container home-classic-faq home-classic-faq--text-only">
        <div className="home-classic-faq__content">
          <span className="home-classic-section-eyebrow">Gut zu wissen</span>
          <h2 id={`${id}-title`} className="dayova-section-title">
            {title}
          </h2>
          <div className="home-classic-faq__list">
            {items.map((item) => (
              <details key={item.question} name={name}>
                <summary>
                  <span>{item.question}</span>
                  <DayovaIcon
                    className="home-classic-faq__icon"
                    icon={ArrowDown01Icon}
                    size={24}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
