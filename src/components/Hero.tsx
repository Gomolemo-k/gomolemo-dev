"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.div
          variants={item}
          className="mb-8 size-32 overflow-hidden rounded-full border-2 border-accent/30 p-1 sm:size-36"
        >
          <div className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-hover text-3xl font-bold text-white sm:text-4xl">
            GK
          </div>
        </motion.div>

        <motion.div variants={item} className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm">
            Johannesburg, ZA
          </span>
          <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm">
            Open to Remote Worldwide
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs text-accent sm:text-sm"
        >
          &lt;Full Stack Web Developer /&gt;
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-6 text-center text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Gomolemo
          <br />
          <span className="text-accent">Kgatitsoe</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto max-w-lg text-center text-lg leading-relaxed text-muted"
        >
          Developer with 3+ years of experience shipping
          production grade SaaS platforms, from multi tenant billing systems to
          AI powered features. Comfortable across the entire stack.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See my work
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent-light/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.svg
          className="size-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
