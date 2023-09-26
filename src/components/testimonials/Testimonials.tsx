import texts from '@/utils/en-US.json'
import Carousel from '@/components/carousel/Carousel'
import TestimonialCardsCarouselCard from '../card/TestimonialsCarouselCard'

const Testimonials = () => {
  const testimonials = Object.keys(texts).filter((t) => t.includes('testimonials.text'))

  const carouselCards = testimonials.map((elem, index) => (
    <TestimonialCardsCarouselCard
      key={`index_${elem}`}
      // @ts-expect-error: the text exists
      clientName={texts[`testimonials.name${index + 1}`]}
      // @ts-expect-error: the text exists
      text={texts[elem]}
      // @ts-expect-error: the text exists
      image={texts[`testimonials.picture${index + 1}`]}
    />
  ))
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-left md:px-0'>
        <div className='mt-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['testimonials.title']}
          </h1>

          <div className='hidden md:grid grid-cols-1 mt-8 relative max-w-screen-xl'>
            <Carousel carouselType='cards' data={carouselCards} />
          </div>
          <div className='md:hidden mt-8 grid grid-cols-1 place-items-center'>
            <Carousel data={carouselCards} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
