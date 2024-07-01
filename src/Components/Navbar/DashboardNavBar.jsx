import { useState } from "react";
import AppLogo from "../../assets/images/fleetops-logo.svg";
import { DriverDropdown } from "./NavBarDropdown";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom"; 
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { CgProfile } from "react-icons/cg";
import { PropTypes } from 'prop-types';


export default function DashboardNavBar({ payment }) {
  const [hidden, setHiddenState] = useState("hidden"); //show or hide navbar
  const [ariaExpanded, setAriaExpanded] = useState("false"); //expanded or collapsed state
  const [showMenu, setShowMenu] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const data = localStorage.getItem("driver");
  const driver = JSON.parse(data);

  const navigate = useNavigate()
  const location = useLocation();

  const navBarToggler = () => {
    if (hidden && ariaExpanded === "false") {
      setHiddenState();
      setAriaExpanded("true");
      return setShowMenu(true);
    } else {
      setAriaExpanded("false");
      setHiddenState("hidden");
      return setShowMenu(false);
    }
  };


  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const iconVariants = {
    opened: {
      rotate: 0,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    closed: {
      top: "-90vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-2 py-2">
        <a href="/" className="">
          <img
            className="lg:mr-20"
            src={AppLogo}
            alt="App Logo"
            style={{ width: 210, height: 75 }}
          />
        </a>
        <div className={`${payment === true ? '' : 'flex md:order-2'}`}>
          <button className={`${payment === true ? 'hidden' : 'flex'}`} onClick={handleShowDropdown}>
            <span className="md:ml-20 py-1 mr-2 text-xl self-center lg:block md:hidden sm:hidden hidden">
              <p className="font-Light text-fleetNavText text-center">
                {driver?.driver}
              </p>
            </span>
            <Avatar className="w-14 h-14">
              <AvatarImage src={`http://engines.fleetopsgh.com/uploads/photo/${driver?.driver_avatar}`}  />
              <AvatarFallback>
                  <CgProfile size={30} />
              </AvatarFallback>
            </Avatar>
          </button>
          {showDropdown && <DriverDropdown Settings={true} />}

          <motion.button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={ariaExpanded}
            onTouchStartCapture={() => showMenu && setShowMenu(false)}
            onClick={() => navBarToggler()}
            onMouseEnter={() => hidden && setShowMenu(false)}
            onMouseLeave={() => setShowMenu(true)}
            variants={iconVariants}
            animate={showMenu ? "opened" : "closed"}
            whileHover={{ scale: 1.4 }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </motion.button>
        </div>
        <div
          className={`${hidden} items-center justify-between w-full lg:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <motion.ul
            initial={false}
            variants={menuVariants}
            animate={showMenu ? "opened" : "closed"}
            className="flex flex-col text-xl font-Light p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:shadow-none sm:shadow-lg shadow-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
          >
            <motion.li variants={linkVariants}>
              <a
                href="/drivers/dashboard"
                className={`block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue  md:dark:hover:text-blue-500 ${
                  location.pathname === "/drivers/dashboard" ? "text-fleetBlue" : "text-fleetNavText" 
                } ${payment === true ? 'hidden' : 'flex'}`}
                aria-current="page"
              >
                Home
              </a>
            </motion.li>
            <motion.li variants={linkVariants}>
              <a
                href="/drivers/findcars"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500 ${
                  location.pathname === "/drivers/findcars" ||  location.pathname.startsWith("/drivers/dashboard/vehicle/details/") ? "text-fleetBlue" : "text-fleetNavText"
                } ${payment === true ? 'hidden' : 'flex'}`}
              >
                Find Cars
              </a>
            </motion.li>
            
            <motion.li variants={linkVariants}>
              <a
                href="/drivers/bids"
                className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500 ${
                  location.pathname === "/drivers/bids" ? "text-fleetBlue" : "text-fleetNavText"
                }  ${payment === true ? 'hidden' : 'flex'}`}
              >
                Bids
              </a>
            </motion.li>

            {payment === true && 
            <div 
              className="border-[1px] w-6/6 flex items-center justify-center p-3 rounded-[10px] text-[#23A6BF] border-[#23A6BF] font-SemiBold hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110"
              onClick={()=> navigate("/drivers/dashboard")}
            >
              <p>Back to dashboard</p>
            </div> }
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}

DashboardNavBar.propTypes = {
 payment: PropTypes.boolean
}
