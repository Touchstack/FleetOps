import AppLogo from "../../assets/images/fleetops-logo.svg";
import OutlinedButton from "../Buttons/OutlinedButton";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
            <a href="/Login" className="text-fleetBlue font-SemiBold">
              Login
            </a>
          </span>
          <OutlinedButton
            buttonText={"Contact Us"}
            cssprops={
              "md:ml-10 lg:block md:hidden sm:hidden hidden font-SemiBold"
            }
          />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
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
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col text-xl font-Regular p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-fleetNavText md:p-0 md:hover:text-fleetBlue"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/carowners"
                className="block py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Car Owners
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Drivers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex py-2 pl-3 pr-4 text-fleetNavText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fleetBlue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
                <svg
                  className="mr-1 h-5 w-5 text-gray-400"
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
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
