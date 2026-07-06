"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function daysLeft() {
  return Math.ceil((new Date(site.nis2Deadline).getTime() - Date.now()) / 86_400_000);
}

/** Chip mit Restlaufzeit der BSI-Nachfrist, mit Fallback nach Ablauf */
export function DeadlineChip() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysLeft());
    const id = setInterval(() => setDays(daysLeft()), 60_000);
    return () => clearInterval(id);
  }, []);

  const label =
    days === null
      ? "BSI-Nachfrist NIS2: 31.07.2026"
      : days > 0
        ? `NIS2-Registrierung: Nachfrist endet in ${days} Tagen`
        : "Die NIS2-Nachfrist ist abgelaufen. Jetzt handeln.";

  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-mono text-xs tracking-wide text-amber">
      <span className="relative flex h-2 w-2">
        <span className="absolute h-full w-full animate-pulse-dot rounded-full bg-amber" />
      </span>
      {label}
    </span>
  );
}
