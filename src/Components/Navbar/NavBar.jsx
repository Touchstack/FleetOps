import AppLogo from "../../assets/images/fleetops-logo.svg";
import OutlinedButton from "../Buttons/OutlinedButton";

export default function NavBar() {
  return (
    <div className="bg-white">
      <div className="md:flex items-center justify-around bg-white py-4 md:px-10 ">
        <div>
          <a href="/" className="mr-">
            <img
              className="lg:mr-20"
              src={AppLogo}
              alt="App Logo"
              style={{ width: 228, height: 86 }}
            />
          </a>
        </div>
        <nav className="text-[19px] font-Regular text-fleetNavText">
          <div className="flex flex-col lg:flex-row lg:block md:hidden sm:hidden hidden items-center">
            <ul className="md:flex md:items-center ">
              <li className="md:ml-10 py-1 text-xl">
                <a href="/" className="hover:text-fleetBlue">
                  Home
                </a>
              </li>
              <li className="md:ml-10 py-1 text-xl">
                <a href="/carowners" className="hover:text-fleetBlue">
                  Car Owners
                </a>
              </li>
              <li className="md:ml-10 py-1 text-xl">
                <a href="/Drivers" className="hover:text-fleetBlue">
                  Drivers
                </a>
              </li>
              <li className="md:ml-10 py-1 text-xl">
                <a href="/FAQ" className="hover:text-fleetBlue">
                  FAQ
                </a>
              </li>
              <li className="md:ml-10 py-1 text-xl">
                <a href="/Company" className="hover:text-fleetBlue">
                  Company
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="font-Regular">
          <span className="md:ml-20 py-1 text-xl">
            <a href="/Login" className="hover:text-fleetBlue">
              Login
            </a>
          </span>
          <span className="md:ml-10 py-1 ">
            <OutlinedButton buttonText={"Contact Us"} />
          </span>
        </div>
      </div>
    </div>
  );
}
