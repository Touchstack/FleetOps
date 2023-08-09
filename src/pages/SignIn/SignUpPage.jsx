import React,{ useState } from 'react'
import AppLogo from "../../assets/images/fleetops-logo.svg";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



const SignUpPage = () => {
  const[phoneNumber,setPhoneNumber] = useState('');
  
    return (
      <div className="">
        <nav className="flex-row lg:block md:hidden sm:hidden hidden">
          <a href="/" className="p-2">
            <img
              className="lg:mr-20"
              src={AppLogo}
              alt="App Logo"
              style={{ width: 210, height: 70 }}
            />
          </a>
          <a href="/contactus" className="absolute top-0 right-0 mt-8 p-0">
            <OutlinedButton
              buttonText={"Contact Us"}
              cssprops={"md:ml-10 lg:block font-SemiBold"}
            />
          </a>
        </nav>
        <div className="bg-[#F7F9F8] font-Regular flex flex-col items-center justify-center text center min-h-screen ">
          <p className="font-SemiBold text-[19px] text-center mb-6 lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
            New to Fleetops?
            <a href="" className="text-fleetBlue p-1">
              Sign up
            </a>
          </p>
          <h1 className="font-Bold text-center lg:text-5xl md:text-4xl text-3xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
            Welcome Back
          </h1>
          <p className="text-[#666] text-[19px] font-Regular mb-4">
            Login to continue
          </p>
          <div className="font-Regular text-fleetNavText">
            <div className="bg-[#F7F9F8] mt-5">
              <label htmlFor="phone">Enter your number</label>
              <PhoneInput defaultValue={phoneNumber} />
              <div className="mt-10">
                <PrimaryButton buttonText={"Next"} cssprops={"p-10"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SignUpPage