/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import {
  apiGetSelectedVehicle,
  apiGetVehicleById,
  apiGetVehicles,
  apiSelectVehicle,
} from "../../services/VehiclesService";
import { Modal } from "flowbite-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Spinner } from "../../Components/Forms/CarOwnersRegistrationForm";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function VehicleDetails() {
  const [loading, setLoading] = useState(true);
  const [selecting, setSelecting] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [statusText, setStatusText] = useState();
  const [data, setData] = useState();
  const [vehicles, setVehicles] = useState([]);
  const loaction = useLocation();
  const pathSegments = loaction?.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];
  const token = localStorage.getItem("token");
  const driverVehicleObj = localStorage.getItem("driverVehicle");
  const driverVehicle = JSON.parse(driverVehicleObj);

  function isEmptyObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await apiGetVehicles();
      setVehicles(response.data?.data?.slice(0, 3));
      return setLoading(false);
    } catch (error) {
      return setData(false);
    }
  };

  const getVehicle = async () => {
    try {
      setLoading(true);
      const response = await apiGetVehicleById(id);
      isEmptyObject(response?.data) ? setData(null) : setData(response?.data);
      setLoading(false);
      return fetchVehicles();
    } catch (error) {
      setLoading(false);
    }
  };

  const getSelectedVehicle = async () => {
    const driverObj = localStorage.getItem("driver");
    const driver = JSON.parse(driverObj);
    if (driver) {
      try {
        setLoading(true);
        const response = await apiGetSelectedVehicle(driver?.id);
        localStorage.setItem(
          "driverVehicle",
          JSON.stringify(response.data?.data?.vehicle)
        );
        return setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  const viewVehicleDetails = (vehicle) => {
    return (window.location.href = `/vehicle/details/${vehicle?.id}`);
  };

  const InfoModal = () => {
    return (
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <IoMdCheckmarkCircleOutline className="mx-auto mb-4 h-32 w-32 text-emerald-500" />
            <h3 className="mb-5 text-2xl font-Regular font-normal text-emerald-500">
              {statusText}
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  const selectVehicle = async () => {
    if (!token) {
      return (window.location.href = "/drivers/loginpage");
    }
    if (statusText === "`Vehicle Selected Successfully!" || driverVehicle) {
      return window.open("https://engines.fleetopsgh.com/driver", "_blank");
    }
    try {
      setSelecting(true);
      const driverObj = localStorage.getItem("driver");
      const driver = JSON.parse(driverObj);
      const payload = {
        driverId: driver?.id,
        driverName: driver?.fullname,
        vehicle: data,
      };
      await apiSelectVehicle(payload);
      localStorage.setItem("driverVehicle", JSON.stringify(data));
      setSelecting(false);
      setOpenModal(true);
      return setStatusText(`Vehicle Selected Successfully!`);
    } catch (error) {
      setSelecting(false);
      setOpenModal(true);
      setStatusText(error?.response?.data?.error || error?.message || error);
    }
  };

  useEffect(() => {
    getVehicle();
    getSelectedVehicle();
  }, []);

  return (
    <main>
      <InfoModal />
      <NavBar />
      <div className="w-full bg-[#F7F9F8]">
        {loading ? (
          <div className="container mx-auto p-24 bg-[#F7F9F8]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              Fetching Vehicle Details
            </p>
            <Spinner />
          </div>
        ) : !loading && data ? (
          <section className="container mx-auto p-8 bg-[#F7F9F8]">
            <p className="font-Light text-[#545151]">
              <a
                href="/drivers"
                className="hover:underline hover:text-fleetBlue"
              >
                Drivers
              </a>{" "}
              /{" "}
              <HashLink
                to="/drivers#cars-section"
                className="hover:underline hover:text-fleetBlue"
                smooth={true}
              >
                Cars
              </HashLink>{" "}
              /{" "}
              <span className="text-fleetBlue">
                {data?.VMK} {data?.VMD}
              </span>
            </p>

            {/* Vehicle Details Grid */}
            <div className="mt-4 grid lg:grid-cols-2 md:grid-cold-1 sm:grid-cols-1 grid-cols-1 gap-x-8 gap-y-8">
              {/* LEFT */}
              <div>
                <p className="font-SemiBold lg:text-5xl md:text-4xl sm:text-2xl text-2xl">
                  {data?.VCL} {data?.VMK} {data?.VMD} (
                  {data?.VDT?.split("-")[0]})
                </p>
                <p className="font-Regular text-[#212121] text-2xl">
                  GHS {data?.VAM}{" "}
                  <span className="font-Light lowercase">{data?.VPF}</span>
                </p>
              </div>

              {/* RIGHT */}
              <div className="border rounded-2xl bg-white p-10">
                {statusText === "Vehicle Selected Successfully!" ? (
                  <>
                    <p className="font-Light lg:text-2xl md:text-2xl sm:text-2xl text-xl py-2 underline">
                      You have selected this vehicle
                    </p>
                    <p className="font-Bold lg:text-2xl md:text-2xl sm:text-2xl text-xl">
                      {data?.VCL} {data?.VMK} {data?.VMD} (
                      {data?.VDT?.split("-")[0]})
                    </p>
                    <p className="font-Bold lg:text-2xl md:text-2xl sm:text-2xl text-xl">
                      {data?.VNO}{" "}
                    </p>
                  </>
                ) : driverVehicle ? (
                  <>
                    <p className="font-Light lg:text-2xl md:text-2xl sm:text-2xl text-xl py-2 underline">
                      You have already selected this vehicle
                    </p>

                    <p className="font-Bold lg:text-2xl md:text-2xl sm:text-2xl text-xl">
                      {driverVehicle?.VCL} {driverVehicle?.VMK}{" "}
                      {driverVehicle?.VMD} ({driverVehicle?.VDT?.split("-")[0]})
                    </p>
                    <p className="font-Bold lg:text-2xl md:text-2xl sm:text-2xl text-xl">
                      {driverVehicle?.VNO}{" "}
                    </p>
                  </>
                ) : (
                  <p className="font-Regular lg:text-2xl md:text-2xl sm:text-2xl text-xl">
                    {data?.VCL} {data?.VMK} {data?.VMD} (
                    {data?.VDT?.split("-")[0]})
                  </p>
                )}
                {statusText ===
                "Vehicle Selected Successfully!" ? null : driverVehicle ? null : (
                  <p className="font-Regular text-[#212121] text-xl">
                    GHS {data?.VAM}{" "}
                    <span className="font-Light lowercase">{data?.VPF}</span>
                  </p>
                )}
                {selecting ? (
                  <Spinner />
                ) : (
                  <PrimaryButton
                    buttonText={
                      statusText === "Vehicle Selected Successfully!"
                        ? "Access Your Selected Vehicle"
                        : driverVehicle
                        ? "Access Your Selected Vehicle"
                        : "Select this car"
                    }
                    onClick={() => selectVehicle()}
                  />
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="container mx-auto p-24 bg-[#F7F9F8]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              No available vehicle data
            </p>
          </section>
        )}

        <section className="container mx-auto p-8 bg-[#F7F9F8]">
          <p className="font-SemiBold lg:text-5xl md:text-4xl sm:text-2xl text-2xl">
            Other cars you may like
          </p>

          {loading ? (
            <Spinner />
          ) : !loading && vehicles?.length >= 1 ? (
            <div className="container lg:w-11/12 md:w-full sm:w-full w-full mx-auto">
              {vehicles.map((car) => {
                return (
                  <div
                    key={car?.driver_id}
                    className="bg-white my-5 flex md:flex-row sm:flex-col flex-col justify-between items-center lg:w-11/12 md:w-full sm:w-full w-full p-8 rounded-md"
                  >
                    <div>
                      <h4 className="text-dark font-Regular md:text-2xl text-xl">
                        {car?.VCL} {car?.VMK} {car?.VMD}
                      </h4>
                      <p className="font-Bold text-[#234C65] text-lg">
                        GHS {car?.VAM}{" "}
                        <span className="font-Light lowercase">{car?.VPF}</span>
                      </p>
                    </div>
                    <OutlinedButton
                      buttonText={"View Details"}
                      onClick={() => viewVehicleDetails(car)}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <section className="container mx-auto p-24 border rounded-3xl bg-[#F7F9F8]">
              <p className="font-Regular my-2 text-[#212121] text-xl text-center">
                No available cars
              </p>
            </section>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
}
