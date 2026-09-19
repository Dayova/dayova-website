import assert from "node:assert/strict";
import test from "node:test";
import { createStudyPlan, studySubjects } from "../src/lib/study-plan.ts";

const now = new Date(2026, 8, 18, 23, 59);
const base = {
  subjectId: "mathematics",
  grade: "8",
  examDate: "2026-10-02",
  sessionMinutes: 60,
  sessionsPerWeek: 3,
  topicDescription: "Gleichungen und Textaufgaben",
};
const makePlan = (patch = {}, date = now) => createStudyPlan({ ...base, ...patch }, date);

test("three weekly sessions over fourteen days create six spaced appointments", () => {
  const plan = makePlan();
  assert.equal(plan.dayCount, 14);
  assert.equal(plan.sessions.length, 6);
  assert.deepEqual(plan.sessions.map((session) => session.date), [
    "2026-09-18", "2026-09-21", "2026-09-23", "2026-09-26", "2026-09-28", "2026-10-01",
  ]);
  assert.equal(plan.totalMinutes, 360);
  assert.deepEqual(plan.sessions.flatMap((session) => session.blocks.map((block) => block.name)), ["Theorie", "Theorie", "Üben", "Üben", "Üben", "Praxis"]);
});

test("weekly rhythm controls appointment count without duplicate or exam-day sessions", () => {
  for (const sessionsPerWeek of [2, 3, 4, 5]) {
    const plan = makePlan({ examDate: "2026-10-16", sessionsPerWeek });
    assert.equal(plan.sessions.length, sessionsPerWeek * 4);
    assert.equal(new Set(plan.sessions.map((session) => session.date)).size, plan.sessions.length);
    assert.equal(plan.sessions[0].date, "2026-09-18");
    assert.equal(plan.sessions.at(-1).date, "2026-10-15");
    assert.ok(plan.sessions.every((session) => session.date < plan.examDate));
  }
});

test("each appointment respects the selected duration and total time", () => {
  for (const sessionMinutes of [15, 60, 135, 240]) {
    const plan = makePlan({ sessionMinutes });
    for (const session of plan.sessions) {
      assert.equal(session.blocks.reduce((sum, block) => sum + block.minutes, 0), sessionMinutes);
      assert.ok(session.blocks.every((block) => block.minutes > 0));
    }
    assert.equal(plan.totalMinutes, plan.sessions.length * sessionMinutes);
  }
});

test("near exams combine all three phases without scheduling on the exam day", () => {
  const tomorrow = makePlan({ examDate: "2026-09-19", sessionsPerWeek: 5 });
  assert.equal(tomorrow.sessions.length, 1);
  assert.equal(tomorrow.sessions[0].date, "2026-09-18");
  assert.deepEqual(tomorrow.sessions[0].blocks.map((block) => block.name), ["Theorie", "Üben", "Praxis"]);

  const twoDays = makePlan({ examDate: "2026-09-20", sessionsPerWeek: 5 });
  assert.deepEqual(twoDays.sessions.map((session) => session.date), ["2026-09-18", "2026-09-19"]);
  assert.deepEqual([...new Set(twoDays.sessions.flatMap((session) => session.blocks.map((block) => block.name)))], ["Theorie", "Üben", "Praxis"]);
});

test("every subject produces subject-specific tasks across all phases", () => {
  const practiceTasks = new Set();
  for (const subject of studySubjects) {
    const plan = makePlan({ subjectId: subject.id });
    assert.equal(plan.subject, subject.name);
    assert.ok(plan.sessions.every((session) => session.blocks.every((block) => block.task.length > 10)));
    practiceTasks.add(plan.sessions.flatMap((session) => session.blocks).find((block) => block.id === "practice").task);
  }
  assert.equal(practiceTasks.size, studySubjects.length);
});

test("local start dates stay stable across DST, year changes and leap days", () => {
  for (const [date, examDate, expectedStart] of [
    [new Date(2026, 9, 24, 23, 59), "2026-10-30", "2026-10-24"],
    [new Date(2026, 11, 31, 23, 59), "2027-01-06", "2026-12-31"],
    [new Date(2028, 1, 28, 23, 59), "2028-03-05", "2028-02-28"],
  ]) assert.equal(makePlan({ examDate }, date).sessions[0].date, expectedStart);
});

test("validates subjects, grades, dates, rhythms, duration and topics", () => {
  for (const subjectId of ["", "unknown", "Mathematik"]) assert.throws(() => makePlan({ subjectId }));
  for (const grade of ["", "5", "14", "8. Klasse"]) assert.throws(() => makePlan({ grade }));
  for (const examDate of ["", "2026-09-18", "2026-09-17", "2027-02-29", "2026-02-30", "01.10.2026"]) assert.throws(() => makePlan({ examDate }));
  for (const sessionsPerWeek of [0, 1, 6, 3.5, Infinity]) assert.throws(() => makePlan({ sessionsPerWeek }));
  for (const sessionMinutes of [0, 14, 16, 241, 300, 60.5, NaN]) assert.throws(() => makePlan({ sessionMinutes }));
  for (const topicDescription of ["", "   ", "a".repeat(301)]) assert.throws(() => makePlan({ topicDescription }));
});

test("accepts every app grade and preserves plain user text for React rendering", () => {
  for (const grade of ["6", "7", "8", "9", "10", "11", "12", "13"]) assert.equal(makePlan({ grade }).grade, grade);
  assert.equal(makePlan({ topicDescription: "  <script>test</script>  " }).topicDescription, "<script>test</script>");
});
