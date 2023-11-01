import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";
import Car from "../../assets/images/car-dashboard.svg";
import Chart from "../../assets/images/chart.svg";
import { useEffect } from "react";

const Dashboard = () => {
  const data = localStorage.getItem("driver");
  const driver = JSON.parse(data);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return (window.location.href = "/drivers/loginpage");
    }
  }, []);

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar />
      <div className="font-Light flex flex-col justify-center items-start">
        <div className="container flex flex-col justify-center items-start self-center lg:px-16 md:px-12 sm:px-10 px-10 py-16">
          <p className="text-[#707EAE] text-lg text-left">
            Hi, {driver?.fullname}
          </p>
          <h1 className="text-[#2B3674] font-Bold md:text-4xl sm:text-3xl text-3xl">
            Welcome to FleetOps
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8 my-12 w-full">
            <div className="bg-fleetBlue text-white rounded-3xl p-8 h-40">
              <p className="text-md">Current Vehicle</p>
              <div className="flex justify-between items-center">
                <p className="font-Bold">___</p>
                <img src={Chart} className="img-fluid" />
              </div>
            </div>

            <div className="bg-white flex flex-col justify-center items-start border text-black rounded-3xl p-10 h-40">
              <p className="text-gray-700 text-md">Cars Requested</p>
              <h3 className="font-Regular text-2xl">0</h3>
            </div>

            <div className="bg-white flex flex-col justify-center items-start border text-black rounded-3xl p-10 h-40">
              <p className="text-gray-700 text-md">Complaints</p>
              <h3 className="font-Regular text-2xl">0</h3>
            </div>
          </div>

          <div className="bg-white flex md:flex-row sm:flex-col flex-col justify-around items-center rounded-3xl py-10 px-10 w-full">
            <div className="lg:mb-0 md:mb-0 sm:mb-8 mb-8">
              <p className="font-Bold  md:text-4xl sm:text-3xl text-3xl">
                Find available cars
              </p>
              <p className="text-gray-700 text-md pr-4">
                Choose from a wide variety of vehicles from the top car owners.
                All brands and models you want.
              </p>
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

export default Dashboard;
