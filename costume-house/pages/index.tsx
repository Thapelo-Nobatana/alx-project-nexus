import Categories from "@/components/sections/Categories";
import CtaSection from "@/components/sections/CtaSection";
import Feature from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
  <div className="min-h-screen">
    <Hero />
    <Feature />
    <Categories />
    <CtaSection /> 
  </div>
  );
}
