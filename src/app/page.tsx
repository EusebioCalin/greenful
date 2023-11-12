// import Cards from '@/components/cards/Cards'
import About from '@/components/about/Content'
import Testimonials from '@/components/testimonials/Testimonials'
import LandingHero from '@/components/hero/LandingHero'
import text from '@/utils/en-US.json'
import Values from '@/components/values/Values'
import SecondaryHero from '@/components/secondaryHero/SecondaryHero'
import FAQ from '@/components/faq/FAQ'
import Services from '@/components/services/Services'
import Contact from '@/components/contact/Contact'
import { Gallery } from '@/components/gallery/Gallery'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <LandingHero text={text['hero.text1']} />
      <About />
      <SecondaryHero text={text['hero.text2']} />
      <Services />
      <Testimonials />
      <Values />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  )
}
