import { ContactForm } from "@/components/contact-form";
import {
  HomeAboutSection,
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
      <HomeProcessSection />
      <HomeDownloadSection />
      <ContactForm />
      <HomeFaqSection />
    </>
  );
}
