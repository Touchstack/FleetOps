import PrimaryButton from "../Buttons/PrimaryButton";
import FormInputItem from "./Inputs/RegistrationFormInput";

const CarOwnersRegistrationForm = () => {
  return (
    <div className="py-24 flex flex-col justify-center items-center">
      <h3 className="font-Bold text-[#0A0D14] lg:text-4xl md:text-4xl text-3xl">
        Let’s get to know you
      </h3>
      <p className="text-[#545151] font-Light text-lg mb-5 text-center px-8">
        Kindly fill your details below
      </p>

      <div className="container lg:w-5/12 md:w-5-12 sm:w-10/12 w-10/12">
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
          label={"Phone number"}
          placeholder={"e.g  0245869979"}
          type={"tel"}
          id={"phonenumber"}
        />
        <div className="">
          <PrimaryButton
            buttonText={"Submit"}
            onClick={() => {
              window.location.href = "/carowners/registration/success";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarOwnersRegistrationForm;
