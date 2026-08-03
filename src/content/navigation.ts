export type NavigationItem = {
  href: string;
  label: string;
  description?: string;
};

export const primaryNavigation = [
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
] as const satisfies readonly NavigationItem[];

export const footerNavigation = [
  {
    title: "Seiten",
    links: [
      { href: "/parents", label: "Eltern" },
      { href: "/schools", label: "Schulen" },
      { href: "/pricing", label: "Preise" },
      { href: "/blog", label: "Blog" },
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
