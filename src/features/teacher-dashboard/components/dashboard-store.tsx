"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type {
  AttendanceRecord,
  Grade,
  Homework,
  TeacherNotification,
  Test,
} from "../types";

type DashboardData = {
  homework: Homework[];
  tests: Test[];
  grades: Grade[];
  attendance: AttendanceRecord[];
  notifications: TeacherNotification[];
  savedLessonIds: string[];
};

type DashboardStore = DashboardData & {
  addHomework: (item: Homework) => void;
  addTest: (item: Test) => void;
  addGrades: (items: Grade[]) => void;
  saveAttendance: (items: AttendanceRecord[]) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  toggleLessonSaved: (id: string) => void;
};

const STORAGE_KEY = "dayova-teacher-dashboard-v1";
const DashboardStoreContext = createContext<DashboardStore | null>(null);

function mergeById<T extends { id: string }>(base: T[], additions: T[]) {
  const values = new Map(base.map((item) => [item.id, item]));
  additions.forEach((item) => values.set(item.id, item));
  return [...values.values()];
}

export function TeacherDashboardProvider({
  initialData,
  children,
}: {
  initialData: DashboardData;
  children: ReactNode;
}) {
  const [data, setData] = useState(initialData);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as Partial<DashboardData>;
          setData({
            homework: mergeById(initialData.homework, parsed.homework ?? []),
            tests: mergeById(initialData.tests, parsed.tests ?? []),
            grades: mergeById(initialData.grades, parsed.grades ?? []),
            attendance: mergeById(initialData.attendance, parsed.attendance ?? []),
            notifications: mergeById(
              initialData.notifications,
              parsed.notifications ?? [],
            ),
            savedLessonIds: parsed.savedLessonIds ?? [],
          });
        }
      } catch {
        // Beschädigte lokale Demo-Daten sollen das Dashboard nicht blockieren.
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [initialData]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data, hydrated]);

  const value = useMemo<DashboardStore>(
    () => ({
      ...data,
      addHomework: (item) =>
        setData((current) => ({
          ...current,
          homework: mergeById(current.homework, [item]),
        })),
      addTest: (item) =>
        setData((current) => ({
          ...current,
          tests: mergeById(current.tests, [item]),
        })),
      addGrades: (items) =>
        setData((current) => ({
          ...current,
          grades: mergeById(current.grades, items),
        })),
      saveAttendance: (items) =>
        setData((current) => ({
          ...current,
          attendance: mergeById(current.attendance, items),
        })),
      markNotificationRead: (id) =>
        setData((current) => ({
          ...current,
          notifications: current.notifications.map((item) =>
            item.id === id ? { ...item, read: true } : item,
          ),
        })),
      markAllNotificationsRead: () =>
        setData((current) => ({
          ...current,
          notifications: current.notifications.map((item) => ({
            ...item,
            read: true,
          })),
        })),
      toggleLessonSaved: (id) =>
        setData((current) => ({
          ...current,
          savedLessonIds: current.savedLessonIds.includes(id)
            ? current.savedLessonIds.filter((candidate) => candidate !== id)
            : [...current.savedLessonIds, id],
        })),
    }),
    [data],
  );

  return (
    <DashboardStoreContext.Provider value={value}>
      {children}
    </DashboardStoreContext.Provider>
  );
}

export function useTeacherDashboard() {
  const value = useContext(DashboardStoreContext);
  if (!value) {
    throw new Error("useTeacherDashboard muss im DashboardProvider verwendet werden.");
  }
  return value;
}
