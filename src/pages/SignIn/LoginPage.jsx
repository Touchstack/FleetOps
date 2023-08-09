import React, { useState } from "react";
import AppLogo from "../../assets/images/fleetops-logo.svg";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import PhoneInput from "react-phone-input-2";



const LoginPage = () => {
  const [phoneNumber,setPhoneNumber] = useState('')

  
  return (
    <div>
      <nav className="flex-row lg:block md:hidden sm:hidden hidden">
        <a href="/" className="p-2">
          <img
            className="lg:mr-20"
            src={AppLogo}
            alt="App Logo"
            style={{ width: 210, height: 75 }}
          />
        </a>
        <a href="/contactus" className="absolute top-0 right-0 mt-8 p-0">
          <OutlinedButton
            buttonText={"Contact Us"}
            cssprops={"md:ml-10 lg:block font-SemiBold"}
          />
        </a>
      </nav>

      <div className="bg-[#F7F9F8] py-24 flex flex-col justify-center items-center min-h-screen">
        <p className="text-[#000] font-SemiBold text-[19px] text-center mb-6 lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Have an account?
          <a href="/"className="text-fleetBlue p-1">
            Login
          </a>
        </p>
        <h3 className="font-Bold text-[#0A0D14] text-center lg:text-5xl md:text-4xl text-3xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Let’s start with your number
        </h3>
        <h3 className="text-[#666666]">Create an account, find cars.</h3>
        <div className="bg-[#F7F9F8] mt-5">
          <label htmlFor="phone">Enter your number</label>
          <PhoneInput defaultValue={phoneNumber} />
          <div className="mt-10">
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
  );
}




export default LoginPage;
