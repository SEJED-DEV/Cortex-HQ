import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const { pathname } = req.nextUrl;

  if (host.startsWith("support.") && !pathname.startsWith("/support")) {
    return NextResponse.rewrite(new URL("/support", req.url));
  }

  return NextResponse.next();
}
