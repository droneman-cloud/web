"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-glass-border bg-glass-bg/50 px-6 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground"
        >
          {"Arun J Kurian. All rights reserved."}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <a
            href="mailto:arunjkurian@icloud.com"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href="tel:+919645161615"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Phone
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
