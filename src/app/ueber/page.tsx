import type { Metadata } from "next";
import { UeberContent } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/ueber" },
  title: "Über CloudOptima",
  description:
    "CloudOptima ist der Microsoft-Governance-Partner für den Mittelstand: ein fester Ansprechpartner, 100 % Microsoft-Fokus, Standort Frankfurt am Main.",
};

export default function UeberPage() {
  return <UeberContent />;
}
