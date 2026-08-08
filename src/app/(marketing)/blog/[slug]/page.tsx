import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ReadingProgress } from "@/components/blog/reading-progress";
import { blogArticles, getBlogArticle } from "@/content/blog";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} – Dayova Blog`,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAtISO,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="blog-article-hero" aria-labelledby="article-title">
        <div className="dayova-container">
          <div className="blog-article-hero__inner">
            <Link className="blog-article-back" href="/blog">
              ← Zur Blogübersicht
            </Link>
            <div className="blog-article-meta" aria-label="Beitragsinformationen">
              <span>{article.category}</span>
              <time dateTime={article.publishedAtISO}>
                {article.publishedAt}, 10:00 Uhr
              </time>
              <span>{article.readingTime} Lesezeit</span>
            </div>
            <h1 id="article-title">{article.title}</h1>
            <p>{article.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="blog-article-section">
        <div className="dayova-container blog-article-layout">
          <article className="blog-article" data-blog-article>
            <p className="blog-article__intro">{article.intro}</p>

            {article.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <aside className="blog-article__takeaway">
              <span>Das Wichtigste</span>
              <p>{article.takeaway}</p>
            </aside>

            <Link className="button-secondary" href="/blog">
              Weitere Beiträge entdecken
            </Link>
          </article>
        </div>
      </section>

      <ReadingProgress />
    </>
  );
}
