"use client"

import { useReducedMotion } from "framer-motion"
import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Button } from "@/components/ui/button"
import { Mail, Calendar, MapPin, Users } from "lucide-react"

export function Seminar() {
  const shouldReduceMotion = useReducedMotion()

  const scrollToHero = () => {
    const element = document.querySelector("#hero")
    element?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" })
  }

  return (
    <HeartbeatSection
      id="seminar"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background texture animation */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.05) 2px,
              rgba(255,255,255,0.05) 4px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeartbeatElement delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Glow border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 via-transparent to-primary/30 rounded-2xl" />
            
            {/* Main card */}
            <div className="relative glass rounded-2xl p-8 sm:p-12 lg:p-16 border border-border/50">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
                <div>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                    Live Training
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    In-person Mat Ready Seminar
                  </h2>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Host at your gym</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 mb-10">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  I also offer MAT READY as an in-person seminar that can be held at your gym! If your gym is interested in hosting, please contact via email to discuss details.
                </p>

                {/* Dates info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Future Dates</h4>
                      <p className="text-muted-foreground text-sm">TBA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Previous Dates</h4>
                      <p className="text-muted-foreground text-sm">
                        10/26/25 & 11/2/25 — Team Forsa BJJ, Woburn, MA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  size="lg"
                  asChild
                >
                  <a href="mailto:Jmatteradpt@gmail.com?subject=Host%20a%20MAT%20Ready%20Seminar">
                    <Mail className="w-4 h-4 mr-2" />
                    Email to host a seminar
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/50 hover:border-primary/50 hover:bg-primary/5 text-foreground bg-transparent"
                  onClick={scrollToHero}
                >
                  Join waitlist
                </Button>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-xl" />
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden pointer-events-none">
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-xl" />
              </div>
            </div>
          </div>
        </HeartbeatElement>
      </div>
    </HeartbeatSection>
  )
}
