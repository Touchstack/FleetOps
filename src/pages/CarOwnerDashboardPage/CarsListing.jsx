import CarOwnerDashboardNavBar from "@/Components/Navbar/CarOwnerDashboardNavBar";
import { useEffect, useState } from "react";
import { apiGetVehicles } from "../../services/VehiclesService";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../.././Components/ui/tabs";
import ListedCars from "./components/ListedCars";
import FilterBar from "./Filters/FilterBar";
import MobileFilterBar from "./Filters/MobileFilterPage/MobileFilterBar";




const CarsListing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //console.log("this is url ==>", URL)

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await apiGetVehicles();
      setData(response.data?.data);
      return setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return setData([]);
    }
  };

  

  useEffect(() => {
    fetchVehicles();
  }, []);

  
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
          <ListedCars data={data}   loading={loading} />
        </TabsContent>

        <TabsContent value="Assigned">
          <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              Oops! No vehicles were found
            </p>
          </section>
        </TabsContent>

        <TabsContent value="Unssigned">
         <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              Oops! No vehicles were found
            </p>
          </section>
        </TabsContent>

        <TabsContent value="Active Bids">
          <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              Oops! No vehicles were found
            </p>
          </section>
        </TabsContent>
       </Tabs>
     {/* Tabs */}
     
      </div>
    </div>
  );
};

export default CarsListing;
