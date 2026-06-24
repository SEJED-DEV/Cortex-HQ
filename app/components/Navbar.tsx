import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-black/60 to-transparent">
      <a href="/" className="flex items-center gap-3">
        <Image
          src={logo}
          alt="Cortex HQ"
          width={32}
          height={32}
          className="object-contain"
        />
        <span className="text-base font-bold tracking-tight text-white/90">
          Cortex HQ
        </span>
      </a>

      <div className="flex items-center gap-8 text-sm">
        <a
          href="#bots"
          className="text-white/60 hover:text-white transition-colors tracking-wide"
        >
          Bots
        </a>
        <a
          href="#services"
          className="text-white/60 hover:text-white transition-colors tracking-wide"
        >
          Services
        </a>
        <a
          href="/support"
          className="text-white/60 hover:text-white transition-colors tracking-wide"
        >
          Support
        </a>
        <a
          href="#bots"
          className="px-5 py-2.5 text-sm font-semibold text-black bg-white hover:bg-white/90 rounded-full transition-all"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
