import React from "react";

export default function PrimaryButton({buttonText}) {
  
  return (
      <button
        type="button"
        className="text-white text-center bg-[#23A6BF] font-normal font-AnekDevanagri text-md px-10 py-2.5 mr-3"
      >
        {buttonText}
      </button>
      
    );
}