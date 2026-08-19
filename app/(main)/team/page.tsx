import type { Metadata } from "next";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { TeamGrid } from "@/app/components/team/team-grid";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind Cortex HQ.",
};

export default function TeamPage() {
  return (
    <div className="pt-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[25%] left-[10%] h-[400px] w-[400px] rounded-full bg-aurora-purple/[0.06] blur-[100px] animate-drift-1" />
        <div className="absolute bottom-[15%] right-[10%] h-[350px] w-[350px] rounded-full bg-aurora-violet/[0.05] blur-[80px] animate-drift-3" />
      </div>

      <Section>
        <SectionHeader>
          <SectionLabel>Team</SectionLabel>
          <SectionTitle>Our Team</SectionTitle>
          <SectionDescription>
            The people building and maintaining Cortex HQ. Updated automatically from Discord.
          </SectionDescription>
        </SectionHeader>

        <TeamGrid />
      </Section>
    </div>
  );
}
