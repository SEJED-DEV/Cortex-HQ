import Image from "next/image";
import logo from "@/assets/logo.png";
import bg from "@/assets/background.png";

export default function Support() {
  return (
    <div className="min-h-screen bg-cortex-bg flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-gradient-to-b from-black/60 to-transparent">
        <a href="/" className="inline-flex items-center gap-3 w-fit">
          <Image
            src={logo}
            alt="Cortex HQ"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-sm font-bold text-white/90">Cortex HQ</span>
        </a>
      </header>

      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        <Image
          src={bg}
          alt=""
          fill
          className="object-cover scale-110 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-xl mx-auto">
          <Image
            src={logo}
            alt="Cortex HQ"
            width={64}
            height={64}
            className="object-contain mx-auto mb-8"
          />
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/50 max-w-md mx-auto leading-relaxed">
            Have a question, need help, or want to report an issue? Our team is
            active on Discord daily.
          </p>
        </div>

        <div className="absolute bottom-12 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white border border-cortex-border rounded-2xl p-10 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-cortex-text/5 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold tracking-tight mb-2">Discord Support</h2>
              <p className="text-sm text-cortex-muted/70 leading-relaxed mb-8 max-w-sm">
                Join our Discord server to get help directly from the team and community.
              </p>

              <a
                href="https://discord.gg/JSYjs6kfjk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 text-sm font-semibold text-white bg-[#5865F2] hover:bg-[#4752C4] rounded-xl transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join our Discord
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-cortex-border">
              <div className="grid grid-cols-2 gap-4 text-center text-xs text-cortex-muted/60">
                <div>
                  <span className="block font-medium text-cortex-text mb-1">Response Time</span>
                  Usually within a few hours
                </div>
                <div>
                  <span className="block font-medium text-cortex-text mb-1">Cost</span>
                  Completely free
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-cortex-muted/40 hover:text-cortex-muted/70 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to home
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center border-t border-cortex-border">
        <p className="text-xs text-cortex-muted/40">
          Cortex HQ &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
