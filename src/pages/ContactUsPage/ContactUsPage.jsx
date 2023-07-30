import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import ContactHero from "../../assets/images/contact-hero.svg"





const ContactUsPage =() => {
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
          className="grid lg:gap-6 xl:gap-0 lg:py-16 "
        >
          <h1 className="text-white text-center text-[56px] font-Bold">FAQ</h1>
          <p className="text-white tex-center text-[19px] font-Regular ">
            Find answers to questions you want clarity on.
          </p>
        </div>
      </div>
    );
}
export default ContactUsPage