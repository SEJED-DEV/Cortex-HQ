import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Support() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-lg mx-auto">
            <div
              className="rounded-xl p-10 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">
                  Discord Support
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8 max-w-sm"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Join our Discord server to get help directly from the team and
                  community.
                </p>

                <a
                  href="https://discord.gg/JSYjs6kfjk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
                  style={{ background: "#5865F2" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 127 96"
                    fill="currentColor"
                  >
                    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.39 0A72.37 72.37 0 0 0 45.52.01a105.89 105.89 0 0 0-26.33 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.01a75.02 75.02 0 0 0 64.14 0c.87.71 1.76 1.39 2.66 2.01a68.03 68.03 0 0 1-10.87 5.19 77.29 77.29 0 0 0 6.89 11.11 105.34 105.34 0 0 0 32.19-16.15c2.64-27.38-4.51-51.11-18.9-72.15Z" />
                  </svg>
                  Join our Discord
                </a>
              </div>

              <div
                className="mt-8 pt-8"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <div className="grid grid-cols-2 gap-4 text-center text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  <div>
                    <span className="block font-medium text-white mb-1">
                      Response Time
                    </span>
                    Usually within a few hours
                  </div>
                  <div>
                    <span className="block font-medium text-white mb-1">
                      Cost
                    </span>
                    Completely free
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm transition-colors"
                style={{
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to home
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
