import type { Metadata } from "next";
import { ArticleCard } from "@/components/blog/article-card";
import { LaunchCta } from "@/components/launch-cta";
import { PageHero } from "@/components/ui/page-hero";
import { blogArticles } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog – Klarer lernen mit Dayova",
  description:
    "Praktische Gedanken zu Lernplanung, Prüfungsvorbereitung und einem Lernalltag mit mehr Orientierung.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Dayova Blog"
        title="Lernen wird leichter, wenn der nächste Schritt klar ist."
        description="Hier entsteht ein Ort für verständliche, konkrete Inhalte rund um Lernplanung, Prüfungsvorbereitung und den Alltag von Schülerinnen, Schülern und Eltern."
      />

      <section className="dayova-section pt-0" aria-labelledby="articles-title">
        <div className="dayova-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Als Nächstes</p>
              <h2 className="mt-3" id="articles-title">
                Themen in Vorbereitung
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              Die Inhaltsstruktur ist vorbereitet. Die ersten Artikel werden
              redaktionell ergänzt und anschließend hier veröffentlicht.
            </p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="dayova-section pt-0">
        <div className="dayova-container">
          <div className="rounded-dayova-lg bg-[#15283b] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="section-label !text-cyan-200">Bis dahin</p>
              <h2 className="mt-3 max-w-2xl text-white">
                Folge Dayova und verpasse keinen neuen Beitrag.
              </h2>
            </div>
            <div className="mt-7 shrink-0 lg:mt-0">
              <LaunchCta />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
