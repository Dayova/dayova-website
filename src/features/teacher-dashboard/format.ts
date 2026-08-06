export const germanDate = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function formatDate(value: string): string {
  return germanDate.format(new Date(value));
}

export function studentName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function teachingGroupLabel(
  teachingGroupId: string,
  groups: Array<{ id: string; className: string; subjectName: string }>,
): string {
  const group = groups.find((item) => item.id === teachingGroupId);
  return group ? `${group.className} · ${group.subjectName}` : "Unterrichtsgruppe";
}
