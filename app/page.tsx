"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import ModernSidebar from "@/components/ModernSidebar"
import PageTransition from "@/components/PageTransition"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import TechnologyShowcase from "@/components/TechnologyShowcase"
import IndustrySolutions from "@/components/IndustrySolutions"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <ModernSidebar />

        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Simple clean background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background z-0"></div>

          <div className="relative z-20">
            <Hero />
          </div>

          {/* Animated scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-muted-foreground/70 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground/90 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <TechnologyShowcase />
        {/* <IndustrySolutions /> */}
        {/* <Stats /> */}
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </div>
    </PageTransition>
  )
}
