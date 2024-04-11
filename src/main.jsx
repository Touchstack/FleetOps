import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./context/AppContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CarOwnersPage from "./pages/CarOwnersPage/CarOwnersPage.jsx";
import DriverPage from "./pages/DriverPage/DriverPage.jsx";
import FaqPage from "./pages/FAQPage/FaqPage.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.jsx";
import CarOwnersRegistration from "./pages/CarOwnersRegistration/CarOwnersRegistration.jsx";
import SuccessPage from "./pages/CarOwnersRegistration/SuccessPage.jsx";
import Dashboard from "./pages/DashboardPage/Dashboard.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import SignUpPage from "./pages/SignIn/SignUpPage.jsx";
import GetToKnow from "./pages/SignIn/GetToKnow.jsx";
import OtpPage from "./pages/SignIn/OtpPage.jsx";
import LoginPage from "./pages/SignIn/LoginPage.jsx";
import FOV from "./pages/FOV/Fov.jsx";
import FindCars from "./pages/DashboardPage/FindCars.jsx";
import DriversReports from "./pages/DashboardPage/DriversReports.jsx";
import "./App.css";
import "./index.css";
import VehicleDetails from "./pages/VehicleDetails/VehicleDetails.jsx";
//import DashboardVehicleDetails from "./pages/DashboardPage/DashboardVehicleDetails.jsx";
import SignUpSuccess from "./pages/SignIn/SignUpSuccess.jsx";
import BidsPage from "./pages/BidsPage/BidsPage.jsx";
import DashboardVehicleDetailsPage from "./pages/DashboardPage/DashboardVehicleDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowners",
    element: <CarOwnersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers",
    element: <DriverPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faqs",
    element: <FaqPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contactus",
    element: <ContactUsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowners/registration",
    element: <CarOwnersRegistration />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowners/registration/success",
    element: <SuccessPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signuppage",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/otppage",
    element: <OtpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gettoknow",
    element: <GetToKnow />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/loginpage",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fov",
    element: <FOV />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/signupsuccess",
    element: <SignUpSuccess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/findcars",
    element: <FindCars />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/reports",
    element: <DriversReports />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vehicle/details/:id",
    element: <VehicleDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/dashboard/vehicle/details/:id",
     //element: <DashboardVehicleDetails />,
     element: <DashboardVehicleDetailsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/bids",
    element: <BidsPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
