import { Button } from "../../../Components/ui/button";
import { IoImagesOutline } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import Loading from '../../CarOwnerDashboardPage/components/Loading';
import PropTypes from "prop-types";


const RideHailing = ({data, Selected, loading, loadMore, isLoadMoreLoading}) => {

  return (
    <div className="z-0">
      {loading ? (
        <Loading  />
      ) : !loading && data.length > 0 ? (
       <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:px-10 z-0">
          {data.map((car, index) => {
            return (
              <div onClick={() => Selected(car)} key={index} className="w-12/12">
                <div className="relative flex flex-col cursor-pointer  border-white md:px-0 px-5 py-[23px] rounded-[30px]">
                  {/* Render image or placeholder */}
                  {car?.front_photo ? (
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
                  {/* <div className="absolute hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 left-10 px-[20px] py-[5px] font-SemiBold text-[16.87px] gap-1 rounded-[35.51px] text-[#FFFFFF] bg-[#234C65]">
                    <p> GHS {car?.VAM}{" "}</p>
                    <span className="text-[13.32px] font-Light pt-1">{car?.VPF}</span>
                  </div> */}
                   {car?.bid_status === true && (
                      <div className="absolute  hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 right-10 px-[8px] py-[8px] font-SemiBold text-[16.87px] gap-2 rounded-[35.51px] text-[#FFFFFF] bg-[#f5d359]">
                        
                        <div className="flex items-center justify-center">
                          <p className="font-GelionBold text-[11px]">Bid placed</p>
                        </div>
                      </div>
                    )}
                  {/* Car info */}
                  <div className=" flex flex-col pb-[16px]">
                    <p className="font-SemiBold mt-3 text-[24px]">
                       {car?.VCL} {car?.VMK} {car?.VMD}
                    </p>
                    <p className="font-Light  text-[18px]">
                      Plan: {car?.bus_model} 
                    </p>
                  </div>
                  {/* Car info */}
                </div>   
              </div>
            )
          })}
        </div>
         <div className="flex items-center justify-center">
           <Button 
            onClick={() => loadMore()}
            className='bg-[#181818] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 text-[#FFFFFF] rounded-[30px]'
            >
             {isLoadMoreLoading ? (
               <ClipLoader color='#ffffff' size={30}/>
             ) : (
               "Load more"
             )}
           </Button>
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

RideHailing.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  Selected: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  isLoadMoreLoading: PropTypes.bool,
};

export default RideHailing;