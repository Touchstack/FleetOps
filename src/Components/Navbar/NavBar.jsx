import { useState } from "react";
import AppLogo from "../../assets/images/fleetops-logo.svg";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import { NavBarDropdown } from "./NavBarDropdown";
import { motion } from "framer-motion";

export default function NavBar() {
  const [hidden, setHiddenState] = useState("hidden"); //show or hide navbar
  const [ariaExpanded, setAriaExpanded] = useState("false"); //expanded or collapsed state
  const [showMenu, setShowMenu] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const token = localStorage.getItem("token");

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
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-2">
        <a href="/" className="">
          <img
            className="lg:mr-20"
            src={AppLogo}
            alt="App Logo"
            style={{ width: 210, height: 75 }}
          />
        </a>
        <div className="flex md:order-2">
          <span className="md:ml-20 py-1 text-xl lg:block md:hidden sm:hidden hidden">
            <a
              href={!token ? "/drivers/loginpage" : "/drivers/dashboard"}
              className="text-fleetBlue font-SemiBold"
            >
              {!token ? "Login" : "Dashboard"}
            </a>
          </span>
          <a href="/contactus">
            <OutlinedButton
              buttonText={"Contact Us"}
              cssprops={
                "md:ml-10 lg:block md:hidden sm:hidden hidden font-SemiBold"
              }
            />
          </a>

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
                href="/"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent text-fleetNavText md:p-0 md:hover:text-fleetBlue"
                aria-current="page"
              >
                Home
              </a>
            </motion.li>
            <motion.li variants={linkVariants}>
              <a
                href="/carowners"
                className="block py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0"
              >
                Car Owners
              </a>
            </motion.li>
            <motion.li variants={linkVariants}>
              <a
                href="/drivers"
                className="block py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0"
              >
                Drivers
              </a>
            </motion.li>
            <motion.li variants={linkVariants}>
              <button
                onClick={handleShowDropdown}
                className="flex py-2 pl-3 pr-4 text-fleetNavText w-full rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0"
              >
                Company
                <svg
                  className="mr-1 h-5 w-5 text-gray-400 md:hover:text-fleetBlue"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && <NavBarDropdown />}
            </motion.li>
            <motion.li variants={linkVariants}>
              <a
                href={!token ? "/drivers/loginpage" : "/drivers/dashboard"}
                className="block lg:hidden md:hidden py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500"
              >
                {!token ? "Login" : "Driver Dashboard"}
              </a>
            </motion.li>
            <motion.li variants={linkVariants}>
              <a
                href="/contactus"
                className="block lg:hidden md:hidden py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500"
              >
                Contact Us
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}
