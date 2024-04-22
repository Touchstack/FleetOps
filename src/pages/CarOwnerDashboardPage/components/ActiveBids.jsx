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

export default function ActiveBids() {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="container px-2 mx-auto">
      {/*<div className={'p-24 mt-4 border border-gray-200 rounded-3xl bg-[#f1f1f1]'}>*/}
      {/*    <p className="font-Regular my-2 text-[#212121] text-xl text-center">*/}
      {/*        Oops! No vehicles were found*/}
      {/*    </p>*/}
      {/*</div>*/}

      {/* Bidding Alert */}
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
            </p>
          </div>
        </div>
        <button
          onClick={() => setReadMore(!readMore)}
          className={"underline w-full md:hidden mt-4"}
        >
          {readMore ? "Collapse" : "Read more"}
        </button>
      </div>

      <div className={""}>
        <Accordion type="single" collapsible className={"flex flex-col gap-8"}>
          <AccordionItem
            value="item-1"
            className={"rounded-[20px] border px-4"}
          >
            <AccordionTrigger className={"hover:no-underline py-4"}>
              <div>
                <p className={"no-underline mb-2"}>
                  Blue Suzuki Alto 800(2021)
                </p>
                <p className={"bg-[#D9D9D9] p-1 w-max no-underline text-sm"}>
                  2 bids made
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ActiveBid />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className={"rounded-[20px] border px-4"}
          >
            <AccordionTrigger className={"hover:no-underline py-4"}>
              <div>
                <p className={"no-underline mb-2"}>Corolla LE Eco 2022</p>
                <p className={"bg-[#D9D9D9] p-1 w-max no-underline text-sm"}>
                  2 bids made
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ActiveBid />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
