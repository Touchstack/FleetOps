import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import CarOwnersHero from "../../Components/Hero/CarOwnersHero";
import CarOwnersRegistrationForm from "../../Components/Forms/CarOwnersRegistrationForm";

const CarOwnersRegistration = () => {
  return (
    <div>
      <NavBar />
      <CarOwnersHero />
      <CarOwnersRegistrationForm />
      <Footer />
    </div>
  );
};

export default CarOwnersRegistration;
