import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { Separator } from "@/Components/ui/separator"
import { apiGetDriverProfile } from "@/services/VehiclesService";
import { useEffect, useState } from "react";


const remark = [
    {
        id: 0,
        name: 'Kyiewu Bernard',
        remark: 'Driver finished their task or errand.',
    },
    {
        id: 1,
        name: 'Kyiewu Bernard',
        remark: 'Driver finished their task or errand.',
    },
   
]


const AccountOverview = () => {
   const [data, setData] = useState({})

   const id = localStorage.getItem("driver_id")

   const getProfile = async () => {
      try {
         const res = await apiGetDriverProfile(id)
            if (res.status === 200){
              setData(res?.data?.driver) 
            }
      } catch (error) {
         console.log(error)
      }
   }
   
   useEffect(() => {
      getProfile()
   }, [])

  return (
    <div className="flex flex-col  mt-10">
       <div className="flex flex-col items-center mb-5 gap-5">
        <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png"  />
            <AvatarFallback>
                <CgProfile size={50} />
            </AvatarFallback>
        </Avatar>

         <p className="font-bold text-[16px] md:text-[24px] text-[#252733]">{data?.DNM} {data?.DSN}</p>
       </div>

  <Separator className="my-4 bg-gray-200" orientation="horizontal" />
     <div className="flex  text-center gap-10  px-5">
        <div className="flex flex-wrap gap-2 flex-col">
           <p className="font-bold">3</p>
           <p className="text-[#252733] text-[19px] font-Light">Past assignments</p>
        </div>

        <div className="flex flex-wrap gap-2 flex-col">
           <p className="font-bold">3.5 / 5.0</p>
           <p className="text-[#252733] text-[19px] font-Light">In reviews</p>
        </div>

        <div className="flex flex-wrap gap-2 flex-col">
           <p className="font-bold">12</p>
           <p className="text-[#252733] text-[19px] font-Light">Years of experience</p>
        </div>
     </div>
  <Separator className="my-4 bg-gray-200" orientation="horizontal" />

     {/* Reviews */}

     <div className="flex flex-col md:px-0 px-8 pt-10">
        <h1 className="font-bold text-[24px] pb-8">Reviews (2)</h1>

        {remark.map((item) => (
        <div key={item.id} className="flex gap-4 pb-10">
            <Avatar className="w-[44px] h-[44px]">
                <AvatarImage src="https://github.com/shadcn.png"  />
                <AvatarFallback>
                    <CgProfile size={50} />
                </AvatarFallback>
            </Avatar>
           
           <div className="flex flex-col gap-1">
              <p className="font-bold">{item.name}</p>
               <div className="flex">
                <FaStar color="#E6B422" />
                <FaStar color="#E6B422" />
                <FaStar color="#E6B422" />
                <FaStar color="#E6B422" />
                <FaStar color="#ABB3BF" />
               </div>
              <p className="text-[#252733] font-Light">{item.remark}</p>
           </div>
        </div>
        ))}
     </div>

    </div>
  )
}

export default AccountOverview