'use client'
import { linkBoard } from '@/data/linkBoard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const Links = () => {
  const pathname = usePathname()
  return (
    <div className=" h-full flex flex-col  gap-6  ">
      {linkBoard.map(({ id, urlIcon, label, url }) => (
        <Link
          href={url}
          key={id}
          className={`flex items-center gap-4 hover:bg-blue-500 rounded-sm px-4 py-2 transition ${
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
      ))}
    </div>
  )
}

export default Links
