import CallList from "@/components/CallList";
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const PreviousPage = () => {
  const session = auth()
  if (!session) {
    redirect('/register')
  }
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Previous Calls</h1>

      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;