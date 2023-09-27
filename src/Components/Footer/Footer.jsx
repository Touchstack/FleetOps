import AppLogo from "../../assets/images/fleetops-logo.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";
import CallToAction from "../CallToAction/CallToAction";

export default function Footer() {
  return (
    <div className="bg-fleetDeepBlue">
      <div
        className="bg-fleetDeepBlue"
        style={{ borderBottomLeftRadius: 90, borderBottomRightRadius: 90 }}
      >
        <CallToAction />
      </div>

      <div className="bg-fleetDeepBlue text-white pt-14 px-4 font-Regular">
        <div className="container mx-auto">
          <footer className="p-4 sm:p-6 font-Light text-[19px]">
            <div className="md:flex md:justify-start justify-start">
              <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8 sm:gap-6">
                <div className="mb-6 md:mb-0">
                  <a href="/" className="">
                    <img
                      className="lg:mr-12"
                      src={AppLogo}
                      alt="App Logo"
                      style={{ width: 228, height: 86 }}
                    />
                  </a>
                </div>
                <div>
                  <h2 className="text-fleetGrey mb-6 text-base">ACTIONS</h2>
                  <ul className="">
                    <li className="mb-4">
                      <a
                        href="/carowners"
                        className="hover:underline hover:text-fleetLightBlue"
                      >
                        Register a car
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/drivers"
                        className="hover:underline hover:text-fleetFooterHover"
                      >
                        Apply to drive
                      </a>
                    </li>
                    {/*<li className="mb-4">
                      <a
                        href="/drivers#cars-section"
                        className="hover:underline hover:text-fleetFooterHover"
                      >
                        Available vehicles
                      </a>
  </li>*/}
                  </ul>
                </div>
                <div>
                  <h2 className="text-fleetGrey mb-6 text-base">LEARN MORE</h2>
                  <ul className="">
                    <li className="mb-4">
                      <a
                        href="/fov"
                        className="hover:underline hover:text-fleetFooterHover"
                      >
                        FOVCollector2.1
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/faqs#testimonials"
                        className="hover:underline hover:text-fleetFooterHover"
                      >
                        What others say
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-fleetGrey mb-6 text-base">COMPANY</h2>
                  <ul className="">
                    <li className="mb-4">
                      <a
                        href="/aboutus"
                        className="hover:underline hover:text-fleetFooterHover"
                      >
                        About us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/contactus"
                        className="hover:underline hover:text-fleetFooterHover"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="">
              <div className="flex flex-col lg:flex-row md:flex-col  sm:flex-col lg:justify-around lg:items-center text-[15px]">
                <div className="">
                  <a href="/">
                    Copyright Fleetops & Vantage Ltd 2023. All Rights Reserved
                  </a>
                </div>
                <div className="lg:my-0 md:my-2 my-2">
                  {/*<a href="/">PRIVACY POLICY</a>*/}
                </div>
                <div className="lg:mb-0 md:mb-2 mb-2">
                  {/*<a href="/">TERM OF USE</a>*/}
                </div>
                <div className="flex">
                  <a
                    href="https://www.linkedin.com/company/fleetops-vantage-ltd/"
                    className="mr-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src={LinkedInIcon}
                      alt="LinkedIn"
                    />
                  </a>
                  <a href="/" className="mr-4">
                    <img
                      className="img-fluid"
                      src={TwitterIcon}
                      alt="Twitter"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="img-fluid"
                      src={InstagramIcon}
                      alt="Instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
