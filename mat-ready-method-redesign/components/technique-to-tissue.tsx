"use client"

import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Crosshair, ShieldCheck, BarChart3, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Crosshair,
    title: "Joint-Specific Protocols",
    description: "Targeted exercises for the exact joints stressed by your favorite techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Injury Prevention Focus",
    description: "Address vulnerabilities before they become injuries that keep you off the mats.",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Track your progress with measurable improvements in mobility and strength.",
  },
]

const protocolSteps = [
  {
    step: "01",
    name: "Analysis",
    description: "Video breakdown of submission mechanics and positional stress patterns.",
  },
  {
    step: "02",
    name: "Identification",
    description: "Pinpointing failure points in ligaments, tendons, and muscular chains.",
  },
  {
    step: "03",
    name: "Prescription",
    description: "Custom isometric and eccentric loading protocols for tissue adaptation.",
  },
  {
    step: "04",
    name: "Integration",
    description: "Blending prehab work with your on-mat training schedule.",
  },
  {
    step: "05",
    name: "Fortification",
    description: "Progressive overload for increased tissue tolerance and durability.",
  },
]

export function TechniqueToTissue() {
  return (
    <HeartbeatSection
      id="protocol"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Editorial content */}
          <div className="space-y-8">
            <HeartbeatElement delay={0.1}>
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  The 5-Step Protocol
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  From Technique to Tissue
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every BJJ technique places specific demands on your body. We reverse-engineer these positions to identify exactly which tissues are under stress — then build targeted protocols to fortify them.
                </p>
              </div>
            </HeartbeatElement>

            <HeartbeatElement delay={0.2}>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </HeartbeatElement>

            {/* <HeartbeatElement delay={0.3}>
              <a
                href="#instructor"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
              >
                Learn about our methodology
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </HeartbeatElement> */}
          </div>

          {/* Right: Protocol card with gradient wrapper */}
          <HeartbeatElement delay={0.2}>
            <div className="relative group">
              {/* Gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="relative p-6 sm:p-8 rounded-2xl bg-secondary/60 border border-primary/30 backdrop-blur-sm">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  The Protocol
                </h3>

                <div className="relative">
                  {/* Continuous connector line */}
                  <div className="absolute left-[27px] top-[44px] bottom-[44px] w-px bg-primary/20" />

                  <div className="relative space-y-4">
                    {protocolSteps.map((item) => (
                      <div
                        key={item.step}
                        className="flex gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(0_70%_12%)] text-primary text-xs font-bold flex items-center justify-center border border-primary/30 relative z-10">
                          {item.step}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </HeartbeatElement>
        </div>
      </div>
    </HeartbeatSection>
  )
}
