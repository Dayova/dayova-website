import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        description="Die vollständigen rechtlich geprüften Anbieterangaben werden vor der Veröffentlichung ergänzt."
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Anbieterangaben
            </span>
            <h2 className="dayova-section-title">Kontakt</h2>
            <p className="mt-4 text-dayova-body text-muted">
              E-Mail:{" "}
              <a className="font-medium text-ink underline" href={`mailto:${siteConfig.links.email}`}>
                {siteConfig.links.email}
              </a>
            </p>
            <p className="mt-6 text-sm text-muted">
              Hinweis: Unternehmensform, vertretungsberechtigte Person,
              Anschrift und gegebenenfalls Registerangaben dürfen nicht
              erfunden werden. Der bereits vorgesehene, rechtlich geprüfte Text
              wird hier eingesetzt, sobald diese Angaben vollständig
              vorliegen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
