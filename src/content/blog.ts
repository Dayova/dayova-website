import { blogArticles2025 } from "./blog/articles-2025";
import { blogArticlesEarly2026 } from "./blog/articles-2026-early";
import { blogArticlesLate2026 } from "./blog/articles-2026-late";
import { articleDeepDives } from "./blog/article-deep-dives";
import { articlePracticeSections } from "./blog/article-practice";
import type { BlogArticle } from "./blog/types";

export type { BlogArticle } from "./blog/types";

const BLOG_READING_WORDS_PER_MINUTE = 90;

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

  return `${Math.max(
    4,
    Math.ceil(wordCount / BLOG_READING_WORDS_PER_MINUTE),
  )} Min.`;
}

export const blogArticles: readonly BlogArticle[] = [
  ...blogArticlesLate2026,
  ...blogArticlesEarly2026,
  ...blogArticles2025,
]
  .map((article): BlogArticle => {
    const enrichedArticle: BlogArticle = {
      ...article,
      sections: [
        ...article.sections,
        ...(articleDeepDives[article.slug] ?? []),
        ...(articlePracticeSections[article.slug] ?? []),
      ],
    };

    return {
      ...enrichedArticle,
      readingTime: calculateReadingTime(enrichedArticle),
    };
  })
  .sort(
    (articleA, articleB) =>
      new Date(articleB.publishedAtISO).getTime() -
      new Date(articleA.publishedAtISO).getTime(),
  );

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
