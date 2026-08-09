import {
  dashboardOverview,
  attendanceRecords,
  demoSession,
  grades,
  homework,
  lessonRecommendations,
  students,
  teachingGroups,
  tests,
  topicAnalyses,
  teacherNotifications,
  teacherProfile,
  timetableEntries,
} from "./demo-data";
import type {
  DashboardOverview,
  DashboardSession,
  Grade,
  Homework,
  LessonRecommendation,
  Student,
  TeachingGroup,
  Test,
  TopicAnalysis,
  AttendanceRecord,
  TeacherNotification,
  TeacherProfile,
  ResolvedTimetableEntry,
} from "./types";
import { buildRuleBasedRecommendation } from "./recommendation-engine";

function clone<T>(value: T): T {
  return structuredClone(value);
}

export function getDemoDashboardSession(): DashboardSession {
  return clone(demoSession);
}

export function getDashboardOverview(
  session: DashboardSession,
): DashboardOverview {
  const allowedGroups = getTeachingGroupsForSession(session);
  const allowedIds = new Set(allowedGroups.map((group) => group.id));

  return clone({
    ...dashboardOverview,
    teacherName: session.displayName,
    teachingGroups: allowedGroups,
    todos: dashboardOverview.todos.filter(
      (item) => !item.teachingGroupId || allowedIds.has(item.teachingGroupId),
    ),
    warnings: dashboardOverview.warnings.filter(
      (item) => !item.teachingGroupId || allowedIds.has(item.teachingGroupId),
    ),
    upcomingTests: dashboardOverview.upcomingTests.filter((item) =>
      allowedIds.has(item.teachingGroupId),
    ),
    homeworkToReview: dashboardOverview.homeworkToReview.filter((item) =>
      allowedIds.has(item.teachingGroupId),
    ),
    recommendations: dashboardOverview.recommendations.filter((item) =>
      allowedIds.has(item.teachingGroupId),
    ),
  });
}

export function getTeachingGroupsForSession(
  session: DashboardSession,
): TeachingGroup[] {
  if (session.role === "teacher") {
    return clone(
      teachingGroups.filter((group) => group.teacherId === session.userId),
    );
  }

  return clone(
    teachingGroups.filter((group) => group.schoolId === session.schoolId),
  );
}

export function getTimetableForSession(
  session: DashboardSession,
): ResolvedTimetableEntry[] {
  const groups = getTeachingGroupsForSession(session);
  const groupsById = new Map(groups.map((group) => [group.id, group]));

  return clone(
    timetableEntries
      .filter(
        (entry) =>
          !entry.teachingGroupId || groupsById.has(entry.teachingGroupId),
      )
      .map((entry) => ({
        ...entry,
        teachingGroup: entry.teachingGroupId
          ? groupsById.get(entry.teachingGroupId)
          : undefined,
      }))
      .sort(
        (a, b) =>
          a.weekday - b.weekday || a.startTime.localeCompare(b.startTime),
      ),
  );
}

export function getTimetableForDay(
  session: DashboardSession,
  weekday: 1 | 2 | 3 | 4 | 5,
): ResolvedTimetableEntry[] {
  return getTimetableForSession(session).filter(
    (entry) => entry.weekday === weekday,
  );
}

export function getTeachingGroup(
  session: DashboardSession,
  teachingGroupId: string,
): TeachingGroup | undefined {
  return getTeachingGroupsForSession(session).find(
    (group) => group.id === teachingGroupId,
  );
}

export function assertTeachingGroupAccess(
  session: DashboardSession,
  teachingGroupId: string,
): TeachingGroup {
  const teachingGroup = getTeachingGroup(session, teachingGroupId);

  if (!teachingGroup) {
    throw new Error(
      "Sie haben keinen Zugriff auf diese Unterrichtsgruppe.",
    );
  }

  return teachingGroup;
}

export function getStudentsForGroup(
  session: DashboardSession,
  teachingGroupId: string,
): Student[] {
  const group = assertTeachingGroupAccess(session, teachingGroupId);
  return clone(students.filter((student) => student.classId === group.classId));
}

export function getStudent(
  session: DashboardSession,
  studentId: string,
): Student | undefined {
  const allowedClassIds = new Set(
    getTeachingGroupsForSession(session).map((group) => group.classId),
  );
  return clone(
    students.find(
      (student) =>
        student.id === studentId && allowedClassIds.has(student.classId),
    ),
  );
}

