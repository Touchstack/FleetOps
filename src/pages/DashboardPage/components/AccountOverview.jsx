import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { CgProfile } from "react-icons/cg";
import { Separator } from "@/Components/ui/separator"
import { apiGetDriverProfile } from "@/services/VehiclesService";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const AccountOverview = () => {
   const [data, setData] = useState({})

   const id = localStorage.getItem("driver_id")

   const getProfile = async () => {
      try {
         const res = await apiGetDriverProfile(id)
            if (res.status === 200){
              setData(res?.data) 
              localStorage.setItem('driver_avatar', res?.data?.driver?.avatar )
            } else {
               toast.error(res?.response?.data?.message || "Error fetching Driver profile ");
            }
      } catch (error) {
         toast.error(error?.response?.data?.message);
      }
   }
   
   useEffect(() => {
      getProfile()
   }, [])

  

  return (
    <div className="flex flex-col  mt-10">
       <div className="flex flex-col items-center mb-5 gap-5">
        <Avatar className="w-24 h-24">
            <AvatarImage src={`http://engines.fleetopsgh.com/uploads/photo/${data?.driver?.avatar}`}  />
            <AvatarFallback>
                <CgProfile size={50} />
            </AvatarFallback>
        </Avatar>

         <p className="font-bold text-[16px] md:text-[24px] text-[#252733]">{data?.driver?.DNM} {data?.driver?.DSN}</p>
       </div>

  <Separator className="my-4 bg-gray-200" orientation="horizontal" />
     <div className="flex  text-center gap-10  px-5">
        <div className="flex flex-wrap gap-2 flex-col">
           <p className="font-bold">{data?.pastAssignment}</p>
           <p className="text-[#252733] text-[19px] font-Light">Past assignments</p>
        </div>

        <div className="flex flex-wrap gap-2 flex-col">
           <p className="font-bold">{data?.rating} / 5.0</p>
           <p className="text-[#252733] text-[19px] font-Light">In reviews</p>
        </div>

        <div className="flex flex-wrap gap-2 flex-col">
           <p className="font-bold">{data?.yearsOfExp}</p>
           <p className="text-[#252733] text-[19px] font-Light">Years of experience</p>
        </div>
     </div>
  <Separator className="my-4 bg-gray-200" orientation="horizontal" />


  <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}

export default AccountOverview