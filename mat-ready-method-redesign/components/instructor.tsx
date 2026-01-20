"use client"

import { useState } from "react"
import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Button } from "@/components/ui/button"
import { Mail, GraduationCap, Dumbbell, Award, Trophy } from "lucide-react"
import Image from "next/image"

const credentials = [
  { icon: GraduationCap, label: "DPT, CSCS" },
  { icon: Dumbbell, label: "Strength & Conditioning Specialist" },
  { icon: Award, label: "BJJ Brown Belt" },
  { icon: Trophy, label: "Active IBJJF Competitor" },
]

const portraits = [
  { src: "/portrait0.jpeg", alt: "Dr. Jenna Mattera - Clinical" },
  { src: "/portrait1.jpeg", alt: "Dr. Jenna Mattera - Training" },
  { src: "/portrait2.jpeg", alt: "Dr. Jenna Mattera - Competing" },
]

export function Instructor() {
  const [activePortrait, setActivePortrait] = useState(0)

  return (
    <HeartbeatSection
      id="instructor"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Portrait */}
          <HeartbeatElement delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-2xl blur-2xl" />

              <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden border border-border/50 bg-secondary/30">
                <Image
                  src={portraits[activePortrait].src}
                  alt={portraits[activePortrait].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
              </div>

              {/* Gallery row */}
              <div className="flex gap-3 mt-4 justify-center">
                {portraits.map((portrait, index) => (
                  <button
                    key={portrait.src}
                    onClick={() => setActivePortrait(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                      activePortrait === index
                        ? "border-primary shadow-[0_0_20px_hsl(0_70%_50%/0.3)]"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={portrait.src}
                      alt={portrait.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </HeartbeatElement>

          {/* Right: Content with gradient card */}
          <HeartbeatElement delay={0.1}>
            <div className="relative group">
              {/* Gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />

              <div className="relative p-6 sm:p-8 rounded-2xl bg-secondary/50 border border-primary/20 space-y-6">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  Your Instructor
                </span>

                <div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    Dr. Jenna Mattera
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Physical Therapist & Grappling Performance Specialist
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  With over a decade of experience treating athletes and a deep understanding of the demands placed on the grappler&apos;s body, Dr. Jenna has developed a comprehensive approach to keeping martial artists healthy and performing at their peak. She&apos;s also the author of a rehabilitation textbook used by physical therapy professionals nationwide.
                </p>

                <div className="flex flex-wrap gap-3">
                  {credentials.map((cred) => (
                    <div
                      key={cred.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-primary/20 text-sm text-foreground hover:border-primary/40 transition-colors"
                    >
                      <cred.icon className="w-4 h-4 text-primary" />
                      {cred.label}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50 hover:bg-primary/5 text-foreground bg-transparent"
                  asChild
                >
                  <a href="mailto:Jmatteradpt@gmail.com?subject=Question%20about%20MAT%20Ready%20Method">
                    <Mail className="w-4 h-4 mr-2" />
                    Email a question
                  </a>
                </Button>
              </div>
            </div>
          </HeartbeatElement>
        </div>
      </div>
    </HeartbeatSection>
  )
}
