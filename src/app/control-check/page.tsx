import type { Metadata } from "next";
import { ControlCheckContent } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/control-check" },
  title: "15-Minuten Control-Check | CloudOptima",
  description:
    "Acht Fragen zu MFA, Offboarding, Freigaben, Backup und NIS2. Sofortige Einschätzung Ihrer Microsoft-Umgebung, kostenlos und ohne Anmeldung.",
};

export default function ControlCheckPage() {
  return <ControlCheckContent />;
}
