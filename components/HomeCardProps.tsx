import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const HomeCardProps = ({bg}:{bg:string}) => {
  return (
    <Card className={`${bg} p-4 flex flex-col justify-between w-full rounded-[14px] cursor-pointer`}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
  )
}

export default HomeCardProps