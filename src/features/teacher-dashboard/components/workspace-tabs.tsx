import Link from "next/link";

type WorkspaceTab = {
  label: string;
  href: string;
  active: boolean;
};

export function WorkspaceTabs({
  label,
  items,
}: {
  label: string;
  items: WorkspaceTab[];
}) {
  return (
    <nav className="teacher-workspace-tabs" aria-label={label}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          data-active={item.active}
          aria-current={item.active ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
