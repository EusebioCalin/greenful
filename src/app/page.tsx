// import Cards from '@/components/cards/Cards'
import About from '@/components/about/Content'
import Testimonials from '@/components/testimonials/Testimonials'
import LandingHero from '@/components/hero/LandingHero'
import text from '@/utils/en-US.json'
import Values from '@/components/coaching/Values'
import SecondaryHero from '@/components/secondaryHero/SecondaryHero'
import FAQ from '@/components/faq/FAQ'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <LandingHero text={text['hero.text1']} />
      <About />
      <SecondaryHero text={text['hero.text2']} />
      {/* <Cards /> */}
      <Testimonials />
      <Values />
      <FAQ />
    </main>
  )
}
