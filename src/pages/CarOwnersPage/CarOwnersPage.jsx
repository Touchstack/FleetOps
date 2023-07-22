import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/NavBar";
import CarOwnerSteps from "../../Components/SimpleSteps/CarOwners/CarOwnerSteps";

const CarOwnersPage = () => {
  return (
    <div>
      <NavBar />
      <CarOwnerSteps cssprops="bg-[#F7F9F8] py-8" />
      <Footer />
    </div>
  );
};

export default CarOwnersPage;
