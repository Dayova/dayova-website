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
    href: "/schools",
    label: "Für Schulen",
    description: "Pilot mit einer Lerngruppe",
  },
  {
    href: "/pricing",
    label: "Preise",
    description: "Testphase, Abos und Pilotpreise",
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
      { href: "/schools", label: "Schulen" },
      { href: "/pricing", label: "Preise" },
      { href: "/about", label: "Über uns" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/legal-notice", label: "Impressum" },
      { href: "/privacy", label: "Datenschutz" },
      { href: "/terms", label: "Nutzungsbedingungen" },
    ],
  },
] as const;
