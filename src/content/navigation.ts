export type NavigationItem = {
  href: string;
  label: string;
  description?: string;
};

export const primaryNavigation = [
  {
    href: "/eltern",
    label: "Für Eltern",
    description: "Orientierung für Familien",
  },
  {
    href: "/schulen",
    label: "Für Schulen",
    description: "Dayova im schulischen Umfeld",
  },
  {
    href: "/preise",
    label: "Preise",
    description: "Abos und Schulangebote",
  },
  {
    href: "/ueber-uns",
    label: "Über uns",
    description: "Die Geschichte von Dayova",
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
      { href: "/eltern", label: "Eltern" },
      { href: "/schulen", label: "Schulen" },
      { href: "/preise", label: "Preise" },
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/nutzungsbedingungen", label: "Nutzungsbedingungen" },
    ],
  },
] as const;
