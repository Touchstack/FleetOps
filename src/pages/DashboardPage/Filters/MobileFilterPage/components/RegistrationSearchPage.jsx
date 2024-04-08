import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { motion } from "framer-motion";
import { slideIn } from "../../../../.././utils/animation";

const RegistrationSearchPage = ({ onBackClick, onValueSelect }) => {
   const data = [
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},
      {year: "2020 - 2024"},    
   ]
  return (
    <motion.div
    className="bg-[#FFFFFF] h-full w-full fixed top-0 left-0 z-[2000] p-6  flex flex-col"
    {...slideIn}
  >
    <div className="flex items-center">
      <SlArrowLeft 
        size={24} 
        color="#000000" 
        onClick={onBackClick} 
      />
    </div>
    <div 
       className='flex overflow-auto flex-col mt-7'
       style={{ maxHeight: "calc(100vh - 250px)" }}
    >
       {data.map((years) => (
        <p className='p-6 text-[17px]' 
         onClick={()=> onValueSelect(years.year)}
        >
           {years.year}
        </p>
       ))}
    </div>

  </motion.div>
  )
}

export default RegistrationSearchPage