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
        title="Impressum"
        description="Die vollständigen rechtlich geprüften Anbieterangaben werden vor der Veröffentlichung ergänzt."
      />
      <section className="section">
        <div className="dayova-container">
          <div className="section-card mx-auto max-w-3xl p-6">
            <h2>Kontakt</h2>
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
