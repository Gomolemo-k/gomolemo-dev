"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-border px-6 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-4xl text-center text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} Gomolemo Kgatitsoe. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
}
