import { useState } from "react";
import * as Yup from "yup";
import {
  Spinner,
  ErrorAlert,
} from "../../Components/Forms/CarOwnersRegistrationForm";
import { apiDriverSignUp } from "../../services/VehiclesService";
import FormInputItem from "../../Components/Forms/Inputs/RegistrationFormInput";
import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { Formik } from "formik";
import "react-phone-input-2/lib/style.css";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const validation = Yup.object().shape({
    phone_number: Yup.string()
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        "Phone Number is Invalid"
      )
      .required("Phone Number is Required"),
  });

  const registerDriver = async (values) => {
    try {
      setError(false);
      setLoading(true);
      await apiDriverSignUp(values);
      setLoading(false);
      return (window.location.href = "/otppage");
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorText(error?.response?.data?.message || error?.message);
      setTimeout(() => setError(false), 3000);
    }
  };

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
        <Formik
          initialValues={{ phone_number: "" }}
          validationSchema={validation}
          onSubmit={(values) => registerDriver(values)}
        >
          {({ handleChange, handleSubmit, touched, errors, values }) => (
            <div className="bg-[#F7F9F8] mt-5">
              {error && <ErrorAlert error={errorText} />}
              <label htmlFor="phone" className="font-Regular">
                Enter your number
              </label>

              <FormInputItem
                placeholder={"e.g  0245869979"}
                type={"tel"}
                id={"phonenumber"}
                value={values.phone_number}
                onChange={handleChange("phone_number")}
              />
              {touched.phone_number && errors.phone_number && (
                <p className="text-red-500 underline font-Regular pb-2">
                  {errors.phone_number}
                </p>
              )}
              <div className="mt-10 flex justify-end align-baseline">
                {loading ? (
                  <Spinner />
                ) : (
                  <PrimaryButton buttonText={"Next"} onClick={handleSubmit} />
                )}
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default SignUpPage;
