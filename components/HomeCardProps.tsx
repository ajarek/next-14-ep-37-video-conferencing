'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const HomeCardProps = ({
  bg,
  title,
  desc,
  src,
  handleClick,
}: {
  bg: string
  title: string
  desc: string
  src: string
  handleClick: () => void
}) => {
  return (
    <Card
      className={`${bg} min-h-[200px] flex flex-col justify-between w-full rounded-[14px] cursor-pointer`}
      onClick={handleClick}
    >
      <CardHeader>
        <Image
          src={src}
          alt={title}
          width={30}
          height={30}
        />
      </CardHeader>
      <CardContent className='text-white'>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='text-white'>{desc}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default HomeCardProps
