import {
  Analytics01Icon,
  AiMagicIcon,
  Calendar03Icon,
  Home01Icon,
  SchoolIcon,
  Task01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type DashboardNavigationItem = {
  label: string;
  href: string;
  icon: IconSvgElement;
  activePaths?: string[];
  adminOnly?: boolean;
};

export const dashboardNavigation: DashboardNavigationItem[] = [
  {
    label: "Startseite",
    href: "/lehrkraefte",
    icon: Home01Icon,
  },
  {
    label: "Unterrichtsassistent",
    href: "/lehrkraefte/assistent",
    icon: AiMagicIcon,
  },
  {
    label: "Stundenplan",
    href: "/lehrkraefte/stundenplan",
    icon: Calendar03Icon,
  },
  {
    label: "Klassen & Klassenbuch",
    href: "/lehrkraefte/klassen",
    icon: UserGroupIcon,
    activePaths: [
      "/lehrkraefte/klassen",
      "/lehrkraefte/klassenbuch",
      "/lehrkraefte/noten",
      "/lehrkraefte/klassenlehrer",
      "/lehrkraefte/schueler",
    ],
  },
  {
    label: "Aufgaben & Tests",
    href: "/lehrkraefte/planung",
    icon: Task01Icon,
    activePaths: [
      "/lehrkraefte/planung",
      "/lehrkraefte/hausaufgaben",
      "/lehrkraefte/tests",
    ],
  },
  {
    label: "Lernstände",
    href: "/lehrkraefte/analysen",
    icon: Analytics01Icon,
  },
  {
    label: "Schulverwaltung",
    href: "/lehrkraefte/schulverwaltung",
    icon: SchoolIcon,
    adminOnly: true,
  },
];
