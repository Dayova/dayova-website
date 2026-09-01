import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterangaben und Kontaktinformationen von Dayova.",
  alternates: { canonical: "/legal-notice" },
  robots: { index: false, follow: true },
};

const address = (
  <>
    Hohe Straße 54
    <br />
    01187 Dresden
    <br />
    Deutschland
  </>
);

export default function ImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        description="Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG)."
        className="legal-page-hero"
      />
      <section className="section marketing-legal-section">
        <div className="dayova-container marketing-legal">
          <div>
            <span className="home-classic-section-eyebrow">
              Anbieterangaben
            </span>

            <section aria-labelledby="imprint-provider">
              <h2 id="imprint-provider">Diensteanbieter</h2>
              <p>
                Dayova
                <br />
                Inhaber: Julius Dietrich
                <br />
                {address}
              </p>
            </section>

            <section aria-labelledby="imprint-contact">
              <h2 id="imprint-contact">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>
              </p>
            </section>

            <section aria-labelledby="imprint-editorial">
              <h2 id="imprint-editorial">
                Verantwortlich für journalistisch-redaktionelle Inhalte
              </h2>
              <p>
                Verantwortlich nach § 18 Abs. 2 Medienstaatsvertrag (MStV):
                <br />
                Julius Dietrich
                <br />
                {address}
              </p>
            </section>

            <section aria-labelledby="imprint-dispute">
              <h2 id="imprint-dispute">Verbraucherstreitbeilegung</h2>
              <p>
                Julius Dietrich ist nicht bereit, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
