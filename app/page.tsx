import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}
