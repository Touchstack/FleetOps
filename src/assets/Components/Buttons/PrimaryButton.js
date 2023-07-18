import React from "react";

export default function PrimaryButton({cssprops, buttonText}) {
    return (
      <button
        type="button"
        className={`${cssprops} text-white text-center bg-[#23A6BF] font-normal font-AnekDevanagri text-md px-10 py-2.5 mr-3`}
      >
        {buttonText}
      </button>
      
    );
}