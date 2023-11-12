'use client'
import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import styles from './Carousel.module.scss'

export default function Carousel({
  data,
  carouselType = 'navigation',
  preventInteractionOnTransition = false,
}: {
  data: Array<ReactNode>
  carouselType?: 'navigation' | 'cards' | 'galery'
  preventInteractionOnTransition?: boolean
}) {
  const renderedItems = data.map((elem, index) => (
    <SwiperSlide key={`swiper_${index}`}>{elem}</SwiperSlide>
  ))

  if (carouselType === 'navigation' || carouselType === 'galery') {
    return (
      <>
        <Swiper
          preventInteractionOnTransition={preventInteractionOnTransition}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          cssMode={carouselType === 'galery'}
          modules={[Navigation, Pagination]}
          className={carouselType === 'galery' ? styles.mySwiperGallery : styles.mySwiper}
        >
          {renderedItems}
        </Swiper>
      </>
    )
  }
  if (carouselType === 'cards') {
    return (
      <Swiper
        effect='cards'
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCards, Pagination]}
        className={styles.mySwiperCards}
      >
        {renderedItems}
      </Swiper>
    )
  }
}
