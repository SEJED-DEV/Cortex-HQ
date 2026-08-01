import { Hero } from "@/app/components/home/hero";
import { BotsSection } from "@/app/components/home/bots-section";
import { ServicesSection } from "@/app/components/home/services-section";
import { TeamPreview } from "@/app/components/home/team-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BotsSection />
      <ServicesSection />
      <TeamPreview />
    </>
  );
}
