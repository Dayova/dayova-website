import { WorkspaceTabs } from "./workspace-tabs";

type ClassWorkspace = "klassen" | "klassenbuch" | "noten";

export function ClassWorkspaceTabs({ active }: { active: ClassWorkspace }) {
  return (
    <WorkspaceTabs
      label="Klassenbereich"
      items={[
        {
          label: "Klassen",
          href: "/lehrkraefte/klassen",
          active: active === "klassen",
        },
        {
          label: "Klassenbuch",
          href: "/lehrkraefte/klassenbuch",
          active: active === "klassenbuch",
        },
        {
          label: "Noten",
          href: "/lehrkraefte/noten",
          active: active === "noten",
        },
      ]}
    />
  );
}
