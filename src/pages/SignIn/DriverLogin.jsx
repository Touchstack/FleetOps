import { useState, useEffect } from "react";
import * as Yup from "yup";
import {
  Spinner,
  ErrorAlert,
} from "../../Components/Forms/CarOwnersRegistrationForm";
import { apiDriverLogin } from "../../services/VehiclesService";
import FormInputItem from "../../Components/Forms/Inputs/RegistrationFormInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";


const DriverLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("driver_id");
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
          const userData = response.data;
          console.log(userData)
          localStorage.setItem("driver", JSON.stringify(userData));
          localStorage.setItem("tempID", userData?.login_id);
          localStorage.setItem("driverNumber", values?.phoneNumber);
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
    <div className="py-5 flex flex-col justify-start items-center">
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
  )
}

export default DriverLogin