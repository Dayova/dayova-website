import Link from "next/link";

import type { BlogArticle } from "@/content/blog";

type ArticleCardProps = {
  article: BlogArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="section-card flex min-h-[320px] flex-col p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
          {article.category}
        </span>
        <span className="text-xs text-muted">{article.readingTime}</span>
      </div>
      <h2 className="mt-6 text-ink">
        <Link className="blog-card-link" href={`/blog/${article.slug}`}>
          {article.title}
        </Link>
      </h2>
      <p className="mt-4 text-dayova-body text-muted">{article.excerpt}</p>
      <div className="mt-auto pt-8">
        <Link
          className="button-text inline-flex min-h-10 items-center"
          href={`/blog/${article.slug}`}
        >
          Beitrag lesen
        </Link>
      </div>
    </article>
  );
}
