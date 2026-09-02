import { redirect } from "next/navigation";

export default function HomeworkPage() {
  redirect("/teachers/planning?section=assignments");
}
