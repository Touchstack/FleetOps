import { IoCloseOutline } from "react-icons/io5";
import Info from "../../../../assets/images/info.png"
import { PropTypes } from 'prop-types';
// import {toast, Toaster} from "react-hot-toast";
// import { apiCancelDriverBids } from "@/services/VehiclesService";

const Disclamer = ({onCancel}) => {
  
    const handleClose = () => {
        onCancel();
      };

    // const handleCancel = async () => {
    //   try {
    //     const res = await apiCancelDriverBids(bidId)
    //      //console.log(res)
    //     if (res.status === 200){
    //       toast.success('Bid cancelled successfully')
    //       setTimeout(()=>{handleClose()},1000);
    //     }
    //   } catch (error) {
    //     toast.error("An error ocuured couldnt cancel bid")
    //   }
    // }

  return (
  <>
   <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center">
    <div className="bg-[#00A3C2] rounded-[20px] w-auto h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex items-center justify-end">
           <IoCloseOutline color='#ffffff' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
          
          <div className="flex flex-col items-center justify-center">
            <img src={Info} className="w-[144px] h-[144px] mb-3" alt="" />
            <h1 className="font-Bold text-center text-[32px] text-[#FFFFFF]">Disclaimer</h1>
            {/* <h2 className="font-Bold text-center text-[32px] text-[#FFFFFF]">Your bid is on hold</h2> */}
            <p className="text-center text-[13.66px] text-[#F5F5F5] w-[347px]">
                 You are attempting to swap vehicles. By this process, 
                 you must return the current vehicle to its owner before the new owner can accept your bid to swap.
                 It requires that you do a proper handing over. You are full responsible for your actions especially in 
                 the event where the new car owner rejects your bid while returning the current vehicle. 
            </p>
          </div>

        <div className="flex flex-row justify-center gap-[12px] mt-10">
           <div className="md:px-[46px] md:py-[8px] px-[26px] py-[5px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] border-[#23A6BF]"
             onClick={handleClose}
           >
             <p className="text-white font-SemiBold">
                I Accept
             </p>
           </div>

           <div 
            onClick={handleClose}
            className="flex items-center md:px-[46px] font-SemiBold md:text-[16px] text-[13px] text-white  px-[26px]  hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[10px] border-[1px] bg-[#00A3C2]">
                <p>Cancel</p> 
           </div>

        </div>
    </div>
  </div>
   {/* <Toaster position="top-right" /> */}
  </>
  )
}

export default Disclamer

Disclamer.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onBackToSearch: PropTypes.func
}