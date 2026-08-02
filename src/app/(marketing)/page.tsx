import { ContactForm } from "@/components/contact-form";
import {
  BenefitsSection,
  HomeFaqSection,
  HomeHeroSection,
  HowItWorksSection,
  LaunchCtaSection,
  ProblemSolutionSection,
  TrustSection,
} from "@/components/sections/homepage-sections";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TrustSection />
      <LaunchCtaSection />
      <HomeFaqSection />
      <ContactForm />
    </>
  );
}
