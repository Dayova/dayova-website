import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ReadingProgress } from "@/components/blog/reading-progress";
import { JsonLd } from "@/components/seo/json-ld";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { blogArticles, getBlogArticle } from "@/content/blog";
import {
  createBreadcrumbStructuredData,
  defaultOgImage,
  organizationId,
  siteName,
  siteUrl,
  websiteId,
} from "@/lib/seo";

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
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      siteName,
      locale: "de_DE",
      publishedTime: article.publishedAtISO,
      authors: ["Dayova Redaktion"],
      section: article.category,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [defaultOgImage.url],
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

  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const articleBreadcrumb = createBreadcrumbStructuredData(
    `/blog/${article.slug}`,
    [
      { name: "Dayova", path: "/" },
      { name: "Lernblog", path: "/blog" },
      { name: article.title, path: `/blog/${article.slug}` },
    ],
  );
  const relatedArticles = [
    ...blogArticles.filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.category === article.category,
    ),
    ...blogArticles.filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.category !== article.category,
    ),
  ].slice(0, 3);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishedAtISO,
        dateModified: article.publishedAtISO,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${articleUrl}#webpage`,
        },
        isPartOf: { "@id": websiteId },
        author: {
          "@type": "Organization",
          "@id": organizationId,
          name: siteName,
          url: `${siteUrl}/about`,
        },
        publisher: {
          "@type": "Organization",
          "@id": organizationId,
          name: siteName,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/favicon.png`,
          },
        },
        image: `${siteUrl}${defaultOgImage.url}`,
        articleSection: article.category,
        citation: article.sources?.map((source) => source.url),
        inLanguage: "de-DE",
      },
      {
        "@type": "WebPage",
        "@id": `${articleUrl}#webpage`,
        url: articleUrl,
        name: article.title,
        description: article.excerpt,
        inLanguage: "de-DE",
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": articleBreadcrumb["@id"] },
      },
      articleBreadcrumb,
    ],
  };

  return (
    <>
      <JsonLd data={articleStructuredData} />
      <section className="blog-article-hero" aria-labelledby="article-title">
        <div className="dayova-container">
          <div className="blog-article-hero__inner">
            <Link className="blog-article-back" href="/blog">
              <DayovaIcon
                icon={ArrowLeft02Icon}
                size={18}
                strokeWidth={1.9}
                aria-hidden="true"
              />
              Zur Blogübersicht
            </Link>
            <div className="blog-article-meta" aria-label="Beitragsinformationen">
              <span>{article.category}</span>
              <time dateTime={article.publishedAtISO}>
                {article.publishedAt}
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

            {article.sources?.length ? (
              <details className="blog-article__sources">
                <summary>Quellen und Studien</summary>
                <p>
                  Diese Quellen stützen die zentralen Aussagen des Artikels.
                  Die Übertragung auf den Lernalltag stammt von der Dayova
                  Redaktion.
                </p>
                <ol>
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {source.title}
                      </a>
                      <span>{source.publisher}</span>
                    </li>
                  ))}
                </ol>
              </details>
            ) : null}

            <section
              className="blog-article-related"
              aria-labelledby="related-articles-title"
            >
              <div>
                <span>Weiterlernen</span>
                <h2 id="related-articles-title">Passende nächste Beiträge</h2>
              </div>
              <ul>
                {relatedArticles.map((relatedArticle) => (
                  <li key={relatedArticle.slug}>
                    <Link href={`/blog/${relatedArticle.slug}`}>
                      <span>{relatedArticle.category}</span>
                      <strong>{relatedArticle.title}</strong>
                      <small>{relatedArticle.readingTime} Lesezeit</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

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
