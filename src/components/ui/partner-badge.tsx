import { cn } from "@/lib/utils";

/**
 * Microsoft-Partner-Badge. Die vier Quadrate nutzen die offiziellen
 * Microsoft-Markenfarben (fixe Brand-Werte, bewusst keine Theme-Tokens).
 */
export function PartnerBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-line bg-raised/60 px-4 py-2",
        className
      )}
    >
      <span className="grid grid-cols-2 gap-[3px]" aria-hidden>
        <span className="h-2 w-2 bg-[#F25022]" />
        <span className="h-2 w-2 bg-[#7FBA00]" />
        <span className="h-2 w-2 bg-[#00A4EF]" />
        <span className="h-2 w-2 bg-[#FFB900]" />
      </span>
      <span className="font-display text-sm text-ink">Microsoft Partner</span>
    </span>
  );
}
