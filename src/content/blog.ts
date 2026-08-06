export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Lernplanung" | "Prüfungen" | "Für Eltern";
  readingTime: string;
  status: "planned" | "published";
};

export const blogArticles = [
  {
    slug: "lernplan-der-wirklich-funktioniert",
    title: "Ein Lernplan, der wirklich in deinen Alltag passt",
    excerpt:
      "Warum ein guter Plan nicht möglichst voll sein muss – sondern klar, realistisch und anpassbar.",
    category: "Lernplanung",
    readingTime: "5 Min.",
    status: "planned",
  },
  {
    slug: "pruefungsvorbereitung-ohne-ueberforderung",
    title: "Prüfungsvorbereitung ohne das Gefühl, zu spät zu sein",
    excerpt:
      "Wie du aus einer großen Prüfung konkrete nächste Schritte machst und wieder Orientierung bekommst.",
    category: "Prüfungen",
    readingTime: "6 Min.",
    status: "planned",
  },
  {
    slug: "wie-eltern-beim-lernen-unterstuetzen",
    title: "Wie Eltern beim Lernen unterstützen können",
    excerpt:
      "Weniger Nachfragen, mehr Klarheit: Was Schülerinnen und Schüler in stressigen Lernphasen wirklich brauchen.",
    category: "Für Eltern",
    readingTime: "5 Min.",
    status: "planned",
  },
] as const satisfies readonly BlogArticle[];
