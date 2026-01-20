"use client"

import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Play, CheckCircle } from "lucide-react"

const routineItems = [
  "Hip Mobility Flow",
  "Shoulder Stability",
  "Spine Decompression",
  "Lower Back Recovery",
  "Ankle Mobility",
]

export function Overview() {
  return (
    <HeartbeatSection
      id="overview"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Editorial content */}
          <div className="space-y-8">
            <HeartbeatElement delay={0.1}>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                What is Mat Ready?
              </span>
            </HeartbeatElement>

            <HeartbeatElement delay={0.2}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                FINALLY — An accessible, online platform to help keep your body healthy for BJJ & combat sports!
              </h2>
            </HeartbeatElement>

            <HeartbeatElement delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is NOT just an app where you watch and select random exercises...
              </p>
            </HeartbeatElement>

            {/* Pull-quote card */}
            <HeartbeatElement delay={0.4}>
              <div className="relative p-6 rounded-xl bg-secondary/30 border border-border/50 glow-border transition-all duration-300">
                <div className="absolute -left-1 top-6 bottom-6 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                <blockquote className="text-xl font-medium text-foreground leading-relaxed">
                  &ldquo;It is a{" "}
                  <span className="text-primary font-semibold">SYSTEM</span>{" "}
                  that is intelligently designed to help you achieve and maintain{" "}
                  <span className="text-primary font-semibold">LONG-TERM</span>{" "}
                  joint/muscle health.&rdquo;
                </blockquote>
              </div>
            </HeartbeatElement>
          </div>

          {/* Right: Program Preview mock UI */}
          <HeartbeatElement delay={0.3}>
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 rounded-2xl blur-xl" />
              
              {/* Mock dashboard card */}
              <div className="relative glass rounded-xl border border-border/50 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Program Preview</h3>
                      <p className="text-xs text-muted-foreground">Today&apos;s Routine</p>
                    </div>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md">
                    5 exercises
                  </span>
                </div>

                {/* Routine list */}
                <div className="p-4 space-y-2">
                  {routineItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {index + 1}
                      </div>
                      <span className="text-sm text-foreground flex-1">{item}</span>
                      <CheckCircle className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border/50 bg-secondary/20">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Est. time: 15-20 min</span>
                    <span className="text-primary">Start Session →</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border border-border/30 rounded-lg rotate-12 opacity-50" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border border-primary/20 rounded-xl -rotate-6 opacity-50" />
            </div>
          </HeartbeatElement>
        </div>
      </div>
    </HeartbeatSection>
  )
}
