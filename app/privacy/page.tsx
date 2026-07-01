"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const services = ["Website", "Cortex Bot", "Modmail Bot", "QuranBot"] as const;
type Service = (typeof services)[number];

interface Section {
  heading: string;
  body: string;
}

const content: Record<Service, { title: string; updated: string; summary: string; sections: Section[] }> = {
  Website: {
    title: "Website Privacy Policy",
    updated: "July 1, 2026",
    summary: "Cortex HQ website operates on a privacy-first principle. We collect minimal analytics data and do not track you across the web.",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you visit cortexhq.net, we collect basic analytics data such as page views, referral sources, and browser type. No personal information is collected unless you voluntarily provide it through contact forms or support requests.",
      },
      {
        heading: "What We Don't Collect",
        body: "We do not collect IP addresses beyond transient connection logs, do not use fingerprinting or tracking cookies, do not sell or share personal data, and do not collect payment information.",
      },
      {
        heading: "How We Use Your Information",
        body: "Analytics data is used solely to improve our website experience. Any information you submit via forms is used only to respond to your inquiry and is never shared with third parties.",
      },
      {
        heading: "Cookies",
        body: "We use minimal cookies for essential functionality and basic analytics. No tracking or advertising cookies are used. You can disable cookies in your browser settings at any time.",
      },
      {
        heading: "Data Retention",
        body: "Analytics logs are retained for 30 days. Form submissions are retained for as long as necessary to address your inquiry, after which they are deleted.",
      },
      {
        heading: "Third-Party Services",
        body: "This website is hosted on Vercel, which may process basic connection data under their own privacy policy. We do not integrate any third-party tracking or advertising networks.",
      },
      {
        heading: "Contact",
        body: "If you have questions about this privacy policy, please contact us through our Discord server.",
      },
    ],
  },
  "Cortex Bot": {
    title: "Cortex Bot Privacy Policy",
    updated: "July 1, 2026",
    summary: "Cortex Bot processes only what is strictly necessary for Discord moderation, utility, and engagement features. No message content is stored without explicit server configuration.",
    sections: [
      {
        heading: "Information We Access",
        body: "Cortex Bot accesses Discord server IDs, channel IDs, user IDs, and message content necessary for command execution. We do not read or store private messages unless required for a specific feature such as logging, which is opt-in per server.",
      },
      {
        heading: "What We Don't Collect",
        body: "We do not collect message content beyond command execution, do not store voice data, do not track individual users across servers, and do not collect email addresses, IP addresses, or payment information.",
      },
      {
        heading: "Data Storage",
        body: "Server configurations, custom commands, moderation settings, and engagement data are stored securely. Message content is processed in-memory and not persisted unless explicitly part of a feature.",
      },
      {
        heading: "Data Sharing",
        body: "We do not sell or share your data with third parties. Data may be disclosed if required by law or to protect our rights. Aggregated, anonymized statistics may be published on bot listing sites.",
      },
      {
        heading: "User Control",
        body: "Server administrators can remove the bot at any time, which stops all data access. Stored configuration data can be requested for deletion by contacting support.",
      },
      {
        heading: "Data Retention",
        body: "Configuration data is retained for the duration the bot is in your server. Upon bot removal, configuration data is deleted within 30 days through automated maintenance cycles.",
      },
      {
        heading: "Security",
        body: "All API communications use HTTPS. Database access is restricted to authorized operations. Sensitive credentials are loaded via environment variables. Rate limiting and input validation prevent abuse.",
      },
    ],
  },
  "Modmail Bot": {
    title: "Modmail Bot Privacy Policy",
    updated: "July 1, 2026",
    summary: "Modmail Bot facilitates communication between users and server staff. Thread data is stored securely and only accessible to authorized server staff.",
    sections: [
      {
        heading: "Information We Access",
        body: "Modmail Bot accesses user IDs, channel IDs, and message content within modmail threads. This data is used solely to facilitate communication between users and server staff.",
      },
      {
        heading: "What We Don't Collect",
        body: "We do not read private messages outside of modmail threads, do not collect personal identifiers beyond Discord metadata, do not share thread data with third parties, and do not use data for advertising.",
      },
      {
        heading: "Data Storage",
        body: "Thread transcripts, user IDs, and message logs are stored securely for moderation purposes. Attachments sent through modmail are also stored and accessible only to server staff with appropriate permissions.",
      },
      {
        heading: "Data Sharing",
        body: "Thread data is only accessible to server staff with appropriate permissions. We do not sell or share data with external parties.",
      },
      {
        heading: "User Control",
        body: "Users can request deletion of their modmail transcripts by contacting server staff. Server administrators can purge all bot data by removing the bot.",
      },
      {
        heading: "Data Retention",
        body: "Transcripts are retained for 90 days after a thread is closed, then automatically deleted unless archived by server staff.",
      },
      {
        heading: "Security",
        body: "Access to thread data is restricted by Discord role permissions. All data is stored securely and communications use encrypted channels.",
      },
    ],
  },
  QuranBot: {
    title: "QuranBot Privacy Policy",
    updated: "May 20, 2026",
    summary: "QuranBot operates on a privacy-first, data-minimization principle. We process only what is strictly necessary for core functionality.",
    sections: [
      {
        heading: "Information We Collect",
        body: "Server identifiers (Guild ID, Owner ID) for configuration mapping, user metadata (User ID, Username) strictly for functionality, channel references for voice and azkar automation, playback state and reciter selection per guild, and basic aggregated telemetry for stability monitoring.",
      },
      {
        heading: "What We Don't Collect",
        body: "We explicitly do not collect message content, attachments, or voice data beyond functional triggers. We do not collect sensitive personal data (email, phone, IP address, real name), payment information, biometric data, browsing history, or cross-application tracking data.",
      },
      {
        heading: "Data Storage",
        body: "Guild setup data persists only while the bot remains in the server. Firebase is used for persistent storage of guild settings and Redis for fast-access state management. Local backups are destroyed after successful delivery.",
      },
      {
        heading: "Third-Party Services",
        body: "QuranBot integrates with Discord API, Firebase, Redis, Lavalink for audio streaming, mp3quran.net for Quran recitations, and aladhan.com for prayer time data. Each service has its own privacy policy.",
      },
      {
        heading: "Data Retention",
        body: "Voluntary feedback data is retained until the reported issue is resolved. Guild setup data persists only while the bot remains in the server. Data for departed guilds is cleaned through maintenance cycles. Admin access logs are retained for a defined audit period then purged.",
      },
      {
        heading: "Your Rights",
        body: "You may request a summary of stored data for your guild, request immediate deletion via our support server or in-bot complaint system, disable automated features by adjusting channel settings, and update inaccurate guild settings through bot commands.",
      },
      {
        heading: "Full Policy",
        body: 'For the complete QuranBot privacy policy, visit quranbot.cortexhq.net.',
      },
    ],
  },
};

const externalLinks: Partial<Record<Service, string>> = {
  QuranBot: "https://quranbot.cortexhq.net/site/privacy",
};

export default function Privacy() {
  const [active, setActive] = useState<Service>("Cortex Bot");

  const page = content[active];

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
                Privacy Policy
              </h1>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Select a service to view its privacy policy
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setActive(s)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    background: active === s ? "rgba(255,255,255,0.08)" : "transparent",
                    color: active === s ? "#fff" : "rgba(255,255,255,0.4)",
                    border: active === s ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <div
              className="rounded-xl p-8 sm:p-10"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h2 className="text-xl font-semibold text-white mb-1">
                {page.title}
              </h2>
              <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
                Last Updated: {page.updated}
              </p>

              <div
                className="text-sm leading-relaxed p-4 rounded-lg mb-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {page.summary}
              </div>

              <div className="space-y-6">
                {page.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      {section.heading}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {externalLinks[active] && (
                <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
                  <a
                    href={externalLinks[active]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: "var(--color-cortex-400)" }}
                  >
                    View full policy on quranbot.cortexhq.net
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.2)" }}
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
