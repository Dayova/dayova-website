import Image from "next/image";
import { processSteps } from "@/content/home";

export function ProcessSection() {
  return (
    <section
      className="dayova-section"
      id="so-funktionierts"
      aria-labelledby="process-title"
    >
      <div className="dayova-container">
        <h2 className="text-center" id="process-title">
          In 3 Schritten zu deinem Lernplan
        </h2>

        <ol className="mt-10 grid list-none gap-5 p-0 md:grid-cols-3">
          {processSteps.map((step) => (
            <li
              className="section-card flex min-h-[260px] flex-col items-center justify-center p-7 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              key={step.number}
            >
              <span className="grid size-16 place-items-center rounded-full bg-subtle">
                <Image
                  className="size-9 object-contain"
                  src={step.icon}
                  alt=""
                  width={40}
                  height={40}
                />
              </span>
              <h3 className="mt-7 text-ink">{step.title}</h3>
              <p className="mt-4 text-dayova-body text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
