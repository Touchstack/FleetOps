import DashboardNavBar from '@/Components/Navbar/DashboardNavBar'
import Airtel from '@/assets/images/Airtel.svg'
import MTN from '@/assets/images/MTN.svg'
import Telecel from '@/assets/images/Telecel.svg'

const PaymentOptions = () => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar payment={true} />
     <div className="flex flex-col mt-10 items-center justify-center">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-[#0A0D14] font-Bold text-[32px] md:text-[45px]">
          Payment Options
        </h1>
        <p className="text-[#545151] md:text-[19px] w-8/12  text-center text-[16px] font-Light">
          Please wait for a prompt to appear on your phone and confirm transaction by inputting your 4-digit pin.
        </p>
      </div>


      <div className=''>
       <p className='pb-5'>Select a network provider</p>
        
      <div className='flex flex-col md:flex-row gap-5'>
            
        <div className='flex items-center justify-center  w-[220px]  h-[112px] rounded-[5px] border-[1px] border-[#AAAAAA]'>
           <div className='flex gap-2 items-center justify-evenly flex-row'>
              <img src={Airtel} alt="" />
              <p className='font-Regular'>AT money</p>
              <button type='radio' />
           </div>
        </div>

        <div className='flex items-center justify-center  w-[220px]  h-[112px] rounded-[5px] border-[1px] border-[#AAAAAA]'>
           <div className='flex gap-2 items-center justify-evenly flex-row'>
              <img src={MTN} alt="" />
              <p className='font-Regular'>MTN momo</p>
              <button type='radio' />
           </div>
        </div>

        <div className='flex items-center justify-center  w-[220px]  h-[112px] rounded-[5px] border-[1px] border-[#AAAAAA]'>
           <div className='flex gap-2 items-center justify-evenly flex-row'>
              <img src={Telecel} alt="" />
              <p className='font-Regular'>Telecel cash</p>
              <button type='radio' />
           </div>
        </div>

       </div>

     </div>


     
      <div 
        className="md:mt-16 mt-6 bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110  w-[200px] h-[46px] rounded-[10px] flex items-center justify-center">
        <p className=" font-Sans text-[#FFFFFF] text-[14px]">
          Continue
        </p>
      </div>

     </div>
   </div>
  )
}

export default PaymentOptions