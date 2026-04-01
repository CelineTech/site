import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import WhyCeline from '@/components/WhyCeline'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Cases />
      <WhyCeline />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  )
}
