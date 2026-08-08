import { blogArticles2025 } from "./blog/articles-2025";
import { blogArticlesEarly2026 } from "./blog/articles-2026-early";
import { blogArticlesLate2026 } from "./blog/articles-2026-late";
import type { BlogArticle } from "./blog/types";

export type { BlogArticle } from "./blog/types";

function calculateReadingTime(article: BlogArticle) {
  const text = [
    article.title,
    article.excerpt,
    article.intro,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    article.takeaway,
  ].join(" ");
  const wordCount = text.trim().split(/\s+/u).length;

  return `${Math.max(3, Math.ceil(wordCount / 150))} Min.`;
}

export const blogArticles: readonly BlogArticle[] = [
  ...blogArticlesLate2026,
  ...blogArticlesEarly2026,
  ...blogArticles2025,
]
  .map((article) => ({
    ...article,
    readingTime: calculateReadingTime(article),
  }))
  .sort(
    (articleA, articleB) =>
      new Date(articleB.publishedAtISO).getTime() -
      new Date(articleA.publishedAtISO).getTime(),
  );

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
