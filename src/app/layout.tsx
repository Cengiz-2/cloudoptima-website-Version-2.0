import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "CloudOptima | Managed Services für Microsoft 365 & Azure",
    description:
      "Betrieb, Security und Compliance für M365 und Azure. Zum festen Monatspreis, mit festem Ansprechpartner.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-void font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
