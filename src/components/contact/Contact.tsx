'use client'

import { NoSSRLeaflet } from '../leaftlet/NoSSRLeaflet'
import { MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import texts from '@/utils/en-US.json'

const FAQ = () => {
  return (
    <section id='contact' className='max-w-screen-xl  text-left'>
      <div className='mt-16 flex flex-col content-center items-center'>
        <h1 className='font-semibold leading-8 uppercase text-3xl text-black'>
          {texts['contact.title']}
        </h1>
      </div>
      <div className='w-full pt-8 '>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='flex flex-col items-start justify-center gap-4'>
            <div className='flex items-center content-center  gap-4'>
              <MapPinIcon className='h-6' /> Adresa: Str. Beiusului, nr. 48, Cluj-Napoca
            </div>
            <div className=' flex items-center content-center  gap-4'>
              <PhoneIcon className='h-6' /> Telefon: <a href='tel:+40754528873'>0754528873</a>
            </div>
          </div>
          <div className='col-span-2'>
            <NoSSRLeaflet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
