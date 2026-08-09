import {
  Clock01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import type { ResolvedTimetableEntry } from "../types";
import { TextAction } from "./dashboard-ui";

export function TodayTimetable({
  entries,
  dayLabel,
  heading = "Heute im Stundenplan",
}: {
  entries: ResolvedTimetableEntry[];
  dayLabel: string;
  heading?: string;
}) {
  return (
    <section className="teacher-today-schedule" aria-labelledby="today-schedule-heading">
      <header className="teacher-today-schedule-header">
        <div>
          <p>{dayLabel}</p>
          <h2 id="today-schedule-heading">{heading}</h2>
        </div>
        <TextAction href="/lehrkraefte/stundenplan">Ganze Woche</TextAction>
      </header>

      {entries.length > 0 ? (
        <div className="teacher-today-schedule-list">
          {entries.map((entry) => {
            const title = entry.teachingGroup
              ? `${entry.teachingGroup.className} · ${entry.teachingGroup.subjectName}`
              : (entry.label ?? "Termin");

            return (
              <article className="teacher-today-slot" key={entry.id}>
                <div className="teacher-today-slot-time">
                  <DayovaIcon icon={Clock01Icon} size={17} />
                  <strong>{entry.startTime}</strong>
                  <span>– {entry.endTime}</span>
                </div>
                <div className="teacher-today-slot-main">
                  <h3>{title}</h3>
                  <p>
                    <DayovaIcon icon={Location01Icon} size={15} />
                    {entry.room}
                  </p>
                </div>
                {entry.teachingGroupId ? (
                  <Link
                    className="teacher-today-slot-action"
                    href={`/lehrkraefte/assistent?gruppe=${entry.teachingGroupId}`}
                  >
                    Vorbereiten
                  </Link>
                ) : (
                  <span className="teacher-today-slot-kind">{entry.label}</span>
                )}
              </article>
            );
          })}
        </div>
      ) : (
        <p className="teacher-today-schedule-empty">
          Für diesen Tag sind keine Unterrichtsstunden eingetragen.
        </p>
      )}
    </section>
  );
}
