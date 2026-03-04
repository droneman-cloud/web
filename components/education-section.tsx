"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Monitor,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
  Server,
  Database,
  Globe,
} from "lucide-react"

const techStack = [
  { name: "MCSE", icon: Monitor, color: "from-primary to-primary/60" },
  { name: "CCNA", icon: Wifi, color: "from-accent to-accent/60" },
  { name: "CCNP", icon: Shield, color: "from-primary to-accent" },
  { name: "BCA", icon: GraduationCap, color: "from-accent to-primary" },
  { name: "SharePoint", icon: Globe, color: "from-primary to-primary/60" },
  { name: "Exchange Server", icon: Server, color: "from-accent to-accent/60" },
  { name: "Azure", icon: Cloud, color: "from-primary to-accent" },
  { name: "AWS", icon: Database, color: "from-accent to-primary" },
]

const certifications = [
  { name: "CCNA Certified", description: "Cisco Certified Network Associate" },
  { name: "CCNP Certified", description: "Cisco Certified Network Professional" },
  { name: "MCSE Certified", description: "Microsoft Certified Solutions Expert" },
]

export function EducationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="education" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Education / Tech Stack */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm font-medium tracking-widest text-primary uppercase"
          >
            Qualifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
          >
            Education & Tech Stack
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="mb-24 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-glass-border bg-glass-bg p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(120,160,255,0.15)]"
            >
              <div className={`rounded-lg bg-gradient-to-br ${tech.color} p-3 shadow-lg`}>
                <tech.icon className="h-6 w-6 text-foreground" />
              </div>
              <span className="text-sm font-semibold text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm font-medium tracking-widest text-primary uppercase"
          >
            Verified
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
          >
            Certifications
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-glass-border bg-glass-bg p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(120,160,255,0.15)]"
            >
              {/* Badge glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

              <div className="relative flex flex-col items-center gap-4 text-center">
                {/* Badge icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 shadow-[0_0_20px_rgba(120,160,255,0.2)]">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
                <div className="mt-1 rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
