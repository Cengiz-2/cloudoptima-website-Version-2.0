import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Features } from "@/components/sections/features";
import { Report } from "@/components/sections/report";
import { Comparison } from "@/components/sections/comparison";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Dock } from "@/components/ui/dock";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Features />
        <Report />
        <Comparison />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Dock />
    </>
  );
}
