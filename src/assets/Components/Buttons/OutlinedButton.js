import React from "react";

export default function PrimaryButton({ cssprops, buttonText }) {
  return (
    <button
      type="button"
      className={`${cssprops} text-[#23A6BF] focus:ring-4 focus:outline-none focus:ring-[#23A6BF] font-medium font-AnekDevanagari-medium rounded-lg text-md px-10 py-2.5 text-center mr-3 md:mr-0  dark:focus:ring-[#23A6BF]`}
    >
      {buttonText}
    </button>
  );
}
