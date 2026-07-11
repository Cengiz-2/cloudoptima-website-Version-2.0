import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | CloudOptima",
  description: "Impressum von CloudOptima: Anbieter, Kontakt und Umsatzsteuer-ID gemäß § 5 DDG.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-36 md:pt-44">
      <h1 className="font-display text-4xl font-semibold text-ink">Impressum</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            {site.name}
            <br />
            {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.city}
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Kontakt</h2>
          <p className="mt-3">
            Telefon: {site.phone}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className="text-azure-bright underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Umsatzsteuer-ID</h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            {site.vatId}
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">
            {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.city}
          </p>
        </section>
      </div>
    </main>
  );
}
