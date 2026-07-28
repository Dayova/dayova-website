import type { BlogArticle } from "@/content/blog";

type ArticleCardProps = {
  article: BlogArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="section-card flex min-h-[320px] flex-col p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
          {article.category}
        </span>
        <span className="text-xs text-muted">{article.readingTime}</span>
      </div>
      <h2 className="mt-8 text-ink">{article.title}</h2>
      <p className="mt-4 text-dayova-body text-muted">{article.excerpt}</p>
      <div className="mt-auto pt-8">
        <span className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-xs font-semibold text-muted">
          Artikel in Vorbereitung
        </span>
      </div>
    </article>
  );
}
