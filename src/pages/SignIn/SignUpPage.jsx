import { useState } from "react";
import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUpPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DriversOnboardingNavBar />
      <div className="py-24 flex flex-col justify-start items-center">
        <p className="text-[#000] font-SemiBold text-[19px] text-center mb-6 lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Have an account?
          <a href="/drivers/loginpage" className="text-fleetBlue p-1">
            Login
          </a>
        </p>
        <h3 className="font-Bold text-[#0A0D14] text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Let’s start with your number
        </h3>
        <h3 className="text-[#666666] font-Light">
          Create an account, find cars.
        </h3>
        <div className="bg-[#F7F9F8] mt-5">
          <label htmlFor="phone" className="font-Regular">
            Enter your number
          </label>
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
              onClick={() => {
                window.location.href = "/otppage";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
