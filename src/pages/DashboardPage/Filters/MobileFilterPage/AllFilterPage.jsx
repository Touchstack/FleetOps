import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { slideIn } from "../../../.././utils/animation";
import { Separator } from '@/Components/ui/separator';
import { Button } from "@/Components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import BrandsSearchPage from "./components/BrandsSearchPage";
import FuelConsumptionSearchPage from "./components/FuelConsumptionSearchPage";
import ManifactureSearchPage from "./components/ManifactureSearchPage";
import RegistrationSearchPage from "./components/RegistrationSearchPage";
import TransmissionTypePage from "./components/TransmissionTypePage";




const FilterItem = ({ title, value, onChange, onOpen }) => {
  return (
    <div className="pt-[26px]" onClick={onOpen}>
      <div className="flex justify-between items-center pb-1">
        <div className="flex flex-col justify-center pl-2 pb-1">
          <h1 className="text-[14px] text-[#3E3C3C]">{title}</h1>
          <p>{value}</p>
        </div>
        <MdKeyboardArrowRight size={25} color={"#3E3C3C"} />
      </div>
      <Separator orientation="horizontal" />
    </div>
  );
};

const AllFilterPage = ({ onCloseClick, selectedValues, onSelectedValuesChange }) => {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isManOpen, setIsManOpen] = useState(false);
  const [isRegOpen, setIsRegOpen] = useState(false);
  const [isFuelOpen, setIsFuelOpen] = useState(false);
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(false);

  const handleFilterChange = (title, value) => {
    const newSelectedValues = { ...selectedValues, [title]: value };
    onSelectedValuesChange(newSelectedValues);
  };

  const isFilterSelected = Object.values(selectedValues).some(value => value !== '');


  const handleSearch = () => {
    onCloseClick()
  }

  const handleClear = () => {
    onSelectedValuesChange("");
  }
  
  return (
    <motion.div
      className="bg-[#FFFFFF] h-full w-full fixed top-0 left-0 z-[2000] p-5 flex flex-col"
      {...slideIn}
    >
      <div className="flex items-center gap-[18px]">
        <IoClose size={35} onClick={onCloseClick} />
        <h2 className="text-[28px] pt-3 font-SemiBold">All Filters</h2>
      </div>

      <div className="flex-grow">
        <FilterItem 
           title={"Brand"} 
           value={selectedValues['Brand']} 
           onOpen={() => setIsBrandOpen(true)}
        />
        <FilterItem 
          title={"Year of man"} 
          value={selectedValues['Year of man.']}  
          onOpen={() => setIsManOpen(true)} 
        />
        <FilterItem 
           title={"Year of reg."} 
           value={selectedValues['Year of reg.']} 
           onOpen={() => setIsRegOpen(true)}
        />
        <FilterItem 
           title={"Fuel consumption"} 
           value={selectedValues['Fuel consumption']} 
           onOpen={() => setIsFuelOpen(true)}
        />
        <FilterItem 
          title={"Transmission type"} 
          value={selectedValues['Transmission type']}
          onOpen={() => setIsTransmissionOpen(true)} 
        />
      </div>
      
      {/* Rendering components */}
      {isBrandOpen && 
        <BrandsSearchPage 
        onBackClick={() => setIsBrandOpen(false)} 
        onValueSelect={ (value) => { 
          handleFilterChange('Brand', value);
          setIsBrandOpen(false);
        }}
      />}
      {isManOpen && 
         <ManifactureSearchPage 
         onBackClick={() => setIsManOpen(false)} 
         onValueSelect={(value) => {
          handleFilterChange('Year of man.', value);
          setIsManOpen(false);
         }}
      />}
      {isRegOpen && 
         <RegistrationSearchPage 
          onBackClick={() => setIsRegOpen(false)}
          onValueSelect={(value) => {
            handleFilterChange('Year of reg.', value);
            setIsRegOpen(false);
          }}
      />}
      {isFuelOpen && 
        <FuelConsumptionSearchPage 
         onBackClick={() => setIsFuelOpen(false)} 
         onValueSelect={(value) => {
          handleFilterChange('Fuel consumption', value);
          setIsFuelOpen(false);
        }}
      />}
      {isTransmissionOpen && 
         <TransmissionTypePage 
         onBackClick={() => setIsTransmissionOpen(false)}
         onValueSelect={(value) => {
          handleFilterChange('Transmission type', value);
          setIsTransmissionOpen(false);
        }} 
      />}

      {/* Buttons section */}
      <div className="flex mt-auto  gap-4 justify-end">
      {isFilterSelected && (
          <Button
            className="bg-[#FFFF] text-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-[156px] h-[48px] border-[1px] border-[#23A6BF] rounded-[10px]"
            onClick={handleClear}
          >
            Clear All
          </Button>
        )}
        <Button
          className="bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-[156px] h-[48px] rounded-[10px] text-white"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      {/* Buttons section */}

    </motion.div>
  );
};

export default AllFilterPage;
