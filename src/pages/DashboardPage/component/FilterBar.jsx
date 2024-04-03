import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Button } from '@/Components/ui/Button'; // Assuming Button is a custom component
import { Separator } from '@/Components/ui/separator';

const FilterDropdown = ({ title, onSelect, onMouseEnter, onMouseLeave }) => {
    const handleMouseEnter = () => {
      onMouseEnter && onMouseEnter();
    };
  
    const handleMouseLeave = () => {
      onMouseLeave && onMouseLeave();
    };
  
    const handleSelect = (value) => {
      onSelect && onSelect(value);
    };
  
    return (
      <div
        className="absolute items-center cursor-pointer justify-center mt-[60px] w-[168px] bg-white border rounded-md border-gray-200 shadow-lg z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="p-3" onClick={() => handleSelect('Toyota')}>
          Toyota
        </p>
        <p className="p-3" onClick={() => handleSelect('Honda')}>
          Honda
        </p>
        <p className="p-3" onClick={() => handleSelect('Ford')}>
          Ford
        </p>
        <p className="p-3" onClick={() => handleSelect('Chevrolet')}>
          Chevrolet
        </p>
        <p className="p-3" onClick={() => handleSelect('BMW')}>
          BMW
        </p>
        <p className="p-3" onClick={() => handleSelect('Mercedes')}>
          Mercedes
        </p>
      </div>
    );
  };
  
  
  

  const FilterItem = ({ title, value, onChange }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelect = (newValue) => {
        setSelectedValue(newValue);
        onChange && onChange(newValue);
        setShowDropdown(false);
      };
  
    return (
      <div
        className="md:flex cursor-pointer hidden relative"
        onClick={() => setShowDropdown(true)}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-[14px] text-[#3E3C3C]">{title}</h1>
          <p>{value}</p>
        </div>
        <div className="flex items-center gap-2 pl-10">
          <RiArrowDropDownLine size={25} />
          <Separator orientation="vertical" />
        </div>
  
        {showDropdown && (
          <FilterDropdown
            title={title}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onSelect={(newValue) => handleSelect(newValue)}
          />
        )}
      </div>
    );
  };
  

const FilterBar = () => {

    const [selectedValues, setSelectedValues] = useState({
        'Brand': '',
        'Year of man.': '',
        'Year of reg.': '',
        'Fuel consumption': '',
        'Transmission type': '',
      });
    
      const handleFilterChange = (title, value) => {
        setSelectedValues(prevState => ({
          ...prevState,
          [title]: value,
        }));
      };
    
      
  return (
    <div className="flex my-7 justify-between drop-shadow-md w-[8/12] bg-[#FFFFFF] p-[30px] md:p-[16px]">
     <FilterItem title="Brand" value={selectedValues['Brand']} onChange={(value) => handleFilterChange('Brand', value)} />
      <FilterItem title="Year of man." value={selectedValues['Year of man.']} onChange={(value) => handleFilterChange('Year of man.', value)} />
      <FilterItem title="Year of reg." value={selectedValues['Year of reg.']} onChange={(value) => handleFilterChange('Year of reg.', value)} />
      <FilterItem title="Fuel consumption" value={selectedValues['Fuel consumption']} onChange={(value) => handleFilterChange('Fuel consumption', value)} />
      <FilterItem title="Transmission type" value={selectedValues['Transmission type']} onChange={(value) => handleFilterChange('Transmission type', value)} />

      <div className="md:hidden flex">
        <div className="flex items-center justify-center">
          <h1 className="text-[14px] text-[#3E3C3C]">All filters</h1>
        </div>
        <div className="flex items-center gap-2 pl-">
          <RiArrowDropDownLine size={25} />
          <Separator orientation="vertical" />
        </div>
      </div>

      <Button className="bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-[108px] md:w-[140px] rounded-[10px] text-white">Search</Button>
    </div>
  );
};

export default FilterBar;
