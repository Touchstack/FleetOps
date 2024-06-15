import {useState} from "react";
import {Modal} from "flowbite-react";
import {cn} from "@/lib/utils.js";
import {LiaTimesSolid} from "react-icons/lia";
import ClipBoard from "@/assets/images/clipboard.svg";
import {Button} from "@/Components/ui/button.jsx";
import { Label } from "@/Components/ui/label";
import { apiScheduleBid } from "@/services/CarOwnerService";
import { ClipLoader } from "react-spinners";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { CgProfile } from "react-icons/cg";
import toast, { Toaster } from 'react-hot-toast';

const ScheduleMeetModal = ({ open, onClose }) => {
  const [invitationSent, setInvitationSent] = useState(false);
  const [timeFrom, setTimeFrom] = useState("")
  const [timeTo, setTimeTo] = useState("")
  const [location, setLocation] = useState("")
  const [loading, setloading] = useState(false)

  const bid_id = localStorage.getItem("bid_id");
  const car_owner_id = localStorage.getItem("car-owner-token");
  const bid_data = JSON.parse(localStorage.getItem("bid_data"));


  const handleInvite = async () => {
    const payLoad = {
      bid_id,
      time_from: timeFrom,
      time_to: timeTo,
      location,
      car_owner_id: car_owner_id
    };
    try {
      setloading(true)
      const res = await apiScheduleBid(payLoad);
      console.log(res);
      if (res.status === 200) {
        window.location.reload();
        setInvitationSent(true);
      } else {
         setloading(false)
         toast.error(res?.response?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setloading(false)
      console.log(error);
    }
  };

  return (
   <div>
    <Modal show={open} onClose={onClose} center popup dismissible size={"md"}>
      <div
        className={cn(
          "p-6 relative rounded-tl-lg rounded-tr-lg",
          invitationSent && "bg-fleetLightBlue "
        )}
      >
        {!invitationSent && (
          <p className={"text-[24px] font-SemiBold md:text-[32px]"}>Schedule a Meeting</p>
        )}
        <LiaTimesSolid
          color={`${invitationSent && "white"}`}
          onClick={onClose}
          className={"absolute top-4 right-4 cursor-pointer"}
          size={24}
        />
      </div>
      <Modal.Body
        className={cn("", invitationSent && "bg-fleetLightBlue py-4")}
      >
        {!invitationSent && (
          <div className="">
            <div className={"bg-[#FAFAFA] mb-4 p-4 rounded-[12px]"}>
              <p className={"mb-4 font-Light"}>with {bid_data?.DNM} {bid_data?.DSN}</p>
            <Avatar>
              <AvatarImage 
                className={"w-[44px] h-[44px] rounded"} 
                src={`http://engines.fleetopsgh.com/uploads/photo/${bid_data?.avatar}`}
              />
              <AvatarFallback>
                <CgProfile size={30} />
              </AvatarFallback>
            </Avatar>
            </div>
            <div>
              <p className={"text-sm font-Light"}>
                Please choose the time you will be available
              </p>
              <div className={"flex gap-4 py-4 w-full "}>

              <div className="w-full">
                 <Label>From</Label>
                  <input
                    onChange={(e) => setTimeFrom(e.target.value)}
                    defaultValue={"00:00:00"}
                    type="time"
                    className={
                      "p-3 border-[#23A6BF] border-[2px] rounded-md w-full"
                    }
                  />
                </div>
                
                <div className="w-full">
                 <Label>To</Label>
                  <input
                    onChange={(e) => setTimeTo(e.target.value)}
                    defaultValue={"00:00:00"}
                    type="time"
                    className={
                      "p-3 border-[#23A6BF] border-[2px] rounded-md w-full"
                    }
                  />
                </div>
               
              </div>
              <div className="w-full">
                 <Label>Where</Label>
                  <input
                   onChange={(e) => setLocation(e.target.value)}
                    placeholder="eg.Spintex, Goil station"
                    type="text"
                    className={
                      "p-3 border-[#23A6BF] border-[2px] rounded-md w-full"
                    }
                  />
               </div>
            </div>
          </div>
        )}
        {invitationSent && (
          <div className={"flex flex-col items-center justify-center gap-3"}>
            <img
              className={"max-w-[144px]"}
              src={ClipBoard}
              alt={"clipboard"}
            />
            <h2 className={"font-bold text-[32px] text-center text-white"}>
              Your invitation has been sent
            </h2>
            <p className={"text-[#F5F5F5] text-[13.6px] mb-6"}>
              The driver will be notified about this.
            </p>
            <Button
              onClick={onClose}
              className={"bg-fleetLightBlue border hover:bg-none"}
            >
              Back to home
            </Button>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer
        className={cn(
          "flex justify-end rounded-bl-lg rounded-br-lg",
          invitationSent && "bg-fleetLightBlue"
        )}
      >
        {!invitationSent && (
          <div className={"flex justify-end gap-4"}>
            <Button
              className={"border-[#23A6BF] text-base text-fleetBlue"}
              variant={"outline"}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className={"bg-[#23A6BF] py-3 text-base hover:bg-fleetLightBlue"}
              onClick={() => handleInvite()}
            >
             {loading ? <ClipLoader /> :  "Send invite"}
            </Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
    <Toaster position="top-right" reverseOrder={true} />
  </div>
  );
};

export default ScheduleMeetModal;
