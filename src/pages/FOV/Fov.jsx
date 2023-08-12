import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import ProductsView from "../../Components/Products/ProductsView";
import DriverLogin from "../../assets/images/DriverLogin.svg";
import FleetManager from "../../assets/images/FleetManager.png";
import Process from "../../assets/images/Process.png";
import FovBackground from "../../assets/images/fov-bg.svg";
import FovDashboard from "../../assets/images/fovdashboard.svg";



const Fov = () => {
    return (
      <div>
        <NavBar />

        <div className="flex flex-col items-center">
          <h1 className="font-Bold mt-16 mb-1 lg:text-4xl md:text-4xl sm:text-3xl">
            About FOVCollector2.1
          </h1>
          <p className="text-[#545151] lg:w-4/12 md:7/12 sm:w-11/12 w-11/12">
            FOVCollector2.1 is a cloud-based application and integrated
            transportation fleet management solution. Its usefulness is evident
            in the informal sectors where private cars are let off to be used
            for public transportation and where drivers are employees or clients
            to these vehicle owners. Although this venture seems to be, perhaps,
            the easiest way to earn some fast income, it is not without major
            challenges, which are as follows:
          </p>
          <div className="m-8">
            <img src={Process} alt="" className="mt-8 mb-8" />
          </div>
        </div>
        <div className="bg-[#234C65] items-center w-full h-full">
          <img src={FovBackground} alt="" />
        </div>
        <div className="flex flex-col bg-[#F7F9F8] w-full h-full items-center">
          <h1 className="text-[30px] w-7/12 font-Bold mt-16">
            System Overview and Description
          </h1>
          <p className="w-7/12 mb-10">
            FOVCollector2.1 is a web-based application that seeks to address the
            challenges faced by individuals or businesses who wish to manage a
            fleet of cars while generating income from ride hailing activities.
            Ride hailing (RH) is the practice of arranging for travel in a
            private vehicle driven as private taxi by its owner or his/her
            driver for a fee, by means of a website or app. RH is by far the
            most effective means of generating income from transportation as it
            guarantees a steady stream of income by creating a common
            marketplace (RH app) where drivers (supply) and riders (demand)
            connect.
          </p>
          <img src={FleetManager} alt="" className="p-10" />
          <div className="flex flex-col items-center">
            <p className="w-8/12 mt-8 mb-8">
              Ride hailing companies are technology organizations whose
              activities create this marketplace composed of three major
              business streams. In the upstream, vehicle acquisitions are made
              by individuals or businesses interested in participating in this
              venture and not by the RH companies themselves. The midstream is
              where all different parties are connected, as the vehicle owners
              would register with RH companies to drive their own car or
              register their fleet on the RH platforms inviting drivers to use
              the vehicles in return for an income. The downstream also called
              the retail space is where money is made facilitated by Ride
              Hailing companies who connect drivers to riders or passengers.
              However, on occasion, the entire marketplace is perturbed by
              challenges faced by all players. Vehicle owners face issues of
              accountability and returns, as well as vehicle care and
              maintenance. Drivers using other people’s cars are unable to
              achieve a steady and continuous stream of income due to many
              reasons including exorbitant fees charged by car owners and
              inappropriate and defective vehicles. While the challenges
              mentioned above may not interconnect in anyway, they do have a
              significant effect on the Ride Hailing eco-system; riders don’t
              get the quality transportation they hope for, and RH companies are
              not profitable enough to provide more features to enhance the
              marketplace.
            </p>
            <div className="flex bg-white p-8 gap-8 mt-10 mb-8">
              <img src={FovDashboard} alt="" className="inline-flex md:flex flex-col" />
              <img src={DriverLogin} alt="" className="inline-flex" />
            </div>
            <p className="w-8/12 mt-12 mb-8">
              FOVCollector2.1 is an integrator that enhances the RH marketplace
              by partly resolving these challenges by handling the routine and
              repetitive tasks such as sales declaration, cash collection,
              renewals of insurance and licenses, maintenance etc. by enforcing
              compliance on behalf of vehicle owners; these actions help them
              manage their assets better and take prompt action to reduce losses
              which assures business continuity and performance. The second
              benefit of FOVCollector2.1 gives drivers free access to the
              database of vehicles available from which to choose and to make a
              steady and reliable stream of income. Also, depending on how they
              intend to approach their business, they have a choice of three
              different business options i.e., ride hailing, rental and
              hire-purchase.
            </p>
          </div>
        </div>

        <ProductsView />

        <Footer />
      </div>
    );
}

export default Fov