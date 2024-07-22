import { PropTypes } from 'prop-types';
import { IoCloseOutline } from "react-icons/io5"
import clipboard from "../../../../assets/images/paymentConfirmed.svg"
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = ({onCancel}) => {
    const handleClose = () => {
        onCancel();
      };

    const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center">
    <div className="bg-[#00A3C2] rounded-[20px] w-auto h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex justify-end">
           <IoCloseOutline color='#FFFFFF' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
    
        <div className="flex flex-col items-center justify-center gap-[12px] mt-5">

            <img src={clipboard} alt="" className="max-w-[144px] max-h-[144px]" />

            <h1 className="text-center leading-[35.2px] font-Bold max-w-[379px] text-[#FFFFFF] text-[28px]">
              Your transaction was successful
            </h1>

           
           <div 
           onClick={() => navigate('/drivers/dashboard')}
           className="px-[40px] py-[12px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[10px] border-[1px] border-[#FFFFFF] mb-10">
             <p className="text-[#FFFFFF] font-SemiBold">
               Back to dashboard
             </p>
           </div>
        </div>
    </div>
  </div>
  )
}

export default PaymentConfirmation

PaymentConfirmation.propTypes = {
    onCancel: PropTypes.func.isRequired,
  }