import { useState } from "react";
import AppLogo from "../../assets/images/fleetops-logo.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import Car from "../../assets/images/car-dashboard.svg";
import Close from "../../assets/images/close.svg";



const SignUpSuccess = () =>{
  
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
        <div className="backdrop-opacity-20 backdrop-invert bg-[#F7F9F8]/95 h-full flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col items-center justify-center bg-white max-w-md border rounded-3xl mt-20 mb-10">
            <a href="" className="m-6 lg:w-11/12 md:w-7/12 sm:8/12 w-8/12">
             <img src={Close} alt="" />
            </a>
            <img src={Car} alt="" className="m-5" />
            <h1 className="font-Bold text-center m-1 lg:text-4xl md:text-2xl text-2xl lg:w-11/12 md:w-8/12 sm:w-11/12 w-11/12">
              Hi Kwaku, welcome!
            </h1>
            <p className="text-[19px] text-[#545151] text-center m-3 lg:w-11/12 md:w-8/12 sm:w-6/12 w-6/12">
              We are excited to have you here. We received your sign up details,
              we will verify your license then you can request for a car.
            </p>
            <a href="/" className="m-6">
              <PrimaryButton buttonText={"Explore Fleetops"} />
            </a>
          </div>
        </div>
      </div>
    );
}

export default SignUpSuccess