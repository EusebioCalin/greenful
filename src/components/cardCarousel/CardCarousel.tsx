import Carousel from '@/components/carousel/Carousel'
import texts from '@/utils/en-US.json'
import CarouselCard from '@/components/card/NavigationCarouselCard'

interface IPTCardCarousel {
  data: Array<{
    title?: string
    text?: string
    image: string
    imageDimensions?: { width: number; height: number }
  }>
}

const PersonalTrainingCardCarousel = ({ data }: IPTCardCarousel) => {
  const carouselCards = data.map((elem) => (
    <CarouselCard
      key={elem.title}
      // @ts-expect-error : text exists
      title={texts[elem.title]}
      // @ts-expect-error : text exists
      text={texts[elem.text]}
      image={elem.image}
      imageDimensions={elem.imageDimensions}
    />
  ))

  return <Carousel data={carouselCards} />
}

export default PersonalTrainingCardCarousel
