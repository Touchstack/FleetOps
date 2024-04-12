import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/Components/ui/tabs";
import DriverLogin from "./DriverLogin";
import CarOwnerLogin from "./CarOwnerLogin";

const LoginPage = () => {

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DriversOnboardingNavBar />
      <div className="py-24 flex flex-col justify-start items-center">
        <p className="text-[#000] font-SemiBold text-[19px] text-center mb-6 lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          New To FleetOps?
          <a href="/signuppage" className="text-fleetBlue p-1">
            SignUp
          </a>
        </p>
        <h3 className="font-Bold text-[#0A0D14] text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Welcome Back
        </h3>
        <h3 className="text-[#666666] font-Light pb-5">Login To Continue</h3>
        


      {/* Tabs */}
       <Tabs defaultValue="Driver Login" className="mr-auto z-0 w-full">
        <TabsList className="w-full justify-center rounded-none bg-transparent pl-0">
          <TabsTrigger
            value="Driver Login"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
           Driver Login 
          </TabsTrigger>
          <TabsTrigger
            value="Car Owner Login"
            className="relative rounded-none border-b-2  bg-transparent md:px-10 px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-[#234C65] data-[state=active]:text-[#234C65] data-[state=inactive]:text-[#ABB3BF] data-[state=active]:shadow-none "
          >
            Car Owner Login
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Driver Login">
            <DriverLogin />
        </TabsContent>

        <TabsContent value="Car Owner Login">
            <CarOwnerLogin />
        </TabsContent>

       </Tabs>

      </div>
    </div>
  );
};
export default LoginPage;
