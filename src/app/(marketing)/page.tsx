import { ContactForm } from "@/components/contact-form";
import {
  HomeAboutSection,
  HomeAdvantagesSection,
  HomeCompanionSection,
  HomeDownloadSection,
  HomeFaqSection,
  HomeHeroSection,
  HomeProcessSection,
} from "@/components/sections/homepage-sections";

export default function Home() {
  return (
    <>
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
