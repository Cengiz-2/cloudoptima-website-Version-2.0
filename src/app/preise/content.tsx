"use client";

import { Pricing } from "@/components/sections/pricing";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/ui/contact-form";

export function PreiseContent() {
  return (
    <main className="pt-14">
      <Pricing />

      <section id="anfrage" className="section pt-0">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            align="center"
            kicker="Anfrage"
            title="Sagen Sie uns, wo Sie stehen"
            lead="Kurz die Eckdaten, wir melden uns mit einer ehrlichen Einschätzung. Wenn wir nicht passen, sagen wir auch das."
          />
          <Reveal className="mt-12" delay={0.1}>
            <div className="glass rounded-3xl p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
