import FeaturesSection from "@/Components/FeaturesSection";
import Hero from "@/Components/Hero";
import PopularCourse from "@/Components/PopularCourse";
import TestimonialsSection from "@/Components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-black">
      <div className="flex-1">
        <Hero></Hero>
        <PopularCourse></PopularCourse>
        <FeaturesSection></FeaturesSection>
        <TestimonialsSection></TestimonialsSection>
      </div>
    </div>
  );
}