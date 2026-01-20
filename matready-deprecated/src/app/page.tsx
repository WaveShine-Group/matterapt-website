import { Hero } from '@/scenes/Hero'
import { Features } from '@/scenes/Features'
import { About } from '@/scenes/About'
import { Seminar } from '@/scenes/Seminar'
import { Footer } from '@/scenes/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Seminar />
      <Footer />
    </main>
  )
}
