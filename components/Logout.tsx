import Link from 'next/link'
import LogoutBtn from './LogoutBtn'

const Logout = async ({ session }: any) => {
  return (
    <>
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          className='px-4 py-1 bg-blue-1 text-white rounded-sm'
          href={'/register'}
        >
          Zaloguj
        </Link>
      )}
      {session && (
        <span className='px-4 max-lg:hidden'>{session.user.email}</span>
      )}
    </>
  )
}

export default Logout
