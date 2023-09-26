'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import texts from '@/utils/en-US.json'

const faqItems = Object.keys(texts).filter((t) => t.includes('faq.title'))

const FAQ = () => {
  const disclosureElements = faqItems.map((item, index) => (
    <Disclosure key={item} as='div' className={' pb-4'}>
      {({ open }) => {
        // @ts-expect-error : text exists
        const title = texts[item]
        // @ts-expect-error : text exists
        const text = texts[`faq.text${index + 1}`]
        return (
          <>
            <Disclosure.Button className='flex w-full justify-between items-center rounded-lg bg-color-primary px-4 py-2 text-left text-white hover:text-color-secondary text-xl'>
              <span>{title}</span>
              <ChevronUpIcon
                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-color-secondary`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 pt-4 pb-2 text-xl text-black'>
              {text}
            </Disclosure.Panel>
          </>
        )
      }}
    </Disclosure>
  ))
  return (
    <>
      <section id='faqs' className='max-w-screen-xl grid-cols-1 text-left'>
        <div className='mt-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-black'>
            {texts['faq.sectionTitle']}
          </h1>
        </div>
        <div className='w-screen px-4 pt-8 max-w-screen-md'>{disclosureElements}</div>
      </section>
    </>
  )
}

export default FAQ
