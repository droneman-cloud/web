"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  { name: "Content Strategy", level: 92 },
  { name: "Visual Storytelling", level: 88 },
  { name: "Video Editing", level: 85 },
  { name: "Drone Operation", level: 90 },
  { name: "Network Troubleshooting", level: 95 },
  { name: "Network Security", level: 88 },
  { name: "System Performance", level: 87 },
  { name: "Team Coordination", level: 90 },
  { name: "SEO Knowledge", level: 82 },
  { name: "Content Management", level: 85 },
  { name: "Adaptability", level: 95 },
]

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="skills" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm font-medium tracking-widest text-primary uppercase"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              className="group"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="font-mono text-xs text-primary">{skill.level}%</span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.06, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(120,160,255,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
