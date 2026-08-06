"use client";

import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";
import { DayovaIcon } from "@/components/ui/huge-icon";

export function BackButton({ fallback = "/lehrkraefte" }: { fallback?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="teacher-back-button"
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallback);
      }}
      aria-label="Zurück"
    >
      <DayovaIcon icon={ArrowLeft01Icon} size={20} />
      <span>Zurück</span>
    </button>
  );
}
