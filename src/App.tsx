import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Facilities from '@/components/Facilities'
import Rooms from '@/components/Rooms'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import MobileBottomMenu from '@/components/MobileBottomMenu'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pb-0 md:pb-0">
        <section id="home">
          <Hero />
        </section>
        <section id="facilities">
          <Facilities />
        </section>
        <section id="rooms">
          <Rooms />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact" className="mb-16 md:mb-0">
          <Contact />
        </section>
      </div>
      <MobileBottomMenu />
      <Toaster />
    </div>
  )
}

export default App
