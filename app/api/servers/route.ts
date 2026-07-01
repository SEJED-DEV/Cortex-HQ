import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://cdn.sourceb.in/bins/SXUhkbVKiY/0",
      { next: { revalidate: 3600 } }
    );
    const text = await res.text();
    const count = text
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .length;

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
