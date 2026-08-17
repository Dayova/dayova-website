import { InstagramIcon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";

import { ArticleFilter } from "@/components/blog/article-filter";
import { JsonLd } from "@/components/seo/json-ld";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";
import { blogArticles } from "@/content/blog";
import {
  createPageMetadata,
  createPageStructuredData,
  siteUrl,
} from "@/lib/seo";

const blogDescription =
  "Der Dayova Lernblog für Schüler, Eltern und Lehrkräfte: fundierte Lernmethoden, Lernplanung, Motivation und Prüfungsvorbereitung für den Schulalltag.";

export const metadata: Metadata = createPageMetadata({
  title: "Lernblog: Methoden, Planung und Motivation",
  description: blogDescription,
  path: "/blog",
});

const blogPageStructuredData = createPageStructuredData({
  type: "CollectionPage",
  name: "Dayova Lernblog",
  description: blogDescription,
  path: "/blog",
  breadcrumbs: [
    { name: "Dayova", path: "/" },
    { name: "Lernblog", path: "/blog" },
  ],
});

const blogListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Aktuelle Beiträge im Dayova Lernblog",
  numberOfItems: blogArticles.length,
  itemListElement: blogArticles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/blog/${article.slug}`,
    name: article.title,
  })),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogPageStructuredData} />
      <JsonLd data={blogListStructuredData} />
      <PageHero
        className="blog-overview-hero"
        eyebrow="Dayova Blog"
        title="Lernmethoden, die im Schulalltag funktionieren."
        description="Jeden Montag erscheinen fundierte Beiträge zu Lernmethoden, Motivation und Prüfungsvorbereitung – für Schülerinnen, Schüler, Eltern und Lehrkräfte."
      />

      <section className="section blog-overview" aria-label="Blogbeiträge">
        <div className="dayova-container">
          <ArticleFilter
            articles={blogArticles.map((article) => ({
              category: article.category,
              excerpt: article.excerpt,
              publishedAt: article.publishedAt,
              publishedAtISO: article.publishedAtISO,
              readingTime: article.readingTime,
              slug: article.slug,
              title: article.title,
            }))}
          />
        </div>
      </section>

      <section
        className="blog-overview-cta-section"
        aria-labelledby="blog-download-title"
      >
        <div className="dayova-container">
          <div className="blog-overview-cta">
            <div className="blog-overview-cta__copy">
              <span className="home-classic-section-eyebrow home-classic-section-eyebrow--inverse">
                Dein nächster Schritt
              </span>
              <h2 id="blog-download-title" className="dayova-section-title">
                Jetzt Dayova herunterladen
              </h2>
              <p>
                Hol dir deinen persönlichen Lernbegleiter und starte mit einem
                Lernplan, der zu deinem Alltag passt.
              </p>
              <div className="blog-overview-cta__actions">
                <StoreDownloadLink
                  variant="secondary"
                  className="blog-overview-cta__download"
                >
                  Dayova herunterladen
                </StoreDownloadLink>
                <a
                  className="blog-overview-cta__instagram"
                  href={siteConfig.links.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  <DayovaIcon
                    icon={InstagramIcon}
                    size={20}
                    aria-hidden="true"
                  />
                  Auf Instagram folgen
                </a>
              </div>
            </div>

            <div className="blog-overview-cta__visual" aria-hidden="true">
              <Image
                src="/images/dayova-screen-collage.png"
                alt=""
                width={964}
                height={883}
                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 44vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
