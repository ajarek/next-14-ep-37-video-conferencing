import React from 'react'

const DateTime = () => {
  const now = new Date()

  const time = now.toLocaleTimeString('pl', {
    hour: '2-digit',
    minute: '2-digit',
  })
  const date = new Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(now)

  return (
    <div className=' h-[200px] w-full rounded-[20px] '>
      <div className='flex h-full flex-col justify-between py-4 '>
        <h2 className='glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal'>
          Upcoming Meeting at {time}
        </h2>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
          <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default DateTime
