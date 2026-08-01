import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { hostname, pathname } = new URL(request.url);

  if (hostname.startsWith("support.")) {
    return NextResponse.rewrite(new URL("/support", request.url));
  }

  return NextResponse.next();
}
