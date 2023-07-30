import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CarOwnersPage from "./pages/CarOwnersPage/CarOwnersPage.jsx";
import DriverPage from "./pages/DriverPage/DriverPage.jsx";
import FaqPage from "./pages/FAQPage/FaqPage.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.jsx";
import CarOwnersRegistration from "./pages/CarOwnersRegistration/CarOwnersRegistration.jsx";
import SuccessPage from "./pages/CarOwnersRegistration/SuccessPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import "./App.css";
import "./index.css";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
