import Image from "next/image";
import { companionFeatures } from "@/content/home";

export function CompanionSection() {
  return (
    <section
      className="dayova-section"
      id="produkt"
      aria-labelledby="companion-title"
    >
      <div className="dayova-container">
        <h2 className="text-center" id="companion-title">
          Was dein Lernbegleiter für dich übernimmt
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {companionFeatures.map((feature, index) => (
            <article
              className="section-card group flex min-h-[540px] flex-col transition-transform duration-300 hover:-translate-y-1 lg:min-h-[580px]"
              key={feature.title}
            >
              {index !== 2 ? (
                <div className="p-7 pb-3 sm:p-8 sm:pb-3">
                  <h3 className="text-ink">{feature.title}</h3>
                  <p className="mt-4 text-dayova-body text-muted">
                    {feature.text}
                  </p>
                </div>
              ) : null}
              <div
                className={`flex min-h-[280px] flex-1 items-end justify-center overflow-hidden px-3 ${
                  index !== 2 ? "mt-auto" : ""
                } ${
                  index === 1 ? "px-0" : ""
                }`}
              >
                <Image
                  className={`h-auto max-h-[330px] w-auto max-w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02] ${
                    index === 1 ? "max-h-[360px]" : ""
                  }`}
                  src={feature.image}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  sizes="(max-width: 1024px) 88vw, 32vw"
                />
              </div>
              {index === 2 ? (
                <div className="p-7 pt-5 sm:p-8 sm:pt-5">
                  <h3 className="text-ink">{feature.title}</h3>
                  <p className="mt-4 text-dayova-body text-muted">
                    {feature.text}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
