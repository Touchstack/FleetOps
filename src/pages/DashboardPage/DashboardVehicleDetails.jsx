/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import {
  apiGetVehicleById,
  apiGetVehicles,
} from "../../services/VehiclesService";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Spinner } from "../../Components/Forms/CarOwnersRegistrationForm";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";

export default function DashboardVehicleDetails() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [vehicles, setVehicles] = useState([]);
  const loaction = useLocation();
  const pathSegments = loaction?.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];

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

  const selectVehicle = (vehicle) => {
    return (window.location.href = `/vehicle/details/${vehicle?.id}`);
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return (
    <main className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar />
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
                href="/drivers/dashboard"
                className="hover:underline hover:text-fleetBlue"
              >
                Dashboard
              </a>{" "}
              /{" "}
              <a
                to="/drivers/findcars"
                className="hover:underline hover:cursor-pointer hover:text-fleetBlue"
              >
                Cars
              </a>{" "}
              /{" "}
              <span className="text-fleetBlue">
                {data?.VCL} {data?.VMK} {data?.VMD}
              </span>
            </p>

            {/* Vehicle Details Grid */}
            <div className="mt-4 grid lg:grid-cols-2 md:grid-cold-1 sm:grid-cols-1 grid-cols-1 gap-x-8 gap-y-8">
              {/* RIGHT */}
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

              {/* LEFT */}
              <div className="border rounded-2xl bg-white p-10">
                <p className="font-Regular lg:text-2xl md:text-2xl sm:text-2xl text-xl">
                  {data?.VCL} {data?.VMK} {data?.VMD} (
                  {data?.VDT?.split("-")[0]})
                </p>
                <p className="font-Regular text-[#212121] text-xl">
                  GHS {data?.VAM}{" "}
                  <span className="font-Light lowercase">{data?.VPF}</span>
                </p>
                <PrimaryButton buttonText={"Select this car"} />
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
                      onClick={() => selectVehicle(car)}
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
    </main>
  );
}
