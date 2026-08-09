import { redirect } from "next/navigation";

export default function HomeworkPage() {
  redirect("/lehrkraefte/planung?bereich=aufgaben");
}
