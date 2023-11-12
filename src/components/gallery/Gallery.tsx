'use client'
import ReactCompareImage from 'react-compare-image'
import Carousel from '../carousel/Carousel'
import texts from '@/utils/en-US.json'

export const Gallery = () => {
  const galleryData = [
    {
      leftImage: '/images/gallery_1_before.jpeg',
      rightImage: '/images/gallery_1_after.jpeg',
    },
    {
      leftImage: '/images/gallery_2_before.jpeg',
      rightImage: '/images/gallery_2_after.jpeg',
    },
    {
      leftImage: '/images/gallery_3_before.jpg',
      rightImage: '/images/gallery_3_after.jpg',
    },
  ]
  const carouselData = galleryData.map((elem, index) => (
    <ReactCompareImage
      key={index}
      leftImage={elem.leftImage}
      rightImage={elem.rightImage}
      vertical
      hover
      aspectRatio='wider'
    />
  ))

  return (
    <section id='contact' className='max-w-screen-xl  text-left'>
      <div className='mt-16 flex flex-col content-center items-center'>
        <h1 className='font-semibold leading-8 uppercase text-3xl text-black'>
          {texts['gallery.title']}
        </h1>
      </div>

      <div className='hidden mt-8 lg:grid grid-cols-1 place-items-center'>
        <Carousel data={carouselData} preventInteractionOnTransition={true} carouselType='galery' />
      </div>
      <div className='grid grid-cols-1  lg:hidden place-items-center'>
        {galleryData.map((elem, index) => (
          <div key={index} className='w-[320px] h-[300px] md:w-[650px] md:h-[450px]'>
            <ReactCompareImage
              leftImage={elem.leftImage}
              rightImage={elem.rightImage}
              aspectRatio='wider'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
