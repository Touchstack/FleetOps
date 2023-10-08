import * as Yup from "yup";
import { useState } from "react";
import { Formik } from "formik";
import { apiPostDriver } from "../../services/VehiclesService";
import Preview from "../../Components/ImgPreview/Preview";
import {
  ErrorAlert,
  Spinner,
} from "../../Components/Forms/CarOwnersRegistrationForm";
import DriversOnboardingNavBar from "../../Components/Navbar/DriversOnboardingNavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import FormInputItem from "../../Components/Forms/Inputs/RegistrationFormInput";

const GetToKnow = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const driverNumber = localStorage.getItem("driverNumber");

  const validation = Yup.object().shape({
    name: Yup.string().required("Fullname is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    licenseFront: Yup.mixed()
      .required("Please upload image of the front of your license")
      .test("fileSize", "File size is too large", (value) => {
        if (!value) return true; // Allow empty values
        const maxSize = 5 * 1024 * 1024; // 5 MB
        return value.size <= maxSize;
      })
      .test("fileType", "Unsupported file type", (value) => {
        if (!value) return true; // Allow empty values
        const allowedTypes = ["image/jpeg", "image/png"];
        return allowedTypes.includes(value.type);
      }),
    licenseBack: Yup.mixed()
      .required("Please upload image of the back of your license")
      .test("fileSize", "File size is too large", (value) => {
        if (!value) return true; // Allow empty values
        const maxSize = 5 * 1024 * 1024; // 5 MB
        return value.size <= maxSize;
      })
      .test("fileType", "Unsupported file type", (value) => {
        if (!value) return true; // Allow empty values
        const allowedTypes = ["image/jpeg", "image/png"];
        return allowedTypes.includes(value.type);
      }),
  });

  const saveCarOwner = async (values) => {
    try {
      setLoading(true);
      var bodyFormData = new FormData();
      bodyFormData.append("fullname", values?.name);
      bodyFormData.append("email", values?.email);
      bodyFormData.append("phoneNumber", driverNumber);
      bodyFormData.append("licenseFront", values?.licenseFront);
      bodyFormData.append("licenseBack", values?.licenseBack);
      localStorage.setItem("fullName", values?.name);
      const response = await apiPostDriver(bodyFormData);
      console.log(response);
      setError(false);
      setLoading(false);
      return (window.location.href = "/drivers/dashboard");
    } catch (error) {
      console.log("ERROR: =>", error);
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
        <h3 className="font-Bold text-[#0A0D14] text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:w-4/12 md:w-8/12 sm:w-11/12 w-11/12">
          Let’s get to know about you
        </h3>
        <p className="text-[#545151] font-Light text-lg mb-5 text-center px-8">
          Kindly add your details here
        </p>
        {error && <ErrorAlert error={errorText} />}

        <Formik
          initialValues={{
            name: "",
            email: "",
            licenseFront: null,
            licenseBack: null,
          }}
          validationSchema={validation}
          onSubmit={(values) => saveCarOwner(values)}
        >
          {({
            handleChange,
            handleSubmit,
            touched,
            errors,
            values,
            setFieldValue,
          }) => (
            <div className="container items-center lg:w-5/12 md:w-5-12 sm:w-10/12 w-10/12">
              <FormInputItem
                label={"Full name"}
                placeholder={"e.g Kwaku Mensah"}
                id={"first_name"}
                value={values.name}
                onChange={handleChange("name")}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 underline font-Regular pb-2">
                  {errors.name}
                </p>
              )}
              <FormInputItem
                label={"Your email"}
                placeholder={"e.g kwaku@mail.com"}
                type={"email"}
                id={"email"}
                value={values.email}
                onChange={handleChange("email")}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 underline font-Regular pb-2">
                  {errors.email}
                </p>
              )}

              {values?.licenseFront ? (
                <Preview
                  fileName={values?.licenseFront?.name}
                  onClick={() => setFieldValue("licenseFront", null)}
                />
              ) : (
                <input
                  name="licenseFront"
                  value={""}
                  type={"file"}
                  id={"licenseFront"}
                  className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-1 focus:border focus:border-fleetLightBlue block w-full p-3 mb-4"
                  placeholder={"Upload your license"}
                  required
                  onChange={(event) => {
                    setFieldValue("licenseFront", event.currentTarget.files[0]);
                  }}
                />
              )}
              {touched.licenseFront && errors.licenseFront && (
                <p className="text-red-500 underline font-Regular pb-2">
                  {errors.licenseFront}
                </p>
              )}

              {values?.licenseBack ? (
                <Preview
                  fileName={values?.licenseBack?.name}
                  onClick={() => setFieldValue("licenseBack", null)}
                />
              ) : (
                <input
                  name="licenseBack"
                  value={""}
                  type={"file"}
                  id={"licenseBack"}
                  className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-1 focus:border focus:border-fleetLightBlue block w-full p-3 mb-4"
                  placeholder={"Upload your license"}
                  required
                  onChange={(event) =>
                    setFieldValue("licenseBack", event.currentTarget.files[0])
                  }
                />
              )}

              {touched.licenseBack && errors.licenseBack && (
                <p className="text-red-500 underline font-Regular pb-2">
                  {errors.licenseBack}
                </p>
              )}
              <div className="flex justify-end align-baseline">
                {loading ? (
                  <Spinner />
                ) : (
                  <PrimaryButton buttonText={"Submit"} onClick={handleSubmit} />
                )}
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default GetToKnow;
