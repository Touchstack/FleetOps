import { useNavigate } from 'react-router-dom'
import CarOwnerDashboardNavBar from "../../../Components/Navbar/CarOwnerDashboardNavBar";


const Preview = () => {

  const navigate = useNavigate()

  const handleRestart = () => {
      localStorage.clear();
      navigate('/carowner/assign/driver-image')
  }

  const handleSubmit = () => {
    //clear localStorage and make api call
  }

  const frontView = localStorage.getItem('frontView-img')
  const rightView = localStorage.getItem('rightView-img')
  const leftView = localStorage.getItem('leftView-img')
  const backView = localStorage.getItem('backView-img')

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
    <div className="flex flex-col mt-10 md:mx-20">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-[#0A0D14] font-bold text-3xl md:text-5xl">
          Vehicle Photos
        </h1>
      </div>

       
      <div className='grid md:grid-cols-4 gap-3 justify-center items-center'>
       {data.map((image) => (
           <div key={image.id} className=''>
              <img src={image.img} className='w-[288px] h-[250px] rounded-md' />
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
            <p className="text-[#FFFFFF]">
              Submit
            </p>
        </div>
     </div>
    </div>
  </div>
  )
}

export default Preview