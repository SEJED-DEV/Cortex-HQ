"use client";

import { useEffect, useState, useCallback } from "react";
import { Skeleton } from "@/app/components/ui";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const CACHE_TTL = 5 * 60;

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

const ROLE_MAP: Record<string, { label: string; color: string }> = {
  "1481658690271445204": { label: "Founder", color: "#ff0000" },
  "1536771265346404452": { label: "Co-Founder", color: "#e7f928" },
  "1497291159108583494": { label: "Senior Developer", color: "#60a5fa" },
  "1481658690259124231": { label: "Cortex Developer", color: "#34d399" },
  "1509320263786037458": { label: "Developer", color: "#06b6d4" },
  "1505868828004057209": { label: "QuranBot Developer", color: "#10b981" },
  "1481658690259124233": { label: "Lead Discord Staff", color: "#a78bfa" },
  "1481658690259124232": { label: "Lead Public Relations", color: "#de785b" },
  "1481658690259124229": { label: "Admin", color: "#f87171" },
  "1481658690259124228": { label: "Moderator", color: "#818cf8" },
  "1492432537153179748": { label: "Public Relations", color: "#fbbf24" },
  "1481658690259124227": { label: "Probationary Moderator", color: "#94a3b8" },
  "1481658690259124225": { label: "Support Supervisor", color: "#34d399" },
  "1485639624935079976": { label: "Staff Team", color: "#94a3b8" },
};

const ROLE_PRIORITY = [
  "1481658690271445204", "1536771265346404452",
  "1497291159108583494", "1481658690259124231", "1509320263786037458",
  "1505868828004057209",
  "1481658690259124233", "1481658690259124232",
  "1481658690259124229", "1481658690259124228", "1492432537153179748",
  "1481658690259124227", "1481658690259124225", "1485639624935079976",
];

const GROUPS: { key: string; label: string; roles: string[] }[] = [
  { key: "leadership", label: "Leadership", roles: ["1481658690271445204", "1536771265346404452"] },
  { key: "development", label: "Development", roles: ["1497291159108583494", "1481658690259124231", "1509320263786037458"] },
  { key: "bots", label: "Bots", roles: ["1505868828004057209"] },
  { key: "leads", label: "Leads", roles: ["1481658690259124233", "1481658690259124232"] },
  { key: "staff", label: "Staff Team", roles: ["1481658690259124229", "1481658690259124228", "1492432537153179748", "1481658690259124227", "1481658690259124225", "1485639624935079976"] },
];

const FALLBACK = [
  { name: "sejed.dev", role: "Founder", initial: "S" },
  { name: "f34rless.dev", role: "Co-Founder", initial: "F" },
  { name: "mgv", role: "Developer", initial: "M" },
  { name: "Nana", role: "Lead Discord Staff", initial: "N" },
  { name: "LeiAdores", role: "Lead Public Relations", initial: "L" },
  { name: "𝐂𝐚𝐥𝐲𝐩𝐬𝐨", role: "Admin", initial: "C" },
  { name: "𝓪𝓶𝓲𝓷𝓮_𝓬𝓹𝓶", role: "Public Relations", initial: "A" },
];

function primaryRole(member: TeamMember): { id: string; label: string; color: string } | null {
  for (const id of ROLE_PRIORITY) {
    const matched = member.roles.find((r) => r.id === id);
    if (matched) {
      return { id, label: matched.name, color: matched.color };
    }
  }
  return null;
}

