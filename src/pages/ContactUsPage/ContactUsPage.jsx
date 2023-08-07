import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import ContactHero from "../../assets/images/contact-hero.svg";
import Map from "../../assets/images/map.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import ArrowRightCircle from "../../assets/images/arrow-right-circle.svg";

const ContactUsPage = () => {
  return (
    <div>
      <NavBar />

      <div
        style={{
          backgroundImage: `url(${ContactHero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "70%",
          height: 296,
          textAlign: "center",
        }}
        className="font-Bold flex flex-col text-center lg:gap-8 xl:gap-0 lg:py-14 lg:grid-cols-12"
      >
        <div className="container flex flex-col justify-center self-center lg:6/12 md:9/12 sm:10/12 ">
          <p className="text-[#08B5D6] text-center mt-4 text-[56px]">
            Contact Us
          </p>
          <p className="text-white self-center text-[19px] lg:w-7/12 md:w-9/12 sm:w-10/12 w-10/12 font-Regular">
            We&apos;re always excited to hear from you at FleetOps & Vantage
            Limited. Whether you&apos;re a vehicle owner, a driver, or just
            interested in what we do, your questions, comments, and feedback are
            welcome. Here&apos;s how you can get in touch with us:.
          </p>
        </div>
      </div>

      <div className="bg-white text-center mt-10 mb-10 p-8">
        <h1 className="font-Bold text-[#000] text-[36px]">General Inquiries</h1>
        <p className="font-Regular text-[19px]">
          For general inquiries or if you&apos;re not sure who to contact,
          <br /> you can also reach us at:
        </p>
        <div className="text-fleetBlue">
          <a href="">Email: info@fleetopsgh.com</a>
        </div>
        <h1 className="mt-10 font-Bold text-[#000] text-[36px]">Whatsapp</h1>
        <p className="mb-4 font-Regular text-[19px]">
          You can also send us a whatsapp message and we will <br /> respond as
          soon as possible.
        </p>
        <button className="bg-[#38B908] font-Regular text-white rounded-lg p-5 px-8 py-3">
          <img src={Whatsapp} alt="whatsapp" className="inline-flex p-1" />
          Send message
        </button>
      </div>

      <div className=" flex flex-col items-center bg-white mt-20 mb-10">
        <h1 className="font-Bold text-[#0A0D14] text-[36px]">Address</h1>
        <p className="text-[19px] text-[#0A0D14] font-Regular text-center">
          FleetOps & Vantage Limited, <br /> 29, 0leander St, Teshie-Nungua
          Estate <br />
          Accra, Ghana.
        </p>
        <div className="flex text-center items-center p-3">
          <a
            href="/"
            className="text-lg self-center hover:underline font-Light text-fleetBlue mr-3"
          >
            View on map
          </a>
          <img src={ArrowRightCircle} className="self-center" />
        </div>
        <div>
          <img src={Map} alt="" className="p-8" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ContactUsPage;
