"use client"

import { HeartbeatSection, HeartbeatElement } from "./heartbeat-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Who is this for?",
    answer: "Mat Ready Method is designed for anyone who practices BJJ, wrestling, judo, or any combat sport. Whether you're a hobbyist who trains a few times per week or an active competitor, this system will help you maintain long-term joint and muscle health so you can train consistently without injury setbacks.",
  },
  {
    question: "Is this just an exercise library?",
    answer: "Absolutely not. This is a complete SYSTEM, not a random collection of exercises. It includes self-assessments to identify your specific limitations, targeted exercises for each joint, and guidance on how to design your own personalized mobility and strength program. Everything is intelligently designed to work together.",
  },
  {
    question: "What equipment do I need?",
    answer: "The program is designed to be accessible with minimal equipment. Most exercises can be done with just your body weight. For some optional progressions, you may benefit from basic items like resistance bands or a foam roller, but they're not required to get started.",
  },
  {
    question: "How fast will I notice a difference?",
    answer: "Many users report feeling improved mobility and reduced stiffness within the first few weeks of consistent practice. However, the real value of this system is in long-term joint health and injury prevention. Stick with it, and you'll be training hard for years to come.",
  },
  {
    question: "When does it launch / pricing?",
    answer: "We're currently finalizing the platform and will be launching soon. Join the waitlist to be the first to know about the release date, pricing, and any special early-bird deals. Waitlist members will receive exclusive offers.",
  },
  {
    question: "Can my gym host a seminar?",
    answer: "Yes! We offer in-person Mat Ready seminars that can be held at your gym. If you're a gym owner or coach interested in bringing this training to your team, please reach out via email to discuss details, availability, and logistics.",
  },
]

export function FAQ() {
  return (
    <HeartbeatSection
      id="faq"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <HeartbeatElement delay={0.1}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              FAQ
            </span>
          </HeartbeatElement>

          <HeartbeatElement delay={0.2}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Frequently Asked Questions
            </h2>
          </HeartbeatElement>

          <HeartbeatElement delay={0.3}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, feel free to reach out.
            </p>
          </HeartbeatElement>
        </div>

        {/* Accordion with gradient wrapper */}
        <HeartbeatElement delay={0.4}>
          <div className="relative">
            {/* Gradient glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 rounded-2xl blur-xl opacity-50" />

            <div className="relative p-4 sm:p-6 rounded-2xl bg-secondary/30 border border-primary/20">
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary/20 rounded-xl px-6 bg-secondary/50 hover:bg-secondary/70 transition-colors data-[state=open]:bg-secondary/70 data-[state=open]:border-primary/40"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-5 [&[data-state=open]>svg]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </HeartbeatElement>
      </div>
    </HeartbeatSection>
  )
}
