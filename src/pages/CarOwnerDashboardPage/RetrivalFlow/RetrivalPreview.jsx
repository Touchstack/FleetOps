import { useNavigate } from 'react-router-dom'
import CarOwnerDashboardNavBar from "../../../Components/Navbar/CarOwnerDashboardNavBar";
import Congratulations from '../components/modals/Congratulations';
import { apiRetriveVehicle } from '@/services/CarOwnerService';
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";
import { useState } from 'react';

const RetrivalPreview = () => {
  const [showModal, setshowModal] = useState(false)
  const [Loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const frontView = localStorage.getItem('frontView-img')
  const rightView = localStorage.getItem('rightView-img')
  const leftView =  localStorage.getItem('leftView-img')
  const backView =  localStorage.getItem('backView-img')
  const form = JSON.parse(localStorage.getItem('form'))
  const driverId = localStorage.getItem('driver_id')
  //const driverimg = localStorage.getItem('driver-img')
  const reason = localStorage.getItem('car_owner_reason')
  const car_id = localStorage.getItem('car_id')



  const handleRestart = () => {
      localStorage.removeItem('driver-img');
      localStorage.removeItem('rightView-img');
      localStorage.removeItem('leftView-img');
      localStorage.removeItem('frontView-img');
      localStorage.removeItem('backView-img');
      localStorage.removeItem('form');
      navigate('/carowner/retrival/form')
  }


  const handleSubmit = async () => {
     try {
      const payLoad = {
        driver_id: driverId,
        vehicle_id: car_id,
        carImg: {
         frontView,
         rightView,
         leftView,
         backView
        },
        defaultValues:form,
        reason: reason
     }
      setLoading(true)
      const res = await apiRetriveVehicle(payLoad)
      console.log(res);
      if(res.status === 200){
        localStorage.setItem('assigned_car', res?.data?.vehicle)
        setLoading(false)
        setshowModal(true)
      } else {
        setLoading(false)
        toast.error(res?.response?.data?.message  || "Error occurred could'nt submit form");
      }
     } catch (error) {
      setLoading(false)
      toast.error(error?.response?.data?.message  || "Error occurred could'nt submit form");
      console.log(error)
     }
  }



  const data = [
    {
      id: 1,
      img: frontView
    },
    {
      id: 2,
      img: rightView
    },
    {
      id: 3,
      img: leftView
    },
    {
      id: 4,
      img: backView
    },
  ]

  return (
  <div className="bg-[#F7F9F8] min-h-screen">
   <CarOwnerDashboardNavBar />
    <div className="flex flex-col mx-14 mt-10">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-[#0A0D14] font-bold text-5xl">
          Vehicle Photos
        </h1>
      </div>

       
      <div className='flex items-center justify-center flex-grow md:flex-row flex-col gap-3 md:mt-20 '>
       {data.map((image) => (
           <div key={image.id} className=''>
              <img src={image.img} className='w-11/12  h-[400px] rounded-md' />
           </div>
        ))}
      </div>

      
      {/* Buttons */}
      <div className="flex justify-end mt-20 p-4 gap-2">
        <div 
          onClick={handleRestart}
          className="px-[40px] border-[1px] border-[#23A6BF] py-[16px] cursor-pointer rounded-[10px] mb-10">
            <p className="text-[#23A6BF]">
              Restart
            </p>
        </div>

        <div 
           onClick={handleSubmit}
          className="px-[40px] py-[16px] hover:cursor-pointer  rounded-[10px] bg-[#23A6BF] border-[1px] border-[#FFFFFF] mb-10">
           {Loading ? (
            <ClipLoader color='#FFFFFF' size={20} />
           ) : (
            <p className="text-[#FFFFFF]">
               Submit
            </p>
           )}
        </div>
     </div>
    </div>
    {showModal && <Congratulations unassigned={true} onCancel={() => setshowModal(false)} />}

    <Toaster position="top-right" reverseOrder={true} />
  </div>
  )
}

export default RetrivalPreview;