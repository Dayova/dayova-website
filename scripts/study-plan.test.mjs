import assert from "node:assert/strict";
import test from "node:test";
import { createStudyPlan, studyPlanAsText } from "../src/lib/study-plan.ts";

const base = { startDate: "2026-09-21", examDate: "2026-09-25", weekdays: [1, 2, 3, 4, 5], dailyMinutes: 30, topics: [{ name: "Gleichungen", minutes: 60 }] };
test("the published example fits three study days and a later review", () => {
  const result = createStudyPlan(base);
  assert.equal(result.requestedMinutes, 75);
  assert.deepEqual(result.days.map((day) => day.sessions.map((s) => [s.kind, s.minutes])), [[["study", 20]], [["study", 20]], [["study", 20]], [["review", 15]]]);
  assert.deepEqual(result.days.map((day) => day.spareMinutes), [10, 10, 10, 15]);
  assert.deepEqual(result.remaining, []);
});
test("never schedules on exam day, excluded weekdays or beyond the daily budget", () => {
  const result = createStudyPlan({ ...base, examDate: "2026-10-15", weekdays: [2, 4], topics: [{ name: "A", minutes: 120 }, { name: "B", minutes: 65 }] });
  for (const day of result.days) {
    assert.ok(day.date < "2026-10-15");
    assert.ok([2, 4].includes(new Date(day.date).getUTCDay()));
    assert.equal(day.sessions.reduce((sum, s) => sum + s.minutes, 0) + day.spareMinutes, 30);
    assert.ok(day.spareMinutes >= 6);
  }
});
test("insufficient time is reported without dropping study or review minutes", () => {
  const result = createStudyPlan({ ...base, examDate: "2026-09-22" });
  assert.equal(result.scheduledMinutes, 20);
  assert.deepEqual(result.remaining, [{ topic: "Gleichungen", studyMinutes: 40, reviewMinutes: 15 }]);
  assert.equal(result.scheduledMinutes + result.remaining.reduce((n, t) => n + t.studyMinutes + t.reviewMinutes, 0), result.requestedMinutes);
});
test("review cannot happen on the day its initial practice finishes", () => {
  const result = createStudyPlan({ ...base, examDate: "2026-09-22", dailyMinutes: 240, topics: [{ name: "A", minutes: 10 }] });
  assert.deepEqual(result.days[0].sessions, [{ topic: "A", minutes: 10, kind: "study" }]);
  assert.equal(result.remaining[0].reviewMinutes, 10);
});
test("multiple topics retain every minute and reviews follow completed practice", () => {
  for (const dailyMinutes of [15, 31, 60, 240]) {
    const result = createStudyPlan({ ...base, examDate: "2026-10-05", dailyMinutes, topics: [{ name: "A", minutes: 51 }, { name: "B", minutes: 83 }, { name: "C", minutes: 29 }] });
    const lastStudy = {};
    for (const day of result.days) for (const session of day.sessions) {
      if (session.kind === "study") lastStudy[session.topic] = day.date;
      else assert.ok(lastStudy[session.topic] < day.date);
    }
    assert.equal(result.scheduledMinutes + result.remaining.reduce((n, t) => n + t.studyMinutes + t.reviewMinutes, 0), result.requestedMinutes);
  }
});
test("calendar dates stay stable across DST and handle leap days", () => {
  const result = createStudyPlan({ ...base, startDate: "2026-10-24", examDate: "2026-10-27", weekdays: [0, 1, 6] });
  assert.deepEqual(result.days.map((day) => day.date), ["2026-10-24", "2026-10-25", "2026-10-26"]);
  assert.doesNotThrow(() => createStudyPlan({ ...base, startDate: "2028-02-29", examDate: "2028-03-02", weekdays: [2, 3] }));
});
test("rejects invalid dates, empty schedules, invalid estimates and excessive ranges", () => {
  for (const patch of [
    { startDate: "2026-02-30" }, { startDate: "" }, { examDate: base.startDate },
    { examDate: "2027-09-21" }, { weekdays: [] }, { weekdays: [0], examDate: "2026-09-22" },
    { weekdays: [8] }, { dailyMinutes: 0 }, { dailyMinutes: Infinity }, { topics: [] },
    { topics: [{ name: "", minutes: 10 }] }, { topics: [{ name: "A", minutes: NaN }] },
    { topics: Array.from({ length: 9 }, () => ({ name: "A", minutes: 30 })) },
  ]) assert.throws(() => createStudyPlan({ ...base, ...patch }));
});
test("text export preserves user text as plain text and reports unfinished work", () => {
  const result = createStudyPlan({ ...base, examDate: "2026-09-22", topics: [{ name: "=SUM(A1) <script>", minutes: 60 }] });
  const text = studyPlanAsText(result);
  assert.ok(text.includes("=SUM(A1) <script>"));
  assert.ok(text.includes("Noch nicht eingeplant"));
  assert.ok(text.includes("https://dayova.com/tools/study-plan"));
});
