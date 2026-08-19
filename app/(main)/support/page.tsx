"use client";

import { Container, Button, Card, CardContent } from "@/app/components/ui";
import { MessageCircle, ExternalLink, Bug, Lightbulb, BookOpen, Users, ArrowRight, ChevronDown, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const channels = [
  {
    icon: Bug,
    title: "Bug Reports",
    description: "Found something broken? Report it with reproduction steps in #bug-reports.",
    color: "text-red-400",
    hoverColor: "group-hover:text-red-300",
    href: "https://discord.gg/JSYjs6kfjk",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    description: "Have an idea? Drop it in #suggestions — we read every single one.",
    color: "text-amber-400",
    hoverColor: "group-hover:text-amber-300",
    href: "https://discord.gg/JSYjs6kfjk",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Read the docs for setup guides, commands, and configuration tutorials.",
    color: "text-aurora-violet",
    hoverColor: "group-hover:text-aurora-purple",
    href: "https://dashboard.cortexhq.net",
  },
  {
    icon: Users,
    title: "Community",
    description: "Chat with 12,000+ members. Share setups, get tips, and hang out.",
    color: "text-aurora-blue",
    hoverColor: "group-hover:text-blue-300",
    href: "https://discord.gg/JSYjs6kfjk",
  },
];

const faqs = [
  {
    q: "How do I add Cortex Bot to my server?",
    a: 'Click "Add to Discord" on our bots page, select your server, and authorize the permissions. The bot will join instantly and you can configure it from the dashboard.',
  },
  {
    q: "Is Cortex HQ really free?",
    a: "Yes — all our bots and tools are completely free and open source. No hidden fees, no premium tiers. Just invite and use.",
  },
  {
    q: "How do I configure the bot?",
    a: "Visit dashboard.cortexhq.net, log in with Discord, and select your server. You can configure moderation, music, economy, and all other features from there.",
  },
  {
    q: "What if I need help?",
    a: "Join our Discord server (discord.gg/JSYjs6kfjk) and ask in the #support channel. Our team and community are active and ready to help.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:border-white/[0.10]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between p-4 text-left cursor-pointer"
      >
        <span className="font-medium text-white pr-4">{q}</span>
        <ChevronDown className={`h-4 w-4 flex-shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4 text-sm leading-relaxed text-[var(--color-muted)] border-t border-white/[0.04] pt-3">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export default function SupportPage() {
  return (
    <div className="pt-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-aurora-purple/[0.08] blur-[120px] animate-drift-1" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-aurora-violet/[0.06] blur-[100px] animate-drift-2" />
      </div>

      <Container size="md" className="py-12">
        <div className="mx-auto max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora-purple/20 to-aurora-violet/20 border border-aurora-violet/20 animate-glow-pulse"
          >
            <MessageCircle className="h-10 w-10 text-aurora-violet" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-3 text-3xl font-bold tracking-tight text-white"
          >
            Get Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-10 text-[var(--color-muted)] leading-relaxed"
          >
            Join our Discord server for help with Cortex Bot, QuranBot, and all Cortex HQ projects.
            Our team and community are ready to assist you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <Card variant="glass" className="overflow-hidden animate-border-glow group">
              <CardContent className="py-10">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#5865F2">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-white">Discord Server</h2>
                </div>
                <p className="mb-6 text-sm text-[var(--color-muted)]">
                  Fastest way to get help. Join thousands of other server owners.
                </p>
                <a href="https://discord.gg/JSYjs6kfjk" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-white border-0 w-full cursor-pointer">
                    Join Discord Server
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 max-w-lg space-y-3"
        >
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <motion.div key={channel.title} variants={item}>
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="overflow-hidden group hover:border-white/[0.12] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(168,85,247,0.06)] cursor-pointer">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.08]">
                        <Icon className={`h-5 w-5 ${channel.color} ${channel.hoverColor} transition-colors duration-300`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{channel.title}</h3>
                        <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-muted)]">{channel.description}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-white/10 transition-all duration-300 group-hover:text-aurora-violet group-hover:translate-x-1" />
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-16 max-w-lg"
        >
          <h2 className="mb-6 text-center text-xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
