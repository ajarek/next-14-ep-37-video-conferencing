import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='  min-h-[calc(100vh-136px)]  flex flex-col items-center justify-center text-white   '>
      <h2 className='text-3xl'>There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the{' '}
        <Link
          className='underline text-yellow-500 text-xl'
          href='/'
        >
          Home
        </Link>
      </p>
    </main>
  )
}
