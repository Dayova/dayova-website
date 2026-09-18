import { blogArticles2025 } from "./blog/articles-2025";
import { blogArticlesEarly2026 } from "./blog/articles-2026-early";
import { blogArticlesLate2026 } from "./blog/articles-2026-late";
import { blogArticlesSeptember2026 } from "./blog/articles-2026-september";
import { articleDeepDives } from "./blog/article-deep-dives";
import { articlePracticeSections } from "./blog/article-practice";
import { strategicRelatedArticleSlugs } from "./blog/seo-priorities";
import { articleSources } from "./blog/sources";
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
  ...blogArticlesSeptember2026,
  ...blogArticlesLate2026,
  ...blogArticlesEarly2026,
  ...blogArticles2025,
]
  .map((article): BlogArticle => {
    const enrichedArticle: BlogArticle = {
      ...article,
      sources: articleSources[article.slug] ?? [],
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

const blogArticlesBySlug = new Map(
  blogArticles.map((article) => [article.slug, article]),
);

for (const [slug, relatedSlugs] of Object.entries(
  strategicRelatedArticleSlugs,
)) {
  if (!blogArticlesBySlug.has(slug)) {
    throw new Error(`Related-article map references unknown article "${slug}".`);
  }

  for (const relatedSlug of relatedSlugs ?? []) {
    if (!blogArticlesBySlug.has(relatedSlug)) {
      throw new Error(
        `Blog article "${slug}" references unknown article "${relatedSlug}".`,
      );
    }
  }
}

export function getBlogArticle(slug: string) {
  return blogArticlesBySlug.get(slug);
}

export function getBlogArticleModifiedAt(article: BlogArticle) {
  if (article.updatedAtISO) return article.updatedAtISO;

  if (strategicRelatedArticleSlugs[article.slug]) {
    return "2026-09-17T17:30:00+02:00";
  }

  return article.publishedAtISO;
}

export function getRelatedBlogArticles(article: BlogArticle) {
  const strategicSlugs = strategicRelatedArticleSlugs[article.slug];

  if (strategicSlugs) {
    return strategicSlugs.map((slug) => blogArticlesBySlug.get(slug)!);
  }

  return [
    ...blogArticles.filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.category === article.category,
    ),
    ...blogArticles.filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.category !== article.category,
    ),
  ].slice(0, 3);
}
