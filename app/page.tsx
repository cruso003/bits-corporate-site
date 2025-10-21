import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { FeaturesShowcase } from "@/components/sections/features-showcase";
import { TechStack } from "@/components/sections/tech-stack";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { PartnersShowcase } from "@/components/sections/partners-showcase";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductsShowcase />
      <FeaturesShowcase />
      <ProjectsShowcase />
      <TechStack />
      <PartnersShowcase />
      <BlogPreview />
      <CTA />
    </>
  );
}
