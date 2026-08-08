import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

import { DayovaIcon } from "@/components/ui/huge-icon";
import type { BlogArticle } from "@/content/blog";

type ArticleCardProps = {
  article: BlogArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="section-card blog-overview-card">
      <div className="blog-overview-card__meta">
        <span className="blog-overview-card__category">
          {article.category}
        </span>
        <span className="blog-overview-card__time">
          <time dateTime={article.publishedAtISO}>{article.publishedAt}</time>
          <span>{article.readingTime}</span>
        </span>
      </div>
      <h2>
        <Link className="blog-card-link" href={`/blog/${article.slug}`}>
          {article.title}
        </Link>
      </h2>
      <p>{article.excerpt}</p>
      <div className="blog-overview-card__footer">
        <Link
          className="button-secondary blog-overview-card__button"
          href={`/blog/${article.slug}`}
        >
          Beitrag lesen
          <DayovaIcon
            icon={ArrowRight02Icon}
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
