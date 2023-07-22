import HomePageHero from "../../Components/Hero/HomePageHero";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import CarOwnerSteps from "../../Components/SimpleSteps/CarOwners/CarOwnerSteps";
import DriverSteps from "../../Components/SimpleSteps/Drivers/DriverSteps";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomePageHero />
      <CarOwnerSteps />
      <DriverSteps />
      <Footer />
    </div>
  );
};

export default HomePage;
