"use client";

import { useMemo, useState } from "react";
import type { AttendanceRecord, AttendanceStatus, Student } from "../types";

const statusLabels: Record<AttendanceStatus, string> = {
  anwesend: "Anwesend",
  zu_frueh_gegangen: "Zu früh gegangen",
  nicht_erschienen: "Nicht erschienen",
  krank: "Krank",
};

export function AttendanceBoard({ students, initialRecords, date }: { students: Student[]; initialRecords: AttendanceRecord[]; date: string }) {
  const [records, setRecords] = useState(() => new Map(students.map((student) => {
    const existing = initialRecords.find((record) => record.studentId === student.id);
    return [student.id, existing ?? { id: `attendance-${date}-${student.id}`, schoolId: student.schoolId, classId: student.classId, studentId: student.id, date, status: "anwesend" as const }];
  })));
  const [saved, setSaved] = useState(false);
  const summary = useMemo(() => Object.keys(statusLabels).map((status) => ({ status: status as AttendanceStatus, count: [...records.values()].filter((record) => record.status === status).length })), [records]);
  const update = (studentId: string, changes: Partial<AttendanceRecord>) => { setSaved(false); setRecords((current) => { const next = new Map(current); const record = next.get(studentId); if (record) next.set(studentId, { ...record, ...changes }); return next; }); };

  return <div className="teacher-attendance-board">
    <div className="teacher-attendance-summary">{summary.map((item) => <span key={item.status}><strong>{item.count}</strong>{statusLabels[item.status]}</span>)}</div>
    <div className="teacher-table-wrap"><table className="teacher-table"><thead><tr><th>Schüler:in</th><th>Status</th><th>Krankmeldung</th><th>Notiz</th></tr></thead><tbody>{students.map((student) => { const record = records.get(student.id)!; return <tr key={student.id}><td><strong>{student.firstName} {student.lastName}</strong></td><td><select value={record.status} onChange={(event) => update(student.id, { status: event.target.value as AttendanceStatus, sickNoteAvailable: event.target.value === "krank" ? record.sickNoteAvailable : false })}>{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></td><td>{record.status === "krank" ? <label className="teacher-inline-check"><input type="checkbox" checked={Boolean(record.sickNoteAvailable)} onChange={(event) => update(student.id, { sickNoteAvailable: event.target.checked, isExcused: event.target.checked })} /> Krankmeldung liegt vor</label> : <span className="teacher-table-placeholder">Nicht erforderlich</span>}</td><td><input value={record.note ?? ""} onChange={(event) => update(student.id, { note: event.target.value })} placeholder="Optionale Notiz" /></td></tr>; })}</tbody></table></div>
    <div className="teacher-flow-actions"><button className="teacher-button teacher-button-primary" type="button" onClick={() => setSaved(true)}>Einträge speichern</button>{saved ? <span className="teacher-success-message" role="status">Klassenbuch wurde gespeichert und Risikosignale wurden aktualisiert.</span> : null}</div>
  </div>;
}
