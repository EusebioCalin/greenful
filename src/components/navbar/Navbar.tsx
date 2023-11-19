'use client'
import { Disclosure } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Button from '@/components/button/AppButton'
import Image from 'next/image'

const Navbar = () => {
  const navigation = ['Despre', 'Galerie', 'FAQS']
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height
    setScrollPosition(scrolled)
  }

  const scrollToElement = (elementId: string) => {
    const scrollToSection = document.getElementById(elementId)
    if (scrollToSection) {
      window.scrollTo({
        left: 0,
        top: scrollToSection.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    ;() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`w-full fixed top-0 z-10 ${
        scrollPosition > 0.1 ? 'bg-color-secondary' : 'bg-transparent text-black'
      } 
      transition ease-in-out transform hover:bg-color-secondary  duration-500`}
    >
      <nav className='container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open, close }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <div
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                    close()
                  }}
                >
                  <span className='flex items-center space-x-2 text-3xl pb-2 font-medium'>
                    <Image src='/images/logo.png' alt='' width={150} height={100} />
                  </span>
                </div>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto text-color-ternary rounded-md lg:hidden hover:text-color-ternary focus:text-color-ternary focus:outline-none'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-wrap w-full lg:hidden'>
                  <>
                    {navigation.map((item, index) => (
                      <div
                        key={index}
                        className='w-full py-2 rounded-md text-xl text-white hover:text-color-ternary focus:text-color-ternary focus:outline-none'
                        onClick={() => {
                          scrollToElement(item.toLocaleLowerCase())
                          close()
                        }}
                      >
                        {item}
                      </div>
                    ))}

                    <div className='text-xl py-2'>
                      <Button
                        text={'Contactează-ne!'}
                        onClick={() => {
                          close()
                          scrollToElement('contact')
                        }}
                      />
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <li className='mr-3 nav__item' key={index}>
                <div
                  onClick={() => scrollToElement(menu.toLocaleLowerCase())}
                  className='inline-block px-4 py-2 text-xl font-normal no-underline rounded-md 
                  text-black hover:text-color-ternary focus:text-color-ternary 
                  focus:outline-none'
                >
                  {menu}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden mr-3 text-xl space-x-4 lg:flex nav__item'>
          <Button text={'Contactează-ne!'} onClick={() => scrollToElement('contact')} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
