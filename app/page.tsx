import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { IndustriesPreview } from "@/components/sections/industries-preview";
import { Pillars } from "@/components/sections/pillars";
import { Principles } from "@/components/sections/principles";
import { Process } from "@/components/sections/process";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StandardsMarquee } from "@/components/sections/standards-marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <StandardsMarquee />
      <Pillars />
      <ServicesGrid />
      <Principles />
      <Process />
      <IndustriesPreview />
      <CTA />
    </>
  );
}
