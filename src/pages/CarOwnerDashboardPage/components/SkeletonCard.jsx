import { Skeleton } from "../../.././Components/ui/skeleton"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "../../.././Components/ui/card"
  
const SkeletonCard = () => {
  return (
    <Card className="flex flex-col justify-between rounded-[10px] mt-5">
        <CardHeader className="flex-row gap-4 items-center">
            <Skeleton className="w-12 h-12 rounded-full" />
            <Skeleton className="h-6 flex-grow" />
        </CardHeader>

        <CardContent>
           <Skeleton className="h-4 flex-grow mt-4" />
           <Skeleton className="h-4 flex-grow mt-4" />
           <Skeleton className="h-4 w-1/2 mt-4" />
        </CardContent>

        <CardFooter>
           <Skeleton className="h-10 w-28" />
        </CardFooter>
    </Card>
  )
}

export default SkeletonCard