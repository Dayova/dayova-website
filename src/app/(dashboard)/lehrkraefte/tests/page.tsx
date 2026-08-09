import { redirect } from "next/navigation";

export default function TestsPage() {
  redirect("/lehrkraefte/planung?bereich=tests");
}
