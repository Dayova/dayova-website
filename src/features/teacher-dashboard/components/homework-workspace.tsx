"use client";

import type { TeachingGroup } from "../types";
import { formatDate } from "../format";
import { useTeacherDashboard } from "./dashboard-store";
import { HomeworkPlanningFlow } from "./homework-planning-flow";
import { ProgressBar, StatusBadge } from "./dashboard-ui";

type DashboardClass = {
  id: string;
  name: string;
  groups: TeachingGroup[];
};

export function HomeworkWorkspace({ classes }: { classes: DashboardClass[] }) {
  const { homework } = useTeacherDashboard();

  return (
    <div className="teacher-class-sections">
      {classes.map((item) => {
        const groupIds = new Set(item.groups.map((group) => group.id));
        const classItems = homework.filter((entry) =>
          groupIds.has(entry.teachingGroupId),
        );
        return (
          <section className="teacher-panel" key={item.id}>
            <header className="teacher-panel-header">
              <div>
                <h2>Klasse {item.name}</h2>
                <p>{classItems.length} aktive Aufgaben</p>
              </div>
              <HomeworkPlanningFlow
                groups={item.groups}
                presetGroupId={item.groups[0]?.id}
                compact
              />
            </header>
            {classItems.length ? (
              <div className="teacher-horizontal-strip">
                {classItems.map((entry) => (
                  <article className="teacher-group-card" key={entry.id}>
                    <div className="teacher-group-card-header">
                      <div>
                        <span>
                          {
                            item.groups.find(
                              (group) => group.id === entry.teachingGroupId,
                            )?.subjectName
                          }
                        </span>
                        <h2>{entry.title}</h2>
                        <p>{entry.description}</p>
                      </div>
                      <StatusBadge
                        tone={entry.status === "korrektur" ? "warning" : "brand"}
                      >
                        {entry.status === "korrektur" ? "Zu prüfen" : "Offen"}
                      </StatusBadge>
                    </div>
                    <ProgressBar value={entry.completionRate} label="Abgaben" />
                    <p>
                      Fällig am {formatDate(entry.dueDate)} · {entry.missingCount}{" "}
                      fehlen
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="teacher-muted-copy">
                Für diese Klasse sind aktuell keine Hausaufgaben geplant.
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
