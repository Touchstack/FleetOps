import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const NavBarDropdown = () => {
  return (
    <div
      id="dropdownNavbarCompany"
      className="z-10 absolute bg-white divide-y divide-gray-100 rounded-[20px] lg:w-60 md:w-60 sm:w-80 w-80 drop-shadow-lg"
    >
      <ul
        className="p-5 text-xl text-gray-900 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <p className="px-2 py-3 text-gray-400 text-base">COMPANY</p>
        <li>
          <a
            href="/aboutus"
            className="block px-2 py-3 hover:bg-gray-100 dark:hover:bg-green-100"
          >
            About Us
          </a>
        </li>

        <li>
          <a
            href="/contactus"
            className="block px-2 py-3 text-xl hover:bg-gray-100 dark:hover:bg-green-100"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export const DriverDropdown = ({ Settings }) => {
  const navigate = useNavigate();
  
  return (
    <div
      id="dropdownNavbarCompany"
      className="z-10 font-Regular absolute mt-14 bg-white divide-y divide-gray-100 rounded-[20px] lg:w-44 md:w-40 sm:w-40 lg:ml-24 md:ml-18 sm:-ml-24 -ml-24 w-40 drop-shadow-lg"
    >
      <ul
        className="p-5 text-xl text-gray-900 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
       { Settings &&  
          <p 
          onClick={() => navigate('/drivers/account')}
          className="px-2 py-3 cursor-pointer text-base hover:bg-gray-100 dark:hover:bg-green-100">
            SETTINGS
        </p> }

        <button
          onClick={() => {
            localStorage.removeItem("driverNumber");
            localStorage.removeItem("driver");
            localStorage.removeItem("token");
            localStorage.removeItem("fullName");
            localStorage.removeItem("driverVehicle");
            return (window.location.href = "/drivers/loginpage");
          }}
        >
          <a
            href="#"
            className="block px-2 py-3 text-xl hover:bg-gray-100 dark:hover:bg-green-100"
          >
            Logout
          </a>
        </button>
      </ul>
    </div>
  );
};

DriverDropdown.propTypes = {
  Settings: PropTypes.bool.isRequired,
};
