import type { Metadata } from "next";
import { PreiseContent } from "./content";

export const metadata: Metadata = {
  title: "Preise | CloudOptima",
  description:
    "Managed Services für Microsoft 365 & Azure ab 1.490 €/Monat. Fünf Stufen nach Unternehmensgröße, alle mit denselben neun Kernleistungen.",
};

export default function PreisePage() {
  return <PreiseContent />;
}
