import Image from "next/image";
import { LaunchCta } from "@/components/launch-cta";

export function HeroSection() {
  return (
    <section
      className="overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <div className="dayova-container text-center">
        <div className="mx-auto max-w-[900px]">
          <h1 className="text-balance text-ink" id="hero-title">
            Endlich ein Lernbegleiter, der versteht, wo ich stehe, und mir den
            nächsten Schritt zeigt.
          </h1>
          <p className="mx-auto mt-5 max-w-[860px] text-dayova-body text-muted">
            <strong className="font-semibold">Dayova ist dein Lernbegleiter:</strong>{" "}
            Du lernst direkt in der App, deine Prüfung wird individuell geplant
            und Analysen zeigen dir deine Wissenslücken und Stärken.
          </p>
          <div className="mt-7">
            <LaunchCta />
          </div>
        </div>

        <Image
          className="mx-auto mt-16 h-auto w-full max-w-[760px] sm:mt-20 lg:mt-24"
          src="/images/dayova-hero-phones.png"
          alt="Drei Smartphones zeigen den Dayova Startbildschirm, Tagesplan und Lernplan"
          width={4269}
          height={2400}
          sizes="(max-width: 800px) 94vw, 760px"
          priority
        />
      </div>
    </section>
  );
}
