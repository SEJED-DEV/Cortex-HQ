import { NextResponse } from "next/server";

const UPSTREAM = "https://dashboard.cortexhq.net/api/team";
const CACHE_TTL = 5 * 60 * 1000;

export const dynamic = "force-dynamic";

const FALLBACK = [
  { id: "1", tag: "sejed.dev", globalName: "sejed.dev", avatar: null, roles: [
    { id: "1481658690271445204", name: "Founder", color: "#ff0000" },
    { id: "1536771265346404452", name: "Co-Founder", color: "#e7f928" },
    { id: "1497291159108583494", name: "Senior Developer", color: "#60a5fa" },
    { id: "1481658690259124231", name: "Cortex Developer", color: "#34d399" },
    { id: "1509320263786037458", name: "Developer", color: "#06b6d4" },
    { id: "1481658690259124233", name: "Lead Discord Staff", color: "#a78bfa" },
    { id: "1481658690259124229", name: "Admin", color: "#f87171" },
  ], joinedAt: "" },
  { id: "2", tag: "f34rless.dev", globalName: "f34rless.dev", avatar: null, roles: [
    { id: "1536771265346404452", name: "Co-Founder", color: "#e7f928" },
    { id: "1481658690259124229", name: "Admin", color: "#f87171" },
  ], joinedAt: "" },
  { id: "3", tag: "mgv", globalName: "mgv", avatar: null, roles: [
    { id: "1509320263786037458", name: "Developer", color: "#06b6d4" },
    { id: "1505868828004057209", name: "QuranBot Developer", color: "#10b981" },
  ], joinedAt: "" },
  { id: "4", tag: "nana", globalName: "Nana", avatar: null, roles: [
    { id: "1481658690259124233", name: "Lead Discord Staff", color: "#a78bfa" },
  ], joinedAt: "" },
  { id: "5", tag: "leiadores", globalName: "LeiAdores", avatar: null, roles: [
    { id: "1481658690259124232", name: "Lead Public Relations", color: "#de785b" },
  ], joinedAt: "" },
  { id: "6", tag: "calypso", globalName: "𝐂𝐚𝐥𝐲𝐩𝐬𝐨", avatar: null, roles: [
    { id: "1481658690259124229", name: "Admin", color: "#f87171" },
  ], joinedAt: "" },
  { id: "7", tag: "amine_cpm", globalName: "𝓪𝓶𝓲𝓷𝓮_𝓬𝓹𝓶", avatar: null, roles: [
    { id: "1492432537153179748", name: "Public Relations", color: "#fbbf24" },
  ], joinedAt: "" },
];

interface CacheEntry {
  data: unknown;
  timestamp: number;
}

let cache: CacheEntry | null = null;

export async function GET() {
  const now = Date.now();

  if (cache && now - cache.timestamp < CACHE_TTL) {
    const remaining = Math.ceil((CACHE_TTL - (now - cache.timestamp)) / 1000);
    return NextResponse.json(cache.data, {
      headers: {
        "Cache-Control": `public, max-age=${remaining}, s-maxage=${remaining}`,
        "X-Cache": "HIT",
        "X-Cache-TTL": String(remaining),
      },
    });
  }

  try {
    const res = await fetch(UPSTREAM, {
      cache: "no-store",
      headers: { "Accept": "application/json" },
    });
    if (!res.ok) {
      const data = cache?.data ?? FALLBACK;
      if (!cache) cache = { data: FALLBACK, timestamp: now };
      return NextResponse.json(data, {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=60",
          "X-Cache": cache ? "STALE" : "FALLBACK",
          "X-Cache-TTL": "60",
        },
      });
    }
    const data = await res.json();
    cache = { data, timestamp: now };
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": `public, max-age=${CACHE_TTL / 1000}, s-maxage=${CACHE_TTL / 1000}`,
        "X-Cache": "MISS",
        "X-Cache-TTL": String(CACHE_TTL / 1000),
      },
    });
  } catch {
    const data = cache?.data ?? FALLBACK;
    if (!cache) cache = { data: FALLBACK, timestamp: now };
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=60",
        "X-Cache": cache ? "STALE" : "FALLBACK",
        "X-Cache-TTL": "60",
      },
    });
  }
}
