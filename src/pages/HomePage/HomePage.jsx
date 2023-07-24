import HomePageHero from "../../Components/Hero/HomePageHero";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import CarOwnerSteps from "../../Components/SimpleSteps/CarOwners/CarOwnerSteps";
import DriverSteps from "../../Components/SimpleSteps/Drivers/DriverSteps";
import Testimonial1 from "../../assets/images/testimonial-1.svg";
import ControlFleetImg from "../../assets/images/control-fleet.png";
import ManDriving from "../../assets/images/man-driving.png";
import ArrowRightCircle from "../../assets/images/arrow-right-circle.svg";

const HomePage = () => {
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
      <div className="flex flex-col justify-center items-center bg-[#5E338A] py-24">
        <h3 className="font-Bold text-[#E6B422] lg:text-4xl md:text-4xl text-3xl text-center">
          Everyone loves FleetOps
        </h3>

        <div className="container bg-white mx-auto py-8 rounded-3xl mt-5 xl:w-6/12 lg:w-7/12 w-10/12">
          <p className="text-center text-[#234C65] font-Regular text-xl lg:px-20 px-16">
            Fleetops has transformed how we manage our fleet. The real-time
            tracking and driver management features have greatly increased our
            operational efficiency.
          </p>

          <div className="flex justify-center items-center mt-8">
            <img src={Testimonial1} className="self-center" />
            <div className="flex flex-col justify-start ml-4">
              <p className="text-[#545151] text-left font-Regular text-lg">
                Eugenia Princeton
              </p>
              <p className="text-[#545151] text-left font-Light text-md">
                Owns 5 cars on Fleetops
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
