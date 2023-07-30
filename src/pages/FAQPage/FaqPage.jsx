import NavBar from "../../Components/Navbar/NavBar";
import FaqsBg from "../../assets/images/faqs-bg.svg";
import ArrowRightCircle from "../../assets/images/arrow-right-circle.svg";
import PlusIcon from "../../assets/images/plus-icon.svg";
import Elipse from "../../assets/images/elipse.svg";
import HomePageHero from "../../Components/Hero/HomePageHero";
import Testimonial1 from "../../assets/images/testimonial-1.svg";
import Footer from "../../Components/Footer/Footer";


const FaqPage = () => {
  const DataArray = [
    {
      question:
        "How does the fleet management software track vehicle locations?",
      answer:
        "Our fleet management software utilizes GPS technology to track vehicle locations in real-time, providing accurate and up-to-date information.",
    },
    {
      question:
        "Can I customize the software to match my specific fleet management needs?",
      answer:
        "Absolutely! Our software is highly customizable, allowing you to tailor it to your unique fleet management requirements, including driver assignments, maintenance schedules, and more.",
    },
    {
      question: "How can drivers apply to become part of the platform?",
      answer:
        " Drivers can easily apply by creating an account on our platform, where they can browse available vehicles, submit their applications, and start their journey towards earning and driving success.",
    },
    {
      question:
        " Is there support available if I have any issues or questions?",
      answer:
        "Yes, we provide dedicated customer support to assist you with any questions or concerns you may have. Our team is here to ensure your experience with our platform is smooth and hassle-free.",
    },
    {
      question:
        "Are there any fees associated with putting my car on the platform?",
      answer:
        "We offer a seamless sales process for car owners looking to put their car on Fleetops. While there may be nominal fees associated with listing and installation of trackers on vehicles, we provide a transparent and cost-effective platform for connecting buyers and sellers.",
    },
  ];
  
  return (
    <div>
      <NavBar />

      <div
        style={{
          backgroundImage: `url(${FaqsBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "70%",
          height: 296,
          textAlign: "center",
        }}
        className="grid lg:gap-6 xl:gap-0 lg:py-16 "
      >
        <h1 className="text-white text-center text-[56px] font-Bold">FAQ</h1>
        <p className="text-white tex-center text-[19px] font-Regular ">
          Find answers to questions you want clarity on.
        </p>
      </div>

      <div className=" flex flex-col gap-14 items-center">
        <h1 className=" container m-10 text-faqText text-[40px] text-center font-Bold">
          Common Questions
        </h1>

        <div className="container flex flex-col justify-center items-center">
          {DataArray.map((faq, index) => {
            return (
              <button
                key={index}
                className="lg:w-9/12 md:w-9/12 sm:w-10/12 w-10/12 h-[88] mb-5 border border-[#DADADA] rounded-lg"
              >
                <div className="flex justify-between items-center m-6 text-[18px] text-faqText font-SemiBold">
                  <h1 className="text-left">{faq.question}</h1>
                  <div>
                    <img src={PlusIcon} alt="AccordionIcon" className="" />
                  </div>
                </div>

                <div className="p-2 leading-6 max-h-0 overflow-hidden transition-[height]-0.5s">
                  <p className="text-[#545151] text-[18px] font-Regular m-6">
                    {faq.answer}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-24">
        <p className="text-[#545151] font-Light text-lg mb-5 text-center px-8">
          Didn’t find an answer to a question?
        </p>

        <div className="flex justify-center items-center mb-10">
          <a
            href="/"
            className="text-lg self-center hover:underline font-Light text-fleetBlue mr-3"
          >
            Send and email
          </a>
          <img src={ArrowRightCircle} className="self-center" />
        </div>
      </div>

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

export default FaqPage;
