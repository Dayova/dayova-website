export type NavigationItem = {
  href: string;
  label: string;
  description?: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  {
    href: "/#produkt",
    label: "Produkt",
    description: "So begleitet dich Dayova",
  },
  {
    href: "/parents",
    label: "Für Eltern",
    description: "Orientierung für Familien",
  },
  {
    href: "/schools",
    label: "Für Schulen",
    description: "Dayova im schulischen Umfeld",
  },
  {
    href: "/pricing",
    label: "Preise",
    description: "Abos und Schulangebote",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Lernen verständlich gemacht",
  },
] as const;

export const footerNavigation = [
  {
    title: "Dayova",
    links: [
      { href: "/#produkt", label: "Produkt" },
      { href: "/#so-funktionierts", label: "So funktioniert’s" },
      { href: "/pricing", label: "Preise" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Für wen",
    links: [
      { href: "/parents", label: "Eltern" },
      { href: "/schools", label: "Schulen" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
] as const;
