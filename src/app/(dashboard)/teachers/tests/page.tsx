import { redirect } from "next/navigation";

export default function TestsPage() {
  redirect("/teachers/planning?section=tests");
}
