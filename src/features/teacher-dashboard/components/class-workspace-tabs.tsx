import { WorkspaceTabs } from "./workspace-tabs";

type ClassWorkspace = "klassen" | "klassenbuch" | "noten";

export function ClassWorkspaceTabs({ active }: { active: ClassWorkspace }) {
  return (
    <WorkspaceTabs
      label="Klassenbereich"
      items={[
        {
          label: "Klassen",
          href: "/teachers/classes",
          active: active === "klassen",
        },
        {
          label: "Klassenbuch",
          href: "/teachers/classbook",
          active: active === "klassenbuch",
        },
        {
          label: "Noten",
          href: "/teachers/grades",
          active: active === "noten",
        },
      ]}
    />
  );
}
