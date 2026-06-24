import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Support() {
  return (
    <div className="min-h-screen bg-cortex-bg flex flex-col">
      <header className="px-6 py-5 border-b border-cortex-border">
        <a href="/" className="inline-flex items-center gap-3 w-fit">
          <Image
            src={logo}
            alt="Cortex HQ"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-sm font-bold tracking-tight">Cortex HQ</span>
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full">
          <div className="bg-white border border-cortex-border rounded-2xl p-10 text-center shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-cortex-text flex items-center justify-center mx-auto mb-8 -rotate-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight mb-3">Get in Touch</h1>
            <p className="text-sm text-cortex-muted/80 leading-relaxed mb-10 max-w-sm mx-auto">
              Have a question, need help with a bot, or want to report an issue?
              Our team is active on Discord daily.
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

            <div className="mt-8 pt-8 border-t border-cortex-border">
              <div className="flex items-center justify-center gap-3 text-xs text-cortex-muted/60">
                <span>Usually replies within a few hours</span>
                <span className="w-1 h-1 rounded-full bg-cortex-muted/30" />
                <span>Support is free</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-xs text-cortex-muted/40 hover:text-cortex-muted/70 transition-colors"
            >
              &larr; Back to home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
