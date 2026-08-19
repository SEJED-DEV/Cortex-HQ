import { Hero } from "@/app/components/home/hero";
import { BotsSection } from "@/app/components/home/bots-section";
import { ServicesSection } from "@/app/components/home/services-section";
import { AboutSection } from "@/app/components/home/about-section";
import { TeamPreview } from "@/app/components/home/team-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BotsSection />
      <AboutSection />
      <ServicesSection />
      <TeamPreview />
    </>
  );
}
