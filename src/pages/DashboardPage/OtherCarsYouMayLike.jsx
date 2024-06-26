
import Loading from "../CarOwnerDashboardPage/components/Loading";
import { IoImagesOutline } from "react-icons/io5";
import PropTypes  from 'prop-types';

const OtherCarsYouMayLike = ({Data, loading}) => {

  const viewVehicleDetails = (vehicle) => {
    return (window.location.href = `${vehicle?.id}`);
  };


  return (
    <div className="z-0 md:p-10 p-5">
     <h1 className="font-Bold pt-5 text-[30px] md:text-[36px]">Other cars you may like</h1>
    {loading ? (
      <Loading />
    ) : !loading && Data.length > 0 ? (
     <>
     <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:px-10 z-0">
        {Data.map((car) => {
          return (
            <div onClick={() => viewVehicleDetails(car)} key={car?.driver_id} className="w-12/12">
              <div className="relative flex flex-col cursor-pointer  border-white py-[23px] rounded-[30px]">
                {/* Render image or placeholder */}
                {car?.front_photo !== null ? (
                  <img
                    src={`http://engines.fleetopsgh.com/uploads/vehicle/${car?.front_photo}`}
                    className="md:w-11/12 w-12/12 h-[408px] rounded-[10px]"
                    alt=""
                  />
                ) : (
                  <div className="flex justify-center items-center bg-white md:w-11/12 w-12/12 h-auto rounded-[10px]">
                    <IoImagesOutline size={80} className="text-black  h-[408px]" />
                  </div>
                )}
                {/* Price tag */}
                {car?.bus_model !== "Ride Hailing" ? (
                     <div className="absolute hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 left-8 md:left-5 px-[15px] py-[5px] font-SemiBold text-[16.87px] gap-1 rounded-[35.51px] text-[#FFFFFF] bg-[#234C65]">
                     <p>{car?.bus_model}/GHS {car?.amount}{" "}</p>
                     <span className="text-[13.32px] font-Light pt-1">{car?.periodicity}</span>
                   </div>
                   ) : (
                      null
                   )}

                   {car?.bus_model === "Ride Hailing" ? (
                     <div className="absolute hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 left-8 md:left-5 px-[15px] py-[5px] font-SemiBold text-[16.87px] gap-1 rounded-[35.51px] text-[#FFFFFF] bg-[#234C65]">
                       <p>{car?.bus_model} plan</p>
                     </div>
                   ) : (
                      null
                   )}
                {/* Car info */}
                <div className=" flex flex-col pb-[16px]">
                  <p className="font-SemiBold mt-3 text-[24px]">
                     {car?.VCL} {car?.VMK} {car?.VMD}
                  </p>
                  {/* <p className="font-Light  text-[18px]">
                    Model: {car?.bus_model} 
                  </p> */}
                </div>
                {/* Car info */}
              </div>   
            </div>
          )
        })}
       </div>
     </div>
      </>
    ) : (
      <section className="container mx-auto p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]">
        <p className="font-Regular my-2 text-[#212121] text-xl text-center">
          Oops! No vehicles were found
        </p>
      </section>
    )}
  </div>
  )
}

OtherCarsYouMayLike.propTypes = {
  Data: PropTypes.array,
  loading: PropTypes.bool,
};

export default OtherCarsYouMayLike
