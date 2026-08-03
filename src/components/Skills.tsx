"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRadixui,
  SiShadcnui,
  SiFramer,
  SiMdx,
  SiNodedotjs,
  SiStripe,
  SiResend,
  SiN8N,
  SiPostgresql,
  SiDrizzle,
  SiNeon,
  SiCloudflare,
  SiReactquery,
  SiGooglegemini,
  SiDeepseek,
  SiReplicate,
  SiOpenrouter,
  SiDocker,
  SiVercel,
  SiCloudflareworkers,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiBiome,
  SiKnip,
  SiPnpm,
  SiNpm,
  SiHtml5,
  SiCss,
  SiGooglesearchconsole,
  SiGoogleanalytics,
  SiPostman,
  SiVitest,
  SiYaml,
} from "react-icons/si";

function genericIcon(paths: string | string[]) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {Array.isArray(paths) ? (
        paths.map((d, i) => <path key={i} d={d} />)
      ) : (
        <path d={paths} />
      )}
    </svg>
  );
}

const generic = {
  lock: (
    <span className="text-accent">
      {genericIcon(
        "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      )}
    </span>
  ),
  mail: (
    <span className="text-accent">
      {genericIcon(
        "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      )}
    </span>
  ),
  grid: (
    <span className="text-accent">
      {genericIcon(
        "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      )}
    </span>
  ),
  search: (
    <span className="text-accent">
      {genericIcon(
        "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      )}
    </span>
  ),
  layers: (
    <span className="text-accent">
      {genericIcon(["M12 3l9 5-9 5-9-5 9-5z", "M3 12l9 5 9-5"])}
    </span>
  ),
  table: (
    <span className="text-accent">
      {genericIcon(
        "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      )}
    </span>
  ),
  sparkles: (
    <span className="text-accent">
      {genericIcon(
        "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      )}
    </span>
  ),
  server: (
    <span className="text-accent">
      {genericIcon([
        "M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z",
        "M4 16a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z",
        "M7 7h.01",
        "M7 17h.01",
      ])}
    </span>
  ),
  globe: (
    <span className="text-accent">
      {genericIcon([
        "M12 21a9 9 0 100-18 9 9 0 000 18z",
        "M3 12h18",
        "M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z",
      ])}
    </span>
  ),
  chart: (
    <span className="text-accent">
      {genericIcon(
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      )}
    </span>
  ),
  link: (
    <span className="text-accent">
      {genericIcon([
        "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71",
        "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
      ])}
    </span>
  ),
  browser: (
    <span className="text-accent">
      {genericIcon([
        "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z",
        "M3 9h18",
        "M9 3v6",
      ])}
    </span>
  ),
  code: (
    <span className="text-accent">
      {genericIcon(["M16 18l6-6-6-6", "M8 6l-6 6 6 6"])}
    </span>
  ),
  rocket: (
    <span className="text-accent">
      {genericIcon([
        "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z",
        "M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z",
        "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
        "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
      ])}
    </span>
  ),
};

interface TechItem {
  name: string;
  icon: ReactNode;
}

interface TechCategory {
  label: string;
  icon: ReactNode;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: "Next.js", icon: <SiNextdotjs size={16} color="#000000" /> },
      { name: "React", icon: <SiReact size={16} color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript size={16} color="#3178C6" /> },
      { name: "HTML", icon: <SiHtml5 size={16} color="#E34F26" /> },
      { name: "CSS", icon: <SiCss size={16} color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={16} color="#06B6D4" /> },
      { name: "Radix UI", icon: <SiRadixui size={16} color="#161618" /> },
      { name: "shadcn/ui", icon: <SiShadcnui size={16} color="#000000" /> },
      { name: "Framer Motion", icon: <SiFramer size={16} color="#0055FF" /> },
      { name: "Fumadocs / MDX", icon: <SiMdx size={16} color="#1B1F24" /> },
      { name: "Recharts", icon: generic.chart },
    ],
  },
  {
    label: "Backend & APIs",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    items: [
      { name: "Node.js", icon: <SiNodedotjs size={16} color="#5FA04E" /> },
      { name: "REST API", icon: generic.link },
      { name: "Better Auth / OAuth", icon: generic.lock },
      { name: "Stripe", icon: <SiStripe size={16} color="#635BFF" /> },
      { name: "Resend", icon: <SiResend size={16} color="#000000" /> },
      { name: "React Email", icon: generic.mail },
      { name: "NocoDB", icon: generic.grid },
      { name: "Vercel AI SDK", icon: <SiVercel size={16} color="#000000" /> },
    ],
  },
  {
    label: "Workflow & Automation",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    items: [
      { name: "n8n", icon: <SiN8N size={16} color="#EA4B71" /> },
    ],
  },
  {
    label: "Databases & Storage",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql size={16} color="#4169E1" /> },
      { name: "Drizzle ORM", icon: <SiDrizzle size={16} color="#C5F74F" /> },
      { name: "Neon", icon: <SiNeon size={16} color="#00E599" /> },
      { name: "Cloudflare R2", icon: <SiCloudflare size={16} color="#F38020" /> },
      { name: "Orama (Vector Search)", icon: generic.search },
    ],
  },
  {
    label: "State & Events",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      { name: "Zustand", icon: generic.layers },
      { name: "TanStack Query", icon: <SiReactquery size={16} color="#FF4154" /> },
      { name: "TanStack Table", icon: generic.table },
    ],
  },
  {
    label: "AI & LLM",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      { name: "OpenAI", icon: generic.sparkles },
      { name: "Google Gemini", icon: <SiGooglegemini size={16} color="#8E75B2" /> },
      { name: "DeepSeek", icon: <SiDeepseek size={16} color="#4D6BFE" /> },
      { name: "Replicate", icon: <SiReplicate size={16} color="#3B3B3B" /> },
      { name: "OpenRouter", icon: <SiOpenrouter size={16} color="#7C3AED" /> },
      { name: "RAG / Semantic Search", icon: generic.search },
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    items: [
      { name: "Docker", icon: <SiDocker size={16} color="#2496ED" /> },
      { name: "Dokploy", icon: generic.server },
      { name: "Vercel", icon: <SiVercel size={16} color="#000000" /> },
      { name: "Cloudflare Workers", icon: <SiCloudflareworkers size={16} color="#F38020" /> },
      { name: "GitHub Actions / CI/CD", icon: <SiGithubactions size={16} color="#2088FF" /> },
      { name: "pnpm", icon: <SiPnpm size={16} color="#F69220" /> },
      { name: "npm", icon: <SiNpm size={16} color="#CB3837" /> },
    ],
  },
  {
    label: "Tooling & Workflow",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { name: "Git", icon: <SiGit size={16} color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub size={16} color="#181717" /> },
      { name: "Biome", icon: <SiBiome size={16} color="#60A5FA" /> },
      { name: "Knip", icon: <SiKnip size={16} color="#F0B429" /> },
      { name: "Firecrawl", icon: generic.globe },
      { name: "next-intl (i18n)", icon: generic.globe },
      { name: "Postman", icon: <SiPostman size={16} color="#FF6C37" /> },
      { name: "Playwright", icon: generic.browser },
      { name: "Vitest", icon: <SiVitest size={16} color="#FCC72B" /> },
      { name: "Google Search Console", icon: <SiGooglesearchconsole size={16} color="#458CF5" /> },
      { name: "Google Analytics", icon: <SiGoogleanalytics size={16} color="#E37400" /> },
      { name: "YAML", icon: <SiYaml size={16} color="#CB171E" /> },
    ],
  },
  {
    label: "IDEs & Design",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm4 2v8m8-8v8" />
      </svg>
    ),
    items: [
      { name: "VS Code", icon: generic.code },
      { name: "Antigravity", icon: generic.rocket },
    ],
  },
];

export default function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.p
            className="mb-2 font-mono text-xs text-accent sm:text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            &lt;Tech Stack /&gt;
          </motion.p>
          <motion.p
            className="mb-12 text-lg text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            The languages, frameworks, and tools I use to build and ship
            products.
          </motion.p>
          <div className="grid gap-8 sm:grid-cols-2">
            {techCategories.map((category, i) => (
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
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {category.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item, j) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.12 + j * 0.04,
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      <span className="flex size-4 items-center justify-center">
                        {item.icon}
                      </span>
                      {item.name}
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
