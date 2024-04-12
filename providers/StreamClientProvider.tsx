import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-sdk'
import { auth } from '@/app/api/auth/auth'
import { tokenProvider } from '@/actions/stream.actions'
const StreamVideoProvider = async ({ children }: { children: any }) => {
  const session = await auth()
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string
  const userId = session?.user?.email
  const token = await tokenProvider()
  const user: User = { id: userId as string }

  const client = new StreamVideoClient({ apiKey, user, token })

  return <StreamVideo client={client}>{children}</StreamVideo>
}
export default StreamVideoProvider
