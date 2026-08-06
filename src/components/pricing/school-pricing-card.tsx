import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";
import { schoolPricing } from "@/content/pricing";

export function SchoolPricingCard() {
  const schoolOfferHref = `mailto:${siteConfig.links.schoolEmail}?subject=${encodeURIComponent(
    "Individuelles Dayova Schulangebot",
  )}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-dayova-xl border border-white/10 bg-dark-panel p-4 text-white shadow-card-strong lg:min-h-[480px] lg:p-6">
      <div className="flex min-h-[52px] items-center">
        <span className="rounded-full border border-cyan-200/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-cyan-200">
          Für Schulen
        </span>
      </div>

      <div className="mt-4 flex flex-col">
        <h2 className="text-white">{schoolPricing.title}</h2>

        <div className="mt-4 grid gap-2">
          <strong className="text-[40px] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[48px]">
            Individuell
          </strong>
          <p className="max-w-lg text-sm font-medium leading-relaxed text-cyan-200">
            {schoolPricing.supportingText}
          </p>
        </div>
      </div>

      <ul className="mt-4 grid gap-2">
        {schoolPricing.benefits.map((benefit) => (
          <li className="flex gap-3 text-sm text-white/90" key={benefit}>
            <span
              className="grid size-6 shrink-0 place-items-center text-cyan-200"
              aria-hidden="true"
            >
              <DayovaIcon icon={CheckmarkCircle02Icon} size={20} />
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ButtonLink className="w-full" href={schoolOfferHref} variant="primary">
          {schoolPricing.ctaLabel}
        </ButtonLink>
      </div>
    </article>
  );
}
