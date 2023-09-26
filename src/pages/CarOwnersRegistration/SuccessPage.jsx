import HeroImg from "../../assets/images/sucess.jpeg";
import ClipBoard from "../../assets/images/clipboard.svg";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import { motion } from "framer-motion";

const SuccessPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <div className="backdrop-opacity-20 backdrop-invert bg-[#00A3C2]/95 h-full text-white font-Regular flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="font-Regular flex flex-col justify-center items-center"
        >
          <img src={ClipBoard} className="img-fluid self-center" />

          <h3 className="font-Bold lg:text-6xl md:text-5xl text-5xl mt-12 mb-4">
            Form submitted
          </h3>

          <p className="font-Light text-lg mb-5 text-center px-8 lg:w-5/12 md:w-8/12 sm:w-11/12 w-11/12">
            We have received your details. A member of our team will contact you
            within 48 hours.
          </p>

          <a href="/">
            <OutlinedButton
              buttonText={"Back to home"}
              cssprops={"border border-white text-white"}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage;
