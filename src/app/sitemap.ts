import type { MetadataRoute } from "next";

import { blogArticles, getBlogArticleModifiedAt } from "@/content/blog";
import { defaultOgImage, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const downloadsUpdatedAt = new Date("2026-09-17T14:30:00+02:00");
  const newestArticleDate = new Date(
    Math.max(
      ...blogArticles.map((article) =>
        new Date(getBlogArticleModifiedAt(article)).getTime(),
      ),
    ),
  );
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
      images: [`${siteUrl}/images/dayova-hero-app-light.png`],
    },
    {
      path: "/blog",
      priority: 0.8,
      changeFrequency: "weekly" as const,
      images: [`${siteUrl}/images/dayova-bluebox-light.png`],
    },
    {
      path: "/parents",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: [`${siteUrl}/images/dayova-hero-app-light.png`],
    },
    {
      path: "/schools",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: [
        `${siteUrl}/images/schools/teacher-dashboard-macbook-transparent-light.png`,
      ],
    },
    {
      path: "/pricing",
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: [`${siteUrl}/images/dayova-bluebox-light.png`],
    },
    {
      path: "/downloads",
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: [`${siteUrl}/images/dayova-bluebox-light.png`],
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: [`${siteUrl}/images/dayova-about-app-light.png`],
    },
    {
      path: "/support",
      priority: 0.6,
      changeFrequency: "monthly" as const,
      images: [] as string[],
    },
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified:
        route.path === "/blog"
          ? newestArticleDate
          : route.path === "/downloads"
            ? downloadsUpdatedAt
            : undefined,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: route.images,
    })),
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(getBlogArticleModifiedAt(article)),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      images: [`${siteUrl}${defaultOgImage.url}`],
    })),
  ];
}
