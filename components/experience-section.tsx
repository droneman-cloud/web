"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Content Creator",
    company: "APZ Develup",
    location: "Kannur, Kerala",
    tasks: [
      "Developed engaging content strategies to enhance brand visibility across multiple platforms",
      "Collaborated with project teams to plan flight paths and optimize drone usage for surveying and mapping",
      "Edited video content aligning with creative direction",
      "Developed and executed innovative video concepts",
    ],
  },
  {
    title: "Network Support Engineer",
    company: "Dynasys Systems Pvt LTD",
    location: "Bangalore",
    tasks: [
      "Monitored network performance & troubleshot connectivity issues",
      "Configured and maintained routers and switches",
      "Implemented network security protocols",
      "Minimized downtime through proactive system monitoring",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="experience" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm font-medium tracking-widest text-primary uppercase"
          >
            Career Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.3 }}
              className={`relative mb-16 flex flex-col last:mb-0 md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-6 top-0 z-10 -translate-x-1/2 md:left-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-glass-border bg-background shadow-[0_0_20px_rgba(120,160,255,0.3)]">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="group rounded-xl border border-glass-border bg-glass-bg p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(120,160,255,0.1)]">
                  <h3 className="mb-1 text-lg font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <p className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
