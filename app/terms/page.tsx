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
    title: "Website Terms of Service",
    updated: "July 1, 2026",
    summary: "By accessing cortexhq.net, you agree to these terms. The website is provided for informational purposes about Cortex HQ services.",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using cortexhq.net, you agree to be bound by these Terms of Service. If you do not agree, please do not use the website.",
      },
      {
        heading: "Use of Website",
        body: "You may use this website for lawful purposes only. You agree not to engage in any activity that disrupts or interferes with the website's operation.",
      },
      {
        heading: "Intellectual Property",
        body: "All content on this website, including text, graphics, logos, and software, is the property of Cortex HQ unless otherwise stated. You may not reproduce, distribute, or modify any content without prior written consent.",
      },
      {
        heading: "Third-Party Links",
        body: "This website may contain links to third-party services, including Discord and GitHub. We are not responsible for the content or practices of these third-party sites.",
      },
      {
        heading: "Disclaimer",
        body: "This website is provided on an 'as is' basis. We make no warranties regarding the accuracy, reliability, or availability of the website.",
      },
      {
        heading: "Limitation of Liability",
        body: "Cortex HQ shall not be liable for any damages arising from the use or inability to use this website.",
      },
      {
        heading: "Changes",
        body: "We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.",
      },
    ],
  },
  "Cortex Bot": {
    title: "Cortex Bot Terms of Service",
    updated: "July 1, 2026",
    summary: "By inviting Cortex Bot to your Discord server, you agree to these terms. The bot is provided as a moderation, utility, and engagement tool for Discord communities.",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By inviting or using Cortex Bot on your Discord server, you agree to these Terms of Service. If you do not agree, please do not invite or use the bot.",
      },
      {
        heading: "Eligibility",
        body: "You must have the necessary permissions to invite bots to your Discord server. You must be at least 13 years old, in compliance with Discord's Terms of Service.",
      },
      {
        heading: "Acceptable Use",
        body: "You agree to use Cortex Bot in compliance with Discord's Terms of Service and Community Guidelines. Prohibited uses include spamming bot commands, exploiting vulnerabilities, using the bot for harassment, and attempting to reverse engineer the bot.",
      },
      {
        heading: "Service Availability",
        body: "We strive to maintain high availability but do not guarantee uninterrupted service. The bot may be temporarily unavailable for maintenance, updates, or due to technical issues.",
      },
      {
        heading: "Disclaimer",
        body: "Cortex Bot is provided 'as is' without warranties of any kind. We are not responsible for any damages or data loss resulting from the use of the bot.",
      },
      {
        heading: "Termination",
        body: "You may remove Cortex Bot from your server at any time. We reserve the right to restrict or terminate access for violations of these terms.",
      },
      {
        heading: "Changes",
        body: "We reserve the right to update these terms. Continued use after changes constitutes acceptance of the revised terms.",
      },
    ],
  },
  "Modmail Bot": {
    title: "Modmail Bot Terms of Service",
    updated: "July 1, 2026",
    summary: "By inviting Modmail Bot to your Discord server, you agree to these terms. The bot facilitates communication between users and server staff.",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By inviting or using Modmail Bot on your Discord server, you agree to these Terms of Service.",
      },
      {
        heading: "Eligibility",
        body: "You must have the necessary permissions to invite bots to your Discord server and be at least 13 years old.",
      },
      {
        heading: "Acceptable Use",
        body: "Modmail Bot is intended for legitimate server support communications. Prohibited uses include using the bot for spam, harassment, illegal activities, or any purpose that violates Discord's Terms of Service.",
      },
      {
        heading: "Data Handling",
        body: "Thread transcripts and message content are stored securely and are accessible only to server staff with appropriate permissions. Please refer to our Privacy Policy for detailed information.",
      },
      {
        heading: "Disclaimer",
        body: "Modmail Bot is provided 'as is'. We are not responsible for the content of modmail threads or how server staff use the information collected through the bot.",
      },
      {
        heading: "Termination",
        body: "You may remove Modmail Bot from your server at any time. Upon removal, thread data is retained for 90 days before automatic deletion.",
      },
    ],
  },
  QuranBot: {
    title: "QuranBot Terms of Service",
    updated: "April 17, 2026",
    summary: "By using QuranBot, you agree to these terms. The bot is intended for religious, educational, and spiritual purposes.",
    sections: [
      {
        heading: "Eligibility",
        body: "To use QuranBot, you must be a registered Discord user, have necessary permissions to invite bots, be at least 13 years old, and use the bot primarily for religious, educational, or spiritual purposes.",
      },
      {
        heading: "Acceptable Use",
        body: "QuranBot is intended for religious, educational, and spiritual purposes. Prohibited uses include publishing offensive content, misusing bot functions to spam or disrupt services, reverse engineering beyond open-source license permissions, and using the bot for commercial purposes without explicit written permission.",
      },
      {
        heading: "Intellectual Property",
        body: "Religious content belongs to their original sources. Quran recitations are sourced from mp3quran.net, prayer time data from aladhan.com, and azkar content from publicly available Islamic resources. QuranBot software is open-source under the MIT License.",
      },
      {
        heading: "Disclaimer",
        body: "QuranBot is provided 'as is' without warranties of any kind. We are not responsible for Discord outages, API failures, or third-party infrastructure issues.",
      },
      {
        heading: "Termination",
        body: "You may remove QuranBot from your server at any time. We may suspend or ban access for violations of these terms or Discord policies.",
      },
      {
        heading: "Full Terms",
        body: 'For the complete QuranBot terms of service, visit quranbot.cortexhq.net.',
      },
    ],
  },
};

const externalLinks: Partial<Record<Service, string>> = {
  QuranBot: "https://quranbot.cortexhq.net/site/terms",
};

export default function Terms() {
  const [active, setActive] = useState<Service>("Cortex Bot");

  const page = content[active];

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
                Terms of Service
              </h1>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Select a service to view its terms of service
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
                    View full terms on quranbot.cortexhq.net
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
