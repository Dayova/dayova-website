import Image from "next/image";

export function OriginSection() {
  return (
    <section className="dayova-section" aria-labelledby="origin-title">
      <div className="dayova-container grid items-stretch gap-5 lg:grid-cols-[1.45fr_0.95fr]">
        <div className="flex flex-col justify-end px-1 py-2 sm:px-6 sm:py-8 lg:min-h-[440px]">
          <h2
            className="max-w-[650px]"
            id="origin-title"
          >
            Aus unserer Arbeit mit Schülern wurde Dayova
          </h2>
          <p className="mt-5 max-w-[720px] text-dayova-body text-muted">
            Das Problem ist oft nicht die Motivation, sondern ein fehlender
            klarer Plan. Aufgaben, Prüfungen, Termine und Wissenslücken werden
            schnell zu viel auf einmal. Dayova macht daraus einen verständlichen
            Weg.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-line bg-elevated px-6 py-8 text-center shadow-card">
              <strong className="block text-[30px] font-semibold leading-none text-ink">
                150+
              </strong>
              <span className="mt-2 block text-sm text-muted">
                Schüler begleitet
              </span>
            </div>
            <div className="rounded-[22px] border border-line bg-elevated px-6 py-8 text-center shadow-card">
              <strong className="block text-[30px] font-semibold leading-none text-ink">
                2023
              </strong>
              <span className="mt-2 block text-sm text-muted">entstanden</span>
            </div>
          </div>
        </div>

        <article className="section-card flex min-h-[480px] flex-col p-7 pb-0 sm:min-h-[540px] sm:p-9 sm:pb-0">
          <h3 className="text-ink">Dein Lernweg, dein Erfolg!</h3>
          <div className="mt-8 flex min-h-0 flex-1 items-end justify-center overflow-hidden">
            <Image
              className="h-auto max-h-[500px] w-full object-contain object-bottom"
              src="/images/dayova-learning-path.png"
              alt="Der Dayova Lernplan auf einem Smartphone"
              width={872}
              height={1080}
              sizes="(max-width: 1024px) 86vw, 34vw"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
