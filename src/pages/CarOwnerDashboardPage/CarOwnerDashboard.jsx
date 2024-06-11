import CarOwnerDashboardNavBar from "../../Components/Navbar/CarOwnerDashboardNavBar";
import { Spinner } from "../../Components/Forms/CarOwnersRegistrationForm";
import { apiGetCarOwnerDashboard } from "@/services/CarOwnerService";
import Car from "../../assets/images/car-dashboard.svg";
import Chart from "../../assets/images/chart.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 


const CarOwnerDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  // const carOwner = JSON.parse(carOwnerData);
  // const driverVehicleObj = localStorage.getItem("driverVehicle");
  // const driverVehicle = JSON.parse(driverVehicleObj);

  const navigate = useNavigate();

 
  const getCarOwnerDashboard = async () => {
    const id = localStorage.getItem("car-owner-token")
      if(id){
        try {
          setLoading(true);
          const res = await apiGetCarOwnerDashboard(id);
           if (res.status === 200) {
            localStorage.setItem(
              "dashBoardData",
              JSON.stringify(res?.data)
            );
            setData(res?.data);
           }
          return setLoading(false);
        } catch (error) {
          setLoading(false);
        }   
    }
  }


  useEffect(() => {
    const token = localStorage.getItem("car-owner-token");
    if (!token) {
      return (window.location.href = "/drivers/loginpage");
    }
    getCarOwnerDashboard()
  }, []);


  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <CarOwnerDashboardNavBar />
      <div className="font-Light flex flex-col justify-center items-start">
        <div className="container flex flex-col justify-center items-start self-center lg:px-16 md:px-12 sm:px-10 px-10 py-16">
          <p className="text-[#707EAE] text-lg text-left">
            Hi, {data?.Name}
          </p>
          <h1 className="text-[#2B3674] font-Bold md:text-4xl sm:text-3xl text-3xl">
            Welcome to FleetOps
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8 my-12 w-full">
            
 
              <div className="bg-fleetBlue font-Sans text-white rounded-3xl p-8 h-50">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p className="text-[16px] text-[#E9EDF7] font-SansLight">Assigned Vehicles</p>
                    {loading ? (
                      <Spinner /> // Show spinner while loading
                    ) : data ? (
                      <p className="text-[20px] font-Regular">
                         {data?.AssignedVehicle_Count}
                      </p>
                    ) : (
                      <p className="text-[20px] font-SansMedium">_</p> // Empty state
                    )}
                  </div>
                    <img src={Chart} className="img-fluid" />
                </div>
              </div>
           {/* Selected Cars */}

            <div className="bg-white flex flex-col justify-center items-start border text-black rounded-3xl p-10 h-50">
              <p className="text-gray-700 text-md">Cars listed</p>
              <h3 className="font-Regular text-2xl">
                {" "}
                {data?.listedVehicles}
              </h3>
            </div>

            <div className="bg-white flex flex-col justify-center items-start border text-black rounded-3xl p-10 h-50">
              <p className="text-gray-700 text-md">Average Reviews</p>
              <h3 className="font-Regular text-2xl">{data?.ReviewCount} / 5.0</h3>
            </div>
          </div>

          <div className="bg-white flex md:flex-row sm:flex-col flex-col justify-around items-center rounded-3xl py-10 px-10 w-full">
            <div className="lg:mb-0 md:mb-0 sm:mb-8 mb-8">
              <p className="font-Bold  md:text-4xl sm:text-3xl text-3xl">
                Manage Your Listings
              </p>
              <p className="text-gray-700 text-md pr-4 max-w-[356px]">
                View and manage all the vehicles you’ve listed on our platform.
              </p>

              <div onClick={() => navigate("/carowner/listing")} className="mt-3 bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110  w-[140px] h-[46px] rounded-[10px] flex items-center justify-center">
                <p className="pt-1 font-Sans font-Medium text-[#FFFFFF] text-[14px]">
                  Manage Listings
                </p>
              </div>
            </div>
            <div>
              <img src={Car} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarOwnerDashboard;
