"use client"

import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Target, Clipboard, Dumbbell, Compass } from "lucide-react"

const bentoItems = [
  {
    icon: Target,
    title: "Position-Specific Movement",
    description: "Learn how your joints need to move for SPECIFIC positions in BJJ & combat sports",
    size: "large",
  },
  {
    icon: Clipboard,
    title: "Self-Assessment",
    description: "A quick self-assessment of mobility to identify your limitations",
    size: "small",
  },
  {
    icon: Dumbbell,
    title: "Targeted Exercises",
    description: "Exercises to improve mobility & strength at each joint",
    size: "small",
  },
  {
    icon: Compass,
    title: "Program Design",
    description: "How to design your own mobility & strength program tailored to your needs",
    size: "large",
  },
]

export function BentoGrid() {
  return (
    <HeartbeatSection
      id="included"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <HeartbeatElement delay={0.1}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              What&apos;s Included
            </span>
          </HeartbeatElement>

          <HeartbeatElement delay={0.2}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Everything you need to stay mat ready
            </h2>
          </HeartbeatElement>

          <HeartbeatElement delay={0.3}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive system designed by a Doctor of Physical Therapy specifically for grapplers.
            </p>
          </HeartbeatElement>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {bentoItems.map((item, index) => (
            <HeartbeatElement
              key={item.title}
              delay={0.2 + index * 0.1}
              className={`${
                item.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <div className="group relative h-full p-6 lg:p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 glow-border transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/30 rounded-tr-lg" />
                </div>
              </div>
            </HeartbeatElement>
          ))}
        </div>
      </div>
    </HeartbeatSection>
  )
}
