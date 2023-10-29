import texts from '@/utils/en-US.json'
import Image from 'next/image'
import { getImage } from '@/utils/utils'
import QualitySvg from '../../assets/icons/quality.svg'
import HandshakeSvg from '../../assets/icons/handshake.svg'
import IdeaSvg from '../../assets/icons/idea.svg'
import StarSvg from '../../assets/icons/star.svg'
import MagnifierSvg from '../../assets/icons/magnifier.svg'

const valuesIconsArray = [QualitySvg, MagnifierSvg, StarSvg, HandshakeSvg, IdeaSvg]

const Values = async () => {
  const { base64, img } = await getImage('/images/greenful_cats.jpg')

  const services = Object.keys(texts)
    .filter((t) => t.includes('values.text'))

    .map((elem, id) => (
      <div
        key={id}
        className='flex flex-col justify-center items-center shadow-md gap-6 transition ease-in-out transform hover:shadow-lg duration-500 '
      >
        <div className='bg-color-secondary w-full flex items-center justify-center px-6 py-2'>
          <Image width={50} height={50} src={valuesIconsArray[id]} alt='greenful' />
        </div>
        {/* @ts-expect-error asdsadasd */}
        <div className='text-xl	text-center font-semibold flex-1 px-6'>{texts[elem]}</div>
      </div>
    ))

  return (
    <section id='values' className='max-w-screen-xl px-6'>
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
            <div className='text-xl text-black'>{texts['values.sectionTitle']}</div>
            <div className='mt-8 grid grid-cols-2 lg:grid-cols-3 gap-8'>{services}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
