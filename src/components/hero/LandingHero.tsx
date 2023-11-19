import cn from 'classnames'
import styles from './hero.module.scss'
import Image from 'next/image'
import { getImage } from '@/utils/utils'

const imageSrc = '/images/hero1_cats.jpeg'
const LandingHero = async ({ text }: { text: string }) => {
  const { base64, img } = await getImage(imageSrc)
  return (
    <section className='w-full text-left text-white'>
      <div className={cn('relative w-full', styles.imageClipPath, styles.heroContainer)}>
        <div className='fixed h-full w-full'>
          <Image
            unoptimized
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
        </div>
        <div className='absolute top-1/2 md:top-1/2 md:mt-1/2 md:w-1/2'>
          <h1 className={cn('leading-10 text-black text-5xl ml-8', styles.showAnim)}>{text}</h1>
        </div>
      </div>
    </section>
  )
}

export default LandingHero
