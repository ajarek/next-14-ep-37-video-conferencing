import DateTime from "@/components/DateTime";
import HomeCardProps from "@/components/HomeCardProps";

export default function Home() {
  
  return (
    <section className="flex min-h-[calc(100vh-136px)] flex-col gap-4  text-white  ">
      

      <DateTime/>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">

      <HomeCardProps bg={'bg-orange-1'}/>
      <HomeCardProps bg={'bg-blue-1'}/>
      <HomeCardProps bg={'bg-purple-1'}/>
      <HomeCardProps bg={'bg-yellow-1'}/>
      </div>
      
    </section>
  );
}
