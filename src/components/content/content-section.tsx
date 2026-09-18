import type { ReactNode } from "react";
import Link from "next/link";
import { studentPricing } from "@/content/pricing";

export function ContentSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section className="content-section" id={id} aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}>{title}</h2>{children}</section>;
}

export function FeaturePricing() {
  return <ContentSection id="costs" title="Was kostet die Funktion?">
    <p>Lernplanung und Lernanalysen gehören zum Dayova-Abo. Du kannst die App 14 Tage ohne Zahlungsdaten testen; die Testphase endet automatisch. Anschließend wählst du selbst, ob du ein Abo abschließen möchtest.</p>
    <div className="content-grid">
      <div className="content-card"><h3>Monatsabo</h3><p><strong>{studentPricing.options.monthly.price}</strong> pro Monat auf dieser Website. Monatlich kündbar.</p></div>
      <div className="content-card"><h3>Jahresabo</h3><p><strong>{studentPricing.options.annual.supportingPrice}</strong> auf dieser Website, einmal für zwölf Monate. Rechnerisch {studentPricing.options.annual.price} pro Monat.</p></div>
    </div>
    <p>Store-Preise können abweichen. Verbindlich sind Preis, Laufzeit und Bedingungen, die dir beim jeweiligen Kauf angezeigt werden.</p>
    <Link className="content-link" href="/pricing">Dayova-Abos und Testphase vergleichen</Link>
  </ContentSection>;
}
