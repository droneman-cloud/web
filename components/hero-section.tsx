"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

function DroneModel() {
  return (
    <div className="relative h-64 w-64 md:h-80 md:w-80">
      {/* Rotating drone visualization */}
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Drone body */}
        <div className="relative">
          {/* Center body */}
          <div className="h-16 w-16 rounded-xl bg-primary/30 shadow-[0_0_40px_rgba(120,160,255,0.3)] backdrop-blur-sm border border-primary/40" />
          
          {/* Arms */}
          {[0, 90, 180, 270].map((deg) => (
            <motion.div
              key={deg}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg)`,
              }}
            >
              <div className="flex items-center">
                <div className="h-1 w-20 bg-gradient-to-r from-primary/60 to-primary/20 rounded-full" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                  className="h-8 w-8 rounded-full border-2 border-primary/50 flex items-center justify-center"
                >
                  <div className="h-1 w-6 rounded-full bg-primary/60" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Glow ring */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_60px_rgba(120,160,255,0.15)]"
      />
      
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 rounded-full border border-dashed border-primary/10"
      />
    </div>
  )
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      id="hero"
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120,160,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,160,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 inline-block rounded-full border border-glass-border bg-glass-bg px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase backdrop-blur-sm"
            >
              Portfolio 2025
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl"
            >
              Where Creativity
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Meets Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Creative Content Strategist | Drone Visual Specialist | Network Support Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#skills"
                className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(120,160,255,0.4)]"
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-glass-border bg-glass-bg px-8 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(120,160,255,0.2)]"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* 3D Drone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-shrink-0"
          >
            <DroneModel />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
