'use client'

import { Reveal } from '@/components/Reveal'
import { Target, Scan, Dumbbell, ClipboardList } from 'lucide-react'
import { cn } from '@/lib/cn'

const features = [
  {
    icon: Target,
    title: 'Position-Specific Mobility',
    description: 'Learn how your joints need to move for SPECIFIC positions in BJJ & combat sports',
  },
  {
    icon: Scan,
    title: 'Quick Self-Assessment',
    description: 'A quick self-assessment of mobility to identify your weak points and priorities',
  },
  {
    icon: Dumbbell,
    title: 'Targeted Exercises',
    description: 'Exercises to improve mobility & strength at each joint, designed for grapplers',
  },
  {
    icon: ClipboardList,
    title: 'Program Design',
    description: 'How to design your own mobility & strength program tailored to your unique needs',
  },
]

export function Features() {
  return (
    <section id="features" className="section-padding bg-matready-black-light/30">
      <div className="container-max">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-matready-white mb-4">
              What is <span className="text-matready-red">MAT READY</span>?
            </h2>
            <p className="text-matready-gray text-lg sm:text-xl max-w-3xl mx-auto">
              An accessible, online platform to help keep your body healthy for BJJ & combat sports.
            </p>
          </div>
        </Reveal>

        {/* Differentiator */}
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <p className="text-xl sm:text-2xl text-matready-white">
              This is <span className="font-bold text-matready-red">NOT</span> just an app where you
              watch and select random exercises...
            </p>
            <p className="text-xl sm:text-2xl text-matready-white">
              It is a <span className="font-bold text-matready-red">SYSTEM</span> that is intelligently
              designed to help you achieve and maintain{' '}
              <span className="font-bold">LONG-TERM</span> joint/muscle health.
            </p>
          </div>
        </Reveal>

        {/* What's included header */}
        <Reveal delay={0.2}>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-matready-red text-center mb-12 italic">
            What is included?
          </h3>
        </Reveal>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={0.3 + index * 0.1}>
              <div
                className={cn(
                  'group relative p-6 sm:p-8 rounded-2xl',
                  'bg-matready-black/60 border border-matready-gray-dark/20',
                  'hover:border-matready-red/40 transition-all duration-300',
                  'hover:bg-matready-black/80'
                )}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-matready-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-matready-red/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-matready-red" />
                </div>

                {/* Content */}
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-matready-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-matready-gray leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-matready-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
