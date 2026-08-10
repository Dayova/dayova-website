import type { Metadata } from "next";

export const siteUrl = "https://dayova.com";
export const siteName = "Dayova";
export const defaultOgImage = {
  url: "/images/dayova-hero-phones.png",
  width: 4269,
  height: 2400,
  alt: "Dayova – persönlicher Lernbegleiter mit Lernplan und Wissensanalyse",
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
