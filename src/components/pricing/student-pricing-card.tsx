"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { StoreDownloadLink } from "@/components/store-download-link";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import {
  type BillingCycle,
  studentPricing,
} from "@/content/pricing";

export function StudentPricingCard() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(
    studentPricing.defaultCycle,
  );
  const option = studentPricing.options[billingCycle];
  const checkoutHref = `/checkout?plan=${option.id}`;

  return (
    <article className="pricing-plan-card pricing-plan-card--student">
      <div
        className="pricing-cycle-toggle"
        role="group"
        aria-label="Abrechnungszeitraum wählen"
      >
        {Object.values(studentPricing.options).map((pricingOption) => {
          const isSelected = pricingOption.id === billingCycle;

          return (
            <button
              aria-pressed={isSelected}
              className={`pricing-cycle-toggle__option${isSelected ? " pricing-cycle-toggle__option--active" : ""}`}
              key={pricingOption.id}
              onClick={() => setBillingCycle(pricingOption.id)}
              type="button"
            >
              <span>{pricingOption.tabLabel}</span>
              {pricingOption.badge ? (
                <span className="pricing-cycle-toggle__badge">
                  {pricingOption.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="pricing-plan-card__heading">
        <h2>{studentPricing.title}</h2>

        <div
          className="pricing-plan-card__price pricing-value-enter"
          key={option.id}
          aria-live="polite"
        >
          <div className="pricing-plan-card__price-row">
            <strong>{option.price}</strong>
            <span>{option.period}</span>
          </div>
          <p>{option.supportingPrice}</p>
        </div>
      </div>

      <ul className="pricing-plan-card__benefits">
        {studentPricing.benefits.map((benefit) => (
          <li key={benefit}>
            <span aria-hidden="true">
              <DayovaIcon icon={CheckmarkCircle02Icon} size={20} />
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-plan-card__actions">
        <StoreDownloadLink
          className="pricing-plan-card__button"
          variant="secondary"
        >
          14 Tage kostenlos testen
        </StoreDownloadLink>
        <ButtonLink
          className="pricing-plan-card__button"
          dataPlanId={option.id}
          href={checkoutHref}
          variant="primary"
        >
          {option.ctaLabel}
        </ButtonLink>
      </div>
    </article>
  );
}
