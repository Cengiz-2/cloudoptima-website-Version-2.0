import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudoptima.de"),
  title: "CloudOptima | Managed Services für Microsoft 365 & Azure",
  description:
    "CloudOptima betreibt, sichert und dokumentiert Ihre Microsoft-Umgebung. Fester Monatspreis, fester Ansprechpartner, NIS2 im Blick.",
  // Favicon bewusst NICHT ueber die Next.js-Dateikonvention (src/app/icon.png,
  // src/app/apple-icon.png). Die erzeugt gehashte URLs wie
  // /icon.png?a55b7a5ea0360899, die sich bei jedem Build aendern. Google
  // verlangt eine stabile Favicon-URL und faellt sonst auf den generierten
  // Buchstaben zurueck. src/app/favicon.ico bleibt, weil Next die ohne Hash
  // unter /favicon.ico ausliefert; alles Weitere kommt stabil aus /public.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-480.png", sizes: "480x480", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  // Kein og/twitter title+description hier: Next füllt sie pro Seite aus dem
  // jeweiligen title/description, damit geteilte Unterseiten ihren eigenen
  // Titel zeigen statt des generischen Startseiten-Titels.
  openGraph: {
    siteName: "CloudOptima",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "CloudOptima – Managed Services für Microsoft 365 & Azure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://cloudoptima.de/#organization",
  name: "CloudOptima",
  legalName: "CloudOptima",
  url: "https://cloudoptima.de",
  logo: "https://cloudoptima.de/logo.svg",
  image: "https://cloudoptima.de/og.jpg",
  email: "info@cloudoptima.de",
  telephone: "+4915751773759",
  priceRange: "€€€",
  founder: { "@type": "Person", name: "Cengiz Gümüsdere" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unter den Kastanien 15",
    postalCode: "60596",
    addressLocality: "Frankfurt am Main",
    addressCountry: "DE",
  },
  vatID: "DE455328887",
  areaServed: { "@type": "Country", name: "Deutschland" },
  knowsAbout: [
    "Microsoft 365",
    "Microsoft Azure",
    "Managed Services",
    "IT-Security",
    "NIS2-Compliance",
    "Microsoft Purview",
    "Microsoft Intune",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+4915751773759",
    email: "info@cloudoptima.de",
    areaServed: "DE",
    availableLanguage: ["German"],
  },
  description:
    "Managed Services für Microsoft 365 und Azure: Betrieb, Security und Compliance zum festen Monatspreis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-void font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
