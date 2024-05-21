import { Modal } from "flowbite-react";
import { LiaTimesSolid } from "react-icons/lia";
import { Button } from "@/Components/ui/button.jsx";
import { apiGetCarCancelBid } from "@/services/CarOwnerService";

const CancelBidModal = ({ open, onClose }) => {
 const bid_id = localStorage.getItem("bid_id")

  const handleCancel = async () => {
    try {
      const res = await apiGetCarCancelBid(bid_id)
      if (res.status === 200) {
        window.location.href = '/carowner/listing';
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal show={open} onClose={onClose}>
      <div className={"pt-4 px-4 relative"}>
        <h2 className={"font-bold text-2xl text-[#212121]"}>Cancel bid?</h2>
        <LiaTimesSolid
          onClick={onClose}
          className={"absolute top-4 right-4 cursor-pointer"}
          size={24}
        />
      </div>
      <Modal.Body>
        <div className="pb-4">
          <p className={"text-base text-[#0B111C]"}>
            You are about to cancel this bid. Press Yes to proceed.
          </p>
        </div>
        <div className={"py-2 w-full flex justify-end items-center gap-4"}>
          <Button
            onClick={handleCancel}
            className={"border-[#23A6BF] text-base text-fleetBlue px-8 py-2"}
            variant={"outline"}
          >
            Yes
          </Button>
          <Button
            color="gray"
            onClick={onClose}
            className={
              "bg-[#23A6BF] py-2 px-8 text-base hover:bg-fleetLightBlue"
            }
          >
            No
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CancelBidModal;
