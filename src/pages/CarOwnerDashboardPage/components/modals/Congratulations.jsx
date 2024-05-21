import { IoCloseOutline } from "react-icons/io5"
import Car from "../../../.././assets/images/car-dashboard.svg"

const Congratulations = ({onCancel}) => {

  const assigned_car = localStorage.getItem('assigned_car')
 
  const handleBackHome = () => {
    window.location.href = '/carowner/dashboard';
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center">
    <div className="bg-[#00A3C2] rounded-[20px] w-auto h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex justify-end">
           <IoCloseOutline color='#FFFFFF' size={24} onClick={onCancel} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
    
        <div className="flex flex-col items-center justify-center gap-[12px] mt-5">

            <img src={Car} alt="" className="max-w-[329.83px] max-h-[144px] mb-5 img-fluid" />

            <h1 className="text-center leading-[35.2px] font-Bold max-w-[379px] text-[#FFFFFF] text-[32px]">
                Congratulations!
            </h1>

            <p className="text-center max-w-[327px] text-[#F5F5F5] font-Light mb-5">
               {assigned_car} has been assigned to Driver.
            </p>
           
           <div 
           onClick={handleBackHome}
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

export default Congratulations