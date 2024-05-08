import OtpInput from "react-otp-input";
import { useState } from "react";
import {
  Spinner,
  ErrorAlert,
} from "../../Components/Forms/CarOwnersRegistrationForm";
import { apiVerifyOtp } from "../../services/VehiclesService";
import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const id = localStorage.getItem("tempID");

  const verifyOtp = async () => {
    try {
      setError(false);
      setLoading(true);
       //const tempToken = localStorage.getItem("tempToken");
       const res =  await apiVerifyOtp({ otp: otp }, id);
      setLoading(false);
      if (res.status === 200 && res?.data?.name !== null) {
        localStorage.setItem("driver_id", res?.data.driver_id);
        localStorage.removeItem("tempID");
        return (window.location.href = "/drivers/dashboard");
      } else if (res.status === 200 && res?.data?.name === null) {
        return (window.location.href = "/gettoknow");
      } 
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      setErrorText(error?.response?.data?.message || error?.message);
      setTimeout(() => setError(false), 3000);
    }
  };

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
        {error && <ErrorAlert error={errorText} />}
        <div className="flex justify-center items-center text-center lg:w-6/12 md:w-6/12 sm:w-10/12 w-10/12">
          <OtpInput
            containerStyle={{
              flexDirection: "row",
              justifyContent: "center",

              width: "100%",
            }}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => (
              <input
                {...props}
                type="number"
                className="text-center rounded-lg text-[32px] h-[56px] p-2 m-2 border border-fleetBlue outline-0 font-Bold transition-all focus:outline-none"
                style={{
                  width: "75px",
                }}
              />
            )}
          />
        </div>
        {/*<a href="/otppage">
          <h3 className="text-fleetBlue font-Regular text-[15px] p-6">
            Resend code
          </h3>
              </a>*/}
        <div className="flex justify-end align-baseline mt-5">
          {loading ? (
            <Spinner />
          ) : (
            <PrimaryButton buttonText={"Verify"} onClick={verifyOtp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
