export type NavigationItem = {
  href: string;
  label: string;
  description?: string;
};

export const primaryNavigation = [
  {
    href: "/parents",
    label: "Für Eltern",
    description: "Wie dein Kind selbst anfangen kann",
  },
  {
    href: "/pricing",
    label: "Preise",
    description: "Testphase und Abos",
  },
  {
    href: "/about",
    label: "Über uns",
    description: "Von der Lernbegleitung zur App",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Gedanken zum Lernen und zur Schule",
  },
] as const satisfies readonly NavigationItem[];

export const footerNavigation = [
  {
    title: "Seiten",
    links: [
      { href: "/parents", label: "Eltern" },
      { href: "/pricing", label: "Preise" },
      { href: "/about", label: "Über uns" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/support", label: "Support" },
      { href: "/legal-notice", label: "Impressum" },
      { href: "/privacy", label: "Datenschutz" },
      { href: "/terms", label: "Nutzungsbedingungen" },
    ],
  },
] as const;
