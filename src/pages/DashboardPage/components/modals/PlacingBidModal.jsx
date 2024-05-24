import { IoCloseOutline } from "react-icons/io5";
import Clipboard from "../../../../assets/images/clipboard.svg"
import { PropTypes } from 'prop-types';
import { useNavigate } from "react-router-dom";

const PlacingBidModal = ({onCancel}) => {
  const navigate = useNavigate()

    const handleClose = () => {
        onCancel();
      };

      const handleOnBackToSearch = () => {
        navigate('/drivers/findcars')
      }

      const handleViewBids = () => {
        navigate('/drivers/bids')
      }

  return (
<div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center">
  <div className="bg-[#00A3C2] rounded-[20px] w-auto h-auto max-w-[90%] md:max-w-[50%] lg:max-w-[40%] p-[32px] z-40">
       <div className="flex items-center justify-end">
           <IoCloseOutline color='#ffffff' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
          
          <div className="flex flex-col items-center justify-center">
            <img src={Clipboard} className="w-[144px] h-[144px] mb-8" alt="" />

            <h2 className="font-Bold text-center text-[32px] text-[#FFFFFF]">Your bid has been placed</h2>
            <p className="text-center text-[13.66px] text-[#F5F5F5] w-[347px]">
                We have received your bid request. A member of our team will contact you within 6 hours.
            </p>
          </div>

        <div className="flex flex-row justify-center gap-[12px] mt-10">
           <div className="md:px-[46px] md:py-[8px] px-[26px] py-[5px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] border-[#23A6BF]"
             onClick={handleViewBids}
           >
             <p className="text-white font-SemiBold">
                View bids
             </p>
           </div>

           <div 
            onClick={handleOnBackToSearch}
            className="flex items-center md:px-[46px] font-SemiBold md:text-[16px] text-[13px] text-white px-[26px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[10px] border-[1px] bg-[#00A3C2]">
               <p>Back to search</p>   
           </div>

        </div>
    </div>
  </div>
  )
}

export default PlacingBidModal

PlacingBidModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onBackToSearch: PropTypes.func
}