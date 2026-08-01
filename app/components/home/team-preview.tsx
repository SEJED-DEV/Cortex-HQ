import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { TeamGrid } from "@/app/components/team/team-grid";

export function TeamPreview() {
  return (
    <Section>
      <SectionHeader>
        <SectionLabel>Team</SectionLabel>
        <SectionTitle>Meet the Team</SectionTitle>
        <SectionDescription>
          The people building infrastructure for Discord communities.
        </SectionDescription>
      </SectionHeader>

      <TeamGrid preview />

      <div className="mt-10 text-center">
        <Link href="/team">
          <Button variant="outline">
            View full team <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
