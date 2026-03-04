"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 })

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    },
    [cursorX, cursorY, isVisible]
  )

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (typeof window === "undefined" || "ontouchstart" in window) return

    window.addEventListener("mousemove", onMouseMove)

    const handleHover = () => setIsHovering(true)
    const handleUnhover = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    )
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover)
      el.addEventListener("mouseleave", handleUnhover)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover)
        el.removeEventListener("mouseleave", handleUnhover)
      })
    }
  }, [onMouseMove])

  // Don't render on touch devices or SSR
  if (typeof window !== "undefined" && "ontouchstart" in window) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border border-primary/60 bg-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(120,160,255,0.4)]"
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 60 : 36,
            height: isHovering ? 60 : 36,
            opacity: isVisible ? 0.5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="rounded-full border border-primary/20"
        />
      </motion.div>
    </>
  )
}
