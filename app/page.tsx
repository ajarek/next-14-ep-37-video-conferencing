'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DateTime from '@/components/DateTime'
import HomeCardProps from '@/components/HomeCardProps'
import MeetingModal from '@/components/MeetingModal'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'

import Loader from '@/app/loading'
import { Textarea } from '@/components/ui/textarea'
import ReactDatePicker from 'react-datepicker'
import { useToast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
}
export default function Home() {
  const router = useRouter()
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined)
  const [values, setValues] = useState(initialValues)
  const [callDetail, setCallDetail] = useState<Call>()
  const client = useStreamVideoClient()
  
  const { toast } = useToast()
  const createMeeting = async () => {
    if (!client ) return
    try {
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' })
        return
      }
      const id = '125'
      const call = client.call('default', id)
      if (!call) throw new Error('Failed to create meeting')
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString()
      const description = values.description || 'Instant Meeting'
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      })
      setCallDetail(call)
      if (!values.description) {
        router.push(`/meeting/${call.id}`)
      }
      toast({
        title: 'Meeting Created',
      })
    } catch (error) {
      console.error(error)
      toast({ title: 'Failed to create Meeting' })
    }
  }

  if (!client) return <Loader />

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`

  return (
    <section className='flex min-h-[calc(100vh-136px)] flex-col gap-4  text-white  '>
      <div className='bg-image px-4'>
        <DateTime />
      </div>
      <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        <HomeCardProps
          bg={'bg-orange-1'}
          title='New Meeting'
          desc='Start an instant meeting'
          src='/icons/add-meeting.svg'
          handleClick={() => setMeetingState('isInstantMeeting')}
        />
        <HomeCardProps
          bg={'bg-blue-1'}
          title='Join Meeting'
          desc='via invitation link'
          src='/icons/join-meeting.svg'
          handleClick={() => setMeetingState('isJoiningMeeting')}
        />
        <HomeCardProps
          bg={'bg-purple-1'}
          title='Schedule Meeting'
          desc='Plan your meeting'
          src='/icons/schedule.svg'
          handleClick={() => setMeetingState('isScheduleMeeting')}
        />
        <HomeCardProps
          bg={'bg-yellow-1'}
          title='Meeting Recordings'
          desc='Start an instant meeting'
          src='/icons/recordings.svg'
          handleClick={() => router.push('/recordings')}
        />
      </div>
      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title='Create Meeting'
          handleClick={createMeeting}
        >
          <div className='flex flex-col gap-2.5'>
            <label className='text-base font-normal leading-[22.4px] text-sky-2'>
              Add a description
            </label>
            <Textarea
              className='border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0'
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className='flex w-full flex-col gap-2.5'>
            <label className='text-base font-normal leading-[22.4px] text-sky-2'>
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date: any) =>
                setValues({ ...values, dateTime: date! })
              }
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm aa'
              className='w-full rounded bg-dark-3 p-2 focus:outline-none'
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title='Meeting Created'
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink)
            toast({ title: 'Link Copied' })
          }}
          image={'/icons/checked.svg'}
          buttonIcon='/icons/copy.svg'
          className='text-center'
          buttonText='Copy Meeting Link'
        />
      )}

      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Type the link here'
        className='text-center'
        buttonText='Join Meeting'
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder='Meeting link'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValues({ ...values, link: e.target.value })
          }
          className='border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0'
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Start an Instant Meeting'
        className='text-center'
        buttonText='Start Meeting'
        handleClick={createMeeting}
      />
    </section>
  )
}
