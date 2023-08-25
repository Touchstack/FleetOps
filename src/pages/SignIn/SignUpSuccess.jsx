import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import Car from "../../assets/images/car-dashboard.svg";
import Close from "../../assets/images/close.svg";

const SignUpSuccess = () => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DriversOnboardingNavBar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center bg-white max-w-md border rounded-3xl mt-20 mb-10">
          <a
            href=""
            className="m-6 lg:w-11/12 md:w-7/12 sm:8/12 w-8/12 flex justify-end items-end"
          >
            <img src={Close} alt="" />
          </a>
          <img src={Car} alt="" className="m-5" />
          <h1 className="font-Bold text-center m-1 lg:text-4xl md:text-2xl text-2xl lg:w-11/12 md:w-8/12 sm:w-11/12 w-11/12">
            Hi Kwaku, welcome!
          </h1>
          <p className="text-[19px] font-Light text-[#545151] text-center m-3 lg:w-11/12 md:w-8/12 sm:w-6/12 w-6/12">
            We are excited to have you here. We received your sign up details,
            we will verify your license then you can request for a car.
          </p>
          <a href="/drivers/dashboard" className="m-6">
            <PrimaryButton buttonText={"Explore Fleetops"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpSuccess;
