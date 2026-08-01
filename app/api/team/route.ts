import { NextResponse } from "next/server";

const UPSTREAM = "https://dashboard.cortexhq.net/api/team";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(UPSTREAM, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ error: "Upstream team API unavailable" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to reach upstream team API" }, { status: 502 });
  }
}
