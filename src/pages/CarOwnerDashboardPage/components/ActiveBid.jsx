import Avatar from "@/assets/images/brian.jpeg";
import { MdOutlineStar } from "react-icons/md";
import { Button } from "@/Components/ui/button.jsx";
import { useState } from "react";
import ScheduleMeetModal from "@/pages/CarOwnerDashboardPage/components/modals/SchedulleMeet.jsx";
import CancelBidModal from "@/pages/CarOwnerDashboardPage/components/modals/CancelBid.jsx";
import YouAreAssigning from "./modals/YouAreAssigning";

export default function ActiveBid() {
  const [openModal, setOpenModal] = useState(false);
  const [cancelBid, setCancelBid] = useState(false);
  const [onAssignCar, setonAssignCar] = useState(false)

  const handleAcceptBid = () => {
    setOpenModal(!openModal);
  };

  const handleCancelBid = () => {
    setCancelBid(!cancelBid);
  };

  const handleAssign = () => {
    setonAssignCar(!onAssignCar)
  };

  return (
    <div className={"py-6"}>
      <div
        className={
          "flex md:flex-row flex-col justify-between items-start gap-7 px-3"
        }
      >
        <div className={""}>
          <p className={"text-[#2A2A2A] font-SemiBold mb-1"}>Samuel Agyei</p>
          <div className={"flex gap-4 items-start"}>
            <img
              src={Avatar}
              alt={"avatar"}
              className={"w-[44px] h-[44px] rounded"}
            />
            <div>
              <div className={"inline-flex items-center gap-1"}>
                <MdOutlineStar color={"#CAEA08"} />
                <p className={"text-[#5A6267]"}>
                  Rating: <span>3.3/5.0</span>
                </p>
              </div>
              <p className={"text-[#5A6267]"}>
                License No: <span className={"text-bodyText"}>566999</span>
              </p>
            </div>
          </div>
          <p className={"my-4 bg-[#EDFCFF] text-[#088DA7] w-max"}>
            The bidder is currently driving another
            <br /> but wants to swap
          </p>
        </div>
        <div
          className={"flex md:flex-row flex-col gap-7 justify-between w-1/2"}
        >
          <div className={"flex flex-col gap-4"}>
            <p className={"font-bold text-[#6D6D6D]"}>Transmission type</p>
            <p>Automatic</p>
          </div>
          <div className={"flex flex-col gap-4"}>
            <p className={"font-bold text-[#6D6D6D]"}>Year of experience</p>
            <p>12 years</p>
          </div>
          <div className={"flex flex-col gap-4"}>
            <p className={"font-bold text-[#6D6D6D]"}>Time to expire</p>
            <p className={"font-bold"}>06h : 40m : 56s</p>
          </div>
        </div>
        <div
          className={
            "flex gap-2 justify-evenly md:justify-center md:w-max w-full"
          }
        >
          {/* <Button
            className={"bg-[#23A6BF] py-3 text-base hover:bg-fleetLightBlue"}
            onClick={handleAcceptBid}
          >
            Accept bid
          </Button> */}
          <Button
            className={"bg-[#23A6BF] py-3 text-base hover:bg-fleetLightBlue"}
            onClick={handleAssign}
          >
            Assign Car
          </Button>
          <Button
            className={"border-[#23A6BF] text-base text-fleetBlue"}
            variant={"outline"}
            onClick={handleCancelBid}
          >
            Cancel
          </Button>
        </div>
      </div>

      {openModal && (
        <ScheduleMeetModal onClose={handleAcceptBid} open={openModal} />
      )}
      {cancelBid && (
        <CancelBidModal open={cancelBid} onClose={handleCancelBid} />
      )}

      {onAssignCar && (
         <YouAreAssigning onCancel={() => setonAssignCar(!onAssignCar)} />
      )}
    </div>
  );
}
