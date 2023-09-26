import { getImage } from '@/utils/utils'
import Image from 'next/image'

export const NavigationCarouselCard = async ({
  title,
  text,
  image,
  imageDimensions,
}: {
  title: string
  text: string
  image: string
  imageDimensions?: {
    width: number
    height: number
  }
}) => {
  const { base64, img } = await getImage(image)

  return (
    <div className='flex flex-col items-center justify-center w-full md:w-2/3 m-auto text-center relative mb-4'>
      {title && (
        <h1 className='font-semibold leading-8 text-center uppercase text-3xl mb-4'>{title}</h1>
      )}
      <Image
        src={img}
        width={imageDimensions?.width || 500}
        height={imageDimensions?.height || 500}
        alt='Greenful'
        placeholder='blur'
        blurDataURL={base64}
      />
      <p className='text-xl text-center my-4'>{text}</p>
    </div>
  )
}

export default NavigationCarouselCard
