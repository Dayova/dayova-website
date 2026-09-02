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
    href: "/teachers",
    icon: Home01Icon,
  },
  {
    label: "Unterrichtsassistent",
    href: "/teachers/assistant",
    icon: AiMagicIcon,
  },
  {
    label: "Stundenplan",
    href: "/teachers/timetable",
    icon: Calendar03Icon,
  },
  {
    label: "Klassen & Klassenbuch",
    href: "/teachers/classes",
    icon: UserGroupIcon,
    activePaths: [
      "/teachers/classes",
      "/teachers/classbook",
      "/teachers/grades",
      "/teachers/class-teacher",
      "/teachers/students",
    ],
  },
  {
    label: "Aufgaben & Tests",
    href: "/teachers/planning",
    icon: Task01Icon,
    activePaths: [
      "/teachers/planning",
      "/teachers/homework",
      "/teachers/tests",
    ],
  },
  {
    label: "Lernstände",
    href: "/teachers/analytics",
    icon: Analytics01Icon,
  },
  {
    label: "Schulverwaltung",
    href: "/teachers/school-administration",
    icon: SchoolIcon,
    adminOnly: true,
  },
];
