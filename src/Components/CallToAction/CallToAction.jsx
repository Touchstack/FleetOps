import CTAImage from "../../assets/images/cta.jpeg";
import OutlinedButton from "../Buttons/OutlinedButton";
import PrimaryButton from "../Buttons/PrimaryButton";

const CallToAction = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${CTAImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "70%",
        textAlign: "center",
        height: 600,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
      }}
    >
      <div
        className="backdrop-opacity-10 backdrop-invert bg-black/70 h-full font-Regular flex flex-col justify-center items-center"
        style={{ borderBottomLeftRadius: 90, borderBottomRightRadius: 90 }}
      >
        <div className="lg:w-6/12 md:w-8/12 w-10/12">
          <h1 className="font-Bold lg:text-5xl md:text-4xl text-3xl text-white">
            Empowering Mobility for Everyone!
          </h1>

          <p className="text-white font-Light text-xl text-center lg:px-16 md:px-12 sm:px-4 px-4">
            Register and track your fleet with ease, or start driving with our
            vast network of registered vehicles. Seamless process, endless
            possibilities. Hop on board, experience the journey in minutes!
          </p>

          <div className="mt-12">
            <a href="/carowners">
              <PrimaryButton buttonText={"List your car"} />
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
    </div>
  );
};

export default CallToAction;
