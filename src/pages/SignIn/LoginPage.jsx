import { useState } from "react";
import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import PhoneInput from "react-phone-input-2";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DriversOnboardingNavBar />
      <div className="font-Regular py-24 flex flex-col items-center justify-center text center">
        <p className="font-SemiBold text-[19px] text-center mb-6 lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          New to Fleetops?
          <a href="/signuppage" className="text-fleetBlue p-1">
            Sign up
          </a>
        </p>
        <h1 className="font-Bold text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Welcome Back
        </h1>
        <p className="text-[#666] text-[19px] font-Regular mb-4">
          Login to continue
        </p>
        <div className="font-Regular text-fleetNavText">
          <div className="bg-[#F7F9F8] mt-5">
            <label htmlFor="phone">Enter your number</label>
            <PhoneInput
              defaultValue={phoneNumber}
              inputClass="font-Regular"
              inputProps={setPhoneNumber}
              buttonStyle={{
                backgroundColor: "#FFF",
              }}
              inputStyle={{
                height: 50,
              }}
            />
            <div className="mt-10 flex justify-end align-baseline">
              <PrimaryButton
                buttonText={"Next"}
                cssprops={"p-10"}
                onClick={() => {
                  window.location.href = "/otppage";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
