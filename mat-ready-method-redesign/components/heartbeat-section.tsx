"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface HeartbeatSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export function HeartbeatSection({ children, className = "", delay = 0, id }: HeartbeatSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const shouldReduceMotion = useReducedMotion()

  const heartbeatVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, delay } }
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={shouldReduceMotion ? reducedMotionVariants : heartbeatVariants}
    >
      {children}
    </motion.section>
  )
}

export function HeartbeatElement({ 
  children, 
  className = "", 
  delay = 0,
  as: Component = "div" 
}: { 
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "span" | "article" | "aside"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const shouldReduceMotion = useReducedMotion()

  const heartbeatVariants = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, delay } }
  }

  const MotionComponent = motion[Component]

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={shouldReduceMotion ? reducedMotionVariants : heartbeatVariants}
    >
      {children}
    </MotionComponent>
  )
}
