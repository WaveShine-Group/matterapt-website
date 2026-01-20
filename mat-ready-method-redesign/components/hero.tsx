"use client"

import React from "react"
import { useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Stethoscope, Target, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"

const trustChips = [
  { icon: Stethoscope, label: "DPT-led" },
  { icon: Target, label: "Combat sports specific" },
  { icon: Heart, label: "Long-term joint health" },
]

export function Hero() {
  const [email, setEmail] = useState("")
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <HeartbeatSection
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
      >
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlays - heavier at top for navbar legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo - front and center */}
        <HeartbeatElement delay={0.05}>
          <div className="mb-8">
            <Image
              src="/matready-logo.jpeg"
              alt="MAT Ready Method"
              width={400}
              height={100}
              className="h-20 sm:h-24 md:h-28 w-auto mx-auto"
              priority
            />
          </div>
        </HeartbeatElement>

        {/* Pill callout */}
        <HeartbeatElement delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            A SYSTEM, not random exercises.
          </div>
        </HeartbeatElement>

        {/* Headline */}
        <HeartbeatElement delay={0.2}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 text-balance">
            Stay{" "}
            <span className="text-primary">ON</span>{" "}
            the mats and{" "}
            <span className="text-primary">OUT</span>{" "}
            of the doctor&apos;s office.
          </h1>
        </HeartbeatElement>

        {/* Subheadline */}
        <HeartbeatElement delay={0.3}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            A simple system for mobility, strength, and recovery built for grapplers.
          </p>
        </HeartbeatElement>

        {/* Email capture form with CTA glow + floating animation */}
        <HeartbeatElement delay={0.4}>
          <motion.div
            className="max-w-md mx-auto p-6 rounded-xl bg-secondary/80 border border-primary/30 backdrop-blur-sm"
            style={{ boxShadow: '0 0 40px hsl(0 70% 50% / 0.25), 0 0 80px hsl(0 70% 50% / 0.1)' }}
            animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="hero-email" className="sr-only">Email address</label>
              <Input
                id="hero-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background focus:border-primary/50"
                required
              />
              <Button
                type="submit"
                className="h-12 px-6 bg-primary hover:bg-primary/90 hover:brightness-110 hover:scale-[1.02] text-primary-foreground font-medium group transition-all duration-200"
              >
                Join
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              Receive an email notification re: release date, pricing, & special deals.
            </p>
          </motion.div>
        </HeartbeatElement>

        {/* Trust chips */}
        <HeartbeatElement delay={0.5}>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {trustChips.map((chip, index) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground backdrop-blur-sm"
              >
                <chip.icon className="h-4 w-4 text-primary" />
                {chip.label}
              </motion.div>
            ))}
          </div>
        </HeartbeatElement>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </HeartbeatSection>
  )
}
