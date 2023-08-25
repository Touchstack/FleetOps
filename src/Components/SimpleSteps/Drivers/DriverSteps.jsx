import StepsImg from "../../../assets/images/driver-steps.svg";
import UserPlusImg from "../../../assets/images/user-plus.svg";
import CarImg from "../../../assets/images/car.svg";
import SignImg from "../../../assets/images/sign.svg";
import SteeringWheelImg from "../../../assets/images/steering-wheel.svg";
import PrimaryButton from "../../Buttons/PrimaryButton";

const DriverSteps = () => {
  const DataArray = [
    {
      icon: UserPlusImg,
      title: "Create an account on FleetOps",
      description: "Sign up with email to get started",
    },
    {
      icon: CarImg,
      title: "Find Vehicles",
      description:
        "Select from the list of vehicles on offer and choose a plan.",
    },
    {
      icon: SignImg,
      title: "Sign agreement",
      description: "Agree to terms and conditions.",
    },
    {
      icon: SteeringWheelImg,
      title: "Start driving",
      description: "Run your transport business, earn more!",
    },
  ];

  return (
    <div className="bg-white lg:mb-12 md:mb-20 mb-28 font-Regular flex lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center">
      <div className="lg:pl-12 md:px-8 px-8 flex flex-col justify-center lg:items-end">
        <div className="w-full self-end">
          <p className="md:text-sm text-xs py-4">DRIVERS</p>
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
                  <p className="text-[#545151] text-lg font-Light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="lg:self-start md:self-start sm:self-center self-center">
            <a href="gettoknow">
              <PrimaryButton buttonText={"Get Started"} />
            </a>
          </div>
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
  );
};

export default DriverSteps;
