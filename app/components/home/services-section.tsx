"use client";

import { ExternalLink, ArrowUpRight, Github, Star, GitFork } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  href: string;
  language: string;
  langColor: string;
  stars: number;
  forks: number;
  tag: string;
}

const projects: Project[] = [
  { name: "Vanguard Moderation", description: "Advanced moderation toolkit for Discord with auto-mod, logging, and role management.", href: "https://github.com/SEJED-DEV", language: "TypeScript", langColor: "#3178c6", stars: 42, forks: 12, tag: "Bot" },
  { name: "Nova ER:LC Manager", description: "ER:LC server management bot with real-time monitoring and player tracking.", href: "https://github.com/SEJED-DEV", language: "JavaScript", langColor: "#f1e05a", stars: 28, forks: 8, tag: "Bot" },
  { name: "ER:LC Utility Engine", description: "Utility tools for ER:LC communities — logs, transcripts, and automation.", href: "https://github.com/SEJED-DEV", language: "TypeScript", langColor: "#3178c6", stars: 35, forks: 10, tag: "Bot" },
  { name: "Cortex Core", description: "Core library powering the entire Cortex ecosystem and shared utilities.", href: "https://github.com/SEJED-DEV", language: "TypeScript", langColor: "#3178c6", stars: 56, forks: 18, tag: "Library" },
  { name: "Pickle Infrastructure", description: "Infrastructure as code for Discord bots — deploy, monitor, scale.", href: "https://github.com/SEJED-DEV", language: "TypeScript", langColor: "#3178c6", stars: 31, forks: 7, tag: "DevOps" },
  { name: "Nexus Transcripts", description: "Beautiful transcript generation for modmail with rich formatting.", href: "https://github.com/SEJED-DEV", language: "JavaScript", langColor: "#f1e05a", stars: 24, forks: 6, tag: "Tool" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeader>
        <SectionLabel>Open Source</SectionLabel>
        <SectionTitle>Free Projects</SectionTitle>
        <SectionDescription>
          Free, open-source tools and projects built for the Discord community.
          All projects are available on GitHub.
        </SectionDescription>
      </SectionHeader>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, i) => (
          <motion.div key={project.name} variants={item}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <Card variant="hover" className="group h-full transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_0_25px_rgba(168,85,247,0.06)] hover:-translate-y-1">
                <CardContent className="flex flex-col p-5">
                  {/* Header: tag + arrow */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-md bg-white/[0.06] border border-white/[0.08] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                      {project.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/15 transition-all duration-300 group-hover:text-aurora-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Name + description */}
                  <h4 className="mb-1.5 font-semibold text-white group-hover:text-aurora-violet transition-colors duration-200">
                    {project.name}
                  </h4>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    {project.description}
                  </p>

                  {/* Footer: language + stats */}
                  <div className="flex items-center justify-between border-t border-white/[0.04] pt-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: project.langColor }} />
                      <span className="text-xs text-[var(--color-muted)]">{project.language}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                        <GitFork className="h-3 w-3" />
                        {project.forks}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/SEJED-DEV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-sm text-[var(--color-muted)] backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] group"
        >
          <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
          View all projects on GitHub
          <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </Section>
  );
}
