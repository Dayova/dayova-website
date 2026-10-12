export type BillingCycle = "annual" | "monthly";

export type StudentPricingOption = {
  id: BillingCycle;
  tabLabel: string;
  badge?: string;
  price: string;
  period: string;
  supportingPrice: string;
  ctaLabel: string;
};

type StudentPricingConfig = {
  title: string;
  defaultCycle: BillingCycle;
  benefits: readonly string[];
  options: Record<BillingCycle, StudentPricingOption>;
};

export const studentPricing = {
  title: "Dayova für Schüler",
  defaultCycle: "annual",
  benefits: [
    "14 Tage ohne Zahlungsdaten testen",
    "Lernplan aus Prüfungen und freien Zeiten",
    "Nächster Lernschritt passend zu deinen Antworten",
  ],
  options: {
    annual: {
      id: "annual",
      tabLabel: "Jährlich",
      badge: "13 % sparen",
      price: "12,99 €",
      period: "pro Monat im Jahresabo",
      supportingPrice: "155,88 € pro Jahr",
      ctaLabel: "Jahresabo auswählen",
    },
    monthly: {
      id: "monthly",
      tabLabel: "Monatlich",
      badge: undefined,
      price: "14,99 €",
      period: "pro Monat",
      supportingPrice: "Flexibel und monatlich kündbar",
      ctaLabel: "Monatsabo auswählen",
    },
  },
} satisfies StudentPricingConfig;

export const schoolPricing = {
  title: "Pilotprojekt für Schulen",
  supportingText: "Preis nach Lerngruppe, Laufzeit und vereinbartem Umfang.",
  benefits: [
    "Lerngruppe und Funktionen vorab festgelegt",
    "Einführung für die beteiligten Personen",
    "Auswertung an vereinbarten Zielen",
  ],
  ctaLabel: "Pilotprojekt anfragen",
} as const;

export const pricingFaqs = [
  {
    question: "Wann beginnt die Zahlung?",
    answer:
      "Die 14-tägige Testphase funktioniert ohne Zahlungsdaten und endet automatisch. Erst wenn du danach bewusst ein Abo auswählst und den Kauf bestätigst, beginnt die Zahlung.",
  },
  {
    question: "Wie unterscheiden sich Monats- und Jahresabo?",
    answer:
      "Das Monatsabo ist monatlich kündbar. Beim Jahresabo zahlst du einmal für zwölf Monate und der monatliche Preis ist niedriger. Vor dem Kauf siehst du Laufzeit und Gesamtpreis.",
  },
  {
    question: "Wie funktioniert das Angebot für Schulen?",
    answer:
      "Vor dem Start legen wir Lerngruppe, Laufzeit, Funktionen und Ziele fest. Auf dieser Grundlage erhält die Schule ein Angebot für den Pilot.",
  },
] as const;
