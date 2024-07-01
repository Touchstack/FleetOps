
import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";
import { Spinner } from "../../Components/Forms/CarOwnersRegistrationForm";
import { apiGetDriverDashboard, apiCancelRetrival } from "../../services/VehiclesService";
import Car from "../../assets/images/car-dashboard.svg";
import Earnchart from '../../assets/images/Earnchart.svg'
import Chart from "../../assets/images/chart.svg";
import { useEffect, useState } from "react";
import ReturnReason from "./components/modals/ReturnReason";
import ExperienceRate from "./components/modals/ExperienceRate";
import Confirmation from "./components/modals/Confirmation";
import OutstandingAlert from "./components/modals/OutstandingAlert";
import Congratulations from "./components/modals/Congratulations";
import { useNavigate } from "react-router-dom";
import { BiSolidFilePdf } from "react-icons/bi";
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [showReturnReason, setShowReturnReason] = useState(false);
  const [showExperienceRate, setShowExperienceRate] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  

  const navigate = useNavigate()

  const driver_id = localStorage.getItem("driver_id");


  const getDashBoardData = async () => {
    if (driver_id) {
      try {
        setLoading(true);
        const res = await apiGetDriverDashboard(driver_id);
        if (res.status === 200) {
          const userData = res?.data;
          setData(userData);
          localStorage.setItem("driver", JSON.stringify(userData));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handleCancelRetrival = async () => {
    const id = data?.vehicle_id
    if (id) {
      try {
        setLoading(true);
        const res = await apiCancelRetrival(id);

        if (res.status === 200) {
          toast.success(res?.data?.message)
          return window.location.reload()
        } else {
         toast.error(res?.response?.data?.message || "an error occured")
        } 
      } catch (error) {
        console.log(error);
      }
    }
  } 


  useEffect(() => {
    if (!driver_id) {
      return (window.location.href = "/drivers/loginpage");
    }
    getDashBoardData();
  
  }, [driver_id]);


  const closeModal = () => {
    setShowReturnReason(false);
    setShowExperienceRate(false)
    setShowConfirmation(false);
    setShowCongratulations(false);
  };

  const handleShowExperience = () => {
    setShowReturnReason(!showReturnReason)
    setShowExperienceRate(!showExperienceRate)
  }

  const handleShowConfrimation = () => {
    setShowExperienceRate(!showExperienceRate)
    setShowConfirmation(!showConfirmation)
  }

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar />
      <div className="font-Light flex flex-col justify-center items-start">
        <div className="container flex flex-col justify-center items-start self-center lg:px-16 md:px-12 sm:px-10 px-10 py-16">
          <p className="text-[#707EAE] text-lg text-left">
            Hi, {data?.driver}
          </p>
          <h1 className="text-[#2B3674] font-Bold md:text-4xl sm:text-3xl text-3xl">
            Welcome to FleetOps
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8 mt-12 w-full">
            
              <div className="bg-fleetBlue col-span-1 font-Sans text-white rounded-3xl p-8 h-50">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] text-[#E9EDF7] font-SansLight">Current vehicle</p>
                    {loading ? (
                      <Spinner /> // Show spinner while loading
                    ) : data?.AssignedVehicle !== "" ? (
                      <p className="text-[20px] font-SansMedium">
                         {data?.AssignedVehicle}
                      </p>
                    ) : data?.AssignedVehicle !== "" ? (
                      <p className="text-[20px] font-SansMedium">
                        {data?.VCL} {data?.VMK} {data?.VMD} ({data?.VDT?.split("-")[0]})
                      </p>
                    ) : (
                      <p className="text-[20px] font-SansMedium">_</p> // Empty state
                    )}
                  </div>
                
                    <img src={Chart} className="img-fluid" />
                
                </div>

                {data?.AssignedVehicle ? (
                  <>
                    <div className="space-y-3">
                      <p className="text-[14px] text-[#E9EDF7] mt-[14px] font-SansLight">Plan: {data?.model}</p>
                     <div className="flex items-center space-x-3">
                      <BiSolidFilePdf size={25} />
                      <a 
                        href={`https://engines.fleetopsgh.com/uploads/handover/${data?.form}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-SemiBold font-[16px] underline">
                        Vehicle Collection Form
                      </a>
                     </div>
                    </div>
                    
                  <div className="flex space-x-3 mt-5">
                    <div className="border-[1px] w-6/12 flex items-center justify-center p-3 rounded-[10px] text-[#23A6BF] bg-[#FFFFFF] font-SemiBold hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110"
                        onClick={()=> navigate("/drivers/dashboard/payment/initialize")}
                        >
                         <p>Make Payment</p>
                     </div>
                    
                    {data?.return_status === false ? (
                        <div className="border-[1px] w-6/12 flex items-center justify-center p-3 rounded-[10px] text-[#FFFFFF] border-[#FFFFFF] font-SemiBold hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110"
                         onClick={() => setShowReturnReason(true)}
                        >
                         <p>Return car</p>
                        </div>
                        ) : data?.return_status === true ? (
                        <div className="border-[1px] w-6/12 flex items-center justify-center p-3 rounded-[10px] text-[#FFFFFF] border-[#FFFFFF] font-SemiBold hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110"
                         onClick={handleCancelRetrival}
                         >
                          <p>Cancel Retrival</p>
                         </div>
                      ): data?.return_status === 'owing' ? (
                        <OutstandingAlert />
                      ) : null}
                      </div>
                    </>
                    ) : null}
              </div>
           {/* Selected Cars */}

           {data?.return_status === 'owing' && (
            <div className="bg-[#FFE5E8] border-[1px] flex md:hidden mt-3 w-full md:w-4/12 flex-row p-3 space-x-3 border-[#E02D3C] text-black rounded-[8px]">
              <p className="font-Medium text-[#E02D3C]">
                Declared sales is incomplete, please press {""} 
                <span className="font-Bold">Make Payment</span> to pay the balance owing.
              </p>
            </div>
            )}

            <div className="bg-white flex flex-col justify-center items-start border text-black rounded-3xl p-10 h-50">
              <p className="text-gray-700 text-md">Active Bids</p>
              <h3 className="font-Regular text-2xl">
                {" "}
                {data?.BidCount}
              </h3>
            </div>

            <div className="bg-white flex flex-col justify-center items-start border text-black rounded-3xl p-10 h-50">
              <p className="text-gray-700 text-md">Average Reviews</p>
              <h3 className="font-Regular text-2xl">{data?.ReviewCount} / 5.0</h3>
            </div>
          </div>
          
        {/* owing reminder */}
        {data?.return_status === 'owing' && (
         <div className="bg-[#FFE5E8] border-[1px] md:flex hidden mt-3 w-full md:w-4/12 flex-row p-3 space-x-3 border-[#E02D3C] text-black rounded-[8px]">
           <p className="font-Medium text-[#E02D3C]">
             Declared sales is incomplete, please press {""} 
            <span className="font-Bold">Make Payment</span> to pay the balance owing.
           </p>
         </div>
        )}

         {/* Earingins and trips */}
          <div className="flex md:flex-row w-full gap-3 flex-col my-8 ">
           <div className="bg-white flex  md:w-[257px] flex-row p-4 space-x-3 border text-black rounded-[20px]">
              <img src={Earnchart} alt="" />
              <div className="flex flex-col">
               <p className="text-[#A3AED0] text-[14px]">Earnings</p>
               <h3 className="font-SansMedium font-[700] text-2xl">GHS 0.00</h3>
              </div>
            </div>

            <div className="bg-white flex md:w-[257px]  justify-between flex-row p-4 space-x-3 border text-black rounded-[20px]">
              <div className="flex flex-col">
               <p className="text-[#A3AED0] text-[14px]">Trips</p>
               <h3 className="font-Regular font-[700] text-2xl">82</h3>
              </div>
              <img src={Earnchart} alt="" />
            </div>
          </div>

          <div className="bg-white flex md:flex-row sm:flex-col flex-col justify-around items-center rounded-3xl py-10 px-10 w-full">
            <div className="lg:mb-0 md:mb-0 sm:mb-8 mb-8">
              <p className="font-Bold  md:text-4xl sm:text-3xl text-3xl">
                Find available cars
              </p>
              <p className="text-gray-700 text-md pr-4 max-w-[356px]">
                Choose from a wide variety of vehicles from the top car owners.
                All brands and models you want.
              </p>

              <div onClick={()=> navigate("/drivers/findcars")} className="mt-3 bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110  w-[140px] h-[46px] rounded-[10px] flex items-center justify-center">
                <p className="pt-1 font-Sans text-[#FFFFFF] text-[14px]">
                 Start Search
                </p>
              </div>
            </div>
            <div>
              <img src={Car} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

     
     {showReturnReason && (
        <ReturnReason onCancel={closeModal} onNext={handleShowExperience} />
     )}
     
     {showExperienceRate && (
        <ExperienceRate onCancel={closeModal} onNext={handleShowConfrimation} />
     )}

     {showConfirmation && (
        <Confirmation onCancel={closeModal} />
     )}

      {showCongratulations && (
       <Congratulations onCancel={closeModal} />
      )}

     <Toaster position="top-right" reverseOrder={true} />

    </div>
  );
};

export default Dashboard;
