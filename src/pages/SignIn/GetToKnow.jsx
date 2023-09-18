import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import FormInputItem from "../../Components/Forms/Inputs/RegistrationFormInput";

const GetToKnow = () => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DriversOnboardingNavBar />
      <div className="py-24 flex flex-col justify-start items-center">
        <h3 className="font-Bold text-[#0A0D14] text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
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
            type={"file"}
            id={"license"}
            cssprops={"pl-10"}
          />

          <div className="flex justify-end align-baseline">
            <PrimaryButton
              buttonText={"Submit"}
              onClick={() => {
                window.location.href = "/drivers/dashboard";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
