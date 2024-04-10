'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import { linkBoard } from '@/data/linkBoard'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/icons/hamburger.svg'
          width={36}
          height={36}
          alt='hamburger icon'
          className='cursor-pointer sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-dark-1'
      >
        <SheetHeader>
        <SheetClose asChild>
          <Link
            href='/'
            className='flex items-center gap-1'
          >
            <Image
              src='/icons/logo.svg'
              width={32}
              height={32}
              alt='yoom logo'
            />
            <p className='text-[26px] font-extrabold text-white'>ZOOM</p>
          </Link>
          </SheetClose>
        </SheetHeader>
        <SheetClose asChild>
          <div className='flex h-full flex-col gap-6 pt-16 text-white'>
            
            {linkBoard.map(({ id, urlIcon, label, url }) => (
              <SheetClose asChild key={id}>
        <Link
          href={url}
          key={id}
          className={`flex items-center gap-4 hover:bg-blue-500 rounded-sm px-4 py-1 transition ${
            pathname === url ? 'active ' : 'px-4'
          }`}
        >
          <Image
            src={urlIcon}
            alt={label}
            width={20}
            height={20}
          />
          <div className=''>{label}</div>
        </Link>
        </SheetClose>
      ))}
            
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
