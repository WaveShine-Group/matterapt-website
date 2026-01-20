import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MAT READY Method | Building Resilient Grapplers',
  description:
    'An accessible, online platform to help keep your body healthy for BJJ & combat sports. A SYSTEM intelligently designed for LONG-TERM joint/muscle health.',
  keywords: [
    'BJJ',
    'Brazilian Jiu Jitsu',
    'mobility',
    'strength training',
    'combat sports',
    'physical therapy',
    'injury prevention',
    'grappling',
  ],
  authors: [{ name: 'Dr. Jenna Mattera, DPT' }],
  openGraph: {
    title: 'MAT READY Method | Building Resilient Grapplers',
    description:
      'Stay ON the mats and OUT of the doctor\'s office with simple mobility, strength, and recovery education.',
    url: 'https://www.matterapt.com/matready',
    siteName: 'MAT READY Method',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
