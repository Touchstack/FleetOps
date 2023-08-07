import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import CarOwnerSteps from "../../Components/SimpleSteps/CarOwners/CarOwnerSteps";
import CarOwnersImg from "../../assets/images/car-owners-hero.png";
import StepsImg from "../../assets/images/car-owners-steps.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import ProductsView from "../../Components/Products/ProductsView";

const CarOwnersPage = () => {
  const DataArray = [
    {
      title: "Cash Collection",
      description:
        "Easy and fast channels to cash remittances by your drivers. The system automatically audits sales and enforces collections. See your revenue at one go from our general sales ledger.",
    },
    {
      title: "Fleet Management",
      description:
        "Mininum requirement for supervisors and managers as FOVCollector2.1  runs semi-autonomously in managing the drivers.",
    },
    {
      title: "Track and Monitor Your Fleet",
      description:
        "With our FOVCollector2.1 , you gain unprecedented visibility over your vehicles, including utilization, driver behavior, and key performance indicators.",
    },
    {
      title: "Ensure Accountability",
      description:
        "With our FOVCollector2.1 , you gain unprecedented visibility over your vehicles, including utilization, driver behavior, and key performance indicators.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="bg-white font-Regular grid lg:grid-cols-2 grid-cols-1 gap-0 lg:py-10 md:py-8 py-6">
        <div className="lg:p-16 md:p-18 p-10 flex lg:justify-end justify-center lg:order-first md:order-last sm:order-last order-last">
          <img
            src={CarOwnersImg}
            alt="StepsImage"
            className="img-fluid self-end"
          />
        </div>

        <div className="flex flex-col justify-center lg:items-start items-center">
          <div className="lg:w-10/12 md:w-9/12 sm:w-8/12 w-10/12 self-center">
            <h3 className="font-Bold mb-5 text-[#0A0D14] lg:text-5xl md:text-4xl text-3xl">
              Manage your vehicles & sales with ease.
            </h3>

            <p className="text-[#545151] font-Light text-lg">
              With our innovative fleet management solution, you have everything
              you need to streamline your operations, manage your vehicles,
              derive maximum revenue, and maintain control over your assets.
            </p>

            <div className="mt-12 flex lg:flex-row md:flex-row sm:flex-col flex-col justify-start items-start self-start">
              <a href="/carowners/registration">
                <PrimaryButton buttonText={"Register Vehicle"} />
              </a>
              <a href="/apply">
                <OutlinedButton
                  buttonText={"Learn more"}
                  cssprops={"lg:mt-0 md:mt-0 sm:mt-4 mt-4"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F9F8] lg:mb-12 md:mb-20 mb-28 font-Regular grid lg:grid-cols-2 grid-cols-1 gap-0 pt-12">
        <div className="xl:pl-0 lg:pl-12 md:px-8 px-8 flex flex-col justify-center lg:items-end">
          <div className="xl:w-10/12 lg:w-11/12 md:w-11/12 xl:self-end lg:self-center">
            <h3 className="font-Bold ml-5 mb-5 text-[#0A0D14] lg:text-4xl md:text-4xl text-3xl">
              How It Works
            </h3>

            {DataArray.map((item) => {
              return (
                <div
                  key={`${item.title}`}
                  className="flex flex-col justify-start items-start mb-12"
                >
                  <div className="ml-5">
                    <p className="md:text-2xl text-xl text-[#0A0D14] tracking-tighter">
                      {item.title}
                    </p>
                    <p className="text-[#545151] text-lg font-Light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:p-16 md:p-18 p-16">
          <img
            src={StepsImg}
            alt="StepsImage"
            className="img-fluid self-center"
          />
        </div>
      </div>

      <ProductsView />
      <CarOwnerSteps cssprops={"bg-[#F7F9F8] py-8"} />

      <Footer />
    </div>
  );
};

export default CarOwnersPage;
