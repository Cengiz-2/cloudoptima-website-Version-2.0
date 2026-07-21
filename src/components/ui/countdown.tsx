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

/** Großer Countdown für die NIS2-Seite, mit Fallback nach Ablauf */
export function DeadlineCountdown() {
  const [t, setT] = useState<{ d: number; h: number; m: number } | null>(null);

  useEffect(() => {
    const calc = () => {
      const diff = new Date(site.nis2Deadline).getTime() - Date.now();
      if (diff <= 0) {
        setT({ d: 0, h: 0, m: 0 });
        return;
      }
      setT({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor(diff / 3_600_000) % 24,
        m: Math.floor(diff / 60_000) % 60,
      });
    };
    calc();
    const id = setInterval(calc, 30_000);
    return () => clearInterval(id);
  }, []);

  const expired = t !== null && t.d === 0 && t.h === 0 && t.m === 0;

  if (expired) {
    return (
      <p className="rounded-2xl border border-amber/30 bg-amber/10 px-6 py-5 text-center font-display text-lg text-amber">
        Die BSI-Nachfrist ist abgelaufen. Wer noch nicht registriert ist, sollte
        das jetzt nachholen und die Umsetzung dokumentieren.
      </p>
    );
  }

  const cells: Array<[string, string]> = [
    [t ? String(t.d) : "–", "Tage"],
    [t ? String(t.h).padStart(2, "0") : "–", "Stunden"],
    [t ? String(t.m).padStart(2, "0") : "–", "Minuten"],
  ];

  return (
    <div className="flex items-stretch justify-center gap-3 md:gap-4" role="timer" aria-label="Verbleibende Zeit bis zum Ende der BSI-Nachfrist">
      {cells.map(([value, label]) => (
        <div
          key={label}
          className="glass min-w-[92px] rounded-2xl px-5 py-4 text-center md:min-w-[116px]"
        >
          <p className="font-display text-4xl font-semibold tabular-nums text-amber md:text-5xl">
            {value}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-mute">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
