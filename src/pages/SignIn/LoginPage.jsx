import { useState, useEffect } from "react";
import * as Yup from "yup";
import {
  Spinner,
  ErrorAlert,
} from "../../Components/Forms/CarOwnersRegistrationForm";
import { apiDriverLogin } from "../../services/VehiclesService";
import FormInputItem from "../../Components/Forms/Inputs/RegistrationFormInput";
import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return navigate("/drivers/dashboard");
    }
  }, []);

  const validation = Yup.object().shape({
    phoneNumber: Yup.string()
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
      const response = await apiDriverLogin(values);
      const userData = response.data?.data;
      localStorage.setItem("driver", JSON.stringify(userData));
      localStorage.setItem("token", userData?.token);
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
          New To FleetOps?
          <a href="/signuppage" className="text-fleetBlue p-1">
            SignUp
          </a>
        </p>
        <h3 className="font-Bold text-[#0A0D14] text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Welcome Back
        </h3>
        <h3 className="text-[#666666] font-Light">Login To Continue</h3>
        <Formik
          initialValues={{ phoneNumber: "" }}
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
                value={values.phoneNumber}
                onChange={handleChange("phoneNumber")}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <p className="text-red-500 underline font-Regular pb-2">
                  {errors.phoneNumber}
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
export default LoginPage;
