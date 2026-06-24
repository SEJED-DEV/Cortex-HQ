import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-cortex-border">
          <a href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Cortex HQ"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-sm font-bold tracking-tight">
              Cortex HQ
            </span>
          </a>

          <div className="flex items-center gap-8 text-sm text-cortex-muted">
            <a
              href="#bots"
              className="hover:text-cortex-text transition-colors"
            >
              Bots
            </a>
            <a
              href="#services"
              className="hover:text-cortex-text transition-colors"
            >
              Services
            </a>
            <a
              href="/support"
              className="hover:text-cortex-text transition-colors"
            >
              Support
            </a>
            <a
              href="https://github.com/SEJED-DEV"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cortex-text transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-cortex-muted/60">
            &copy; {new Date().getFullYear()} Cortex HQ. All rights reserved.
          </p>
          <p className="text-xs text-cortex-muted/40">
            Built for communities that demand the best.
          </p>
        </div>
      </div>
    </footer>
  );
}
