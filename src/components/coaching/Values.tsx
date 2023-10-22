import texts from '@/utils/en-US.json'
import Image from 'next/image'
import { getImage } from '@/utils/utils'

const Values = async () => {
  const { base64, img } = await getImage('/images/about.jpg')

  const faqItems = Object.keys(texts)
    .filter((t) => t.includes('values.text'))
    // @ts-expect-error : text exists
    .map((elem, id) => <li key={id}>{texts[elem]}</li>)

  return (
    <section id='about' className='max-w-screen-xl px-6'>
      <div className='mt-16 flex flex-col content-center items-center'>
        <h1 className='font-semibold leading-8 uppercase text-3xl text-black text-center'>
          {texts['values.title']}
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8 place-items-center'>
          <Image
            className='self-center lg:col-span-1'
            src={img}
            width={500}
            height={1000}
            alt='Greenful'
            placeholder='blur'
            blurDataURL={base64}
          />
          <div>
            <div className='font-semibold uppercase text-xl text-black text-center md:text-left mb-4'>
              {texts['values.sectionTitle']}
            </div>
            <ul className='text-xl list-disc px-6 md:px-0'>{faqItems}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
