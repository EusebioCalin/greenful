import cn from 'classnames'
import styles from './Card.module.scss'
import Image from 'next/image'
import { getImage } from '@/utils/utils'

const Card = async ({ title, text, image }: { title: string; text: string; image: string }) => {
  const { base64, img } = await getImage(image)

  return (
    <div className={cn(styles.card, 'w-10/12 md:w-full min-h-[400px] bg-cover bg-center relative')}>
      <Image
        priority
        src={img}
        alt='Greenful'
        placeholder='blur'
        blurDataURL={base64}
        quality={100}
        fill
        sizes='100vw'
        style={{
          objectFit: 'cover',
        }}
      />
      <div className={cn(styles.content)}>
        <div
          className={cn(
            styles.textAnim,
            'relative min-h-[400px] px-4 flex flex-col justify-around items-center',
          )}
        >
          <h1 className='font-semibold leading-8 uppercase text-2xl'>{title}</h1>
          <p className='leading-5 uppercase text-xl'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
