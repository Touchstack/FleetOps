import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { MdOutlineStar } from "react-icons/md";
import { Button } from "@/Components/ui/button.jsx";
import { useCallback, useEffect, useState } from "react";
import ScheduleMeetModal from "@/pages/CarOwnerDashboardPage/components/modals/SchedulleMeet.jsx";
import CancelBidModal from "@/pages/CarOwnerDashboardPage/components/modals/CancelBid.jsx";
import YouAreAssigning from "./modals/YouAreAssigning";
import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";
import moment from 'moment';



export default function ActiveBid({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [cancelBid, setCancelBid] = useState(false);
  const [onAssignCar, setonAssignCar] = useState(false)
  //const [inviteSent, setInviteSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState({});
  
 
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


  const calculateTimeLeft = useCallback((endTime) => {
    const currentTime = moment();
    const duration = moment.duration(endTime.diff(currentTime));

    if (duration.asMilliseconds() <= 0) {
      return {
        hours: '00',
        minutes: '00',
        seconds: '00',
        expired: true
      };
    } else {
      return {
        hours: String(Math.floor(duration.asHours())).padStart(2, '0'),
        minutes: String(duration.minutes()).padStart(2, '0'),
        seconds: String(duration.seconds()).padStart(2, '0'),
        expired: false
      };
    }
  }, []);

  useEffect(() => {
    const intervals = data.map((bid, index) => {
      let endTime = moment(localStorage.getItem(`endTime_${index}`));
      if (!endTime.isValid()) {
        endTime = moment().add(6, 'hours');
        localStorage.setItem(`endTime_${index}`, endTime.toISOString());
      }
      return setInterval(() => {
        const timeLeft = calculateTimeLeft(endTime);
        setTimeLeft(prev => ({ ...prev, [index]: timeLeft }));
        setExpired(prev => ({ ...prev, [index]: timeLeft.expired }));
      }, 1000);
    });

    return () => intervals.forEach(clearInterval);
  }, [data, calculateTimeLeft]);




  return (
    <div className={"py-4"}>
      {data?.map((data, index) => (
      <div
        key={index}
        className={
          "flex md:flex-row flex-col justify-between items-start py-4 gap-7 px-3"
        }
      >
         <div className={""}>
          <p className={"text-[#2A2A2A] font-SemiBold mb-1"}>{data?.DNM} {data?.DSN}</p>
          <div className={"flex gap-4 items-start"}>
            <Avatar>
              <AvatarImage 
                className={"w-[44px] h-[44px] rounded"} 
                src={`http://engines.fleetopsgh.com/uploads/photo/${data?.avatar}`}
              />
              <AvatarFallback>
                <CgProfile size={30} />
              </AvatarFallback>
            </Avatar>
            <div>
              <div className={"inline-flex items-center gap-1"}>
                <MdOutlineStar color={"#CAEA08"} />
                <p className={"text-[#5A6267]"}>
                  Rating: <span>{data?.rating}/5.0</span>
                </p>
              </div>
              <p className={"text-[#5A6267]"}>
                License No: <span className={"text-bodyText"}>{data?.license_no}</span>
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
            <p className={"font-bold text-[#6D6D6D]"}>Preferred Transmission</p>
            <p>{data?.trans_type}</p>
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
            <p className={"font-bold"}>{timeLeft[index]?.hours}:{timeLeft[index]?.minutes}:{timeLeft[index]?.seconds}s</p>

           {data?.bid_status === 'accepted' && 
            <div className=" bg-[#FFEDBA] flex hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110  justify-center p-1  cursor-pointer rounded-[4px] ">
              <p className="font-Light text-[14px] text-[#CE9A00]  p-0">Waiting to be assigned</p>
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
