import { useState, useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import FaqsBg from "../../assets/images/faqs-bg.svg";
import ArrowRightCircle from "../../assets/images/arrow-right-circle.svg";
import PlusIcon from "../../assets/images/plus-icon.svg";
import MinusIcon from "../../assets/images/minus-icon.svg";
// import Testimonial1 from "../../assets/images/testimonial-1.svg";
import Footer from "../../Components/Footer/Footer";
import BrianImg from "../../assets/images/brian.jpeg";
import BerniceImg from "../../assets/images/bernice.jpeg";

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

  const [faqOpen, setFaqOpen] = useState(null);
  const [testimonial, setTestimonial] = useState();
  const [number, setNumber] = useState(0);
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

      <div
        style={{
          backgroundImage: `url(${FaqsBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "70%",
          height: 296,
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center"
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
                onClick={() =>
                  faqOpen === index ? setFaqOpen() : setFaqOpen(index)
                }
                key={index}
                className="lg:w-9/12 md:w-9/12 sm:w-10/12 w-10/12 h-[88] mb-5 border border-[#DADADA] rounded-lg"
              >
                <div className="flex justify-between items-center m-6 text-[18px] text-faqText font-SemiBold">
                  <h1 className="text-left">{faq.question}</h1>
                  <div>
                    {faqOpen !== index ? (
                      <img src={PlusIcon} alt="AccordionIcon" className="" />
                    ) : (
                      <img src={MinusIcon} alt="AccordionIcon" className="" />
                    )}
                  </div>
                </div>

                <div className="p-2 leading-6">
                  <p
                    className={`text-[#545151] text-[18px] font-Light text-left m-6 ${
                      faqOpen === index ? "" : "hidden"
                    }`}
                  >
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
            href="mailto:info@fleetops.com"
            className="text-lg self-center hover:underline font-Light text-fleetBlue mr-3"
          >
            Send and email
          </a>
          <img src={ArrowRightCircle} className="self-center" />
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center bg-[#5E338A] py-24"
        id="testimonials"
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

export default FaqPage;
