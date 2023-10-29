import Image from 'next/image'
import text from '@/utils/en-US.json'
import { getImage } from '@/utils/utils'

const About = async () => {
  const [imageData1, imageData2] = await Promise.all([
    getImage('/images/gallery_1.jpg'),
    getImage('/images/gallery_2.jpg'),
  ])

  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center leading-8'>
        <div id='despre' className='my-16 flex flex-col content-center items-center px-6 lg:px-0'>
          <h1 className='font-semibold uppercase text-3xl text-black'>
            {text['content.sectionTitle']}
          </h1>
          <div className='my-8'>
            <p className='text-xl'> {text['content.text2']}</p>
            <p className='text-xl'> {text['content.text3']}</p>
          </div>

          <div className='w-full grid md:gap-8 grid-cols-1 md:grid-cols-2 place-items-center'>
            <Image
              className='pb-4 md:p-0'
              src={imageData1.img}
              width={1500}
              height={1500}
              alt='Greenful'
              placeholder='blur'
              blurDataURL={imageData1.base64}
            />
            <Image
              className='pb-4 md:p-0'
              src={imageData2.img}
              width={1500}
              height={1500}
              alt='Greenful'
              placeholder='blur'
              blurDataURL={imageData2.base64}
            />
          </div>
          <div className='my-8'>
            <div className='mt-8'>
              <h1 className='mb-8 font-semibold uppercase text-xl text-black'>
                {text['content.sectionTitle2']}
              </h1>
              <div className='my-8'>
                <p className='text-xl'> {text['content.text4']}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
