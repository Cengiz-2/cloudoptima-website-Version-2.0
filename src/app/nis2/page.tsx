import type { Metadata } from "next";
import { Nis2Content } from "./content";

export const metadata: Metadata = {
  title: "NIS2 für den Mittelstand | CloudOptima",
  description:
    "Wer unter NIS2 fällt, welche Pflichten gelten und wie eine Microsoft-Umgebung in 6 bis 12 Wochen nachweisbar wird. Plus Lieferanten-Nachweis-Paket zum Festpreis.",
};

export default function Nis2Page() {
  return <Nis2Content />;
}
