"use client";

import { Search01Icon } from "@hugeicons/core-free-icons";
import { useMemo, useState } from "react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { ProgressBar, StatusBadge, TextAction } from "./dashboard-ui";

type ClassCard = {
  id: string;
  name: string;
  studentCount: number;
  subjects: string[];
  isClassTeacher: boolean;
  riskStudentCount: number;
};

export function ClassSearchGrid({ classes }: { classes: ClassCard[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("de");
    if (!search) return classes;
    return classes.filter((item) =>
      [item.name, ...item.subjects].some((value) =>
        value.toLocaleLowerCase("de").includes(search),
      ),
    );
  }, [classes, query]);

  return (
    <div className="teacher-searchable-grid">
      <label className="teacher-class-search">
        <span>Klasse suchen</span>
        <span className="teacher-class-search-field">
          <DayovaIcon icon={Search01Icon} size={20} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Klasse oder Fach eingeben"
            type="search"
          />
        </span>
      </label>
      <p className="teacher-search-result" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "Klasse" : "Klassen"}
      </p>
      <div className="teacher-group-grid">
        {filtered.map((item) => (
          <article className="teacher-group-card" key={item.id}>
            <div className="teacher-group-card-header">
              <div>
                <span>{item.studentCount} Schüler:innen</span>
                <h2>Klasse {item.name}</h2>
                <p>{item.subjects.join(" · ")}</p>
              </div>
              {item.isClassTeacher ? (
                <StatusBadge tone="brand">Klassenleitung</StatusBadge>
              ) : null}
            </div>
            <ProgressBar
              value={Math.max(0, 100 - item.riskStudentCount * 8)}
              label="Stabiler Lernstand"
            />
            <TextAction href={`/lehrkraefte/klassen/${item.id}`}>
              Klasse öffnen
            </TextAction>
          </article>
        ))}
      </div>
      {!filtered.length ? (
        <p className="teacher-empty-search">Keine passende Klasse gefunden.</p>
      ) : null}
    </div>
  );
}
