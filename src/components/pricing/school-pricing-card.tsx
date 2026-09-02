import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";
import { schoolPricing } from "@/content/pricing";

export function SchoolPricingCard() {
  const schoolOfferHref = `mailto:${siteConfig.links.schoolEmail}?subject=${encodeURIComponent(
    "Dayova Pilotprojekt für unsere Schule",
  )}`;

  return (
    <article className="pricing-plan-card pricing-plan-card--school">
      <span className="home-classic-section-eyebrow pricing-plan-card__badge">
        Begleiteter Pilot
      </span>

      <div className="pricing-plan-card__heading">
        <h2>{schoolPricing.title}</h2>

        <div className="pricing-plan-card__price pricing-plan-card__price--school">
          <strong>Individuell</strong>
          <p>{schoolPricing.supportingText}</p>
        </div>
      </div>

      <ul className="pricing-plan-card__benefits">
        {schoolPricing.benefits.map((benefit) => (
          <li key={benefit}>
            <span aria-hidden="true">
              <DayovaIcon icon={CheckmarkCircle02Icon} size={20} />
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-plan-card__actions pricing-plan-card__actions--single">
        <ButtonLink
          className="pricing-plan-card__button"
          href={schoolOfferHref}
          variant="primary"
        >
          {schoolPricing.ctaLabel}
        </ButtonLink>
      </div>
    </article>
  );
}
