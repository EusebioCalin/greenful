import CardCarousel from '@/components/cardCarousel/CardCarousel'
import texts from '@/utils/en-US.json'

const carouselData = [
  {
    image: '/images/app_1.jpeg',
    imageDimensions: {
      height: 300,
      width: 300,
    },
  },
  {
    image: '/images/app_2.jpeg',
    imageDimensions: {
      height: 300,
      width: 300,
    },
  },
  {
    image: '/images/app_3.jpeg',
    imageDimensions: {
      height: 300,
      width: 300,
    },
  },
  {
    image: '/images/app_4.jpeg',
    imageDimensions: {
      height: 300,
      width: 300,
    },
  },
]

const FitrApp = async () => {
  const faqItems = Object.keys(texts)
    .filter((t) => t.includes('fitr.listItem'))
    // @ts-expect-error : text exists
    .map((elem, id) => <li key={id}>{texts[elem]}</li>)

  return (
    <section className='max-w-screen-xl px-6'>
      <div className='mt-16 flex flex-col content-center items-center'>
        <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
          {texts['fitr.title']}
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8 place-items-center'>
          <div className='px-6'>
            <div className='text-xl text-center md:text-left mb-4'>{texts['fitr.text']}</div>
            <div className='font-semibold uppercase text-xl text-color-secondary text-center md:text-left mb-4'>
              {texts['fitr.listText']}
            </div>
            <ul className='text-xl list-disc px-6 md:px-0'>{faqItems}</ul>
          </div>
          <div className='lg:col-span-1 grid grid-cols-1 place-items-center'>
            <CardCarousel data={carouselData} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FitrApp
