"use client";

import type { Student, TeachingGroup } from "../types";
import { useTeacherDashboard } from "./dashboard-store";
import { StatusBadge } from "./dashboard-ui";

function gradeValueToNumber(value: string) {
  const base = Number.parseInt(value, 10);
  if (Number.isNaN(base)) return null;
  if (value.includes("+")) return Math.max(1, base - 0.3);
  if (value.includes("-")) return Math.min(6, base + 0.3);
  return base;
}

export function GradebookTable({
  group,
  students,
  semester,
}: {
  group: TeachingGroup;
  students: Student[];
  semester: 1 | 2;
}) {
  const { grades: allGrades } = useTeacherDashboard();
  const grades = allGrades.filter(
    (grade) =>
      grade.teachingGroupId === group.id && grade.semester === semester,
  );
  const columns = [
    ...new Map(grades.map((grade) => [grade.assessmentTitle, grade])).values(),
  ];
  const targetLabel =
    semester === 1 ? "Zielnote (1. Halbjahr)" : "Zielnote (2. Halbjahr)";

  const averageFor = (studentId: string) => {
    const weighted = grades
      .filter((grade) => grade.studentId === studentId)
      .flatMap((grade) => {
        const value = gradeValueToNumber(grade.value);
        return value === null ? [] : [{ value, weight: grade.weight }];
      });
    const totalWeight = weighted.reduce((sum, grade) => sum + grade.weight, 0);
    if (!totalWeight) return "–";
    const average =
      weighted.reduce((sum, grade) => sum + grade.value * grade.weight, 0) /
      totalWeight;
    return average.toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  };

  return (
    <div className="teacher-table-wrap">
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Schüler:in</th>
            {columns.map((column) => (
              <th key={column.assessmentTitle}>
                <span>{column.assessmentTitle}</span>
                <small>{column.assessmentType}</small>
              </th>
            ))}
            <th>{targetLabel}</th>
            <th>Durchschnitt</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <strong>
                  {student.firstName} {student.lastName}
                </strong>
              </td>
              {columns.map((column) => {
                const grade = grades.find(
                  (candidate) =>
                    candidate.studentId === student.id &&
                    candidate.assessmentTitle === column.assessmentTitle,
                );
                return (
                  <td key={column.assessmentTitle}>
                    {grade ? (
                      <StatusBadge tone="brand">{grade.value}</StatusBadge>
                    ) : (
                      "–"
                    )}
                  </td>
                );
              })}
              <td>
                {(semester === 1
                  ? student.targetGradeFirstSemester
                  : student.targetGradeSecondSemester) ?? (
                  <span className="teacher-table-placeholder">
                    Keine Zielnote festgelegt
                  </span>
                )}
              </td>
              <td>
                <strong>{averageFor(student.id)}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
