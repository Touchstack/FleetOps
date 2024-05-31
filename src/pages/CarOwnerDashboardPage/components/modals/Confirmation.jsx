import { IoCloseOutline } from "react-icons/io5"
import clipboard from "../../../.././assets/images/clipboard.svg"

const Confirmation = ({onCancel}) => {
  
  const handleClose = () => {
    window.location.href = '/carowner/dashboard'
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center">
    <div className="bg-[#00A3C2] rounded-[20px] w-auto h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex justify-end">
           <IoCloseOutline color='#FFFFFF' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
    
        <div className="flex flex-col items-center justify-center gap-[12px] mt-5">

            <img src={clipboard} alt="" className="max-w-[144px] max-h-[144px]" />

            <h1 className="text-center leading-[35.2px] font-Bold max-w-[379px] text-[#FFFFFF] text-[32px]">
             Thank you for your feedback
            </h1>

            <p className="text-center max-w-[327px] text-[#F5F5F5] font-Light mb-5">
             We have received your request. A member of our team will contact you within 6 hours.
            </p>
           
           <div 
           onClick={handleClose}
           className="px-[40px] py-[16px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[10px] border-[1px] border-[#FFFFFF] mb-10">
             <p className="text-[#FFFFFF]">
               Back to home
             </p>
           </div>
        </div>
    </div>
  </div>
  )
}

export default Confirmation