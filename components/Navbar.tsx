import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'

const Navbar = async () => {
  const session = await auth()
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 text-white px-6 py-4 lg:px-10'>
      <Link
        href='/'
        className='flex items-center gap-4'
      >
        <Image
          src='/icons/logo.svg'
          alt='logo'
          width={32}
          height={32}
          className='max-sm:size-10'
          priority
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>
          ZOOM
        </p>
      </Link>
      <div className='flex items-center gap-4'>
        <Logout session={session} />

        <div className='"w-full max-w-[264px] sm:hidden'>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
