"use client"

import React from "react"
import { useState } from "react"
import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Instagram, Facebook, ExternalLink, Phone, Mail, CalendarCheck, MapPin } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <HeartbeatSection className="relative pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-background to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Final CTA Section */}
        <HeartbeatElement delay={0.1}>
          <div className="text-center mb-16 pb-16 border-b border-border/30">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Be resilient. Train hard. Recover smarter.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto text-pretty">
              Join the waitlist and be the first to access the Mat Ready Method when it launches.
            </p>

            {/* Email capture */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <Input
                id="footer-email"
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
          </div>
        </HeartbeatElement>

        {/* Footer bottom - Contact Info */}
        <HeartbeatElement delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Dr. Jenna Mattera, DPT, CSCS
              </h3>
              <div className="space-y-3">
                <a
                  href="https://matterapt.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>FREE PHONE CONSULT!</span>
                </a>
                <a
                  href="mailto:Jmatteradpt@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>EMAIL</span>
                </a>
                <a
                  href="https://matterapt.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <CalendarCheck className="w-4 h-4 text-primary" />
                  <span>BOOK ONLINE</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground">Location</h3>
              <a
                href="https://maps.app.goo.gl/cpMogYzYwDhpUqH29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <span>Located inside Team Forsa BJJ</span>
                  <br />
                  2 Cedar St., Woburn, MA
                </div>
              </a>
              <p className="text-sm text-muted-foreground italic">
                Hours: by appointment only
                <br />
                (Sun-Tues & Thursday)
              </p>
            </div>

            {/* Social & Brand */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground">Connect</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/matterapt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/p/Mattera-Physical-Therapy-100076069382071/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <a
                href="https://matterapt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 group"
                style={{
                  backgroundColor: 'var(--mattera-lime)',
                  color: 'var(--mattera-navy)',
                  borderColor: 'var(--mattera-lime)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(210 100% 50%)'
                  e.currentTarget.style.borderColor = 'hsl(210 100% 50%)'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.boxShadow = '0 0 12px hsl(210 100% 50% / 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--mattera-lime)'
                  e.currentTarget.style.borderColor = 'var(--mattera-lime)'
                  e.currentTarget.style.color = 'var(--mattera-navy)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                A product of Mattera Physical Therapy
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Mattera Physical Therapy. All rights reserved.
            </p>
          </div>
        </HeartbeatElement>
      </div>
    </HeartbeatSection>
  )
}
