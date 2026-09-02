import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import {
  HomeAboutSection,
  HomeAdvantagesSection,
  HomeDownloadSection,
  HomeFaqSection,
  HomeHeroSection,
  HomeProcessSection,
} from "@/components/sections/homepage-sections";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

const homeDescription =
  "Dayova macht aus Prüfungen, freien Zeiten und deinem Wissen einen Lernplan. Öffne die App und sieh, was heute dran ist.";

export const metadata: Metadata = createPageMetadata({
  title: "Lernplan-App für Schüler – Einfach loslernen | Dayova",
  description: homeDescription,
  path: "/",
  absoluteTitle: true,
});

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dayova.com/#organization",
      name: "Dayova",
      url: "https://dayova.com/",
      foundingDate: "2023",
      areaServed: "DE",
      logo: {
        "@type": "ImageObject",
        url: "https://dayova.com/favicon.png",
        width: 512,
        height: 512,
      },
      email: siteConfig.links.email,
      sameAs: [
        siteConfig.links.instagram,
        siteConfig.links.linkedin,
        siteConfig.links.facebook,
        siteConfig.links.youtube,
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dayova.com/#website",
      url: "https://dayova.com/",
      name: "Dayova",
      alternateName: "Dayova Lernbegleiter",
      description: homeDescription,
      inLanguage: "de-DE",
      publisher: { "@id": "https://dayova.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://dayova.com/#webpage",
      url: "https://dayova.com/",
      name: "Lernplan-App für Schüler – Einfach loslernen | Dayova",
      description: homeDescription,
      isPartOf: { "@id": "https://dayova.com/#website" },
      about: { "@id": "https://dayova.com/#organization" },
      inLanguage: "de-DE",
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeAdvantagesSection />
      <HomeProcessSection />
      <HomeDownloadSection />
      <ContactForm />
      <HomeFaqSection />
    </>
  );
}
