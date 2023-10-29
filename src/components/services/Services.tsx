import texts from '@/utils/en-US.json'
import Image from 'next/image'
import HouseSvg from '../../assets/icons/house.svg'
import CarSvg from '../../assets/icons/car.svg'
import ChairSvg from '../../assets/icons/chair.svg'
import MalletSvg from '../../assets/icons/mallet.svg'
import WindowSvg from '../../assets/icons/window.svg'
import VacuumSvg from '../../assets/icons/vacuum.svg'
import Vacuum2Svg from '../../assets/icons/vacuum2.svg'
import BroomSvg from '../../assets/icons/broom.svg'
import CatSvg from '../../assets/icons/cat.svg'
import Carousel from '../carousel/Carousel'
import { ReactNode } from 'react'

const iconsArray = [
  HouseSvg,
  VacuumSvg,
  MalletSvg,
  WindowSvg,
  Vacuum2Svg,
  BroomSvg,
  ChairSvg,
  CarSvg,
  CatSvg,
]
const Services = async () => {
  const services = Object.keys(texts).filter((t) => t.includes('services.text'))
  const gridServices = services.map((elem, index) => (
    <div
      key={index}
      className='flex flex-col justify-center items-center shadow-md gap-6 p-6 transition ease-in-out transform hover:shadow-lg hover:scale-110 duration-500'
    >
      <Image width={50} height={50} src={iconsArray[index]} alt='greenful' />
      {/* @ts-expect-error asdasdas */}
      <div className='text-xl	text-center font-semibold flex-1'>{texts[elem]}</div>
    </div>
  ))

  const cardServices: ReactNode[] = []
  services.forEach((elem, index) => {
    if (index % 3 === 0) {
      cardServices.push(
        <div
          key={index}
          className='flex flex-col gap-10 p-6 justify-center items-center min-h-[500px]'
        >
          <div className='flex flex-col justify-center items-center gap-6 '>
            <Image width={50} height={50} src={iconsArray[index]} alt='greenful' />
            {/* @ts-expect-error asdasdas */}
            <div className='text-xl	text-center font-semibold flex-1'>{texts[services[index]]}</div>
          </div>
          <div className='flex flex-col justify-center items-center gap-6 '>
            <Image width={50} height={50} src={iconsArray[index + 1]} alt='greenful' />
            <div className='text-xl	text-center font-semibold flex-1'>
              {/* @ts-expect-error asdasdas */}
              {texts[services[index + 1]]}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-6 '>
            <Image width={50} height={50} src={iconsArray[index + 2]} alt='greenful' />
            <div className='text-xl	text-center font-semibold flex-1'>
              {/* @ts-expect-error asdasdas */}
              {texts[services[index + 2]]}
            </div>
          </div>
        </div>,
      )
    }
  })

  return (
    <section id='services' className='max-w-screen-xl px-6'>
      <div className='mt-16 flex flex-col content-center items-center'>
        <h1 className='font-semibold leading-8 uppercase text-3xl text-black text-center'>
          {texts['services.title']}
        </h1>
        <div className='mt-8 grid-cols-2 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {gridServices}
        </div>
        <div className='md:hidden mt-8 grid grid-cols-1 place-items-center'>
          <Carousel data={cardServices} />
        </div>
      </div>
    </section>
  )
}

export default Services
