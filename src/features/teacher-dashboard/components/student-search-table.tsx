"use client";

import { useMemo, useState } from "react";
import type { Student } from "../types";
import { ProgressBar, RiskBadge, TextAction } from "./dashboard-ui";

type SortKey = "name" | "average" | "risk";
const riskRank = { hoch: 0, mittel: 1, niedrig: 2 } as const;

export function StudentSearchTable({ students }: { students: Student[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("name");
  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("de");
    return students
      .filter((student) => `${student.firstName} ${student.lastName}`.toLocaleLowerCase("de").includes(normalized))
      .sort((a, b) => {
        if (sort === "average") return Number(a.averageGrade.replace(",", ".")) - Number(b.averageGrade.replace(",", "."));
        if (sort === "risk") return riskRank[a.riskLevel] - riskRank[b.riskLevel];
        return `${a.lastName} ${a.firstName}`.localeCompare(`${b.lastName} ${b.firstName}`, "de");
      });
  }, [query, sort, students]);

  return (
    <>
      <div className="teacher-filter-row">
        <label>Suche<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name suchen" /></label>
        <label>Sortierung<select value={sort} onChange={(event) => setSort(event.target.value as SortKey)}><option value="name">Name</option><option value="average">Notendurchschnitt</option><option value="risk">Unterstützungsbedarf</option></select></label>
      </div>
      <p className="teacher-result-count" aria-live="polite">{visible.length} von {students.length} Schüler:innen</p>
      <div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Name</th><th>Durchschnitt</th><th>Wissen</th><th>Hausaufgaben</th><th>Status</th></tr></thead><tbody>{visible.map((student) => <tr key={student.id}><td><TextAction href={`/lehrkraefte/schueler/${student.id}`}>{student.firstName} {student.lastName}</TextAction></td><td>{student.averageGrade}</td><td><ProgressBar value={student.knowledgeScore} /></td><td>{student.homeworkCompletionRate} %</td><td><RiskBadge risk={student.riskLevel} /></td></tr>)}</tbody></table></div>
      {!visible.length ? <div className="teacher-empty-state"><strong>Keine Treffer</strong><p>Passen Sie den Suchbegriff an.</p></div> : null}
    </>
  );
}
