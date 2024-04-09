import { Loader } from 'lucide-react'

const Loading = () => {
  return (
    <div className='  min-h-[calc(100vh-136px)]  flex flex-col items-center justify-center  '>
      <Loader
        size='28'
        className='h-8 w-8 animate-spin text-white'
      />
    </div>
  )
}

export default Loading
