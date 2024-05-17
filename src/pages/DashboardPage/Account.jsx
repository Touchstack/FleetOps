import DashboardNavBar from "@/Components/Navbar/DashboardNavBar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/Components/ui/tabs";
import EditProfile from "./components/EditProfile";
import AccountOverview from "./components/AccountOverview";
import { apiFillDriverProfile } from "@/services/VehiclesService";
import { useEffect } from "react";

const Account = () => {
  const id = JSON.parse(localStorage.getItem('driver_id'))

  const getFormData = async () => {
    try {
      const res = await apiFillDriverProfile(id);
      if (res.status === 200) {
        const driverData = {
          fname: res?.data?.driver?.DNM,
          lname: res?.data?.driver?.DSN,
          phone: res?.data?.driver?.DCN,
          email: res?.data?.driver?.email,
          transmission: res?.data?.driver?.trans_type
        };
        localStorage.setItem('From-Prefill', JSON.stringify(driverData));
      }
    } catch (error) {
      console.error("Error fetching driver profile data:", error);
    }
  };
  
  useEffect(() => {
    getFormData();
  }, [])
  
  return (
    <div className="bg-[#F2F2F2]  min-h-screen">
      <DashboardNavBar />

      <div className="flex flex-col items-center justify-center mt-10">
         <h1 className="font-bold text-[45px]">Account</h1>

         <div className="my-10">
           {/* Tabs */}
          <Tabs defaultValue="Account Overview" className="mr-auto z-0 w-full">
            <TabsList className="w-full justify-center rounded-none bg-transparent pl-0">
              <TabsTrigger
                value="Account Overview"
                className="relative font-Bold text-[19px] rounded-none border-b-2 bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-duration-300 ease-in focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF]  data-[state=active]:shadow-none "
              >
                Account Overview
              </TabsTrigger>
              <TabsTrigger
                value="Edit Profile"
                className="relative font-Bold text-[19px] rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
              >
                Edit Profile
              </TabsTrigger>
            </TabsList>
          
          
            <TabsContent value="Account Overview">
               <AccountOverview />
            </TabsContent>

            <TabsContent value="Edit Profile">
               <EditProfile />
            </TabsContent>

          </Tabs>
     {/* Tabs */}
         </div>
      </div>
    </div>
  )
}

export default Account