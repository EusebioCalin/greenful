import cn from 'classnames'
import styles from './hero.module.scss'
import Image from 'next/image'
import { getImage } from '@/utils/utils'

const imageSrc = '/images/hero2.jpeg'

const SecondaryHero = async ({ text }: { text: string }) => {
  const { base64, img } = await getImage(imageSrc)

  return (
    <>
      <section className='w-full text-left text-white'>
        <div className={`min-h-[60vh] md:min-h-[50vh] relative w-full ${styles.imageClipPath}`}>
          <div className='fixed h-full w-full top-0 left-0'>
            <Image
              priority
              src={img}
              alt='Greenful'
              placeholder='blur'
              blurDataURL={base64}
              quality={100}
              fill
              style={{
                objectFit: 'cover',
              }}
              unoptimized
            />
          </div>
          <div className='absolute top-1/3 md:top-1/2 md:mt-1/2 md:w-1/2'>
            <h1 className={cn('text-5xl ml-8 leading-10', styles.showAnim)}>{text}</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecondaryHero
