import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";
import { useEffect, useState } from "react";
import { apiGetVehicles } from "../../services/VehiclesService";
import OutlinedButton from "../../Components/Buttons/OutlinedButton";
import { config } from "../../services/Config";

const FindCars = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appContext, setAppContext] = useContext(AppContext);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await apiGetVehicles();
      setData(response.data);
      return setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return setData([]);
    }
  };

  const selectVehicle = (vehicle) => {
    setAppContext({
      ...appContext,
      selectedVehicle: vehicle,
    });
    return (window.location.href = `/vehicle/details/${vehicle?.id}`);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const Spinner = () => {
    return (
      <div className="text-center py-16">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar />

      <div className="p-12" id="cars-section">
        <h3 className="mt-5 font-Bold text-center text-[#0A0D14] mb-2 lg:text-4xl md:text-4xl text-3xl">
          Available Cars
        </h3>
        <p className="text-center text-[19px] text-[#545151] font-Light">
          Choose from a wide variety of vehicles from the top car owners. <br />
          All brands and models you want.
        </p>

        {loading ? (
          <Spinner />
        ) : !loading && data.length >= 1 ? (
          <div className="container lg:w-11/12 md:w-full sm:w-full w-full mx-auto">
            {data?.map((car) => {
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
          <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
            <p className="font-Regular my-2 text-[#212121] text-xl text-center">
              No available cars
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default FindCars;
