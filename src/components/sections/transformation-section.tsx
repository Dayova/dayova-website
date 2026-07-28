import Image from "next/image";
import { LaunchCta } from "@/components/launch-cta";

export function TransformationSection() {
  return (
    <section className="dayova-section" aria-labelledby="transformation-title">
      <div className="dayova-container">
        <h2 id="transformation-title">
          Wenn Lernen wieder greifbar wird
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_0.94fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="section-card section-card-dark flex min-h-[300px] flex-col p-7 text-white sm:p-8">
              <h3>Alles im Blick</h3>
              <div className="mt-auto flex justify-center overflow-hidden pt-6">
                <Image
                  className="h-auto max-h-[220px] w-full object-contain object-bottom"
                  src="/images/dayova-notifications.png"
                  alt="Dayova Mitteilungen auf einem Smartphone"
                  width={512}
                  height={512}
                  sizes="(max-width: 640px) 84vw, 30vw"
                />
              </div>
            </article>

            <article className="section-card flex min-h-[300px] flex-col items-center justify-center p-7 text-center sm:p-8">
              <Image
                className="size-36 object-contain"
                src="/images/dayova-analysis-mark.png"
                alt=""
                width={512}
                height={512}
              />
              <h3 className="mt-5 text-ink">Wissensanalyse</h3>
            </article>

            <article className="section-card p-7 sm:col-span-2 sm:p-8">
              <h3 className="text-ink">Von Überforderung zu Orientierung</h3>
              <p className="mt-4 max-w-3xl text-dayova-body text-muted">
                Dayova gibt dir Orientierung, zeigt deinen Lernstand und passt
                deinen Weg an das an, was du als Nächstes brauchst.
              </p>
              <div className="mt-6">
                <LaunchCta compact />
              </div>
            </article>
          </div>

          <article className="section-card section-card-brand flex min-h-[620px] flex-col p-7 pb-0 text-white sm:p-8 sm:pb-0">
            <h3>Lernpläne, die sich dir anpassen</h3>
            <div className="mt-auto flex min-h-0 flex-1 items-end justify-center overflow-hidden">
              <Image
                className="h-auto max-h-[540px] w-full object-contain object-bottom"
                src="/images/dayova-learning-path.png"
                alt="Ein anpassbarer Lernplan in der Dayova App"
                width={872}
                height={1080}
                sizes="(max-width: 1024px) 88vw, 36vw"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
