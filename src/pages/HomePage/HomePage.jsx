/* eslint-disable react-hooks/exhaustive-deps */
import HomePageHero from "../../Components/Hero/HomePageHero";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import CarOwnerSteps from "../../Components/SimpleSteps/CarOwners/CarOwnerSteps";
import DriverSteps from "../../Components/SimpleSteps/Drivers/DriverSteps";
import ControlFleetImg from "../../assets/images/control-fleet.png";
import ManDriving from "../../assets/images/man-driving.png";
import ArrowRightCircle from "../../assets/images/arrow-right-circle.svg";
import BrianImg from "../../assets/images/brian.jpeg";
import BerniceImg from "../../assets/images/bernice.jpeg";
import React, { useEffect } from "react";

const HomePage = () => {
  const [testimonial, setTestimonial] = React.useState();
  const [number, setNumber] = React.useState(0);
  const testimonials = [
    {
      name: "Brian Adjei-O",
      image: BrianImg,
      answer:
        "I've had an incredible experience on my journey with the Fleetops team. Their assistance in managing my fleet of 10 vehicles has been truly invaluable. They've connected me with reliable drivers who utilize my vehicles for Hire Purchase and Rentals. The Engine Platforms provided have allowed me to effortlessly track drivers and streamline the payment process. It's an outstanding platform that has made a significant difference in the way I operate my fleet.",
    },
    {
      name: "Bernice Buensi Otoo",
      image: BerniceImg,
      answer:
        "Being frequent travelers living almost in the countryside, my husband and I have found great peace of mind in the Fleetops platform. During our time away, we enrolled in their service and experienced the security of having our cars efficiently managed under their rental system. The platform seamlessly connected us with trustworthy drivers who not only ensured the safety of our vehicles but also utilized them for ride-hailing services like Uber and Bolt, allowing them to earn a livelihood. We are thrilled to be part of a platform that offers such a combination of freedom and security. Choosing FleetOps has truly been a rewarding decision for us.",
    },
  ];

  useEffect(() => {
    setTestimonial(testimonials[number]);
  }, [number]);

  setTimeout(() => (number === 0 ? setNumber(1) : setNumber(0)), 3000);

  return (
    <div>
      <NavBar />
      <HomePageHero />
      <div className="flex flex-col justify-center items-center bg-[#E6F8F1] py-24">
        <h3 className="font-Bold text-[#0A0D14] lg:text-4xl md:text-4xl text-3xl">
          Take Control of Your Fleet
        </h3>
        <p className="text-[#545151] font-Light text-lg mb-5 text-center px-8">
          Manage, Monitor, and Optimize Your Vehicles & Drivers with Ease.
        </p>

        <div className="flex justify-center items-center mb-10">
          <a
            href="/carowners"
            className="text-lg self-center hover:underline font-Light text-fleetBlue mr-3"
          >
            Learn more
          </a>
          <img src={ArrowRightCircle} className="self-center" />
        </div>
        <img
          src={ControlFleetImg}
          className="img-fluid lg:px-24 md:px-16 sm:px-8 px-8"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#F7F9F8] py-24">
        <h3 className="font-Bold text-[#0A0D14] lg:text-4xl md:text-4xl text-3xl text-center">
          Unlock New Opportunities,
          <br /> Drive Your Success
        </h3>
        <p className="text-[#545151] font-Light text-lg mb-5 text-center px-8">
          Join Our Platform, Find cars, Earn and Thrive.
        </p>

        <div className="flex justify-center items-center mb-10">
          <a
            href="/drivers"
            className="text-lg self-center hover:underline font-Light text-fleetBlue mr-3"
          >
            Learn more
          </a>
          <img src={ArrowRightCircle} className="self-center" />
        </div>
        <img
          src={ManDriving}
          className="img-fluid lg:px-24 md:px-16 sm:px-8 px-8"
        />
      </div>
      <div className="py-12">
        <CarOwnerSteps cssprops={"bg-white"} />
      </div>
      <DriverSteps />
      <div
        className="flex flex-col justify-center items-center bg-[#5E338A] py-24"
        id="#testimonials"
      >
        <h3 className="font-Bold text-[#E6B422] lg:text-4xl md:text-4xl text-3xl text-center">
          Everyone loves FleetOps
        </h3>

        <div className="container bg-white mx-auto py-8 rounded-3xl mt-5 xl:w-6/12 lg:w-7/12 w-10/12">
          <p className="text-center text-[#234C65] font-Regular text-xl lg:px-20 px-16">
            {testimonial?.answer}
          </p>

          <div className="flex justify-center items-center mt-8">
            <img
              src={testimonial?.image}
              className="self-center h-[80px] w-[80px] rounded-[50px]"
            />
            <div className="flex flex-col justify-start ml-4">
              <p className="text-[#545151] text-left font-Regular text-lg">
                {testimonial?.name}
              </p>
              {/* <p className="text-[#545151] text-left font-Light text-md">
                Fleetops Customer
  </p>*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
