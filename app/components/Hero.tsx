import Image from "next/image";
import logo from "@/assets/logo.png";
import bg from "@/assets/background.png";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      <Image
        src={bg}
        alt=""
        fill
        className="object-cover scale-110 blur-sm"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <Image
          src={logo}
          alt="Cortex HQ"
          width={96}
          height={96}
          className="object-contain mb-10"
          priority
        />

        <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 text-xs font-medium tracking-widest uppercase text-white/50 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          Infrastructure for modern communities
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none text-white mb-6">
          Cortex HQ
        </h1>

        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed tracking-wide">
          Premium Discord bot ecosystem — moderation, engagement, and
          infrastructure built for communities that demand the best.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#bots"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-black bg-white hover:bg-white/90 rounded-full transition-all tracking-wide"
          >
            Explore Bots
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white/80 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 tracking-wide"
          >
            View Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
