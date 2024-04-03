import { useState } from 'react';
import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";
import OtherCarsYouMayLike from "./OtherCarsYouMayLike";
import Car from "../../assets/images/Car.png";
import Info from "../../assets/images/info.png";
import PlacingBidModal from './modals/PlacingBidModal';


const Carousel = [
    {
        id: 1,
        image: Car,
      },
      {
        id: 2,
        image: Car,
      },
      {
        id: 3,
        image: Car,
      }, 
      {
        id: 3,
        image: Car,
      }, 
  ];

const Features = [
    {
       id: 1,
       msg: 'Air bags'
    },
    {
        id: 2,
        msg: 'Air condition'
    },
    {
        id: 3,
        msg: 'Bluetooth connectivity'
    },
    {
        id: 4,
        msg: 'Pedestrian detection'
    }
]

const carDetails = [
    { label: 'Location', value: 'Greater Accra, Madina' },
    { label: 'Car Model', value: 'Ride hailing for business (RH4B)' },
    { label: 'Car Brand', value: 'Toyota' },
    { label: 'Year of manufacturing', value: '2022' },
    { label: 'Year of registration', value: '2023' },
    { label: 'Fuel consumption', value: '50 L' }
  ];

const DashboardVehicleDetailsPage = () => {
    const [showMore, setShowMore] = useState(false);
    const [showPlaceBid, setshowPlaceBid] = useState(false)

    const toggleShowMore = () => {
        setShowMore(!showMore);
      };

    const toggleShowPlaceBid = () => {
       setshowPlaceBid(!showPlaceBid);
      };

  return (
    <main className="bg-[#F7F9F8]">
      <DashboardNavBar />
 
      <div className='flex items-center justify-center'>
        <div className="flex justify-between px-5 items pt-5 md:pt-20">
        <section className="flex md:flex-row flex-col w-full gap-10 md:gap-20">
          <div className="flex flex-col">
            
            <img src={Car} alt="" className="hidden rounded-[10px] md:flex h-[422px]" />

            <div className="md:flex hidden flex-row gap-3 pt-3">
             {Carousel.map((img) => (
              <div key={img.id} className="w-11/12  h-[124px] rounded-[10px] border-[2px] border-[#23A6BF]">
                 <img src={img.image} alt="" className="h-full w-full" />
              </div>
             ))}
            </div>

            {/* Car specifications */}
              <div className='flex flex-col max-w-[430px] md:mt-10  order-last'>
                  <h1 className='font-Bold text-[24px]'>Car Specifications</h1>

                  <div className="font-Light">
                    {carDetails.map((detail, index) => (
                        <div key={index} className="flex justify-between text-[16px] mb-5">
                        <p>{detail.label}</p>
                        <p>{detail.value}</p>
                        </div>
                    ))}
                  </div>


                  <div className='text-[24px] mt-5'>
                     <h1 className='font-Bold'>Car Features</h1>

                     <div className='flex flex-wrap gap-2 max-w-[230px] md:max-w-[430px]'>
                         {Features.map((msg) => (
                            <div key={msg.id} className='text-[16px] md:text-[12px] flex items-center justify-center border-[1px] border-[#E7E9EE] rounded-[4px] md:p-1 p-3  bg-[#FEFEFE]'>
                                {msg.msg}
                            </div>
                         ))}
                     </div>
                  </div>
              </div>
            {/* Car specifications */}

          </div>

         
          <div className="flex flex-col justify-start  md:order-last order-first">
            {/* Links section */}
          <p className="font-Light text-[#545151] pb-3">
            <a
              href="/drivers/dashboard"
              className="hover:underline text-fleetBlue"
            >
              Home
            </a>{" "}
            /{" "}
            <a
              to="/drivers/findcars"
              className="hover:underline hover:cursor-pointer text-fleetBlue"
            >
              Find cars
            </a>{" "}
            /{" "}
            <span className="">Corolla LE Eco 2022</span>
          </p>
           {/* Links section */}
           
           {/* Slider image */}
          <div className='flex md:hidden mb-10'>
             <img src={Car} alt="" className="w-full rounded-[10px]" />
          </div>
          
          <h1 className="text-[34px] font-Bold">Corolla LE Eco 2022</h1>
          <p className="font-Light text-[24px] font-[500] mb-5">GHS 400 PER WEEK</p>

            {/* Terms */}
            <div className="flex flex-col mb-5">
                <p className="font-Light text-[24px] text-[#0A0D14] underline font-[500] pb-3">Terms</p>
                 
                 <div className="text-[#545151] font-Light">
                     <p>Model : Ride hailing for busineses (RH4B)</p>
                     <p>Engagement : Employee</p>
                     <p>Renumerated : Weekly</p>
                     <p>Bonus : without bonus</p>     
                 </div>
            </div>
            {/* Terms */}

            {/* Call to action */}
            <div onClick={toggleShowPlaceBid} className="border-[1px] md:w-4/12 w-6/12 mt-3 mb-6 flex text-[#FFFFFF] bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 hover:bg-[#23A6BF] hover:text-white justify-center border-[#23A6BF] cursor-pointer rounded-[10px] px-[10px] py-[7px] ">
                <p className=" font-SemiBold text-[19px]  pt-2">Place a bid</p>
            </div>
            {/* Call to action */}


          
            {/* info */}
            <div className="bg-[#FFEDBA] flex flex-col max-w-[544px] rounded-[20px] p-[16px]">
                <div className="flex gap-3 items-center">
                    <img src={Info} alt="" />
                    <p className="font-SemiBold text-[24px]">Why am I placing a bid?</p>
                </div>

                <div className="font-Light">
                    <ul className={`text-[15px] p-5 leading-[24px]`}>
                        <li className={`list-disc pb-[12px] `}>
                            As you may not be the only driver interested in the selected car, you are asked to place a bid which notifies your interest to the car owner. This process which is same for all other bidders gives everyone equal chance to access the car. Your credentials i.e., ratings, choice of transmission and recommendations from previous car owner play a significant role in your eligibility and selection.
                        </li>

                        {showMore && (
                            <>
                                <li className="list-disc pb-[12px]">
                                    You can place up to three bids and the car owner has up to 6 hours to respond else the process is reset permitting you to either re-apply or choose another vehicle.
                                </li>
                                <li className="list-disc">
                                    While assigned and using a car on this platform, you are still able to bid for another one. Please note, however, that the new car cannot be assigned to you until the current one has been properly returned to the car owner.
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                
                {/* Conditionally render "Read More" button only for small screens */}
                {!showMore && (
                    <button onClick={toggleShowMore} className="underline flex items-center justify-center">Read More</button>
                )}
            </div>
            {/* info */}

         </div>
        </section>
    
        </div>
     </div>

    
      <OtherCarsYouMayLike />

      {showPlaceBid && <PlacingBidModal onCancel={toggleShowPlaceBid} /> }
      
    </main>
  );
};

export default DashboardVehicleDetailsPage;
