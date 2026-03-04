"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, Cpu, Camera, Wifi } from "lucide-react"

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="mb-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-3 text-sm font-medium tracking-widest text-primary uppercase"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </div>
  )
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    { icon: Camera, label: "Content Strategy" },
    { icon: Cpu, label: "Drone Technology" },
    { icon: Wifi, label: "Network Engineering" },
    { icon: User, label: "Creative Direction" },
  ]

  return (
    <section ref={ref} id="about" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              Content Creator with a strong track record in developing effective content
              strategies that enhance brand visibility across various platforms. Experienced
              in collaborating with teams to optimize drone technology for surveying and
              mapping, while executing innovative video concepts for impactful storytelling.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Background as a Network Support Engineer with expertise in troubleshooting,
              security protocols, and system performance optimization. Proficient in SEO and
              content management systems, ready to apply a diverse skill set in fast-paced
              environments to deliver creative solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg border border-glass-border bg-glass-bg p-3 backdrop-blur-sm"
                >
                  <h.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Glass card side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <div className="relative rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-xl">
              {/* Glow effect */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(120,160,255,0.6)]" />
                  <span className="text-xs tracking-widest text-muted-foreground uppercase">
                    Quick Stats
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Location", value: "Kannur, Kerala, India" },
                    { label: "Specialization", value: "Content & Networking" },
                    { label: "Drone Ops", value: "Surveying & Mapping" },
                    { label: "Engineering", value: "Network Infrastructure" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-sm font-medium text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Creative", "Innovative", "Technical", "Visionary"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
