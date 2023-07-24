import PropTypes from "prop-types";
import CarOwnersImg from "../../../assets/images/car-owners-steps.svg";
import UserPlusImg from "../../../assets/images/user-plus.svg";
import CarImg from "../../../assets/images/car.svg";
import SignImg from "../../../assets/images/sign.svg";
import SteeringWheelImg from "../../../assets/images/steering-wheel.svg";
import PrimaryButton from "../../Buttons/PrimaryButton";

const CarOwnerSteps = ({ cssprops }) => {
  const DataArray = [
    {
      icon: UserPlusImg,
      title: "Specify your needs",
      description:
        "Help us understand your needs better by filling the form, after which a member of our team will contact you to discuss further.",
    },
    {
      icon: CarImg,
      title: "Blackbox",
      description: "We install a blackbox device in your car to manage it.",
    },
    {
      icon: SignImg,
      title: "Get set up",
      description:
        "Agree to terms and conditions and get setup on our FOVCollector2.1 software platform.",
    },
    {
      icon: SteeringWheelImg,
      title: "Manage your vehicle",
      description: "We connect you to drivers, make sales, earn more.",
    },
  ];

  return (
    <div className={`${cssprops} font-Regular grid lg:grid-cols-2 grid-cols-1`}>
      <div className="lg:p-16 md:p-18 p-16 flex lg:justify-end justify-center lg:order-first md:order-last sm:order-last order-last">
        <img
          src={CarOwnersImg}
          alt="StepsImage"
          className="img-fluid self-end"
        />
      </div>

      <div className="flex flex-col justify-center lg:items-start items-center">
        <div className="lg:w-10/12 md:w-9/12 sm:w-8/12 w-10/12 self-center">
          <p className="md:text-sm text-xs py-4">CAR OWNERS</p>
          <h3 className="font-Bold mb-5 text-[#0A0D14] lg:text-4xl md:text-4xl text-3xl">
            Simple Steps to Get Started
          </h3>

          {DataArray.map((item, index) => {
            return (
              <div
                key={`${item.title}`}
                className="flex justify-start items-start mb-12"
              >
                <img
                  src={item.icon}
                  alt={`${item.title}-${index}`}
                  className="img-fluid"
                />
                <div className="ml-5">
                  <p className="md:text-2xl text-xl text-[#0A0D14] tracking-tighter">
                    {item.title}
                  </p>
                  <p className="text-[#545151] font-Light text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div>
            <PrimaryButton buttonText={"Get Started"} />
          </div>
        </div>
      </div>
    </div>
  );
};

CarOwnerSteps.propTypes = {
  cssprops: PropTypes.string,
};

CarOwnerSteps.defaultProps = {
  cssprops: "",
};

export default CarOwnerSteps;
