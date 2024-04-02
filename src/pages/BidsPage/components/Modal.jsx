import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ bidId, onCancel, text, title }) => {
    
    const handleClose = () => {
      onCancel();
    };

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
           
           <div className="px-[46px] py-[8px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] border-[#23A6BF]">
             <p className="text-[#23A6BF]">
                Yes
             </p>
           </div>

           <div 
            onClick={handleClose}
            className="px-[46px] py-[8px] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 rounded-[5px] border-[1px] bg-[#23A6BF]">
              <p className="text-[#ffffff]">
                 No
              </p>
           </div>

        </div>
    </div>
  </div>
  )
}

export default Modal