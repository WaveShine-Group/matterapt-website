import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Mat Ready Method | Mobility, Strength & Recovery for BJJ',
  description: 'A DPT-led system for mobility, strength, and recovery built specifically for BJJ & combat sports athletes. Stay on the mats and out of the doctor\'s office.',
  keywords: ['BJJ', 'mobility', 'strength', 'recovery', 'combat sports', 'physical therapy', 'grappling'],
  authors: [{ name: 'Mat Ready Method' }],
  openGraph: {
    title: 'Mat Ready Method | Mobility, Strength & Recovery for BJJ',
    description: 'A DPT-led system for mobility, strength, and recovery built specifically for BJJ & combat sports athletes.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#121216',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${oswald.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
