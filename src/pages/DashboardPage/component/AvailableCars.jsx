import React, { useState } from 'react';
import Car from "../../../assets/images/Car.png";
import { Button } from "@/Components/ui/button";
import { IoImagesOutline } from "react-icons/io5";


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

const AvailableCars = ({data, Selected, loading}) => {

  return (
    <div className="z-0">
      {loading ? (
        <Spinner />
      ) : !loading && data.length > 0 ? (
       <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:px-10 z-0">
          {data.map((car) => {
            return (
              <div onClick={() => Selected(car)} key={car?.driver_id} className="w-12/12">
                <div className="relative flex flex-col cursor-pointer  border-white py-[23px] rounded-[30px]">
                  {/* Render image or placeholder */}
                  {car?.DLD !== null ? (
                    <img
                      src={`http://engines.fleetopsgh.com/uploads/photo/${car?.DLD}`}
                      className="md:w-11/12 w-12/12 h-[408px] rounded-[10px]"
                      alt=""
                    />
                  ) : (
                    <div className="flex justify-center items-center bg-white md:w-11/12 w-12/12 h-auto rounded-[10px]">
                      <IoImagesOutline size={80} className="text-black  h-[408px]" />
                    </div>
                  )}
                  {/* Price tag */}
                  <div className="absolute hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 left-10 px-[20px] py-[5px] font-SemiBold text-[16.87px] gap-1 rounded-[35.51px] text-[#FFFFFF] bg-[#234C65]">
                    <p> GHS {car?.VAM}{" "}</p>
                    <span className="text-[13.32px] font-Light pt-1">{car?.VPF}</span>
                  </div>
                  {/* Car info */}
                  <div className=" flex flex-col pb-[16px]">
                    <p className="font-SemiBold mt-3 text-[24px]">
                       {car?.VCL} {car?.VMK} {car?.VMD}
                    </p>
                    <p className="font-Light  text-[18px]">
                      Model: {car?.VBM} 
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
            className='bg-[#181818] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 text-[#FFFFFF] rounded-[30px]'
            >
            Load more
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

export default AvailableCars;