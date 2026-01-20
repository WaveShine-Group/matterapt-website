import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatIsMatReady } from "@/components/what-is-matready"
import { FourPillars } from "@/components/four-pillars"
import { TechniqueToTissue } from "@/components/technique-to-tissue"
import { BulletproofFrame } from "@/components/bulletproof-frame"
import { Instructor } from "@/components/instructor"
import { Seminar } from "@/components/seminar"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsMatReady />
      <FourPillars />
      <TechniqueToTissue />
      <BulletproofFrame />
      <Instructor />
      <Seminar />
      <FAQ />
      <Footer />
    </main>
  )
}
