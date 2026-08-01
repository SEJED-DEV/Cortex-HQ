"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/app/components/ui";

interface TeamRole {
  id: string;
  name: string;
  color: string;
}

interface TeamMember {
  id: string;
  tag: string;
  globalName: string | null;
  avatar: string | null;
  roles: TeamRole[];
  joinedAt: string;
}

const TEAM_API = "/api/team";

const ROLE_PRIORITY = [
  "1481658690271445204", // Founder
  "1497291159108583494", // Senior Developer
  "1481658690259124231", // Cortex Developer
  "1509320263786037458", // Developer
  "1505868828004057209", // QuranBot Developer
  "1481658690259124233", // Lead Discord Staff
  "1481658690259124232", // Lead Public Relations
  "1481658690259124229", // Admin
  "1481658690259124228", // Moderator
  "1492432537153179748", // Public Relations
  "1481658690259124227", // Probationary Moderator
  "1481658690259124225", // Support Supervisor
  "1485639624935079976", // Staff Team
];

const GROUPS: { key: string; label: string; color: string; roles: string[] }[] = [
  { key: "leadership", label: "Leadership", color: "#f9c628", roles: ["1481658690271445204"] },
  {
    key: "development",
    label: "Development",
    color: "#60a5fa",
    roles: ["1497291159108583494", "1481658690259124231", "1509320263786037458"],
  },
  { key: "bots", label: "Bots", color: "#10b981", roles: ["1505868828004057209"] },
  {
    key: "leads",
    label: "Leads",
    color: "#a78bfa",
    roles: ["1481658690259124233", "1481658690259124232"],
  },
  {
    key: "staff",
    label: "Staff Team",
    color: "#94a3b8",
    roles: [
      "1481658690259124229",
      "1481658690259124228",
      "1492432537153179748",
      "1481658690259124227",
      "1481658690259124225",
      "1485639624935079976",
    ],
  },
];

const FALLBACK = [
  { name: "SEJED", tag: "sejed.dev", role: "Lead Developer" },
  { name: "Ayman", tag: "ayman", role: "Backend Engineer" },
  { name: "Rayan", tag: "rayan", role: "Frontend Engineer" },
];

function primaryRole(member: TeamMember): TeamRole | null {
  for (const id of ROLE_PRIORITY) {
    const role = member.roles.find((r) => r.id === id);
    if (role) return role;
  }
  return null;
}

function groupFor(member: TeamMember): (typeof GROUPS)[number] | null {
  const primary = primaryRole(member);
  if (!primary) return null;
  return GROUPS.find((group) => group.roles.includes(primary.id)) ?? null;
}

function MemberCard({ member }: { member: TeamMember }) {
  const primary = primaryRole(member);
  const name = member.globalName || member.tag;

  return (
    <div className="flex items-center gap-4 rounded-xl border border-[rgb(var(--color-border))] bg-surface-100 p-4 transition-colors hover:border-cortex-400/40">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-cortex-400/20 bg-cortex-400/10">
        {member.avatar ? (
          <img src={member.avatar} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-bold text-cortex-400">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate font-bold text-[rgb(var(--color-fg))]">{name}</h4>
        <p className="text-xs text-[rgb(var(--color-muted))]">@{member.tag}</p>
        {primary && (
          <span
            className="mt-1.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
            style={{
              color: primary.color,
              backgroundColor: `${primary.color}1f`,
              border: `1px solid ${primary.color}33`,
            }}
          >
            {primary.name}
          </span>
        )}
      </div>
    </div>
  );
}

function GroupSkeleton() {
  return (
    <div className="mb-8">
      <div className="mb-5 flex items-center gap-3">
        <Skeleton className="h-8 w-1" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-[86px]" />
        ))}
      </div>
    </div>
  );
}

export function TeamGrid({ preview = false }: { preview?: boolean }) {
  const [members, setMembers] = useState<TeamMember[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(TEAM_API, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load team");
        return res.json();
      })
      .then((data: TeamMember[]) => {
        if (!cancelled) setMembers(data);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (failed) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FALLBACK.map((member) => (
          <div
            key={member.tag}
            className="flex items-center gap-4 rounded-xl border border-[rgb(var(--color-border))] bg-surface-100 p-4"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cortex-400/20 bg-cortex-400/10 font-bold text-cortex-400">
              {member.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-[rgb(var(--color-fg))]">{member.name}</h4>
              <p className="text-sm text-[rgb(var(--color-muted))]">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!members) {
    return (
      <div>
        <GroupSkeleton />
        <GroupSkeleton />
      </div>
    );
  }

  const withGroup = members
    .map((member) => ({ member, group: groupFor(member) }))
    .filter((entry): entry is { member: TeamMember; group: (typeof GROUPS)[number] } => entry.group !== null);

  const grouped = GROUPS.filter((group) => (preview ? group.key === "leadership" || group.key === "development" : true))
    .map((group) => ({
      group,
      members: withGroup.filter((entry) => entry.group.key === group.key).map((entry) => entry.member),
    }))
    .filter((entry) => entry.members.length > 0);

  if (grouped.length === 0) return null;

  return (
    <div>
      {grouped.map(({ group, members }) => (
        <div key={group.key} className="mb-8 last:mb-0">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full" style={{ background: group.color }} />
            <div>
              <h3 className="text-lg font-bold text-[rgb(var(--color-fg))]">{group.label}</h3>
              <p className="text-xs text-[rgb(var(--color-muted))]">
                {members.length} {members.length === 1 ? "member" : "members"}
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
