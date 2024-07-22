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
import SignUpSuccess from "./pages/SignIn/SignUpSuccess.jsx";
import BidsPage from "./pages/BidsPage/BidsPage.jsx";
import DashboardVehicleDetailsPage from "./pages/DashboardPage/DashboardVehicleDetailsPage.jsx";
import CarOwnerDashboard from "./pages/CarOwnerDashboardPage/CarOwnerDashboard.jsx";
import CarsListing from "./pages/CarOwnerDashboardPage/CarsListing.jsx";
import CarImage from "./pages/CarOwnerDashboardPage/AssignFLow/CarImageFrontView.jsx";
import CarImageRightView from "./pages/CarOwnerDashboardPage/AssignFLow/CarImageRightView.jsx";
import CollectionForm from "./pages/CarOwnerDashboardPage/AssignFLow/CollectionForm.jsx";
import DriverImage from "./pages/CarOwnerDashboardPage/AssignFLow/DriverImage.jsx";
import CarImageLeftView from "./pages/CarOwnerDashboardPage/AssignFLow/CarImageLeftView.jsx";
import CarImageBackView from "./pages/CarOwnerDashboardPage/AssignFLow/CarImageBackView.jsx";
import Preview from "./pages/CarOwnerDashboardPage/AssignFLow/Preview.jsx";
import Account from "./pages/DashboardPage/Account.jsx";
import RetrivalForm from "./pages/CarOwnerDashboardPage/RetrivalFlow/RetrivalForm.jsx";
import RetrivalPreview from "./pages/CarOwnerDashboardPage/RetrivalFlow/RetrivalPreview.jsx";
import RetriveCarImageFrontView from "./pages/CarOwnerDashboardPage/RetrivalFlow/RetriveCarImageFrontView.jsx";
import RetriveCarImageBackView from "./pages/CarOwnerDashboardPage/RetrivalFlow/RetriveCarImageBackView.jsx";
import RetriveCarImageLeftView from "./pages/CarOwnerDashboardPage/RetrivalFlow/RetriveCarImageLeftView.jsx";
import RetriveCarImageRightView from "./pages/CarOwnerDashboardPage/RetrivalFlow/RetriveCarImageRightView.jsx";
import InitializeAuth from "./pages/DashboardPage/PaymentFlow/InitializeAuth.jsx";
import PaymentOptions from "./pages/DashboardPage/PaymentFlow/PaymentOptions.jsx";
import Invoice from "./pages/DashboardPage/PaymentFlow/Invoice.jsx";
import SalesReporting from "./pages/DashboardPage/PaymentFlow/SalesReporting.jsx";

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
  //Phase 3 routes
  {
    path: "/drivers/dashboard/payment/initialize",
    element: <InitializeAuth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/dashboard/payment/option",
    element: <PaymentOptions />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/dashboard/payment/invoice",
    element: <Invoice />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/dashboard/payment/sales/reporting",
    element: <SalesReporting />,
    errorElement: <ErrorPage />,
  },
   //Phase 3 routes
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
     element: <DashboardVehicleDetailsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/bids",
    element: <BidsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/dashboard",
    element: <CarOwnerDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/listing",
    element: <CarsListing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/assign/driver-image",
    element: <DriverImage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/assign/form",
    element: <CollectionForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/retrival/form",
    element: <RetrivalForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/retrival/frontview",
    element: <RetriveCarImageFrontView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/retrival/backview",
    element: <RetriveCarImageBackView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/retrival/leftview",
    element: <RetriveCarImageLeftView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/retrival/rightview",
    element: <RetriveCarImageRightView />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/carowner/retrival/review",
    element: <RetrivalPreview />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/assign/car-image/front",
    element: <CarImage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/assign/car-image/right",
    element: <CarImageRightView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/assign/car-image/left",
    element: <CarImageLeftView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/assign/car-image/back",
    element: <CarImageBackView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carowner/assign/car-image/preview",
    element: <Preview />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drivers/account",
    element: <Account />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*", // This acts as the fallback route
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
