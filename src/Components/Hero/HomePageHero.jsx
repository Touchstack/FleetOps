/* eslint-disable react/no-unescaped-entities */
import HeroImg from "../../assets/images/home-hero.jpeg";
import PrimaryButton from "../Buttons/PrimaryButton";
import OutlinedButton from "../Buttons/OutlinedButton";

const HomePageHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "70%",
        height: 600,
        textAlign: "center",
      }}
    >
      <div className="backdrop-opacity-10 backdrop-invert bg-black/90 h-full font-Regular flex flex-col justify-center items-start">
        <div className="xl:w-5/12 lg:w-8/12 md:w-8/12 w-10/12 lg:pl-16 md:pl-12 sm:pl-10 pl-10">
          <h1 className="font-Bold text-left lg:text-5xl md:text-4xl text-3xl text-white">
            Driving Simplified, Vehicle Ownership Optimized!
          </h1>
          <p className="text-white font-Light lg:text-xl md:text-xl sm:text-lg text-lg text-left mt-4">
            Whether you're a driver looking for a vehicle or an owner seeking a
            reliable driver, get started in minutes. Register your car, locate
            it at any time, or apply to drive one of our registered vehicles.
          </p>
          <div className="mt-12 flex lg:flex-row md:flex-row sm:flex-col flex-col justify-start items-start self-start">
            <a href="/carlistings">
              <PrimaryButton buttonText={"List your car"} />
            </a>
            <a href="/apply">
              <OutlinedButton
                buttonText={"Apply to drive"}
                cssprops={"lg:mt-0 md:mt-0 sm:mt-4 mt-4"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
