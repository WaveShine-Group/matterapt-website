'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { Reveal } from '@/components/Reveal'
import { useState } from 'react'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  subscribe: z.boolean(),
})

type EmailFormData = z.infer<typeof emailSchema>

export function Hero() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: { subscribe: true },
  })

  const onSubmit = async (data: EmailFormData) => {
    // Simulated form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-matready-black via-matready-black-light/20 to-matready-black" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container-max w-full text-center">
        {/* Logo */}
        <Reveal delay={0}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-matready-red rounded-lg flex items-center justify-center bg-matready-black/80">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-matready-red">MR</span>
                </div>
                {/* Grappler silhouette */}
                <svg
                  className="absolute -bottom-2 -right-2 w-10 h-10 text-matready-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z"/>
                </svg>
              </div>
              <div className="text-left">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-matready-white">MAT READY</span>
                  <br />
                  <span className="text-matready-red">METHOD</span>
                </h1>
                <p className="text-matready-gray text-sm sm:text-base mt-1 tracking-widest uppercase">
                  Building Resilient Grapplers
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.2}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-matready-white font-light max-w-3xl mx-auto mb-12 text-balance">
            Stay <span className="font-semibold text-matready-red">ON</span> the mats and{' '}
            <span className="font-semibold text-matready-red">OUT</span> of the doctor's office with
            simple mobility, strength, and recovery education.
          </p>
        </Reveal>

        {/* Email signup form */}
        <Reveal delay={0.4}>
          <div className="max-w-lg mx-auto">
            <div className="bg-matready-black-light/60 backdrop-blur-sm border border-matready-gray-dark/30 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-semibold text-matready-white mb-2">
                Interested? Subscribe Here
              </h2>
              <p className="text-matready-gray text-sm mb-6">
                Receive an email notification re: release date, pricing, & special deals.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4"
                >
                  <div className="w-12 h-12 bg-matready-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-matready-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-matready-white font-medium">You're on the list!</p>
                  <p className="text-matready-gray text-sm mt-1">We'll notify you when MAT READY launches.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-matready-gray mb-2 text-left">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g., email@example.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Checkbox
                      id="subscribe"
                      label="I want to subscribe to your mailing list."
                      {...register('subscribe')}
                    />
                    <Button type="submit" size="md" isLoading={isSubmitting}>
                      Join
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <Reveal delay={0.6}>
          <motion.div
            className="mt-16"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 border-2 border-matready-gray-dark rounded-full mx-auto flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-matready-red rounded-full" />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
