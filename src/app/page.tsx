import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { OpsLoop } from "@/components/sections/ops-loop";
import { Proof } from "@/components/sections/proof";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { ThreadRail } from "@/components/ui/thread-rail";

/**
 * Startseite als roter Faden in fünf Kapiteln:
 * Ausgangslage → Betrieb → Nachweis → Weg → Erster Schritt.
 * Preise leben bewusst nur auf /preise, um Dopplung zu vermeiden.
 */
export default function Home() {
  return (
    <main>
      <ThreadRail />
      <Hero />
      <Problem />
      <Features />
      <OpsLoop />
      <Proof />
      <Process />
      <Faq />
      <Cta />
    </main>
  );
}
