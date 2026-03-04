"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { CustomCursor } from "@/components/custom-cursor"
import { LoadingScreen } from "@/components/loading-screen"

export default function PortfolioPage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