function groupFor(member: TeamMember): (typeof GROUPS)[number] | null {
  for (const group of GROUPS) {
    if (member.roles.some((r) => group.roles.includes(r.id))) return group;
  }
  return null;
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const role = primaryRole(member);
  const name = member.globalName || member.tag;
  const color = role?.color || "#94a3b8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative flex items-center gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
      style={{ minWidth: 220 }}
    >
      {/* Role glow behind card on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm"
        style={{ background: `${color}15` }}
      />

      <div className="relative z-10 shrink-0">
        {member.avatar ? (
          <img src={member.avatar} alt="" className="h-11 w-11 rounded-full ring-2 ring-white/[0.06] transition-all duration-300 group-hover:ring-white/[0.15]" loading="lazy" />
        ) : (
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] font-bold text-white/70 text-sm transition-all duration-300 group-hover:scale-105"
            style={{ background: `${color}15` }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div
          className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#070708] shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          style={{ background: color }}
        />
      </div>
      <div className="relative z-10 min-w-0">
        <p className="truncate text-sm font-semibold leading-tight text-white">{name}</p>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}60` }} />
          <p className="truncate text-[11px] font-medium" style={{ color }}>{role?.label || "Team"}</p>
        </div>
      </div>
    </motion.div>
  );
}

function GroupSkeleton() {
  return (
    <div className="mb-8">
      <div className="mb-5 flex items-center gap-3">
        <Skeleton className="h-8 w-1 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-[52px] w-[200px]" />
        ))}
      </div>
    </div>
  );
}

export function TeamGrid({ preview = false }: { preview?: boolean }) {
  const [members, setMembers] = useState<TeamMember[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [lastFetched, setLastFetched] = useState<number>(0);
  const [countdown, setCountdown] = useState(CACHE_TTL);

  const fetchTeam = useCallback(() => {
    fetch(TEAM_API, { cache: "no-store" })
      .then((res) => {
        const ttl = res.headers.get("X-Cache-TTL");
        if (ttl) setCountdown(parseInt(ttl, 10));
        if (!res.ok) throw new Error("Failed to load team");
        return res.json();
      })
      .then((data: TeamMember[]) => {
        setMembers(data);
        setLastFetched(Date.now());
        setFailed(false);
      })
      .catch(() => {
        setFailed(true);
      });
  }, []);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  useEffect(() => {
    if (countdown <= 0) {
      fetchTeam();
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown, fetchTeam]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
  };

  if (failed) {
    return (
      <div className="space-y-8">
        {GROUPS.filter((g) => FALLBACK.some((f) => {
          const idx = FALLBACK.indexOf(f);
          return idx < 2 ? g.key === "leadership" : g.key === "development";
        })).map((group) => (
          <div key={group.key}>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-white/20" />
              <h3 className="text-lg font-bold text-white">{group.label}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {FALLBACK.filter((_, i) => group.key === "leadership" ? i < 2 : i >= 2 && i < 3).map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3"
                  style={{ minWidth: 200 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] font-bold text-white/60 text-sm">
                    {m.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{m.name}</p>
                    <p className="text-[11px] text-[var(--color-muted)]">{m.role}</p>
                  </div>
                </motion.div>
              ))}
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
        <GroupSkeleton />
      </div>
    );
  }

  const sorted = [...members].sort((a, b) => {
    const aRole = primaryRole(a);
    const bRole = primaryRole(b);
    const aIdx = aRole ? ROLE_PRIORITY.indexOf(aRole.id) : 999;
    const bIdx = bRole ? ROLE_PRIORITY.indexOf(bRole.id) : 999;
    return aIdx - bIdx;
  });

  const assigned = new Map<string, TeamMember[]>();
  for (const m of sorted) {
    const g = groupFor(m);
    if (!g) continue;
    if (!assigned.has(g.key)) assigned.set(g.key, []);
    assigned.get(g.key)!.push(m);
  }
  const grouped = GROUPS
    .filter((g) => assigned.has(g.key))
    .map((g) => ({ group: g, members: assigned.get(g.key)! }));

  if (grouped.length === 0) return null;

  return (
    <div>
      {lastFetched > 0 && (
        <div className="mb-8 flex items-center justify-end">
          <button
            onClick={() => { setCountdown(0); }}
            className="group flex items-center gap-1.5 text-[11px] text-[var(--color-muted)] transition-colors hover:text-white"
          >
            <RefreshCw className={`h-3 w-3 ${countdown < 30 ? "animate-spin" : ""}`} />
            {countdown > 0 ? (
              <span>Updates in {formatTime(countdown)}</span>
            ) : (
              <span>Refreshing...</span>
            )}
          </button>
        </div>
      )}

      {grouped.map(({ group, members }) => {
        const firstRole = members[0]?.roles.find((r) => group.roles.includes(r.id));
        const groupColor = firstRole?.color || ROLE_MAP[group.roles[0]]?.color || "#94a3b8";
        return (
          <div key={group.key} className="mb-10 last:mb-0">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full" style={{ background: groupColor }} />
              <div>
                <h3 className="text-lg font-bold text-white">{group.label}</h3>
                <p className="text-xs text-[var(--color-muted)]">
                  {members.length} {members.length === 1 ? "member" : "members"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {members.map((member, i) => (
                <MemberCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
