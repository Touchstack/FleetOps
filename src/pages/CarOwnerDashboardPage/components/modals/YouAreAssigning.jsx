import { IoCloseOutline } from "react-icons/io5"
import Car from "../../../.././assets/images/car-dashboard.svg"
import Driver from "../../../.././assets/images/Driver.png"
import { FaRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGetBidingInfo } from "@/services/CarOwnerService";

const YouAreAssigning = ({onCancel}) => {
  const [data, setData] = useState([])

  const bid_id = localStorage.getItem("bid_id")

  const navigate = useNavigate();
  
  const handleClose = () => {
    onCancel();
  };

  const handleContinue = () => {
    localStorage.setItem("driver_id", data?.driver?.id)
    localStorage.setItem("vehicle_id", data?.vehicle?.id)
    navigate('/carowner/assign/driver-image')
  }

  const getData = async () => {
    try {
      const res = await apiGetBidingInfo(bid_id)
     // console.log(res);
      if(res.status === 200) {
        setData(res?.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
     getData();
  }, [])
  



  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[60] flex items-center px-0 justify-center">
    <div className="bg-[#00A3C2]  rounded-[20px] w-auto h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex justify-end">
           <IoCloseOutline color='#FFFFFF' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>

        <div className="flex flex-col items-center justify-center gap-[12px] mt-5">
            
            <h2 className="text-[#F5F5F5] text-[18px] mb-5 font-SemiBold">You are assigning</h2>

            <div className="flex gap-8 items-center justify-center">
                <div className="md:mt-5 gap-8 flex flex-col items-center justify-center">
                    <p className="text-[#FFFFFF] md:text-[24px] text-[16px] font-Bold">{data?.vehicle?.VCL} {data?.vehicle?.VMK} {data?.vehicle?.VMD}</p>
                    <div className="flex md:gap-8 gap-10">
                      <img src={Car} alt="" className="md:w-[172px] w-[94px] h-[41.04px] md:h-[75.09px]" />
                      <FaRightLong color="#FFFFFF" className="w-[24px] h-[24px]" />
                    </div>
                </div>
                
               

                <div className="md:mt-5 md:gap-8 gap-6 flex flex-col font-Bold items-center justify-center">
                    <p className="text-[#FFFFFF] md:text-[24px] text-[16px]">{data?.driver?.DNM} {data?.driver?.DSN}</p>
                    <img src={Driver} alt="" className="md:w-[75px] w-[56px] md:h-[75px] h-[56px]" />
                </div>
            </div>
            
         <div className="flex mt-20 gap-2">
            <div 
             onClick={handleClose}
             className="px-[40px] py-[16px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[10px] mb-10">
             <p className="text-[#FFFFFF]">
               cancel
             </p>
            </div>

            <div 
             onClick={handleContinue}
             className="px-[40px] py-[16px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[10px] border-[1px] border-[#FFFFFF] mb-10">
             <p className="text-[#FFFFFF]">
               Confirm
             </p>
            </div>
         </div>
        </div>
    </div>
  </div>
  )
}

export default YouAreAssigning