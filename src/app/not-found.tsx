import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center text-xl justify-center h-full w-full min-h-[100vh]'>
      <h2>Not Found 😵</h2>
      <p>Could not find requested resource</p>
      <p>
        Click here to go{' '}
        <Link className='text-color-secondary' href='/'>
          Back
        </Link>
      </p>
    </div>
  )
}
