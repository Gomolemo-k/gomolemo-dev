"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "MySelf Pilot",
    description:
      "Full stack middleware hub connecting autonomous vehicle taxi companies, logistics fleets, delivery operators, and city transport systems into a unified ecosystem for shared payments, tariffs, user data, and vehicle access.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Stripe",
      "Better Auth",
      "Vercel AI SDK",
      "Tailwind CSS v4",
      "Docker / Dokploy",
    ],
    href: "https://myselfpilot.com",
  },
  {
    title: "AXONS Protocol Website",
    description:
      "Official consortium platform for the AXONS open IoT security protocol. Production grade SaaS featuring protocol specification docs, tiered membership with Stripe billing, AI powered protocol assistant with RAG, compliance certification suite, MCP server, and complete internationalization across 8 languages.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Stripe",
      "Better Auth",
      "Vercel AI SDK",
      "Tailwind CSS v4",
      "Fumadocs / MDX",
      "n8n",
      "Resend",
      "NocoDB",
      "Orama",
      "Radix UI / shadcn/ui",
      "Google Gemini",
      "Docker / Dokploy",
    ],
    href: "https://axonsprotocol.com",
  },
  {
    title: "AXONS AI Agent Skill Registry",
    description:
      "AI agent skill registry published on the skills.sh ecosystem, encoding core IoT communication protocol standards into machine executable skill definitions for automated development workflows.",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Fumadocs",
      "MDX",
      "Vercel AI SDK",
      "Docker",
    ],
    href: "https://github.com/Germangalia/axons-agents-skills",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="mb-12 text-lg text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Some things I&apos;ve built.
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 20px 40px -12px rgba(232, 160, 180, 0.25)",
                }}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <motion.div
                  className="mb-4 flex size-10 items-center justify-center rounded-xl bg-accent/10"
                  whileHover={{ rotate: -6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    className="size-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
