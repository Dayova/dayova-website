import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import {
  HomeAboutSection,
  HomeAdvantagesSection,
  HomeCompanionSection,
  HomeDownloadSection,
  HomeFaqSection,
  HomeHeroSection,
  HomeProcessSection,
} from "@/components/sections/homepage-sections";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

const homeDescription =
  "Dayova ist dein persönlicher Lernbegleiter: Die App erstellt Lernpläne, erkennt Wissenslücken und zeigt dir den nächsten sinnvollen Lernschritt.";

export const metadata: Metadata = createPageMetadata({
  title: "Dayova – Lernplan-App und persönlicher Lernbegleiter",
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
      logo: {
        "@type": "ImageObject",
        url: "https://dayova.com/favicon-light.png",
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
      name: "Dayova – Lernplan-App und persönlicher Lernbegleiter",
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
      <HomeCompanionSection />
      <HomeAdvantagesSection />
      <HomeProcessSection />
      <HomeDownloadSection />
      <ContactForm />
      <HomeFaqSection />
    </>
  );
}
