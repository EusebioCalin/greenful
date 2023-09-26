import { getImage } from '@/utils/utils'
import Image from 'next/image'

const TestimonialCardsCarouselCard = async ({
  text,
  image,
  clientName,
}: {
  text: string
  image: string
  clientName: string
}) => {
  const { base64, img } = await getImage(`/images/${image}`)
  return (
    <div className='flex flex-col items-center justify-start my-8 h-full'>
      <div className={'rounded-full overflow-hidden'}>
        <Image
          src={img}
          height={100}
          width={100}
          placeholder='blur'
          blurDataURL={base64}
          alt='testiomonials Greenful'
        />
      </div>

      <h1 className='my-4 text-3xl text-color-secondary'>{clientName}</h1>
      <p className='text-md text-center mx-16'>{text}</p>
    </div>
  )
}

export default TestimonialCardsCarouselCard
