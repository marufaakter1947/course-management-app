import ContactSection from "@/Components/ContactSection";
import FeaturesSection from "@/Components/FeaturesSection";
import Hero from "@/Components/Hero";
import HowItWorksSection from "@/Components/HowItWorksSection";
import PopularCourse from "@/Components/PopularCourse";
import TestimonialsSection from "@/Components/TestimonialsSection";
import WhyChooseUs from "@/Components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-black">
      <div className="flex-1">
        <Hero></Hero>
        <PopularCourse></PopularCourse>
        <FeaturesSection></FeaturesSection>
        
        <TestimonialsSection></TestimonialsSection>
        <HowItWorksSection></HowItWorksSection>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}