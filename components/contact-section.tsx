"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Send, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [focused, setFocused] = useState<string | null>(null)

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Kannur, Iritty, India - 670704",
      href: "https://maps.google.com/?q=Iritty,Kannur,Kerala",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9645161615",
      href: "tel:+919645161615",
    },
    {
      icon: Mail,
      label: "Email",
      value: "arunjkurian@icloud.com",
      href: "mailto:arunjkurian@icloud.com",
    },
  ]

  return (
    <section ref={ref} id="contact" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm font-medium tracking-widest text-primary uppercase"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              {
                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!"
              }
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === "Location" ? "_blank" : undefined}
                  rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group flex items-center gap-4 rounded-xl border border-glass-border bg-glass-bg p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(120,160,255,0.15)]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">{info.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <form
              className="space-y-5 rounded-2xl border border-glass-border bg-glass-bg p-8 backdrop-blur-xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={`w-full rounded-lg border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none ${
                    focused === "name"
                      ? "border-primary shadow-[0_0_15px_rgba(120,160,255,0.2)]"
                      : "border-glass-border"
                  }`}
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={`w-full rounded-lg border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none ${
                    focused === "email"
                      ? "border-primary shadow-[0_0_15px_rgba(120,160,255,0.2)]"
                      : "border-glass-border"
                  }`}
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`w-full resize-none rounded-lg border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none ${
                    focused === "message"
                      ? "border-primary shadow-[0_0_15px_rgba(120,160,255,0.2)]"
                      : "border-glass-border"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(120,160,255,0.4)]"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
