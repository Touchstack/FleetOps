import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5"
import { apiPostVehicleReturn } from "@/services/VehiclesService";
import { PropTypes } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ExperienceRate = ({onCancel, onNext}) => {
  const [selectedRate, setSelectedRate] = useState(null);
  
  const reason = localStorage.getItem('reason')
  const driverString = localStorage.getItem('driver');


  const driver = JSON.parse(driverString);

  const handleClose = () => {
    onCancel();
  };

  const handleNext = async () => {
     const payLoad = {
       rating: selectedRate,
       reason,
       vehicle_id: driver.vehicle_id
     }
   
    if(reason){
      try {
        const res = await apiPostVehicleReturn(payLoad)
        console.log(res)
        if (res.status === 200) {
          onNext();
          localStorage.removeItem("reason")
          return window.location.reload()
        } else {
          toast.error(res?.response?.data?.message || "An error occured couldnt return vehicle")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const rate = [
    {id: '1', value: '1'},
    {id: '2', value: '2'},
    {id: '3', value: '3'},
    {id: '4', value: '4'},
    {id: '5', value: '5'},
  ]

  const handleRateClick = (id) => {
    setSelectedRate(id);
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center">
    <div className="bg-white rounded-[20px] w-auto h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex items-center justify-between">
           <h1 className="font-SemiBold text-[24px] md:text-[32px]">
             Rate your Experience
           </h1>
           <IoCloseOutline color='#272727' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
       
        <p className="text-[14px] text-[#0B111C] md:w-[456px]">
          On a scale of 1 - 5, how would you rate your experience with this vehicle?
        </p>

        {/* Rate Scale */}
        <div className="flex px-2 gap-[24px] my-3 cursor-pointer">
              {rate.map((num) => (
                <div 
                 key={num.id} 
                 className={`flex items-center justify-center md:w-[68px] md:h-[56px] w-[38.86px] h-[32px] border-[1px] rounded-[5px] ${selectedRate === num.id ? 'bg-[#8CE7F9] border-[#8CE7F9]' : 'border-[#23A6BF] bg-[#DEDBDB]'}`}
                 onClick={() => handleRateClick(num.id)}
                 >
                  <p className='font-Bold text-[24px]'>{num.value}</p> 
                </div>
              ))}     
        </div>
        {/* Rate Scale */}

        <div className="flex justify-between text-[15px]">
            <p className="text-[15px] text-[#4F4B4B]">Not satisfied</p>
            <p className="text-[15px] text-[#4F4B4B]">Very satisfied</p>
        </div>

        <div className="flex flex-row justify-end gap-[12px] mt-5">
           
           <div 
             onClick={handleClose}
             className="md:px-[46px] px-[20px] py-[8px]  md:py-[8px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] border-[#23A6BF]">
             <p className="text-[#23A6BF]">
                cancel
             </p>
           </div>

           <div 
            onClick={handleNext}
            className="md:px-[46px] md:py-[8px] px-[20px] py-[8px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] bg-[#23A6BF]">
              <p className="text-[#ffffff]">
                submit
              </p>
           </div>

        </div>
    </div>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition: Bounce
    />

  </div>
  )
}

export default ExperienceRate

ExperienceRate.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
}