import { PageHeading } from "@/features/teacher-dashboard/components/dashboard-ui";
import { TodayTimetable } from "@/features/teacher-dashboard/components/today-timetable";
import { TomorrowRecommendationsCarousel } from "@/features/teacher-dashboard/components/tomorrow-recommendations-carousel";
import {
  getDashboardOverview,
  getDemoDashboardSession,
  getLatestRecommendation,
  getTimetableForDay,
} from "@/features/teacher-dashboard/service";

export default function TeacherDashboardPage() {
  const session = getDemoDashboardSession();
  const overview = getDashboardOverview(session);
  const today = new Date();
  const calendarWeekday = today.getDay();
  const currentSchoolWeekday =
    calendarWeekday >= 1 && calendarWeekday <= 5
      ? (calendarWeekday as 1 | 2 | 3 | 4 | 5)
      : 1;
  const nextSchoolWeekday =
    calendarWeekday >= 1 && calendarWeekday <= 4
      ? ((calendarWeekday + 1) as 2 | 3 | 4 | 5)
      : 1;
  const dayLabel =
    calendarWeekday >= 1 && calendarWeekday <= 5
      ? new Intl.DateTimeFormat("de-DE", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        }).format(today)
      : "Nächster Schultag · Montag";
  const todayHeading =
    calendarWeekday >= 1 && calendarWeekday <= 5
      ? "Heute im Stundenplan"
      : "Am nächsten Schultag";
  const nextDayLabel =
    calendarWeekday >= 1 && calendarWeekday <= 4
      ? `Morgen · ${["", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"][nextSchoolWeekday]}`
      : "Nächster Schultag · Montag";
  const timetable = getTimetableForDay(session, currentSchoolWeekday);
  const nextDayTimetable = getTimetableForDay(session, nextSchoolWeekday);
  const nextGroupIds = Array.from(
    new Set(
      nextDayTimetable.flatMap((entry) =>
        entry.teachingGroupId ? [entry.teachingGroupId] : [],
      ),
    ),
  );
  const recommendationGroupIds =
    nextGroupIds.length > 0
      ? nextGroupIds
      : overview.teachingGroups.map((group) => group.id);
  const recommendations = recommendationGroupIds
    .map((groupId) => getLatestRecommendation(session, groupId))
    .filter((recommendation) => recommendation !== undefined);

  return (
    <>
      <PageHeading
        title={`Guten Morgen, ${overview.teacherName}`}
        description="Zuerst die Vorbereitung für den nächsten Schultag, danach Ihr heutiger Stundenplan."
      />

      <TomorrowRecommendationsCarousel
        recommendations={recommendations}
        dayLabel={nextDayLabel}
      />

      <TodayTimetable
        entries={timetable}
        dayLabel={dayLabel}
        heading={todayHeading}
      />
    </>
  );
}
