"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "What is MAT Ready?", href: "#what-is-matready" },
  { label: "The Method", href: "#pillars" },
  { label: "Modules", href: "#modules" },
  { label: "Instructor", href: "#instructor" },
  { label: "Seminar", href: "#seminar" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      firstMenuItemRef.current?.focus()
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [mobileOpen])

  const handleFocusTrap = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !menuRef.current) return
    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault()
      lastElement?.focus()
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault()
      firstElement?.focus()
    }
  }, [])

  const scrollToSection = (href: string) => {
    setMobileOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <Image
                src="/matready-logo.jpeg"
                alt="MAT Ready Method"
                width={200}
                height={50}
                className="h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
              <span
                className="px-2 py-1 text-xs font-medium rounded-full transition-all duration-200 group-hover:scale-105"
                style={{ backgroundColor: 'var(--mattera-lime)', color: 'var(--mattera-navy)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(210 100% 50%)'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.boxShadow = '0 0 12px hsl(210 100% 50% / 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--mattera-lime)'
                  e.currentTarget.style.color = 'var(--mattera-navy)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                by Mattera PT
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-secondary/50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => scrollToSection("#hero")}
                className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                size="sm"
              >
                Join Waitlist
              </Button>
              
              {/* Mobile menu button */}
              <button
                ref={menuButtonRef}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <motion.div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ x: "100%" }}
          animate={{ x: mobileOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-0 bottom-0 w-64 glass-strong border-l border-border/50 pt-20 px-4"
          onKeyDown={handleFocusTrap}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                ref={index === 0 ? firstMenuItemRef : undefined}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#hero")}
              className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
