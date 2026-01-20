'use client'

import { Reveal } from '@/components/Reveal'
import { Mail, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="section-padding bg-matready-black border-t border-matready-gray-dark/20">
      <div className="container-max">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-matready-red rounded-lg flex items-center justify-center bg-matready-black">
                <span className="font-heading text-xl font-bold text-matready-red">MR</span>
              </div>
              <div className="text-left">
                <span className="font-heading text-xl font-bold text-matready-white block">
                  MAT READY
                </span>
                <span className="text-matready-gray text-xs tracking-wider uppercase">
                  Building Resilient Grapplers
                </span>
              </div>
            </div>
          </Reveal>

          {/* Contact links */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6 mb-8">
              <a
                href="mailto:Jmatteradpt@gmail.com"
                className="flex items-center gap-2 text-matready-gray hover:text-matready-red transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Jmatteradpt@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/matterapt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-matready-gray hover:text-matready-red transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@matterapt</span>
              </a>
            </div>
          </Reveal>

          {/* Main site link */}
          <Reveal delay={0.2}>
            <a
              href="https://www.matterapt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matready-gray hover:text-matready-white transition-colors text-sm mb-8"
            >
              Visit Mattera Physical Therapy →
            </a>
          </Reveal>

          {/* Copyright */}
          <Reveal delay={0.3}>
            <div className="pt-6 border-t border-matready-gray-dark/20 w-full">
              <p className="text-matready-gray/60 text-sm">
                © {new Date().getFullYear()} Mattera Physical Therapy. All rights reserved.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  )
}
