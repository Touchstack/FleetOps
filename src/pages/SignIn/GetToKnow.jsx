import AppLogo from "../../assets/images/fleetops-logo.svg";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import FormInputItem from "../../Components/Forms/Inputs/RegistrationFormInput";



const GetToKnow =() =>{
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
        <div className="bg-[#F7F9F8] py-24 flex flex-col justify-center items-center">
          <h3 className="font-Bold text-[#0A0D14] text-center lg:text-5xl md:text-4xl text-3xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
            Let’s get to know about you
          </h3>
          <p className="text-[#545151] font-Light text-lg mb-5 text-center px-8">
            Kindly add your details here
          </p>

          <div className="container items-center lg:w-5/12 md:w-5-12 sm:w-10/12 w-10/12">
            <FormInputItem
              label={"Full name"}
              placeholder={"e.g Kwaku Mensah"}
              id={"first_name"}
            />
            <FormInputItem
              label={"Your email"}
              placeholder={"e.g kwaku@mail.com"}
              type={"email"}
              id={"email"}
            />

            <FormInputItem
              label={"Driving License"}
              placeholder={"Uphold your license"}
              type={"photo"}
              id={"license"}
              cssprops={"pl-10"}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 text-[#A4A6A8]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>

            <div className="">
              <a href="/drivers/signupsuccess">
                <PrimaryButton
                  buttonText={"Submit"}
                  onClick={() => {
                    window.location.href = "/drivers/dashboard";
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}












export default GetToKnow