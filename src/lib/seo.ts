import type { Metadata } from "next";

export const siteUrl = "https://dayova.com";
export const siteName = "Dayova";
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;
export const defaultOgImage = {
  url: "/images/dayova-hero-app-light.png",
  width: 1800,
  height: 1200,
  alt: "Dayova – persönlicher Lernbegleiter mit Lernplan und Wissensanalyse",
};

export type BreadcrumbItem = {
  name: string;
  path: `/${string}` | "/";
};

type PageStructuredDataOptions = {
  type?: "AboutPage" | "CollectionPage" | "WebPage";
  name: string;
  description: string;
  path: `/${string}` | "/";
  breadcrumbs: readonly BreadcrumbItem[];
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "de_DE",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export function createBreadcrumbStructuredData(
  path: `/${string}` | "/",
  breadcrumbs: readonly BreadcrumbItem[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}${path === "/" ? "/" : path}#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function createPageStructuredData({
  type = "WebPage",
  name,
  description,
  path,
  breadcrumbs,
}: PageStructuredDataOptions) {
  const pageUrl = `${siteUrl}${path === "/" ? "/" : path}`;
  const breadcrumb = createBreadcrumbStructuredData(path, breadcrumbs);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        inLanguage: "de-DE",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumb["@id"] },
      },
      breadcrumb,
    ],
  };
}
