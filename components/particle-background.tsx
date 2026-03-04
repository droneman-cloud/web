"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor(w: number, h: number) {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update(w: number, h: number) {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > w) this.x = 0
        if (this.x < 0) this.x = w
        if (this.y > h) this.y = 0
        if (this.y < 0) this.y = h
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(120, 160, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = []
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120)
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.strokeStyle = `rgba(120, 160, 255, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height)
        p.draw(ctx)
      })
      drawConnections(ctx)
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
