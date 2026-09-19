import assert from "node:assert/strict";
import test from "node:test";
import { createStudyPlan, studySubjects } from "../src/lib/study-plan.ts";

const now = new Date(2026, 8, 18, 23, 59);
const makePlan = (examDate, subjectId = "mathematics", date = now) => createStudyPlan({ subjectId, grade: "8", examDate, dailyMinutes: 60, topicDescription: "Gleichungen und Textaufgaben" }, date);
const dayKey = (date) => new Date(date).toISOString().slice(0, 10);

test("every subject produces subject-specific theory, practice and rehearsal", () => {
  const tasks = new Set();
  for (const subject of studySubjects) {
    const plan = makePlan("2026-10-02", subject.id);
    assert.equal(plan.subject, subject.name);
    assert.deepEqual(plan.phases.map((phase) => phase.name), ["Theorie", "Üben", "Praxis"]);
    assert.ok(plan.phases.every((phase) => phase.tasks.length === 3));
    tasks.add(plan.phases[1].tasks[0]);
  }
  assert.equal(tasks.size, studySubjects.length);
});

test("all dates are covered in order before the exam, including plans beyond 90 days", () => {
  for (const dayCount of [3, 4, 7, 14, 30, 90, 180, 365, 730]) {
    const examDate = dayKey(Date.UTC(2026, 8, 18 + dayCount));
    const plan = makePlan(examDate);
    assert.equal(plan.dayCount, dayCount);
    assert.equal(plan.phases[0].startDate, "2026-09-18");
    assert.equal(plan.phases.at(-1).endDate, dayKey(Date.UTC(2026, 8, 17 + dayCount)));
    for (let index = 0; index < plan.phases.length; index++) {
      const phase = plan.phases[index];
      assert.ok(phase.startDate <= phase.endDate);
      assert.ok(phase.endDate < examDate);
      if (index) assert.equal(Date.parse(phase.startDate) - Date.parse(plan.phases[index - 1].endDate), 86400000);
    }
  }
});

test("near exams retain all three phases without scheduling on the exam day", () => {
  assert.deepEqual(makePlan("2026-09-19").phases.map((p) => [p.startDate, p.endDate]), Array(3).fill(["2026-09-18", "2026-09-18"]));
  assert.deepEqual(makePlan("2026-09-20").phases.map((p) => p.startDate), ["2026-09-18", "2026-09-18", "2026-09-19"]);
});

test("local start dates survive DST transitions, year changes and leap days", () => {
  for (const [date, examDate, expectedStart, expectedDays] of [
    [new Date(2026, 9, 24, 23, 59), "2026-10-27", "2026-10-24", 3],
    [new Date(2026, 11, 31, 23, 59), "2027-01-03", "2026-12-31", 3],
    [new Date(2028, 1, 28, 23, 59), "2028-03-02", "2028-02-28", 3],
  ]) {
    const plan = makePlan(examDate, "english", date);
    assert.equal(plan.phases[0].startDate, expectedStart);
    assert.equal(plan.dayCount, expectedDays);
  }
});

test("rejects missing subjects and invalid, past or same-day exams", () => {
  for (const subject of ["", "unknown", "Mathematik"]) assert.throws(() => makePlan("2026-10-01", subject));
  for (const date of ["", "2026-09-18", "2026-09-17", "2027-02-29", "2026-02-30", "2026-13-01", "01.10.2026", "2026-10-01T12:00:00Z"]) assert.throws(() => makePlan(date));
});


test("daily budgets stay within the selected limit even when phases share a day", () => {
  for (const dailyMinutes of [15, 60, 135, 240]) for (const days of [1, 2, 3, 14]) {
    const plan = createStudyPlan({ subjectId: "mathematics", grade: "8", examDate: dayKey(Date.UTC(2026, 8, 18 + days)), dailyMinutes, topicDescription: "  Bruchrechnung und Gleichungen  " }, now);
    assert.equal(plan.topicDescription, "Bruchrechnung und Gleichungen");
    assert.equal(plan.totalMinutes, dailyMinutes * days);
    assert.equal(plan.phases.reduce((sum, phase) => sum + phase.totalMinutes, 0), plan.totalMinutes);
    for (let day = 0; day < days; day++) {
      const key = dayKey(Date.UTC(2026, 8, 18 + day));
      const budget = plan.phases.filter((phase) => phase.startDate <= key && phase.endDate >= key).reduce((sum, phase) => sum + phase.minutesPerDay, 0);
      assert.equal(budget, dailyMinutes);
    }
  }
});

test("rejects invalid time budgets and missing or oversized topic descriptions", () => {
  const input = { subjectId: "mathematics", grade: "8", examDate: "2026-10-02", dailyMinutes: 60, topicDescription: "Gleichungen" };
  for (const dailyMinutes of [0, 14, 16, 241, 300, NaN, Infinity, 60.5]) assert.throws(() => createStudyPlan({ ...input, dailyMinutes }, now));
  for (const topicDescription of ["", "   ", "a".repeat(301)]) assert.throws(() => createStudyPlan({ ...input, topicDescription }, now));
  assert.equal(createStudyPlan({ ...input, topicDescription: "<script>test</script>" }, now).topicDescription, "<script>test</script>");
});

test("accepts the app's grade range and rejects unsupported grades", () => {
  for (const grade of ["6", "7", "8", "9", "10", "11", "12", "13"]) {
    const plan = createStudyPlan({ subjectId: "mathematics", grade, examDate: "2026-10-02", dailyMinutes: 60, topicDescription: "Gleichungen" }, now);
    assert.equal(plan.grade, grade);
  }
  for (const grade of ["", "5", "14", "8. Klasse"]) {
    assert.throws(() => createStudyPlan({ subjectId: "mathematics", grade, examDate: "2026-10-02", dailyMinutes: 60, topicDescription: "Gleichungen" }, now));
  }
});
