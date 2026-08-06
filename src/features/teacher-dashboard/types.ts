export type DashboardRole = "teacher" | "school_admin" | "internal_setup";

export type RiskLevel = "niedrig" | "mittel" | "hoch";
export type Trend = "steigend" | "stabil" | "fallend";
export type MasteryLevel = "sicher" | "im_aufbau" | "unterstuetzung";
export type AttendanceStatus =
  | "anwesend"
  | "zu_frueh_gegangen"
  | "nicht_erschienen"
  | "krank";

export type DashboardSession = {
  userId: string;
  role: DashboardRole;
  schoolId: string;
  displayName: string;
};

export type TeachingGroup = {
  id: string;
  schoolId: string;
  classId: string;
  className: string;
  subjectId: string;
  subjectName: string;
  teacherId: string;
  teacherName: string;
  name: string;
  studentCount: number;
  openHomeworkCount: number;
  upcomingTestCount: number;
  riskStudentCount: number;
  masteryScore: number;
  isActive: boolean;
};

export type Student = {
  id: string;
  schoolId: string;
  classId: string;
  firstName: string;
  lastName: string;
  email?: string;
  averageGrade: string;
  homeworkCompletionRate: number;
  knowledgeScore: number;
  trend: Trend;
  riskLevel: RiskLevel;
  supportFocus: string;
  targetGradeFirstSemester?: string;
  targetGradeSecondSemester?: string;
};

export type Homework = {
  id: string;
  teachingGroupId: string;
  title: string;
  description: string;
  dueDate: string;
  competency: string;
  status: "offen" | "korrektur" | "abgeschlossen";
  completionRate: number;
  missingCount: number;
};

export type Test = {
  id: string;
  teachingGroupId: string;
  title: string;
  description: string;
  date: string;
  topics: string[];
  status: "geplant" | "abgeschlossen";
  readinessScore: number;
  difficulty?: "leicht" | "mittel" | "schwer";
  aiTemplate?: AiTestTemplate;
};

export type AiTestTemplate = {
  taskCount: number;
  groups: Array<{
    title: string;
    taskType: string;
    taskCount: number;
    topic: string;
    description: string;
  }>;
};

export type Grade = {
  id: string;
  teachingGroupId: string;
  studentId: string;
  assessmentTitle: string;
  assessmentType: "Test" | "Hausaufgabe" | "Quiz" | "Mündlich";
  value: string;
  weight: number;
  competency: string;
  date: string;
  semester: 1 | 2;
};

export type TopicAnalysis = {
  id: string;
  teachingGroupId: string;
  name: string;
  masteryScore: number;
  level: MasteryLevel;
  trend: Trend;
  affectedStudents: number;
  misconception: string;
  priority: number;
};

export type LessonPhase = {
  title: string;
  durationMinutes: number;
  description: string;
  activities: string[];
};

export type LessonRecommendation = {
  id: string;
  teachingGroupId: string;
  lessonTitle: string;
  subject: string;
  className: string;
  durationMinutes: number;
  primaryTopic: string;
  secondaryTopics: string[];
  lessonObjectives: string[];
  materialsNeeded: string[];
  phases: LessonPhase[];
  supportActivities: string[];
  coreActivities: string[];
  advancedActivities: string[];
  homeworkFollowUp: string;
  classReadinessSummary: string;
  whyThisMattersNow: string;
  signalsUsed: string[];
  confidenceLevel: "niedrig" | "mittel" | "hoch";
  generatedAt: string;
};

export type DashboardAlert = {
  id: string;
  type: "todo" | "warning" | "support" | "recommendation";
  title: string;
  description: string;
  teachingGroupId?: string;
  dueLabel?: string;
};

export type AttendanceRecord = {
  id: string;
  schoolId: string;
  classId: string;
  studentId: string;
  date: string;
  status: AttendanceStatus;
  note?: string;
  sickNoteAvailable?: boolean;
  isExcused?: boolean;
};

export type TeacherNotification = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  href: string;
  read: boolean;
  tone: "neutral" | "warning" | "brand";
};

export type TeacherProfile = {
  id: string;
  name: string;
  email: string;
  schoolName: string;
  subjects: string[];
  classTeacherOf: string[];
};

export type DashboardOverview = {
  teacherName: string;
  teachingGroups: TeachingGroup[];
  todos: DashboardAlert[];
  warnings: DashboardAlert[];
  supportStudents: Student[];
  upcomingTests: Test[];
  homeworkToReview: Homework[];
  recommendations: LessonRecommendation[];
};
