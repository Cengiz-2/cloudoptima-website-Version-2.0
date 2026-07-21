"use client";

import { Reveal } from "@/components/ui/reveal";

const platforms = [
  "Microsoft 365",
  "Azure",
  "Entra ID",
  "Intune",
  "Defender",
  "Purview",
  "Exchange Online",
  "SharePoint",
  "Teams",
];

/**
 * Endlos-Laufband des betreuten Microsoft-Stacks. Lebt auf /leistungen,
 * damit auf der Startseite nur der Ops-Ticker dauerhaft animiert ist.
 */
export function StackMarquee({ className }: { className?: string }) {
  return (
    <Reveal className={className} delay={0.1}>
      <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
        Wir betreiben Ihren kompletten Microsoft-Stack
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {[...platforms, ...platforms].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="whitespace-nowrap rounded-full border border-line bg-raised/60 px-5 py-2 font-display text-sm text-ink-soft"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
