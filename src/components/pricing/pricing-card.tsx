import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import type { StudentPlan } from "@/content/pricing";

type PricingCardProps = {
  plan: StudentPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  const subject = encodeURIComponent(`Interesse am Dayova ${plan.name}`);
  const href = `mailto:${siteConfig.links.email}?subject=${subject}`;

  return (
    <article
      className={`relative flex min-h-[560px] flex-col overflow-hidden rounded-dayova-lg border p-7 sm:p-9 ${
        plan.recommended
          ? "border-brand bg-[linear-gradient(180deg,var(--dayova-brand-soft),var(--dayova-elevated)_34%)] shadow-card-strong"
          : "border-line bg-elevated shadow-card"
      }`}
    >
      {plan.badge ? (
        <span className="absolute right-6 top-6 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
          {plan.badge}
        </span>
      ) : null}
      <p className="text-sm font-semibold text-muted">{plan.name}</p>
      <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1">
        <strong className="text-[40px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[46px]">
          {plan.price}
        </strong>
        <span className="pb-1 text-sm text-muted">{plan.period}</span>
      </div>
      <p className="mt-3 text-sm text-muted">{plan.billing}</p>
      <p className="mt-7 text-dayova-body text-muted">{plan.description}</p>

      <ul className="mt-8 grid gap-4">
        {plan.benefits.map((benefit) => (
          <li className="flex gap-3 text-sm text-ink" key={benefit}>
            <span
              className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-semibold text-brand-deep"
              aria-hidden="true"
            >
              ✓
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-9">
        <ButtonLink
          className="w-full"
          dataPlanId={plan.id}
          href={href}
          variant={plan.recommended ? "primary" : "secondary"}
        >
          Zum Start vormerken
        </ButtonLink>
      </div>
    </article>
  );
}
