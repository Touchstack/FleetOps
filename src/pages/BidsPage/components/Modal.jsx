import { IoCloseOutline } from "react-icons/io5";
import { apiCancelDriverBids , apiDriverReBid} from "@/services/VehiclesService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropTypes } from 'prop-types';

const Modal = ({ bidId, onCancel, text, title, isRebid }) => {
    
    const driver_id = localStorage.getItem("diver_id")

    const handleClose = () => {
      onCancel();
    };

    const handleConfirm = async () => {
      try {
        const res = await apiCancelDriverBids(bidId)
        if (res.status === 200){
          toast.success('Bid cancelled successfully')
        }
      } catch (error) {
        toast.error("An error ocuured couldnt cancel bid")
      }
    }

    const handleRebid = async () => {
      try {
        const payLoad = {
          driver_id,
          bid_id: bidId
        }
        const res = await apiDriverReBid(payLoad)
        if (res.status === 200){
          toast.success('Rebid was successfully')
        }
      } catch (error) {
        toast.error("An error occured, couldnt Rebid")
      }
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-4 justify-center">
   
    <div className=" bg-white rounded-[30px] md:w-[6/12] w-[5/12] lg:w-4/12 gap-[24px] p-[32px] md:h-[200px] z-40"> 
       <div className="flex items-center justify-between">
           <h1 className="font-Bold text-[32px]">
            {title}
           </h1>
           <IoCloseOutline color='#272727' size={24} onClick={handleClose} className="hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110" />
       </div>
       
        <p>
          {text}
        </p>

        <div className="flex flex-row justify-end gap-[12px] mt-5">
           
           {isRebid ? (
             <div onClick={handleRebid} className="px-[46px] py-[8px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] border-[#23A6BF]">
               <p className="text-[#23A6BF]">
                 Yes
               </p>
             </div>
             ) : (
              <div onClick={handleConfirm} className="px-[46px] py-[8px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] border-[#23A6BF]">
               <p className="text-[#23A6BF]">
                 Yes
               </p>
              </div>
             )
            }

           <div 
            onClick={handleClose}
            className="px-[46px] py-[8px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] bg-[#23A6BF]">
              <p className="text-[#ffffff]">
                 No
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

export default Modal


Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  bidId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRebid: PropTypes.bool.isRequired,
}