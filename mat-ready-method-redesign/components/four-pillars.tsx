"use client"

import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Move, Dumbbell, Shield, Target } from "lucide-react"

const pillars = [
  {
    icon: Move,
    title: "Mobility Foundation",
    description: "Daily routines for hips, shoulders, and spine health that translate directly to better movement on the mats.",
  },
  {
    icon: Dumbbell,
    title: "Strength Mastery",
    description: "Build functional strength specific to BJJ demands — grip endurance, rotational power, and posterior chain resilience.",
  },
  {
    icon: Shield,
    title: "Injury Resilience",
    description: "Proactive protocols that address common grappling injuries before they sideline your training.",
  },
  {
    icon: Target,
    title: "Performance Integration",
    description: "Seamlessly blend prehab and strength work into your existing training schedule without burnout.",
  },
]

export function FourPillars() {
  return (
    <HeartbeatSection
      id="pillars"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeartbeatElement delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              The Method
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              4 Pillars of MAT Ready
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that builds longevity into your grappling practice.
            </p>
          </div>
        </HeartbeatElement>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <HeartbeatElement key={pillar.title} delay={0.2 + index * 0.1} className="h-full">
                <div className="relative group h-full">
                  {/* Vertical connection line - mobile/tablet */}
                  {index < pillars.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-full h-8 w-px bg-primary/20 -translate-x-1/2" />
                  )}

                  {/* Gradient glow wrapper */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-opacity" />

                  <div className="relative h-full flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <pillar.icon className="w-7 h-7 text-primary" />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>

                    {/* Title with underline accent */}
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3 relative">
                      {pillar.title}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-300" />
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </HeartbeatElement>
            ))}
          </div>
        </div>
      </div>
    </HeartbeatSection>
  )
}
