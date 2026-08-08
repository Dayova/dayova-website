export type BlogCategory =
  | "Lernmethoden"
  | "Lernpsychologie"
  | "Lernplanung"
  | "Prüfungen"
  | "Für Eltern"
  | "Gesund lernen";

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readingTime: string;
  publishedAt: string;
  publishedAtISO: string;
  intro: string;
  sections: readonly {
    title: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
  }[];
  takeaway: string;
};
