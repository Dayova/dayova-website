"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";
import {
  type BillingCycle,
  studentPricing,
} from "@/content/pricing";

export function StudentPricingCard() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(
    studentPricing.defaultCycle,
  );
  const option = studentPricing.options[billingCycle];
  const checkoutHref = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(
    `Interesse am Dayova ${option.tabLabel}abo`,
  )}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-dayova-xl border border-brand/55 bg-[linear-gradient(180deg,var(--dayova-brand-soft),var(--dayova-elevated)_34%)] p-4 shadow-card-strong lg:min-h-[480px] lg:p-6">
      <div
        className="grid grid-cols-2 gap-1 rounded-full border border-line bg-elevated/80 p-1 shadow-[inset_0_1px_2px_rgba(36,64,80,0.05)]"
        role="group"
        aria-label="Abrechnungszeitraum wählen"
      >
        {Object.values(studentPricing.options).map((pricingOption) => {
          const isSelected = pricingOption.id === billingCycle;

          return (
            <button
              aria-pressed={isSelected}
              className={`relative min-h-11 rounded-full px-4 text-sm font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-ink text-page shadow-[0_8px_18px_rgba(24,32,37,0.14)]"
                  : "text-muted hover:bg-subtle hover:text-ink"
              }`}
              key={pricingOption.id}
              onClick={() => setBillingCycle(pricingOption.id)}
              type="button"
            >
              <span>{pricingOption.tabLabel}</span>
              {pricingOption.badge ? (
                <span
                  className={`ml-2 hidden rounded-full px-2 py-1 text-[10px] font-semibold sm:inline ${
                    isSelected
                      ? "bg-brand text-white"
                      : "bg-brand-soft text-brand-deep"
                  }`}
                >
                  {pricingOption.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col">
        <h2>{studentPricing.title}</h2>

        <div
          className="pricing-value-enter mt-4 grid gap-2"
          key={option.id}
          aria-live="polite"
        >
          <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
            <strong className="text-[40px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[48px]">
              {option.price}
            </strong>
            <span className="pb-1 text-sm text-muted">{option.period}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-brand-deep">
              {option.supportingPrice}
            </span>
          </div>
        </div>
      </div>

      <ul className="mt-4 grid gap-2">
        {studentPricing.benefits.map((benefit) => (
          <li className="flex gap-3 text-sm text-ink" key={benefit}>
            <span
              className="grid size-6 shrink-0 place-items-center text-brand-deep"
              aria-hidden="true"
            >
              <DayovaIcon icon={CheckmarkCircle02Icon} size={20} />
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ButtonLink
          className="w-full"
          dataPlanId={option.id}
          href={checkoutHref}
          variant={option.id === "annual" ? "primary" : "secondary"}
        >
          {option.ctaLabel}
        </ButtonLink>
      </div>
    </article>
  );
}
