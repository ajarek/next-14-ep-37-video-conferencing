'use client'
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-sdk'

import { useState, useEffect } from 'react'
import { tokenProvider } from '@/actions/stream.actions'

const StreamVideoProvider = ({ children }: { children: any }) => {
  const [token, setToken] = useState('')
  useEffect(() => {
    const addTokenProvider = async () => {
      const newToken = await tokenProvider()
      setToken(newToken)
    }
    addTokenProvider()
  }, [token])
  if (token) {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string
    const userId = '127'

    const user: User = { id: userId as string }

    const client = new StreamVideoClient({ apiKey, user, token })

    return <StreamVideo client={client}>{children}</StreamVideo>
  }
}
export default StreamVideoProvider
