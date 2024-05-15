import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { MdOutlineStar } from "react-icons/md";
import { Button } from "@/Components/ui/button.jsx";
import { useState } from "react";
import ScheduleMeetModal from "@/pages/CarOwnerDashboardPage/components/modals/SchedulleMeet.jsx";
import CancelBidModal from "@/pages/CarOwnerDashboardPage/components/modals/CancelBid.jsx";
import YouAreAssigning from "./modals/YouAreAssigning";
import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";



export default function ActiveBid({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [cancelBid, setCancelBid] = useState(false);
  const [onAssignCar, setonAssignCar] = useState(false)
  //const [inviteSent, setInviteSent] = useState(false);

 
  const handleAcceptBid = (id) => {
     localStorage.setItem("bid_id", id)
    setOpenModal(!openModal);
  };

  const handleCancelBid = (id) => {
    localStorage.setItem("bid_id", id)
    setCancelBid(!cancelBid);
  };

  const handleAssign = (id) => {
    localStorage.setItem("bid_id", id)
    setonAssignCar(!onAssignCar)
  };

  // const handleInviteSent = () => {
  //   setInviteSent(!inviteSent);
  // };

  return (
    <div className={"py-6"}>
      {data?.map((data, index) => (
      <div
        key={index}
        className={
          "flex md:flex-row flex-col justify-between items-start  gap-7 px-3"
        }
      >
         <div className={""}>
          <p className={"text-[#2A2A2A] font-SemiBold mb-1"}>{data.DNM} {data.DSN}</p>
          <div className={"flex gap-4 items-start"}>
            <Avatar>
              <AvatarImage className={"w-[44px] h-[44px] rounded"} src="" />
              <AvatarFallback>
                <CgProfile size={30} />
              </AvatarFallback>
            </Avatar>
            <div>
              <div className={"inline-flex items-center gap-1"}>
                <MdOutlineStar color={"#CAEA08"} />
                <p className={"text-[#5A6267]"}>
                  Rating: <span>3.3/5.0</span>
                </p>
              </div>
              <p className={"text-[#5A6267]"}>
                License No: <span className={"text-bodyText"}>{data.license_no}</span>
              </p>
            </div>
          </div>
          {data?.swap === "yes" && 
            <p className={"my-4 bg-[#EDFCFF] text-[#088DA7] w-max"}>
              The bidder is currently driving another
            <br /> but wants to swap
            </p>
          }
        </div>
        <div
          className={"flex md:flex-row flex-col gap-8 justify-between w-1/2"}
        >
          <div className={"flex flex-col gap-4"}>
            <p className={"font-bold text-[#6D6D6D]"}>Transmission type</p>
            <p>{data?.tans_type}</p>
          </div>
          <div className={"flex flex-col gap-4"}>
            <p className={"font-bold text-[#6D6D6D]"}>Year of experience</p>
            <p>{data?.years_of_exp} years</p>
          </div>
          <div className={"flex flex-col gap-4"}>
            <p className={"font-bold text-[#6D6D6D]"}>Phone</p>
            <p>{data?.DCN}</p>
          </div>
          <div className={"flex flex-col gap-4"}>
            <p className={"font-bold text-[#6D6D6D]"}>Time to expire</p>
            <p className={"font-bold"}>06h : 40m : 56s</p>

           {data?.bid_status === 'accepted' && 
            <div className=" bg-[#FFEDBA] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110  justify-center p-1  cursor-pointer rounded-[4px] ">
              <p className="font-Light text-[14px] text-[#CE9A00]  pt-2">Waiting to be assigned</p>
            </div>
           }
          </div>
        </div>
        <div
          className={
            "flex gap-2  justify-end md:justify-center md:w-max w-full"
          }
        >
          {data?.bid_status === 'pending' ? (
          <Button
            className={"bg-[#23A6BF] py-3 text-base hover:bg-fleetLightBlue"}
            onClick={() => handleAcceptBid(data?.bid_id)}
          >
            Accept bid
          </Button>
        ) : (
        <Button
          className={"bg-[#23A6BF] py-3 text-base hover:bg-fleetLightBlue"}
          onClick={() => handleAssign(data?.bid_id)}
         >
          Assign Car
        </Button>
        )}

          <Button
            className={"border-[#23A6BF] text-base text-fleetBlue"}
            variant={"outline"}
            onClick={() => handleCancelBid(data?.bid_id)}
          >
            Cancel
          </Button>
          </div>
      </div>
    ))}

      {openModal && (
        <ScheduleMeetModal onClose={() => handleAcceptBid(data?.bid_id)} open={openModal} />
      )}
      {cancelBid && (
        <CancelBidModal open={cancelBid} onClose={() => handleCancelBid()} />
      )}

      {onAssignCar && (
         <YouAreAssigning onCancel={() => setonAssignCar(!onAssignCar)} />
      )}
    </div>
  );
}

ActiveBid.propTypes = {
  data: PropTypes.array,
};
