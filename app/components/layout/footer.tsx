import Link from "next/link";
import { Container } from "@/app/components/ui";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Status", href: "/status" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Support", href: "/support" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Discord", href: "https://discord.gg/JSYjs6kfjk" },
      { label: "GitHub", href: "https://github.com/SEJED-DEV" },
      { label: "Dashboard", href: "https://dashboard.cortexhq.net" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--color-border))]">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/assets/logo.png"
                alt="Cortex HQ"
                className="h-7 w-auto"
              />
              <span className="text-base font-bold tracking-tight text-[rgb(var(--color-fg))]">
                cortex<span className="text-cortex-400">hq</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-[rgb(var(--color-muted))]">
              Infrastructure for modern Discord communities.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[rgb(var(--color-muted))]">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[rgb(var(--color-muted))] transition-colors hover:text-cortex-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[rgb(var(--color-border))] pt-6 text-xs text-[rgb(var(--color-muted))] sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Cortex HQ. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cortex-400" />
            <span className="uppercase tracking-[0.2em]">Powered by Cortex HQ</span>
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--color-fg))/20]" />
            <span className="uppercase tracking-[0.2em]">v2.0.0</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
