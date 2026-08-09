import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import {
  PageHeading,
  PrimaryAction,
  TextAction,
} from "@/features/teacher-dashboard/components/dashboard-ui";
import {
  getDemoDashboardSession,
  getTimetableForSession,
} from "@/features/teacher-dashboard/service";

const weekdays = [
  { number: 1 as const, label: "Montag" },
  { number: 2 as const, label: "Dienstag" },
  { number: 3 as const, label: "Mittwoch" },
  { number: 4 as const, label: "Donnerstag" },
  { number: 5 as const, label: "Freitag" },
];

function getMonday(weekOffset: number) {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const weekday = today.getDay();
  const daysSinceMonday = weekday === 0 ? 6 : weekday - 1;
  today.setDate(today.getDate() - daysSinceMonday + weekOffset * 7);
  return today;
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("de-DE", options ?? {
    day: "2-digit",
    month: "2-digit",
  }).format(date);
}

export default async function TimetablePage({
  searchParams,
}: {
  searchParams: Promise<{ woche?: string }>;
}) {
  const params = await searchParams;
  const requestedOffset = Number.parseInt(params.woche ?? "0", 10);
  const weekOffset = Number.isFinite(requestedOffset)
    ? Math.min(12, Math.max(-12, requestedOffset))
    : 0;
  const session = getDemoDashboardSession();
  const timetable = getTimetableForSession(session);
  const monday = getMonday(weekOffset);
  const friday = addDays(monday, 4);
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  return (
    <>
      <PageHeading
        eyebrow="Meine Woche"
        title="Stundenplan"
        description="Alle Unterrichtsstunden, Räume und direkten Wege zur Vorbereitung an einem Ort."
        actions={
          <PrimaryAction href="/lehrkraefte/assistent">
            Unterricht planen
          </PrimaryAction>
        }
      />

      <section className="teacher-timetable" aria-labelledby="timetable-week-heading">
        <header className="teacher-timetable-header">
          <div>
            <p>Schulwoche</p>
            <h2 id="timetable-week-heading">
              {formatDate(monday, { day: "2-digit", month: "long" })} – {formatDate(friday, { day: "2-digit", month: "long", year: "numeric" })}
            </h2>
          </div>
          <nav className="teacher-timetable-navigation" aria-label="Schulwoche wechseln">
            <Link
              href={`/lehrkraefte/stundenplan?woche=${weekOffset - 1}`}
              aria-label="Vorherige Woche"
            >
              <DayovaIcon icon={ArrowLeft01Icon} size={19} />
            </Link>
            {weekOffset !== 0 ? (
              <Link className="teacher-timetable-today" href="/lehrkraefte/stundenplan">
                Heute
              </Link>
            ) : null}
            <Link
              href={`/lehrkraefte/stundenplan?woche=${weekOffset + 1}`}
              aria-label="Nächste Woche"
            >
              <DayovaIcon icon={ArrowRight01Icon} size={19} />
            </Link>
          </nav>
        </header>

        <div className="teacher-timetable-grid">
          {weekdays.map((weekday, index) => {
            const date = addDays(monday, index);
            const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const entries = timetable.filter(
              (entry) => entry.weekday === weekday.number,
            );

            return (
              <section
                className="teacher-timetable-day"
                data-today={dateKey === todayKey}
                key={weekday.number}
                aria-label={`${weekday.label}, ${formatDate(date)}`}
              >
                <header>
                  <span>{weekday.label}</span>
                  <strong>{formatDate(date)}</strong>
                </header>
                <div className="teacher-timetable-day-entries">
                  {entries.length === 0 ? (
                    <p className="teacher-timetable-day-empty">Keine Einträge</p>
                  ) : null}
                  {entries.map((entry) => {
                    const title = entry.teachingGroup
                      ? `${entry.teachingGroup.className} · ${entry.teachingGroup.subjectName}`
                      : (entry.label ?? "Termin");

                    return (
                      <article className="teacher-timetable-entry" key={entry.id}>
                        <time>{entry.startTime} – {entry.endTime}</time>
                        <h3>{title}</h3>
                        <p>
                          <DayovaIcon icon={Location01Icon} size={15} />
                          {entry.room}
                        </p>
                        {entry.teachingGroupId ? (
                          <TextAction href={`/lehrkraefte/assistent?gruppe=${entry.teachingGroupId}`}>
                            Vorbereiten
                          </TextAction>
                        ) : (
                          <span className="teacher-timetable-entry-kind">
                            {entry.kind === "aufsicht" ? "Aufsicht" : "Termin"}
                          </span>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
