import Car from "../../assets/images/Car.png";

const otherCarsData = [
    {
        id: 1,
        title: 'Corolla LE Eco 2022',
        model: ' Ride hailing for business (RH4B)',
        image: Car,
        price:'400'
      },
      {
        id: 2,
        title: 'Corolla LE Eco 2022',
        model: ' Ride hailing for business (RH4B)',
        image: Car,
        price:'400'
      },
      {
        id: 3,
        title: 'Corolla LE Eco 2022',
        model: ' Ride hailing for business (RH4B)',
        image: Car,
        price:'400'
      }, 
  ];

const OtherCarsYouMayLike = () => {
  return (
  <div className="md:p-10 p-5">
    <h1 className="font-Bold pt-5 text-[30px] md:text-[36px]">Other cars you may like</h1>
    <div className="flex md:flex-row flex-col items-center justify-center ">
      {otherCarsData.map((cars) => (
        <div key={cars.id} className="w-11/12">
         <div className="relative flex flex-col cursor-pointer  py-[23px] p rounded-[30px]">
           <img src={cars.image} className="md:w-11/12 w-12/12 h-auto rounded-[10px]" alt="" />
           {/* Price tag */}
             <div className="absolute hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 left-10 px-[20px] py-[5px] font-SemiBold text-[16.87px] gap-1 rounded-[35.51px] text-[#FFFFFF] bg-[#234C65]">
              <p>GHS {cars.price}</p>
              <span className="text-[13.32px] font-Light pt-1">per week</span>
             </div>
            {/* Price tag */}


            {/* Car info */}
             <div className=" flex flex-col pb-[16px]">
               <p className="font-SemiBold mt-3 text-[24px]">
                   {cars.title}
               </p>
             </div>
            {/* Car info */}
           
         </div>    
       </div>
      ))}
    </div>
  </div>
  )
}

export default OtherCarsYouMayLike
