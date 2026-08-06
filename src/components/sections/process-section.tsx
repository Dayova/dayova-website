import Image from "next/image";
import { processSteps } from "@/content/home";

export function ProcessSection() {
  return (
    <section
      className="section"
      id="how-it-works"
      aria-labelledby="process-title"
    >
      <div className="dayova-container">
        <div className="section-heading process-heading">
          <h2 className="dayova-section-title" id="process-title">
            From upcoming exam to a plan you can follow.
          </h2>
          <p>
            Three simple steps turn what is coming up into what to do next.
          </p>
        </div>

        <ol className="process-grid">
          {processSteps.map((step) => (
            <li className="section-card process-card" key={step.number}>
              <div className="process-card-topline">
                <span className="process-number">{step.number}</span>
                <span className="process-icon">
                  <Image
                    className="process-icon-image"
                    src={step.icon}
                    alt=""
                    width={40}
                    height={40}
                  />
                </span>
              </div>
              <div className="stack-sm">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
