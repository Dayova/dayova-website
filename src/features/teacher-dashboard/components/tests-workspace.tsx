"use client";

import type { TeachingGroup } from "../types";
import { formatDate } from "../format";
import { useTeacherDashboard } from "./dashboard-store";
import { ProgressBar, StatusBadge } from "./dashboard-ui";

type DashboardClass = { id: string; name: string; groups: TeachingGroup[] };

export function TestsWorkspace({ classes }: { classes: DashboardClass[] }) {
  const { tests } = useTeacherDashboard();

  return (
    <div className="teacher-class-sections">
      {classes.map((item) => {
        const groupIds = new Set(item.groups.map((group) => group.id));
        const classItems = tests.filter((entry) =>
          groupIds.has(entry.teachingGroupId),
        );
        return (
          <section className="teacher-panel" key={item.id}>
            <header className="teacher-panel-header">
              <div>
                <h2>Klasse {item.name}</h2>
                <p>{classItems.length} geplante Leistungsnachweise</p>
              </div>
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
                      <StatusBadge tone="brand">Geplant</StatusBadge>
                    </div>
                    <ProgressBar
                      value={entry.readinessScore}
                      label="Vorbereitungsstand"
                    />
                    <p>
                      {formatDate(entry.date)} · {entry.topics.join(", ")}
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="teacher-muted-copy">
                Für diese Klasse ist noch kein Test geplant.
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
