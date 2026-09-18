import type { ReactNode } from "react";

export function ContentSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section className="content-section" id={id} aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}>{title}</h2>{children}</section>;
}
