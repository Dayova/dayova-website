import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ReadingProgress } from "@/components/blog/reading-progress";
import { JsonLd } from "@/components/seo/json-ld";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { blogArticles, getBlogArticle } from "@/content/blog";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";

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
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAtISO,
    dateModified: article.publishedAtISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon-light.png`,
      },
    },
    image: `${siteUrl}${defaultOgImage.url}`,
    articleSection: article.category,
    inLanguage: "de-DE",
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
