import { useState } from "react";
import Car from "../../.././assets/images/Car.png";
import EmptyState from "./EmptyState";
import Modal from "./Modal";

const ActiveBids = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBid, setSelectedBid] = useState(null);


  const data = [
    {
      id: 1,
      title: 'Corolla LE Eco 2022',
      model: ' Ride hailing for business (RH4B)',
      image: Car,
      price:'400'
    },
    {
      id: 2,
      title: 'Corolla LE Eco 2022',
      model: ' Ride hailing for business (RH4B)',
      image: Car,
      price:'400'
    },
    {
      id: 3,
      title: 'Corolla LE Eco 2022',
      model: ' Ride hailing for business (RH4B)',
      image: Car,
      price:'400'
    }, 
  ];

  const handleCancelBid = (bidId) => {
    setSelectedBid(bidId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBid(null);
  };

  return (
    <div>
      {data.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  gap-10">
          {data.map((cars) => (
            <div key={cars.id} className="w-12/12">
              <div className="relative flex flex-col cursor-pointer  py-[23px] px-[22px] rounded-[30px]">
                <img src={cars.image} className="w-full h-auto rounded-[10px]" alt="" />
                {/* Price tag */}
                  <div className="absolute hover:bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 flex pt-2 top-10 left-10 px-[20px] py-[5px] font-SemiBold text-[16.87px] gap-1 rounded-[35.51px] text-[#FFFFFF] bg-[#234C65]">
                   <p>GHS {cars.price}</p>
                   <span className="text-[13.32px] font-Light pt-1">per week</span>
                  </div>
                 {/* Price tag */}
    
    
                 {/* Car info */}
                  <div className=" flex flex-col pb-[16px]">
                    <p className="font-SemiBold mt-3 text-[24px]">
                        {cars.title}
                    </p>
    
                    <p className="font-Light  text-[20px]">
                      Model:{cars.model}
                    </p>
                  </div>
                 {/* Car info */}
                
                <div className="px-[6px] w-7/12  md:w-6/12 lg:w-[7/12] py-[8px] flex items-center justify-center rounded-[6px] bg-[#FFEFB6] mb-5">
                   <p className="text-[#CE9A00] text-[11px] md:text-[14px]">
                     Awaiting response
                   </p> 
                </div>
    
    
                <div 
                onClick={() => handleCancelBid(cars.id)}
                className=" border-[1px] w-6/12 mt-3  flex text-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 hover:bg-[#23A6BF] hover:text-white justify-center border-[#23A6BF] cursor-pointer rounded-[10px] px-[5px] py-[10px] ">
                    <p className=" font-SemiBold text-[19px]  pt-2">Cancel Bid</p>
                </div>
    
              </div>

               
            </div>
          ))}

          {/* Horizontal line with centered text */}
          <hr className="border-t-2 mr-[160px] mt-2  lg:mr-[-90px] border-gray-300" />
                  <div className="text-center text-[12px] md:text-[14px] text-[#5E5A5A]">
                    <p>You have reached your bid limit</p>
                  </div>
                {/* Horizontal line */}
                <hr className="border-t-2 mt-2 ml-[160px] lg:ml-[-90px] border-gray-300" />
        </div>

        ) : (
          <EmptyState BidType="active" />
        )}

      {showModal && (
        <Modal onCancel={closeModal} bidId={selectedBid} text={'You are about to cancel this bid. Press Yes to proceed.'} title={'Cancel Bid?'} />
      )}

    </div>
  );
};

export default ActiveBids;
