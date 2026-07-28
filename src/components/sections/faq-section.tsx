import Image from "next/image";
import { faqs } from "@/content/home";

export function FaqSection() {
  return (
    <section className="dayova-section pt-3" id="faq" aria-labelledby="faq-title">
      <div className="dayova-container grid items-stretch gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="section-card flex min-h-[420px] flex-col p-7 pb-0 sm:p-8 sm:pb-0">
          <h2 className="text-ink">Bereit für deinen Lernweg?</h2>
          <div className="mt-auto flex flex-1 items-end justify-center overflow-hidden">
            <Image
              className="h-auto max-h-[390px] w-full object-contain object-bottom"
              src="/images/dayova-home-phone.png"
              alt="Der Tagesplan in Dayova"
              width={872}
              height={1080}
              sizes="(max-width: 1024px) 88vw, 38vw"
            />
          </div>
        </article>

        <div>
          <h2
            className="mb-7"
            id="faq-title"
          >
            Häufige Fragen
          </h2>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <details
                className="faq-item rounded-[22px]"
                key={faq.question}
                open={index === 0}
              >
                <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-4 rounded-[22px] border border-line bg-white px-6 py-4 font-semibold text-ink shadow-[0_2px_8px_rgba(36,64,80,0.02)]">
                  <span>{faq.question}</span>
                  <span
                    className="faq-chevron shrink-0 text-xl transition-transform"
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </summary>
                <p className="px-6 pb-5 pt-4 text-dayova-body text-ink/85">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
