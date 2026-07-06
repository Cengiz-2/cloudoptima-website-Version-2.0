import type { Metadata } from "next";
import { LeistungenContent } from "./content";

export const metadata: Metadata = {
  title: "Leistungen | CloudOptima",
  description:
    "Die neun Kernleistungen des Core Managed Service für Microsoft 365 & Azure, das Abrechnungsmodell und alle Add-ons im Detail.",
};

export default function LeistungenPage() {
  return <LeistungenContent />;
}
