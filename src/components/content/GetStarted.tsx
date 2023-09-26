'use client'
import text from '@/utils/en-US.json'
import Link from 'next/link'
import Button from '../button/AppButton'

export const GetStarted = () => {
  return (
    <div className='my-8'>
      <p className='text-xl'> {text['content.text2']}</p>
      <p className='text-xl'> {text['content.text3']}</p>
      <div className='mt-8'>
        <h1 className='mb-8 font-semibold uppercase text-xl text-black'>{text['content.text4']}</h1>
        <div className='text-xl'>
          <Link href='/' target='_blank'>
            <Button text={'Button, click me!'} onClick={() => {}} />
          </Link>
        </div>
      </div>
    </div>
  )
}
