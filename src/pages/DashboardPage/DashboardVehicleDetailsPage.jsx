import { useState, useEffect } from 'react';
import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";
import OtherCarsYouMayLike from "./OtherCarsYouMayLike";
import Info from "../../assets/images/info.png";
import PlacingBidModal from './components/modals/PlacingBidModal';
import { apiGetVehicleDetails, apiPlaceDriverBids, apiDriverReBid } from '../.././services/VehiclesService';
import { useLocation } from "react-router-dom";
import VehiclesLoading from './components/VehiclesLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomCarousel from './components/CustomCarousel';
import { IoImagesOutline } from "react-icons/io5";
import Disclamer from './components/modals/Disclamer';


const DashboardVehicleDetailsPage = () => {
    const [showMore, setShowMore] = useState(false);
    const [showPlaceBid, setshowPlaceBid] = useState(false)
    const [showDisclamer, setshowDisclamer] = useState(false)
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(``);
    const [data, setData] = useState();
    const [selectedImageId, setSelectedImageId] = useState(null);
    const [bidStatus, setBidStatus] = useState("")
    const [bidId, setbidId] = useState()
    const [licenseExpired, setlicenseExpired] = useState()
    const loaction = useLocation();
    const pathSegments = loaction?.pathname.split("/");
    const id = pathSegments[pathSegments.length - 1];

    const driver_id = localStorage.getItem("driver_id")
    
    
    // function isEmptyObject(obj) {
    //   for (let key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //       return false;
    //     }
    //   }
    //   return true;
    // }
  
   
    const getVehicle = async () => {
      try {
        setLoading(true);
        const res = await apiGetVehicleDetails(id, driver_id);
         setData(res?.data?.vehicles);
         setBidStatus(res?.data?.bid_status)
         setshowDisclamer(res?.data?.canSwap)
         setlicenseExpired(res?.data?.license_expired)
         setbidId(res?.data?.bid_id)
        setLoading(false);
        return  setVehicles(res.data?.similarCars?.slice(0, 3));
      } catch (error) {
        setLoading(false);
      }
    };

    
    const carouselImages = [
      {
          id: 1,
          image: `http://engines.fleetopsgh.com/uploads/vehicle/${data?.front_photo}`,
        },
        {
          id: 2,
          image: `http://engines.fleetopsgh.com/uploads/vehicle/${data?.rear_photo}`,
        },
        {
          id: 3,
          image: `http://engines.fleetopsgh.com/uploads/vehicle/${data?.side_photo}`,
        }, 
        {
          id: 4,
          image: `http://engines.fleetopsgh.com/uploads/vehicle/${data?.interior_photo}`,
        }, 
        {
          id: 5,
          image: `http://engines.fleetopsgh.com/uploads/vehicle/${data?.engine_photo}`,
        }, 
    ];
  
    const carDetails = [
      { label: 'Model', value: `${data?.VMD}` },
      { label: 'Brand', value: `${data?.VMK}` },
      { label: 'Year of manufacturing', value: `${data?.year_of_manufacturing}` },
      { label: 'Year of registration', value: `${data?.year_of_registration}` },
      { label: 'Transmission', value: `${data?.trans_type}` },
      { label: 'Fuel consumption', value: `${data?.fuel_consumption}` },
    ];

   
   
   
    useEffect(() => {
      getVehicle();
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
      };

    const closePlaceBid = () => {
      setshowPlaceBid(!showPlaceBid);
    }

    const toggleShowPlaceBid = async () => {
       try {
        const payLoad = {
          driver_id: driver_id,
          vehicle_id: data?.id
        }
        const res = await apiPlaceDriverBids(payLoad)
        if (res.status === 200) {
          setshowPlaceBid(!showPlaceBid);
        } else {
          toast.error(res?.response?.data?.message || "Error Placing bid try again");
        }
       } catch (error) {
        console.log(error)
       } 
    };

    const handleRebid = async () => {
      try {
        const payLoad = {
          driver_id,
          bid_id: bidId
        }
        const res = await apiDriverReBid(payLoad)
        if (res.status === 200){
          toast.success('Rebid was successfully')
          window.location.reload()
        } else {
          toast.error(res?.response?.data?.message || "Error Placing bid try again");
        }
      } catch (error) {
        toast.error("An error occured, couldnt Rebid")
      }
    }

    const handleBidAction = () => {
      if (bidStatus === '') {
        toggleShowPlaceBid();
      } else if (bidStatus === 'expired' || bidStatus === 'declined') {
        handleRebid();
      }
    };
   
  return (
    <main className="bg-[#F7F9F8]">
      <DashboardNavBar />
 
      <div className='flex items-center justify-center'>
        <div className="flex justify-between px-5 items pt-5 md:pt-20">
      {loading ? (
        <VehiclesLoading />
      ) : (
       <section className="flex md:flex-row flex-col w-full gap-10 md:gap-20">
        <div className="md:flex hidden flex-col md:min-w-[550px] max-w-[650px]">
          {data?.front_photo ? (
            <img
            src={image || `http://engines.fleetopsgh.com/uploads/vehicle/${data?.front_photo}`}
            className="hidden rounded-[10px]  md:flex h-[422px]" 
            alt=""
          />         
          ) : (
            <div className="flex justify-center items-center bg-white h-auto rounded-[10px]">
              <IoImagesOutline size={80} className="text-black  h-[408px]" />
            </div>
          )}          
      

          <div className="md:flex cursor-pointer hidden flex-row gap-3 pt-3">
          {carouselImages.map((img) => (
            <div 
              key={img.id} 
              onClick={() => {setImage(img.image); setSelectedImageId(img.id)}} 
              className={`w-11/12  h-[124px] rounded-[10px] border-[2px] ${
                selectedImageId === img.id ? 'border-[#23A6BF]' : ''
              }`}
            >
               <img src={img.image} alt="" className="h-full rounded-[5px] w-full" />
            </div>
           ))}
          </div>
        {/* Web view image */}

          {/* Car specifications */}
            <div className='flex flex-col max-w-[430px] md:mt-10  order-last'>
                <h1 className='font-Bold text-[24px]'>Car Specifications</h1>

                <div className="font-Light">
                  {carDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between text-[16px] mb-5">
                      <p>{detail?.label}</p>
                      <p>{detail?.value}</p>
                      </div>
                  ))}
                </div>
            </div>
          {/* Car specifications */}

        </div>

        <div className='flex md:hidden flex-col max-w-[430px] md:mt-10  order-last'>
                <h1 className='font-Bold text-[24px]'>Car Specifications</h1>

                <div className="font-Light">
                  {carDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between text-[16px] mb-5">
                      <p>{detail?.label}</p>
                      <p>{detail?.value}</p>
                      </div>
                  ))}
                </div>
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
          <span className='text-fleetBlue'>/{" "}</span>
          <a
            href="/drivers/findcars"
            className="hover:underline hover:cursor-pointer text-fleetBlue"
          >
            Find cars
          </a>{" "}
          <span className='text-fleetBlue'>/{" "}</span>
          <span className="">
           {data?.VCL} {data?.VMK} {data?.VMD}
          </span>
        </p>
         {/* Links section */}
         
         {/* Slider image */}


        <CustomCarousel data={carouselImages} />
        
        <h1 className="md:text-[34px] text-[24px] font-Bold">{data?.VCL} {data?.VMK} {data?.VMD}</h1>
          
          <div className='space-y-2 pb-3 '>
           <p className="text-[24px] font-SemiBold">Location: <span className='font-Light text-[20px]'>{data?.location}</span></p>
           <p className="text-[24px] font-SemiBold">
             Plan: {" "} 
                <span className='font-Light text-[20px]'>
                  {data?.bus_model}{" "} 
                  {data?.bus_model !== 'Ride Hailing' &&
                   <>
                    / <span className="font-Light text-[20px]">GHS {data?.amount}</span>
                    {" "}
                    <span className='text-[14px]'>{data?.periodicity}</span>
                   </>
                   }
                </span>
           </p>
          </div>

          {/* Terms */}
          <div className="flex flex-col mb-5">
              <p className="font-Light text-[18px] text-[#0A0D14] underline pb-2">Terms</p>
              {/*                
               <div className="text-[#545151] font-Light">
                   <p>Model : {data?.bus_model}</p>
                   <p>Engagement : {data?.engagement}</p>
                   <p>Renumerated : {data?.renumerated}</p>
                   <p>Bonus : {data?.bonus}</p>     
               </div> */}
          </div>
          {/* Terms */}

          {licenseExpired === true && 
             <p className='text-red-400 font-Bold w-60'>
               You are unable to place a bid right now, 
               please update  your 
               records. {" "} <br />
               <a href="/contactus">
                <span className='underline'>Contact FleetOps</span>
               </a>.
            </p>
          }


            {bidStatus !== "" && 
             <p className="text-red-400">
              {bidStatus === 'expired'
                ? 'Your previous bid has expired.'
                : bidStatus === 'declined'
                ? 'Your previous bid was declined.'
                : null
              }
              </p>
            }

         {/* Call to action */}
         <button
            disabled={licenseExpired}
            onClick={handleBidAction}
            className={`
              border-[1px] md:w-4/12 w-6/12 mt-3 mb-6 flex text-[#FFFFFF]
              ${licenseExpired ? 'bg-gray-300' : (bidStatus === 'pending' ? 'bg-[#FFEDBA]' : 'bg-[#23A6BF] hover:bg-[#23A6BF] border-[#23A6BF]')}
              hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 hover:text-white justify-center  cursor-pointer rounded-[10px] px-[10px] py-[${bidStatus === 'pending' ? '7px' : '10px'}]
            `}
          >
            <p className={`font-${bidStatus === 'pending' ? 'Light' : 'SemiBold'} text-[19px]  ${bidStatus === 'pending' ? 'text-[#CE9A00]' : 'text-[#FFFFFF]'} pt-2`}>
              {bidStatus === '' ? 'Place a bid' : (bidStatus === 'pending' || bidStatus === 'accepted' ? 'Awaiting Response' : 'Rebid')}
            </p>
          </button>
        
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
      )}
     </div>
     </div>

    
      <OtherCarsYouMayLike Data={vehicles} loading={loading} />

      {showPlaceBid && <PlacingBidModal onCancel={closePlaceBid} /> }

      {showDisclamer && <Disclamer onCancel={() => setshowDisclamer(false)} /> }

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
      
    </main>
  );
};

export default DashboardVehicleDetailsPage;
