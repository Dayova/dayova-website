import {
  Analytics01Icon,
  AiMagicIcon,
  BookOpen01Icon,
  Calendar01Icon,
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
    label: "Klassen",
    href: "/lehrkraefte/klassen",
    icon: UserGroupIcon,
  },
  {
    label: "Hausaufgaben",
    href: "/lehrkraefte/hausaufgaben",
    icon: Task01Icon,
  },
  {
    label: "Tests",
    href: "/lehrkraefte/tests",
    icon: Calendar01Icon,
  },
  {
    label: "Notenbuch",
    href: "/lehrkraefte/noten",
    icon: BookOpen01Icon,
  },
  {
    label: "Analysen",
    href: "/lehrkraefte/analysen",
    icon: Analytics01Icon,
  },
  {
    label: "Digitales Klassenbuch",
    href: "/lehrkraefte/klassenbuch",
    icon: BookOpen01Icon,
  },
  {
    label: "Schulverwaltung",
    href: "/lehrkraefte/schulverwaltung",
    icon: SchoolIcon,
    adminOnly: true,
  },
];
