import Image from "next/image";
import { LaunchCta } from "@/components/launch-cta";

export function LaunchSection() {
  return (
    <section
      className="dayova-section"
      id="app-start"
      aria-labelledby="launch-title"
    >
      <div className="dayova-container">
        <div className="section-card grid min-h-[420px] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="flex flex-col items-start justify-center p-7 sm:p-12 lg:p-14">
            <h2
              id="launch-title"
            >
              Sei beim App-Start dabei
            </h2>
            <p className="mt-4 max-w-[650px] text-dayova-body text-muted">
              Dayova startet am 17. August. Folge uns auf Instagram und erfahre
              direkt, sobald du die App herunterladen und 14 Tage vollständig
              testen kannst.
            </p>
            <div className="mt-8">
              <LaunchCta />
            </div>
          </div>
          <div className="flex min-h-[350px] items-end justify-center overflow-hidden px-4 pt-5 lg:min-h-0">
            <Image
              className="h-auto max-h-[520px] w-full object-contain object-bottom"
              src="/images/dayova-screen-collage.png"
              alt="Mehrere Bildschirme der Dayova App"
              width={964}
              height={883}
              sizes="(max-width: 1024px) 88vw, 38vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
