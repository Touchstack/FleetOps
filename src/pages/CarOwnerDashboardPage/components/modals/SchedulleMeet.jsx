import {useState} from "react";
import {Modal} from "flowbite-react";
import {cn} from "@/lib/utils.js";
import {LiaTimesSolid} from "react-icons/lia";
import Avatar from "@/assets/images/brian.jpeg";
import ClipBoard from "@/assets/images/clipboard.svg";
import {Button} from "@/Components/ui/button.jsx";

const ScheduleMeetModal = ({ open, onClose }) => {
  const [invitationSent, setInvitationSent] = useState(false);

  const handleInvite = () => {
    // onClose()
    setInvitationSent(true);
  };

  return (
    <Modal show={open} onClose={onClose} popup dismissible size={"md"}>
      <div
        className={cn(
          "p-4 relative rounded-tl-lg rounded-tr-lg",
          invitationSent && "bg-fleetLightBlue "
        )}
      >
        {!invitationSent && (
          <p className={"text-[24px] md:text-[32px]"}>Schedule a Meeting</p>
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
              <p className={"mb-4"}>with Samuel Agyei</p>
              <img
                src={Avatar}
                alt={"avatar"}
                className={"w-[44px] h-[44px] rounded"}
              />
            </div>
            <div>
              <p className={"text-sm font-normal"}>
                Please choose the time you will be available
              </p>
              <div className={"flex gap-4 py-4 w-full justify-between"}>
                <input
                  defaultValue={"12:00:00"}
                  type="time"
                  className={
                    "p-3 border-[#23A6BF] border-[2px] rounded-md w-full"
                  }
                />
                <input
                  defaultValue={"14:00:00"}
                  type="time"
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
            >
              Cancel
            </Button>
            <Button
              className={"bg-[#23A6BF] py-3 text-base hover:bg-fleetLightBlue"}
              onClick={handleInvite}
            >
              Send invite
            </Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleMeetModal;
