import type { Metadata } from "next";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { TeamGrid } from "@/app/components/team/team-grid";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind Cortex HQ.",
};

export default function TeamPage() {
  return (
    <Section>
      <SectionHeader>
        <SectionLabel>Team</SectionLabel>
        <SectionTitle>Our Team</SectionTitle>
        <SectionDescription>
          The people building and maintaining Cortex HQ. Updated automatically.
        </SectionDescription>
      </SectionHeader>

      <TeamGrid />
    </Section>
  );
}
