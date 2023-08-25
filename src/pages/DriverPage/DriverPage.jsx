import { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import DriverSteps from "../../Components/SimpleSteps/Drivers/DriverSteps";
import DriversHero from "../../assets/images/drivers-hero.png";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import SalesCard from "../../assets/images/SalesCard.svg";
import PartnershipCard from "../../assets/images/PartnershipCard.svg";
import VehiclesCard from "../../assets/images/VehiclesCard.svg";
import ProductsView from "../../Components/Products/ProductsView";
import { apiGetVehicles } from "../../services/VehiclesService";
import { config } from "../../services/Config";

const DriverPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await apiGetVehicles();
      setData(response.data);
      return setLoading(false);
    } catch (error) {
      console.log(error);
      return setData(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const Spinner = () => {
    return (
      <div className="text-center py-16">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

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
              <a href="/drivers/loginpage">
                <PrimaryButton buttonText={"Apply to drive"} />
              </a>
              <a href="#cars-section">
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
            <h1 className="text-[20px] font-Medium mt-4 text-2xl">
              Access to a Wide Range of Vehicles
            </h1>
            <p className="font-Light mt-4 text-[#545151]">
              Browse through available vehicles on our platform and apply to
              drive the one that suits your needs. start making a living today.
            </p>
          </div>
          <div>
            <img src={VehiclesCard} alt="" />
            <h1 className="text-[20px] font-Medium mt-4 text-2xl">
              Seamless Sales Process
            </h1>
            <p className="font-Light mt-4 text-[#545151]">
              As a driver, manage your transport business seamlessly, give your
              customers a great experience and make payments to the car owner
              promptly.
            </p>
          </div>
          <div>
            <img src={PartnershipCard} alt="" />
            <h1 className="text-[20px] font-Medium mt-4 text-2xl">
              Stress -free partnership
            </h1>
            <p className="font-Light mt-4 text-[#545151]">
              A safe and roadworthy vehicle is key in providing good transport
              services. Utilise our platform to report issues on the vehicle to
              the car owner.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 mb-2">
        <ProductsView cssprops={"bg-[#F7F9F8;]"} />
      </div>
      <DriverSteps />

      <div className="bg-[#F7F9F8;] p-12" id="cars-section">
        <h3 className=" mt-5 font-Bold text-center text-[#0A0D14] mb-2 lg:text-4xl md:text-4xl text-3xl">
          Available Cars
        </h3>
        <p className="text-center text-[19px] text-[#545151] font-Light">
          Choose from a wide variety of vehicles from the top car owners. <br />
          All brands and models you want.
        </p>

        {loading ? (
          <Spinner />
        ) : !loading && data.length >= 1 ? (
          <div className="container lg:w-11/12 md:w-full sm:w-full w-full mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 self-center mt-12">
              {data.map((car) => {
                return (
                  <div
                    key={car?.driver_id}
                    className="flex flex-col lg:justify-start md:justify-start sm:justify-center lg:items-start md:items-start sm:items-center"
                  >
                    <img
                      src={`${config.VEHICLE_IMG_URL}${car?.DLD}`}
                      alt={`${car?.VMK} ${car?.VMD}`}
                      className="lg:self-start md:self-start sm:self-center self-center lg:w-[350px] lg:h-[350px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] w-[300px] h-[300px] rounded-2xl bg-slate-300"
                    />
                    <p className="font-Regular md:text-2xl text-xl text-[#0A0D14] tracking-tighter py-4 lg:text-left md:text-left sm:text-center text-center">
                      {car?.VMK} {car?.VMD}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-12">
            <div className="border border-gray-800 rounded-full pr-10 pl-10 py-6 mt-8">
              <p className="text-center self-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-Bold">
                ?
              </p>
            </div>
            <p className="text-[#545151] text-center text-[19px] font-Light p-8">
              No available cars
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DriverPage;
