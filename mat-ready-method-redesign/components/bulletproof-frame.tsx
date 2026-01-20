"use client"

import Image from "next/image"
import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, Calendar } from "lucide-react"

const modules = [
  {
    duration: "6 WEEKS",
    title: "The Indestructible Knee",
    description: "MCL/LCL stability and meniscus protection protocols designed for heavy leg lockers and guard players.",
    level: "Beginner to Advanced",
    sessions: "12 Sessions",
    progress: 33,
    image: "/knee-card.webp",
  },
  {
    duration: "8 WEEKS",
    title: "Iron Shoulders",
    description: "Rotator cuff fortification against kimuras and americanas. Combined mobility and strength training.",
    level: "All Levels",
    sessions: "10 Sessions",
    progress: 0,
    image: "/shoulder-card.webp",
  },
  {
    duration: "4 WEEKS",
    title: "Tendinitis Protocol",
    description: "Specific eccentric loading for golfers and tennis elbow — the silent epidemic among gi players.",
    level: "Rehab Focus",
    sessions: "Daily Routine",
    progress: 0,
    image: "/tendonitis-card.webp",
  },
]

export function BulletproofFrame() {
  return (
    <HeartbeatSection
      id="modules"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
          <HeartbeatElement delay={0.1}>
            <div className="text-center">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Training Modules
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Bulletproof Your Frame
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Structured programs targeting the most vulnerable areas for grapplers. Each module builds progressively to create lasting tissue adaptations.
              </p>
            </div>
          </HeartbeatElement>
        </div>

        {/* Module cards - centered grid */}
        <HeartbeatElement delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8">
            {modules.map((module, index) => (
              <div
                key={module.title}
                className="w-[320px] sm:w-[360px]"
              >
                {/* Gradient card wrapper */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

                  <div className="relative h-full p-6 rounded-2xl bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                      <Clock className="w-3 h-3" />
                      {module.duration}
                    </div>

                    {/* Module image */}
                    <div className="aspect-[16/9] rounded-lg bg-secondary/50 mb-6 overflow-hidden border border-border/30">
                      <Image
                        src={module.image}
                        alt={module.title}
                        width={360}
                        height={203}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                      {module.description}
                    </p>

                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-1.5" />
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {module.level}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {module.sessions}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </HeartbeatElement>
      </div>
    </HeartbeatSection>
  )
}
