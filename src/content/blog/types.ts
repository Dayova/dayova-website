export type BlogCategory =
  | "Lernmethoden"
  | "Lernpsychologie"
  | "Lernplanung"
  | "Prüfungen"
  | "Für Eltern"
  | "Gesund lernen";

export type BlogSource = {
  title: string;
  publisher: string;
  url: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  updatedAtISO?: string;
  category: BlogCategory;
  readingTime: string;
  publishedAt: string;
  publishedAtISO: string;
  intro: string;
  sections: readonly {
    title: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
    table?: {
      caption: string;
      columns: readonly string[];
      rows: readonly (readonly string[])[];
    };
    links?: readonly { href: string; label: string }[];
  }[];
  takeaway: string;
  sources?: readonly BlogSource[];
};
