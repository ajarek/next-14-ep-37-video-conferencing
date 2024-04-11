'use client'

import { useState } from 'react'
import { User } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImage] = useState('')
  const [isAdmin, setIsAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData: User = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/api/auth/signin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=''>
      <h1 className='text-3xl text-center text-white font-bold mb-4'>Rejestracja</h1>
      <form
        className='w-80  flex flex-col gap-4 p-6 shadow-xl border-2 rounded-sm '
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          placeholder='Nazwisko i Imię'
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
        <Input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='hasło'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Input
          type='text'
          placeholder='zdjęcie (niewymagane)'
          value={img}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          type='hidden'
          name='isAdmin'
          value={`${DEFAULT_IS_ADMIN}`}
        />
        <Button
          className='bg-blue-1 hover:bg-blue-1/90'
          type='submit'
        >
          Zarejestruj
        </Button>
        <Link href='/api/auth/signin' className='text-white '>
          Masz konto? <b className='text-blue-1'>Zaloguj</b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm