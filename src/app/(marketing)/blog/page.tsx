import { InstagramIcon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";

import { ArticleCard } from "@/components/blog/article-card";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";
import { blogArticles } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog – Lernen mit Plan und Rückmeldung",
  description:
    "Fundierte Beiträge zu Lernplanung, Lernpsychologie, Prüfungsvorbereitung und dem Schulalltag von Schülern, Eltern und Lehrkräften.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        className="blog-overview-hero"
        eyebrow="Dayova Blog"
        title="Lernen mit Plan und Rückmeldung."
        description="Jeden Montag erscheinen fundierte Beiträge zu Lernmethoden, Motivation und Prüfungsvorbereitung – für Schülerinnen, Schüler, Eltern und Lehrkräfte."
      />

      <section className="section blog-overview" aria-label="Blogbeiträge">
        <div className="dayova-container">
          <div className="card-grid blog-overview__grid">
            {blogArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
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
