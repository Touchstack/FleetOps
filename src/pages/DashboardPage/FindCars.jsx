import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";
import { useEffect, useState } from "react";
import { apiGetVehicles } from "../../services/VehiclesService";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../.././Components/ui/tabs";
import AvailableCars from "./components/AvailableCars";
import FilterBar from "./Filters/FilterBar";
import MobileFilterBar from "./Filters/MobileFilterPage/MobileFilterBar";
import { nextPage } from "../../services/VehiclesService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FindCars = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isloadMore, setloadMore] = useState(false)
  const [appContext, setAppContext] = useContext(AppContext);
  const [URL, setURL] = useState("")



  //console.log("this is url ==>", URL)

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await apiGetVehicles();
      setData(response.data?.data);
      setURL(response?.data?.next_page_url)
      return setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return setData([]);
    }
  };

  const loadMore = async () => {
    setloadMore(true);
    let newUrl = URL;
    try {
       if (newUrl === null) {
         toast.error("End of List Reached");
         setloadMore(false);
         return
       } else {
        const res = await nextPage(newUrl);
        setURL(res?.data?.next_page_url);
        const newArr = [...data, ...res?.data?.data];
        setData(newArr);
        setloadMore(false);
       }
    } catch (error) {
        setloadMore(false);
        console.log(error);
    }
};

  

  const selectVehicle = (vehicle) => {
    setAppContext({
      ...appContext,
      selectedVehicle: vehicle,
    });
    return (window.location.href = `/drivers/dashboard/vehicle/details/${vehicle?.id}`);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar />

      <div className="md:p-12 p-4" id="cars-section">
        <h3 className="mt-5 font-Bold text-center text-[#0A0D14] mb-2 lg:text-4xl md:text-4xl text-3xl">
          Available Cars
        </h3>
        <p className="text-center px-11 text-[19px] text-[#545151] font-Light">
          Choose from a wide variety of vehicles from the top car owners. <br />
          All brands and models you want.
        </p>
          
              
      <div className="z-50 relative hidden md:block">
        <FilterBar />
      </div>
     
      {/* Mobile view bar */}
      <div className="md:hidden">
        <MobileFilterBar />
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
            value="Ride hailing"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
           Ride hailing
          </TabsTrigger>
          <TabsTrigger
            value="Rental"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
            Rental 
          </TabsTrigger>
          <TabsTrigger
            value="Hire-purchase"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
            Hire-purchase
          </TabsTrigger>
        </TabsList>
       
       
        <TabsContent value="All">
          <AvailableCars data={data} Selected={selectVehicle} loadMore={loadMore} isLoadMoreLoading={isloadMore}  loading={loading} />
        </TabsContent>

        <TabsContent value="Ride hailing">
          <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              Oops! No vehicles were found
            </p>
          </section>
        </TabsContent>

        <TabsContent value="Rental">
         <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              Oops! No vehicles were found
            </p>
          </section>
        </TabsContent>

        <TabsContent value="Hire-purchase">
          <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              Oops! No vehicles were found
            </p>
          </section>
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
    </div>
  );
};

export default FindCars;
