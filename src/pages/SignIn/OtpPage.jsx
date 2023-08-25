import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const OtpPage = () => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DriversOnboardingNavBar />
      <div className="py-24 text-fleetNavText font-Regular flex flex-col justify-start items-center">
        <h1 className="text-[45px] text-fleetNavText font-Bold">Enter Code</h1>
        <p className="text-[19px] text-[#0E0E0E] font-Light text-center mt-2 lg:w-4/12 md:w-8/12 sm:11/12 w-11/12">
          We sent a 4 digit code to your phone number <br />
          for verification. Please enter it below
        </p>
        <div className="">
          <h3 className="font-Regular mt-6 text-[15px] mr-[16rem]">
            Enter code
          </h3>
        </div>
        <div className="items-center text-center lg:space-x-4 lg:w-5/12 md:w-5-12 sm:w-10/12 w-10/12">
          <input
            type="text"
            maxLength={1}
            className=" gap-4 text-center rounded-lg w-[68px] h-[56px] text-[32px] p-2 m-[2px] border border-fleetBlue outline-0 font-Bold transition-all focus:outline-none "
          />
          <input
            type="text"
            maxLength={1}
            className="text-center rounded-lg w-[68px] h-[56px] text-[32px] p-2 m-[2px] border border-fleetBlue outline-0 font-Bold transition-all focus:outline-none"
          />
          <input
            type="text"
            maxLength={1}
            className="text-center rounded-lg w-[68px] h-[56px] text-[32px] p-2 m-[2px] border border-fleetBlue outline-0 font-Bold transition-all focus:outline-none"
          />
          <input
            type="text"
            maxLength={1}
            className="text-center rounded-lg w-[68px] h-[56px] text-[32px] p-2 m-[2px] border border-fleetBlue outline-0 font-Bold transition-all focus:outline-none"
          />
        </div>
        <a href="/otppage">
          <h3 className="text-fleetBlue font-Regular text-[15px] p-6">
            Resend code
          </h3>
        </a>
        <div className="flex justify-end align-baseline">
          <PrimaryButton
            buttonText={"Verify"}
            onClick={() => {
              window.location.href = "/gettoknow";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
