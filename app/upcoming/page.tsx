import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const Upcoming = async() => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  return (
    <div className="p-48 text-white">
      <p>Upcoming</p>
    </div>
  )
}

export default Upcoming