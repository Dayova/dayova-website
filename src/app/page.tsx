import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CompanionSection } from "@/components/sections/companion-section";
import { DifferentiationSection } from "@/components/sections/differentiation-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LaunchSection } from "@/components/sections/launch-section";
import { OriginSection } from "@/components/sections/origin-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TransformationSection } from "@/components/sections/transformation-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OriginSection />
        <CompanionSection />
        <DifferentiationSection />
        <TransformationSection />
        <ProcessSection />
        <LaunchSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
