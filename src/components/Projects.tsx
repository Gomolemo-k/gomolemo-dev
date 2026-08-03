"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/projects";
import { brandIcon } from "./techIcons";

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

const gradients = [
  "from-accent to-accent-hover",
  "from-accent-hover to-accent",
  "from-accent/80 to-accent-hover/80",
  "from-accent-hover/80 to-accent/80",
];

export default function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.p
            className="mb-2 font-mono text-xs text-accent sm:text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            &lt;Projects /&gt;
          </motion.p>
          <motion.p
            className="mb-12 text-lg text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Some things I&apos;ve built.
          </motion.p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] gap-x-6 gap-y-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 48px -12px rgba(232, 160, 180, 0.3)",
                }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50 md:h-[525px]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block w-full p-1"
                  aria-label={`${project.title} project details`}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-card">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradients[i % gradients.length]}`}
                      >
                        <span className="text-4xl font-bold text-white/90">
                          {project.title
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-1 rounded-lg bg-foreground/10 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                </Link>
                <div className="relative flex min-h-0 w-full flex-1 flex-col p-2 md:px-6 md:py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="relative size-[60px] shrink-0">
                        {project.logo ? (
                          <Image
                            src={project.logo}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div
                            className={`flex size-full items-center justify-center rounded-full bg-gradient-to-br ${gradients[i % gradients.length]}`}
                          >
                            <span className="text-lg font-bold text-white/90">
                              {project.title
                                .split(" ")
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2)}
                            </span>
                          </div>
                        )}
                      </div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="min-w-0"
                      >
                        <h3 className="truncate text-lg font-semibold text-foreground transition-colors group-hover:text-accent md:text-xl">
                          {project.title}
                        </h3>
                      </Link>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      Live
                      <svg
                        className="size-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                  <p className="flex flex-1 items-center overflow-hidden py-2 text-center text-sm leading-relaxed text-muted md:px-2">
                    {project.description}
                  </p>
                  <div className="flex w-full shrink-0 items-center justify-center gap-4 pb-1 pt-1">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span key={tag} title={tag}>
                        {brandIcon(tag, 22)}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
