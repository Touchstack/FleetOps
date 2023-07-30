import HomePageHero from "../../Components/Hero/HomePageHero";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import DriverSteps from "../../Components/SimpleSteps/Drivers/DriverSteps";
import DriversHero from "../../assets/images/drivers-hero.png"
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import SalesCard from "../../assets/images/SalesCard.svg";
import PartnershipCard from "../../assets/images/PartnershipCard.svg";
import VehiclesCard from "../../assets/images/VehiclesCard.svg";
import ProductsView from "../../Components/Products/ProductsView";


const DriverPage = () => {
    return (
      <div>
        <NavBar />

        <div
          style={{
            backgroundImage: `url(${DriversHero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "70%",
            height: 500,
            textAlign: "center",
          }}
        >
          <div className="h-full font-Regular flex flex-col justify-center items-start">
            <div className="container flex flex-col justify-center self-center lg:px-16 md:px-12 sm:px-10 px-10">
              <h1 className="font-Bold text-left lg:text-5xl md:text-4xl text-3xl text-white xl:w-7/12 lg:w-8/12">
                Unlock New Opportunities, Drive Your Success
              </h1>
              <p className="text-white font-Light lg:text-xl md:text-xl sm:text-lg text-lg text-left mt-4 xl:w-7/12 lg:w-8/12">
                Join Our Platform, Find cars, Earn and Thrive.
              </p>
              <div className="mt-12 flex lg:flex-row md:flex-row sm:flex-col flex-col justify-start items-start self-start">
                <a href="/carowners">
                  <PrimaryButton buttonText={"Apply to drive"} />
                </a>
                <a href="/apply">
                  <OutlinedButton
                    buttonText={"Find cars"}
                    cssprops={"lg:mt-0 md:mt-0 sm:mt-4 mt-4"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-Bold text-center text-[#0A0D14] mt-16 lg:text-4xl md:text-4xl text-3xl sm:self-center">
            Better driver experience
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-12  mt-16 px-16">
            <div className="items-center ">
              <img src={SalesCard} alt="" />
              <h1 className="text-[20px] font-Bold mt-4">
                Access to a Wide Range of Vehicles
              </h1>
              <p className="mt-4">
                Browse through available vehicles on our platform and apply to
                drive the one that suits your needs. start making a living
                today.
              </p>
            </div>
            <div>
              <img src={VehiclesCard} alt="" />
              <h1 className="text-[20px] font-Bold mt-4">
                Seamless Sales Process
              </h1>
              <p className="mt-4">
                As a driver, manage your transport business seamlessly, give
                your customers a great experience and make payments to the car
                owner promptly.
              </p>
            </div>
            <div>
              <img src={PartnershipCard} alt="" />
              <h1 className="text-[20px] font-Bold mt-4">
                Stress -free partnership
              </h1>
              <p className="mt-4">
                A safe and roadworthy vehicle is key in providing good transport
                services. Utilise our platform to report issues on the vehicle
                to the car owner.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-2">
          <ProductsView cssprops={""} />
        </div>
        <DriverSteps />

        <div className="bg-[#F7F9F8;] p-12">
          <h3 className=" mt-5 font-Bold text-center text-[#0A0D14] mb-2 lg:text-4xl md:text-4xl text-3xl">
            Available Cars
          </h3>
          <p className="text-center text-[19px] text-[#545151] font-Regular">
            Choose from a wide variety of vehicles from the top car owners.{" "}
            <br />
            All brands and models you want.
          </p>
        </div>

        <Footer />
      </div>
    );
}

export default DriverPage;
