import { useState } from "react";
import { MdInfo } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion.jsx";
import ActiveBid from "@/pages/CarOwnerDashboardPage/components/ActiveBid.jsx";
import { cn } from "@/lib/utils";
import EmptyState from "@/pages/BidsPage/components/EmptyState";
import PropTypes from "prop-types";

export default function ActiveBids({ data }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="container px-2 mx-auto">
      <div
        className={"max-w-[800px] bg-[#FFEDBA] my-8 p-4 mx-auto rounded-[20px]"}
      >
        <div className={"flex items-start gap-3"}>
          <div>
            <MdInfo className={"w-[24px]"} size={24} color={"#E6B422"} />
          </div>
          <div className="">
            <p
              className={cn(
                "text-[#2A2A2A] line-clamp-4",
                readMore && "line-clamp-none"
              )}
            >
              {" "}
              Drivers that are currently using another vehicle are at liberty to
              request a swap for yours.{" "}
              <span className="">
                Such bidders have a <b>&quot;Swap request tag&quot;</b>
              </span>
              <span className="">
                {" "}
                placed on their bids. Please note that when selected,
                they&apos;ll have to return the vehicle currently in their
                possession before being allowed to be assigned yours. 24hrs are
                allocated for this process.
              </span>
              <span className="">
                {" "}
                Please note that FleetOps only provides the technology to facilitate the connection between  driver and car owner and fleet management information.
                It is the car owners' responsibility to carry out full background checks and due diligence on the driver prior to assigning their vehicles to them.
                To aid you in this process and to encourage an open discussion, prior to giving you vehicle out, we provide some minimum information such as drivers' license copy, contact number etc.
                FleetOps bares no responsibility to or for whatsoever may occur upon assigning your vehicle to a driver.
              </span>
            </p>
          </div>
        </div>
        <button
          onClick={() => setReadMore(!readMore)}
          className={"underline w-full  mt-4"}
        >
          {readMore ? "Collapse" : "Read more"}
        </button>
      </div>

      <div className={"space-y-4"}>
        {data.length > 0 ? (
          <>
           {data.map((vehicle, index) => (
             <Accordion key={index} type="single" collapsible className={"flex flex-col gap-8"}>
             <AccordionItem
               value="item-1"
               className={"rounded-[20px] border px-4"}
             >
               <AccordionTrigger className={"hover:no-underline py-4"}>
                 <div className="flex items-start flex-col">
                   <p className={"no-underline font-Bold mb-2"}>
                     {vehicle?.vehicle?.VCL} {vehicle?.vehicle?.VMK} {vehicle?.vehicle?.VMD} ({vehicle?.vehicle?.VNO})
                   </p>
                   {vehicle?.vehicle?.trans_type !== null && (
                      <p className={"no-underline font-SemiBold text-[14px] mb-2"}>
                        {vehicle?.vehicle?.trans_type} Transmission
                      </p>
                    )}
                   <p className={"bg-[#D9D9D9] p-1 w-max no-underline text-sm"}>
                   {vehicle?.vehicle?.bid_count} bids made
                   </p>
                 </div>
               </AccordionTrigger>
               <AccordionContent>
                 <ActiveBid data={vehicle?.vehicle?.driver} />
               </AccordionContent>
               </AccordionItem>
             </Accordion>
           ))}
        </>
        ) : (
         <EmptyState info={" "} />
        )}
      </div>
    </section>
  );
}

ActiveBids.propTypes = {
  data: PropTypes.array,
};
