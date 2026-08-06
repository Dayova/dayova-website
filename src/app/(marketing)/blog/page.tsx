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
        title="Lernen wird leichter, wenn der nächste Schritt klar ist."
        description="Hier entsteht ein Ort für verständliche, konkrete Inhalte rund um Lernplanung, Prüfungsvorbereitung und den Alltag von Schülerinnen, Schülern und Eltern."
      />

      <section className="section" aria-labelledby="articles-title">
        <div className="dayova-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="dayova-section-title" id="articles-title">
                Neue Beiträge
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              Konkrete Impulse, die dir helfen, deinen Lernalltag klarer zu
              planen und mit weniger Druck voranzukommen.
            </p>
          </div>
          <div className="card-grid mt-6 lg:mt-8 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="dayova-container">
          <div className="rounded-dayova-xl bg-dark-panel p-6 text-white lg:flex lg:items-center lg:justify-between lg:gap-8 lg:p-8">
            <div>
              <h2 className="dayova-section-title max-w-2xl text-white">
                Folge Dayova und verpasse keinen neuen Beitrag.
              </h2>
            </div>
            <div className="mt-6 shrink-0 lg:mt-0">
              <LaunchCta />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
