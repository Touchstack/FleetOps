import { AiOutlineCamera } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro-react-18";
import CarOwnerDashboardNavBar from "../../../Components/Navbar/CarOwnerDashboardNavBar";
import { useNavigate } from "react-router-dom";

const DriverImage = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(16/9);
 
    const navigate = useNavigate()
      
    useEffect(() => {
     const handleResize = () => {
       const isMobileView = window.innerWidth <= 768;
       setAspectRatio(isMobileView ? 16/20 : 16/9); 
     };
 
     handleResize();
     window.addEventListener("resize", handleResize); 
 
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);


   const handleRetake = () => {
     setImage(null);
   }

   const showForm = () => {
    navigate('/carowner/assign/form')
    localStorage.setItem('driver-img', image)
  }

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
    <CarOwnerDashboardNavBar />
    <div className="flex flex-col items-center justify-center">
    <div className="flex flex-col items-center mb-8">
      <h1 className="text-[#0A0D14] mt-6 font-Bold text-[32px] md:text-[45px]">
       Take Driver’s Photo
      </h1>
      <p className="text-[#545151] md:text-[19px] md:w-full w-[248px] text-center text-[16px] font-Light">
       Please ensure optimal lighting conditions to avoid photo being blur.
      </p>
    </div>

    {/* Camera div to display and review */}
    <div className="md:w-6/12 w-full h-[531px] md:h-[420.01px] bg-black mb-6 md:rounded-[13px]">
     {!image ? (
         <Camera 
         ref={camera} 
         aspectRatio={aspectRatio}
         errorMessages={{
          noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
          permissionDenied: 'Permission denied. Please refresh and give camera permission.',
          switchCamera:
            'It is not possible to switch camera to different one because there is only one video device accessible.',
          canvas: 'Canvas is not supported.',
        }}
         />
     ) : (
        <img src={image} alt='Taken photo' className="w-full h-full"/>
     )}
    </div>

    {/* Capture button */}

   {!image ? (
      <div 
      onClick={() => {
        if (camera.current) {
          const photo = camera.current.takePhoto();
          console.log(photo);
          setImage(photo);
        }
      }}
        className=" w-[43.93px] flex items-center justify-center rounded-full h-[43.93px] bg-[#23A6BF]">
        <AiOutlineCamera color="#FFFFFF" width={60} />
      </div>
   ) : (
    <div className="flex  gap-2">
        <div 
          onClick={handleRetake}
          className="px-[40px] border-[1px] border-[#23A6BF] py-[16px] cursor-pointer rounded-[10px] mb-10">
            <p className="text-[#23A6BF]">
              Retake
            </p>
        </div>

        <div
          onClick={showForm} 
          className="px-[40px] py-[16px] hover:cursor-pointer  rounded-[10px] bg-[#23A6BF] border-[1px] border-[#FFFFFF] mb-10">
            <p className="text-[#FFFFFF]">
              Use photo
            </p>
        </div>
   </div>
   )}
</div>
</div>
  )
}

export default DriverImage