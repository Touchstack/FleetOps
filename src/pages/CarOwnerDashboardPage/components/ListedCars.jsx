import { useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { FaStar } from "react-icons/fa";
import Loading from "./Loading";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";



const FirstMenu = () => (
  <div className="py-2 px-3 rounded-md bg-white">
    <p className="font-Light">Unassign</p>
    <div className="flex gap-2 justify-center">
      <p className="font-Light">Change business model</p>
      <MdOutlineKeyboardArrowRight />
    </div>
 </div>
)


const SecondMenu = () => (
  <div className="py-3 px-4 gap-4 rounded-md bg-white">
    <p className="font-Light">Ride-hailing  for business (R4HB)</p>
    <p className="font-Light">Rental  for business (RT4B)</p>
    <p className="font-Light">Hire-purchase for business (HB4B)</p>
 </div>
)

const ListedCars = ({data, loading}) => {
  const [text, setText] = useState("Assigned")
  
  return (
    <div className="z-0">
      {loading ? (
        <Loading />
      ) : !loading && data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:px-10 z-0">
            {data.map((car, index) => {
              return (
                <div key={index} className="w-12/12">
                  <div className="relative flex flex-col md:pl-4 cursor-pointer border-white py-[23px] rounded-[30px]">
                    {/* Render image or placeholder */}
                    {car?.DLD !== null ? (
                      <img
                        src={`http://engines.fleetopsgh.com/uploads/photo/${car?.DLD}`}
                        className="md:w-11/12 w-12/12 h-[408px] rounded-[10px]"
                        alt=""
                      />
                    ) : (
                      <div className="flex justify-center items-center bg-white md:w-11/12 w-12/12 h-auto rounded-[10px]">
                        <IoImagesOutline
                          size={80}
                          className="text-black h-[408px]"
                        />
                      </div>
                    )}

                    {/* driver tag if assigned */}
                    {text === "Assigned" && (
                      <div className="absolute hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 left-8 px-[20px] py-[5px] font-SemiBold text-[16.87px] gap-2 rounded-[35.51px] text-[#FFFFFF] bg-[#111111CC]">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CO</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="font-GelionBold">Ernest Gakpo</p>

                          <div className="flex items-center gap-1 font-GelionLight text-[14px]">
                            <FaStar color="#CAEA08" size={10} />
                            <p>Rating: 3.3/5.0 </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Car info */}
                    <div className=" flex justify-start flex-col pb-[16px]">
                      <p className="font-SemiBold mt-3 text-[24px]">
                        {car?.VCL} {car?.VMK} {car?.VMD}
                      </p>
                      <p className="font-Light text-[18px]">
                        Model: {car?.VBM}
                      </p>

                      <div className="flex w-11/12 justify-between">
                        <div
                          className={`px-3 h-[39px] flex items-center  text-[16px] rounded-[2px] ${
                            text === "Unassigned"
                              ? "bg-[#ABB3BF]"
                              : "bg-[#63BC8C]"
                          } text-[#FFFFFF]`}
                        >
                          {text}
                        </div>


                        <div>
                          <IoEllipsisVertical />
                        </div>

                      </div>
                    </div>
                    {/* Car info */}
                  </div>
                </div>
              );
            })}
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

ListedCars.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};


export default ListedCars;