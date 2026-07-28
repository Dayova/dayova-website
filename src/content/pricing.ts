export type StudentPlan = {
  id: "annual" | "monthly";
  name: string;
  price: string;
  period: string;
  billing: string;
  description: string;
  badge?: string;
  recommended: boolean;
  benefits: readonly string[];
};

export const studentPlans: readonly StudentPlan[] = [
  {
    id: "annual",
    name: "Jahresabo",
    price: "13,50 €",
    period: "pro Monat",
    billing: "162 € jährlich abgerechnet",
    description:
      "Für alle, die Dayova dauerhaft als festen Lernbegleiter nutzen möchten.",
    badge: "Empfohlen",
    recommended: true,
    benefits: [
      "14 Tage vollständig testen",
      "Persönliche Lernpläne",
      "Planung rund um Prüfungen und Aufgaben",
      "Lernstand und nächste Schritte im Blick",
    ],
  },
  {
    id: "monthly",
    name: "Monatsabo",
    price: "15 €",
    period: "pro Monat",
    billing: "monatlich abgerechnet",
    description:
      "Flexibel starten und Dayova von Monat zu Monat nutzen.",
    recommended: false,
    benefits: [
      "14 Tage vollständig testen",
      "Persönliche Lernpläne",
      "Planung rund um Prüfungen und Aufgaben",
      "Monatlich kündbar",
    ],
  },
] as const;

export const pricingFaqs = [
  {
    question: "Wann beginnt die Zahlung?",
    answer:
      "Dayova kann zum Start 14 Tage vollständig getestet werden. Die Details zur anschließenden Abrechnung werden vor dem Checkout transparent angezeigt.",
  },
  {
    question: "Kann ich später den Tarif wechseln?",
    answer:
      "Die Tarifverwaltung wird mit dem Checkout verbunden. Der Wechsel zwischen Monats- und Jahresabo wird dort klar und einfach möglich sein.",
  },
  {
    question: "Wie funktioniert das Angebot für Schulen?",
    answer:
      "Schulen erhalten ein individuelles Angebot. Der Preis richtet sich nach Umfang, Einsatzszenario und Anzahl der Schülerinnen und Schüler.",
  },
] as const;
