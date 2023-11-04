import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import Family from "../../assets/images/family.svg";
import Owner from "../../assets/images/car-owners-steps.svg";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";

const AboutUsPage = () => {
  return (
    <div>
      <NavBar />

      <div className="bg-[#0A0D14] font-Regular flex flex-col text-center lg:gap-8 xl:gap-0 lg:py-16 md:py-14 sm:py-12 py-12">
        <div className="container flex flex-col justify-center items-center self-center lg:6/12 md:9/12 sm:10/12">
          <p className="text-[#08B5D6] text-center mt-8 text-[19px]">
            Our mission
          </p>
          <p className="text-white mt-4 self-center lg:text-[35px] md:text-[30px] sm:text-[25px] text-[25px] lg:w-8/12 md:w-9/12 sm:w-10/12 w-10/12 font-Bold leading-tight">
            Revolutionize transportation through innovative, integrated
            solutions that maximize profitability, ensure accountability,and
            provide unrivalled operational efficiency.
          </p>
        </div>
      </div>

      <div className="bg-[#FFF8EB] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-2 py-20 px-20 ">
        <div className="grid-1 px-4 py-8 mx-auto">
          <h1 className="max-w-2xl mt-10 mb-8 text-4xl font-Bold tracking-tight leading-none md:text-5xl">
            Who We Are{" "}
          </h1>
          <p className="mb-10 font-Regular text-[#0A0D14] text-[19px]">
            We are a dedicated company passionate about transforming the way
            informal transportation sectors operate. Our mission is to
            seamlessly integrate technology, vehicle owners, and drivers to
            achieve optimum fleet utilization and revenue generation, while
            promoting transparency, accountability, and operational excellence.
          </p>
          <a href="/contactus">
            <PrimaryButton buttonText={"Talk to us"} cssprops={"mt-8"} />
          </a>
        </div>

        <div className="my-10 flex justify-center">
          <img src={Family} alt="Owners" className="inline-flex" />
        </div>
      </div>
      <div className="bg-white grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8 mb-10 mt-12 px-20 py-20">
        <img src={Owner} alt="Owner" />

        <div className="">
          <h1 className="text-[#0A0D14] text-4xl font-Bold mb-10 ">
            Our Solutions
          </h1>
          <h2 className="text-[#0A0D14] text-[24px] font-SemiBold ">
            For Vehicle Owners
          </h2>
          <p className="text-[#545151] text-[19px] font-Regular mt-6 mb-6">
            FOVCollector2.1 simplifies fleet management operations,
            <br /> cash collection, seamless remitting cash and granting <br />{" "}
            owners strategic oversight over their vehicles, from <br /> tracking
            utilization to handling administrative tasks.
          </p>
          <h2 className="text-[#0A0D14] text-[24px] font-SemiBold ">
            For Drivers
          </h2>
          <p className="text-[#545151] text-[19px] font-Regular mt-6 mb-6">
            We recognize drivers as the backbone of the <br /> transportation
            sector and have designed FOVCollector2.1 <br /> with their needs in
            mind. Our platform offers access to a <br /> wide range of vehicles,
            streamlining operations, <br /> simplifying cash collections, and
            providing opportunities <br /> for stable income.
          </p>
          <div className="mt-12 flex lg:flex-row md:flex-row sm:flex-col flex-col justify-start items-start self-start">
            <a href="/carowners">
              <PrimaryButton buttonText={"Register a car"} />
            </a>
            <a href="/drivers">
              <OutlinedButton
                buttonText={"Apply to drive"}
                cssprops={"lg:mt-0 md:mt-0 sm:mt-4 mt-4"}
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
