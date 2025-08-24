import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}