import CarOwnerDashboardNavBar from "@/Components/Navbar/CarOwnerDashboardNavBar";
import { useEffect, useState } from "react";
import { apiGetCarOwnerVehicles } from "@/services/CarOwnerService";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../.././Components/ui/tabs";
import ListedCars from "./components/ListedCars";
import UnassignedCars from "./components/UnassignedCars";
import AssignedCars from "./components/AssignedCars";
import FilterBar from "./Filters/FilterBar";
import MobileFilterBar from "./Filters/MobileFilterPage/MobileFilterBar";
import ActiveBids from "@/pages/CarOwnerDashboardPage/components/ActiveBids.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReturnReason from "./components/modals/ReturnReason";
import ExperienceRate from "./components/modals/ExperienceRate";
import Confirmation from "./components/modals/Confirmation";
import Congratulations from "./components/modals/Congratulations";


const CarsListing = () => {
  const [allData, setAllData] = useState([]);
  const [assigned, setAssigned] = useState([]);
  const [unassigned, setUnassigned] = useState([]);
  const [activeBids, setActiveBids] = useState([])
  const [loading, setLoading] = useState(false);
  const [showReturnReason, setShowReturnReason] = useState(false);
  const [showExperienceRate, setShowExperienceRate] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  //console.log("this is url ==>", URL)
 //console.log("this is active bid =>", activeBids)

  const id = localStorage.getItem("car-owner-token")

  const updateAllData = (data) => {
    setAllData(data);
  };

  const updateAssigned = (data) => {
    setAssigned(data);
  };
  const updateUnassigned = (data) => {
    setUnassigned(data);
  };

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const [allResponse, assignedResponse, unassignedResponse, activeBidsResponse] = await Promise.all([
        apiGetCarOwnerVehicles(id),
        apiGetCarOwnerVehicles(id),
        apiGetCarOwnerVehicles(id),
        apiGetCarOwnerVehicles(id),
      ]);
      
      setAllData(allResponse.data?.allVehicles?.data);
      setAssigned(assignedResponse.data?.assigned?.data);
      setUnassigned(unassignedResponse.data?.unAssigned);
      setActiveBids(activeBidsResponse.data?.activeBids?.data);
    } catch (error) {
      toast.error(error?.response?.data?.message  || "Error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

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

 const openReturnReasonModal = () => {
    setShowReturnReason(true);
  }

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <CarOwnerDashboardNavBar />

      <div className="md:p-12 p-4" id="cars-section">
        <h3 className="mt-5 font-Bold text-center text-[#0A0D14] mb-2 lg:text-4xl md:text-4xl text-3xl">
          Vehicles Listed
        </h3>
        <p className="text-center px-11 text-[19px] text-[#545151] font-Light">
           All vehicles added will be listed here
        </p>


      <div className="z-50 relative hidden md:block">
        <FilterBar
          updateAllData={updateAllData} 
          updateAssigned={updateAssigned} 
          updateUnassigned={updateUnassigned}  
        />
      </div>

      {/* Mobile view bar */}
      <div className="md:hidden">
        <MobileFilterBar 
           updateAllData={updateAllData} 
           updateAssigned={updateAssigned} 
           updateUnassigned={updateUnassigned} 
        />
      </div>

      {/* Tabs */}
       <Tabs defaultValue="All" className="mr-auto z-0 w-full">
        <TabsList className="w-full justify-center rounded-none bg-transparent pl-0">
          <TabsTrigger
            value="All"
            className="relative rounded-none border-b-2 bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-duration-300 ease-in focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF]  data-[state=active]:shadow-none "
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="Assigned"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
           Assigned
          </TabsTrigger>
          <TabsTrigger
            value="Unassigned"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
            Unassigned
          </TabsTrigger>
          <TabsTrigger
            value="Active Bids"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
            Active Bids
          </TabsTrigger>
        </TabsList>


        <TabsContent value="All">
          <ListedCars data={allData} onUnassignClick={openReturnReasonModal}   loading={loading} />
        </TabsContent>

        <TabsContent value="Assigned">
          <AssignedCars data={assigned} onUnassignClick={openReturnReasonModal} loading={loading}  />
        </TabsContent>

        <TabsContent value="Unassigned">
          <UnassignedCars data={unassigned} loading={loading} />
        </TabsContent>

        <TabsContent value="Active Bids">
            <ActiveBids data={activeBids} loading={loading} />
        </TabsContent>
       </Tabs>
          {/* Tabs */}

      </div>

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

    </div>
  );
};

export default CarsListing;
