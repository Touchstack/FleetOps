import React from "react";

export default function OutlinedButton({ cssprops, buttonText, }) {
  return (
    <button
      type="button"
      className={`${cssprops} text-fleetBlue focus:ring-4 focus:outline-none focus:ring-fleetBlue font-Regular rounded-[7px] text-lg px-10 py-2.5 text-center mr-3 md:mr-0 border border-fleetBlue hover:bg-fleetLightBlue hover:text-white  dark:focus:ring-fleetBlue`}
    >
      {buttonText}
    </button>
  );
}