export function getHomeworkForGroup(
  session: DashboardSession,
  teachingGroupId: string,
): Homework[] {
  assertTeachingGroupAccess(session, teachingGroupId);
  return clone(
    homework.filter((item) => item.teachingGroupId === teachingGroupId),
  );
}

export function getAllHomework(session: DashboardSession): Homework[] {
  const allowedIds = new Set(
    getTeachingGroupsForSession(session).map((group) => group.id),
  );
  return clone(homework.filter((item) => allowedIds.has(item.teachingGroupId)));
}

export function getTestsForGroup(
  session: DashboardSession,
  teachingGroupId: string,
): Test[] {
  assertTeachingGroupAccess(session, teachingGroupId);
  return clone(tests.filter((item) => item.teachingGroupId === teachingGroupId));
}

export function getAllTests(session: DashboardSession): Test[] {
  const allowedIds = new Set(
    getTeachingGroupsForSession(session).map((group) => group.id),
  );
  return clone(tests.filter((item) => allowedIds.has(item.teachingGroupId)));
}

export function getGradesForGroup(
  session: DashboardSession,
  teachingGroupId: string,
): Grade[] {
  assertTeachingGroupAccess(session, teachingGroupId);
  return clone(grades.filter((item) => item.teachingGroupId === teachingGroupId));
}

export function getAllGrades(session: DashboardSession): Grade[] {
  const allowedIds = new Set(
    getTeachingGroupsForSession(session).map((group) => group.id),
  );
  return clone(grades.filter((item) => allowedIds.has(item.teachingGroupId)));
}

export function getTopicAnalyses(
  session: DashboardSession,
  teachingGroupId: string,
): TopicAnalysis[] {
  assertTeachingGroupAccess(session, teachingGroupId);
  return clone(
    topicAnalyses
      .filter((item) => item.teachingGroupId === teachingGroupId)
      .sort((a, b) => a.priority - b.priority),
  );
}

export function getLatestRecommendation(
  session: DashboardSession,
  teachingGroupId: string,
): LessonRecommendation | undefined {
  assertTeachingGroupAccess(session, teachingGroupId);
  const existing = lessonRecommendations.find(
    (item) => item.teachingGroupId === teachingGroupId,
  );
  if (existing) return clone(existing);

  const group = assertTeachingGroupAccess(session, teachingGroupId);
  return clone(
    buildRuleBasedRecommendation(
      group,
      topicAnalyses.filter((item) => item.teachingGroupId === teachingGroupId),
      new Date("2026-07-31T08:00:00.000Z"),
    ),
  );
}

export function getClassesForSession(session: DashboardSession) {
  const groups = getTeachingGroupsForSession(session);
  return clone(
    [...new Set(groups.map((group) => group.classId))].map((classId) => {
      const classGroups = groups.filter((group) => group.classId === classId);
      const classStudents = students.filter((student) => student.classId === classId);
      return {
        id: classId,
        name: classGroups[0]?.className ?? classId,
        studentCount: classGroups[0]?.studentCount ?? classStudents.length,
        subjects: classGroups.map((group) => group.subjectName),
        groups: classGroups,
        isClassTeacher: classGroups[0]?.className === "8A",
        riskStudentCount: classStudents.filter((student) => student.riskLevel !== "niedrig").length,
      };
    }),
  );
}

export function getClassForSession(session: DashboardSession, classId: string) {
  return getClassesForSession(session).find((item) => item.id === classId);
}

export function getStudentsForClass(session: DashboardSession, classId: string) {
  const classItem = getClassForSession(session, classId);
  if (!classItem) return [];
  return clone(students.filter((student) => student.classId === classId));
}

export function getAttendanceForClass(
  session: DashboardSession,
  classId: string,
  date?: string,
): AttendanceRecord[] {
  if (!getClassForSession(session, classId)) return [];
  return clone(attendanceRecords.filter((record) => record.classId === classId && (!date || record.date === date)));
}

export function getTeacherNotifications(): TeacherNotification[] {
  return clone(teacherNotifications);
}

export function getTeacherProfile(): TeacherProfile {
  return clone(teacherProfile);
}
