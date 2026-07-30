"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      "Next.js 16 / React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Radix UI / shadcn/ui",
      "Framer Motion",
      "Fumadocs / MDX",
    ],
  },
  {
    label: "Backend & Database",
    skills: [
      "Node.js",
      "PostgreSQL / Drizzle ORM",
      "Neon PostgreSQL",
      "Stripe Billing",
      "Orama (Vector Search)",
      "Resend / React Email",
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      "Docker / Dokploy",
      "Git / GitHub / Octokit",
      "CI/CD Pipelines",
      "Vercel AI SDK",
      "n8n / Zapier",
      "Biome",
    ],
  },
  {
    label: "Auth, AI & i18n",
    skills: [
      "Better Auth / OAuth",
      "next-intl (i18n)",
      "OpenAI / Gemini / DeepSeek",
      "RAG / Semantic Search",
      "Agile / Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Skills
          </motion.h2>
          <motion.p
            className="mb-12 text-lg text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Technologies and tools I work with.
          </motion.p>
          <div className="grid gap-10 sm:grid-cols-2">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                        ease: [0.16, 1, 0.3, 1] as const,
                }}
              >
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-foreground">
                  {category.label}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <motion.li
                      key={skill}
                      className="flex items-center gap-3 text-muted"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.12 + j * 0.05,
                        duration: 0.4,
                  ease: [0.16, 1, 0.3, 1] as const,
                      }}
                    >
                      <motion.span
                        className="size-1.5 rounded-full bg-accent"
                        whileHover={{ scale: 2 }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
