import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { PropTypes } from 'prop-types';
import { Button } from "@/Components/ui/button";

const ReturnReason = ({onCancel, onNext}) => {
    const [selectedReason, setSelectedReason] = useState("");


    const handleClose = () => {
        onCancel();
      };

      const handleNext = () => {
        // Store selected reason in local storage
        localStorage.setItem('car_owner_reason', selectedReason);
       onNext();
     }

     const handleRadioChange = (event) => {
      setSelectedReason(event.target.value);
  }

  return (
<div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center">
  <div className="bg-white rounded-[20px] w-full h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex items-center justify-between">
           <h1 className="font-SemiBold md:text-[32px] text-[24px]">
             Reason for Retrieval
           </h1>
           <IoCloseOutline color='#272727' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
       
         <form action="" className="flex flex-col">
            <div className="flex gap-4 mb-[10px] items-center">
                <input type="radio" name="reason"  value="Task completed"  onChange={handleRadioChange} /> 
                <label className="flex items-center">  
                    <div className="flex flex-col mt-6">
                    <h2 className="mb-[5px] text-[16px]">Task completed</h2>
                    <p className="md:text-[14px] text-[12px] text-[#4F4B4B]">
                        Driver finished the task or errand.
                    </p>
                    </div>
                </label>
            </div>

            <div className="flex gap-4 mb-[10px] items-center">
                <input type="radio" name="reason" value="No Longer Needed"  onChange={handleRadioChange} /> 
                <label className="flex items-center"> 
                    <div className="flex flex-col mt-6">
                    <h2 className="mb-[5px] text-[16px]">No Longer Needed</h2>
                    <p className="md:text-[14px] text-[12px] text-[#4F4B4B]">
                       Driver no longer requires the vehicle.
                    </p>
                    </div>
                </label>
            </div>

            <div className="flex gap-4 mb-[24px] items-center"> 
                <input type="radio" name="reason"  value="Personal Reasons" onChange={handleRadioChange}  />
                <label className="flex items-center"> 
                    <div className="flex flex-col mt-6">
                    <h2 className="mb-[5px] text-[16px]">Personal Reasons</h2>
                    <p className="md:text-[14px] text-[11px] text-[#4F4B4B]">
                      Driver has personal reasons or emergencies.
                    </p>
                    </div>
                </label>
            </div>

            <div className="flex gap-4 mb-[24px] items-center"> 
                <input type="radio" name="reason"  value="Vehicle Issues"  onChange={handleRadioChange} />
                <label className="flex items-center"> 
                    <div className="flex flex-col mt-6">
                    <h2 className="mb-[5px] text-[16px]">Vehicle Issues</h2>
                    <p className="md:text-[14px] text-[11px] text-[#4F4B4B]">
                      Driver encounted technical problems.
                    </p>
                    </div>
                </label>
            </div>

            <div className="flex gap-4 mb-[24px] items-center"> 
                <input type="radio" name="reason"  value="Other reasons"  onChange={handleRadioChange} />
                <label className="flex items-center"> 
                    <div className="flex flex-col ">
                    <h2 className="mb-[5px]">Other reason</h2>
                    </div>
                </label>
            </div>
         </form>

        <div className="flex flex-row justify-end gap-[12px] mt-5">
           
           <div className="md:px-[46px] md:py-[8px] px-[26px] py-[5px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] border-[#23A6BF]"
             onClick={handleClose}
           >
             <p className="text-[#23A6BF]">
                cancel
             </p>
           </div>

           <Button
            onClick={handleNext}
            className={`md:px-[46px] md:py-[8px] px-[26px] py-[5px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] ${selectedReason ? 'bg-[#23A6BF] cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!selectedReason}
          >
            <p className="text-[#ffffff]">
              continue
            </p>
          </Button>

        </div>
    </div>
  </div>
  )
}

export default ReturnReason

ReturnReason.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};