import Image from "next/image";
import type { ReactNode } from "react";

type BlueCtaSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  sectionClassName?: string;
};

export function BlueCtaSection({
  id,
  eyebrow,
  title,
  description,
  children,
  sectionClassName = "",
}: BlueCtaSectionProps) {
  return (
    <section
      className={`home-classic-section site-blue-cta-section ${sectionClassName}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <div className="dayova-container">
        <div className="home-classic-download">
          <div className="home-classic-download__copy">
            <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
              {eyebrow}
            </span>
            <h2 id={`${id}-title`} className="dayova-section-title">
              {title}
            </h2>
            <p>{description}</p>
            <div className="home-classic-download__actions">{children}</div>
          </div>
          <div className="home-classic-download__visual" aria-hidden="true">
            <Image
              src="/images/dayova-bluebox-light.png"
              alt=""
              width={2217}
              height={1456}
              sizes="(max-width: 1023px) 90vw, 520px"
              className="home-classic-download__theme-image home-classic-download__theme-image--light"
            />
            <Image
              src="/images/dayova-bluebox-dark.png"
              alt=""
              width={2217}
              height={1456}
              sizes="(max-width: 1023px) 90vw, 520px"
              className="home-classic-download__theme-image home-classic-download__theme-image--dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
