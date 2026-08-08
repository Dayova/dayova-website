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
    "14 Tage vollständig testen",
    "Persönliche Lernpläne",
    "Stärken und Wissenslücken erkennen",
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
  title: "Dayova für Schulen",
  supportingText: "Preis nach Schulgröße und gewünschtem Umfang.",
  benefits: [
    "Individuell kalkuliertes Angebot",
    "Persönliche Einführung",
    "Passender Umfang für eure Schule",
  ],
  ctaLabel: "Individuelles Angebot anfragen",
} as const;

export const pricingFaqs = [
  {
    question: "Wann beginnt die Zahlung?",
    answer:
      "Die 14-tägige Testphase funktioniert ohne Zahlungsdaten und endet automatisch. Erst wenn du danach bewusst ein Abo auswählst und den Kauf bestätigst, beginnt die Zahlung.",
  },
  {
    question: "Kann ich später den Tarif wechseln?",
    answer:
      "Ja. Der Wechsel zwischen Monats- und Jahresabo wird in der Tarifverwaltung möglich sein.",
  },
  {
    question: "Wie funktioniert das Angebot für Schulen?",
    answer:
      "Schulen erhalten ein individuelles Angebot nach Umfang und Schülerzahl.",
  },
] as const;
