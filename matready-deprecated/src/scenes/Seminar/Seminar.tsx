'use client'

import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/Button'
import { MapPin, Calendar, Mail } from 'lucide-react'

export function Seminar() {
  return (
    <section id="seminar" className="section-padding bg-matready-black-light/30">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-matready-red mb-6 italic">
              In-Person MAT READY Seminar
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-matready-gray text-lg sm:text-xl mb-10 leading-relaxed">
              MAT READY is also offered as an in-person seminar that can be held at your gym. If your
              gym is interested in hosting, please contact via email to discuss details.
            </p>
          </Reveal>

          {/* Dates */}
          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {/* Future dates */}
              <div className="p-6 bg-matready-black/60 rounded-2xl border border-matready-gray-dark/20">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <Calendar className="w-5 h-5 text-matready-red" />
                  <h3 className="font-heading text-xl font-bold text-matready-white italic">
                    Future Dates
                  </h3>
                </div>
                <p className="text-matready-gray text-lg">TBA</p>
              </div>

              {/* Previous dates */}
              <div className="p-6 bg-matready-black/60 rounded-2xl border border-matready-gray-dark/20">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <MapPin className="w-5 h-5 text-matready-red" />
                  <h3 className="font-heading text-xl font-bold text-matready-white italic">
                    Previous Dates
                  </h3>
                </div>
                <div className="space-y-2 text-matready-gray">
                  <p>10/26/25 at Team Forsa BJJ</p>
                  <p>11/2/25 at Team Forsa BJJ</p>
                  <p className="text-sm text-matready-gray/70">Woburn, MA</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.3}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:Jmatteradpt@gmail.com?subject=MAT%20READY%20Seminar%20Inquiry"
                className="inline-block"
              >
                <Button size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Contact to Host a Seminar
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
