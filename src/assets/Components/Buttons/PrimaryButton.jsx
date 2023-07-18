import React from "react";

export default function OutlindedButton({buttonText}) {
  
  return (
      <button
        type="button"
        className= "text-white text-center bg-fleetBlue font-Regular text-lg px-10 py-2.5 mr-3 rounded-[7px] hover:bg-fleetLightBlue"
      >
        {buttonText}
      </button>
      
    );
}