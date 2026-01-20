'use client'

import { Reveal } from '@/components/Reveal'
import { GraduationCap, Dumbbell, Award, Trophy } from 'lucide-react'

const credentials = [
  {
    icon: GraduationCap,
    title: 'Doctor of Physical Therapy',
  },
  {
    icon: Dumbbell,
    title: 'Strength Coach',
  },
  {
    icon: Award,
    title: 'BJJ Brown Belt',
  },
  {
    icon: Trophy,
    title: 'Active IBJJF Competitor',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder area */}
          <Reveal direction="left">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {/* Competition photo placeholder */}
                <div className="aspect-[3/4] bg-matready-black-light rounded-2xl overflow-hidden border border-matready-gray-dark/20">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-matready-red/5 to-transparent">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-matready-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Trophy className="w-8 h-8 text-matready-red" />
                      </div>
                      <p className="text-matready-gray text-sm">Competition Photo</p>
                    </div>
                  </div>
                </div>

                {/* Coaching photo placeholder */}
                <div className="aspect-[3/4] bg-matready-black-light rounded-2xl overflow-hidden border border-matready-gray-dark/20 mt-8">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-matready-red/5 to-transparent">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-matready-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Dumbbell className="w-8 h-8 text-matready-red" />
                      </div>
                      <p className="text-matready-gray text-sm">Coaching Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-matready-red/10 to-transparent blur-3xl" />
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Reveal direction="right">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-matready-red mb-8 italic">
                About the Instructor
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="text-matready-gray text-lg leading-relaxed mb-8">
                MAT READY was created by Dr. Jenna Mattera, a physical therapist who understands the
                unique demands of grappling because she lives them every day on the mats.
              </p>
            </Reveal>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <Reveal key={credential.title} direction="right" delay={0.2 + index * 0.1}>
                  <div className="flex items-center gap-3 p-4 bg-matready-black-light/40 rounded-xl border border-matready-gray-dark/20">
                    <div className="w-10 h-10 bg-matready-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <credential.icon className="w-5 h-5 text-matready-red" />
                    </div>
                    <span className="text-matready-white text-sm font-medium">
                      {credential.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="right" delay={0.6}>
              <p className="text-matready-gray mt-8 text-sm">
                As both a clinician and competitor, Dr. Mattera brings a unique perspective to injury
                prevention and performance optimization for combat athletes.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
