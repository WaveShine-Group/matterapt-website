"use client"

import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Check } from "lucide-react"

const benefits = [
  "Improved Joint Mobility & Flexibility",
  "Injury Prevention Strategies",
  "Enhanced On-Mat Performance",
  "Specialized Strength Programs",
  "Expert Guidance for Grapplers",
]

export function WhatIsMatReady() {
  return (
    <HeartbeatSection
      id="what-is-matready"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <HeartbeatElement delay={0.1}>
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                The System
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What is MAT READY?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A comprehensive training system designed specifically for grapplers who want to stay healthy, move better, and perform at their peak — without spending hours on random mobility drills that don't translate to the mats.
              </p>
            </div>
          </HeartbeatElement>

          <HeartbeatElement delay={0.2}>
            <div className="relative group/list">
              {/* Gradient glow wrapper for entire list */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 rounded-2xl blur-xl opacity-50" />

              <div className="relative space-y-3 p-4 rounded-2xl bg-secondary/40 border border-primary/20">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-primary/20 hover:border-primary/40 hover:bg-secondary/70 transition-all duration-200 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </HeartbeatElement>
        </div>
      </div>
    </HeartbeatSection>
  )
}
