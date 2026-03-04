"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-glass-border bg-glass-bg shadow-[0_0_40px_rgba(120,160,255,0.3)]"
            >
              <span className="text-3xl font-bold text-primary">A</span>
            </motion.div>

            {/* Loading bar */}
            <div className="h-0.5 w-48 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: 1, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.3em] text-muted-foreground uppercase"
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
