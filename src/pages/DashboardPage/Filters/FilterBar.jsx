import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Button } from '../../.././Components/ui/button';
import { Separator } from '../../.././Components/ui/separator';


const FilterDropdown = ({ options, onSelect, onMouseEnter, onMouseLeave }) => {
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
        className="absolute items-center overflow-auto cursor-pointer justify-center mt-[60px] w-[168px] bg-white border rounded-md border-gray-200 shadow-lg z-50"
        style={{ maxHeight: "calc(100vh - 250px)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      {options.map((option, index) => (
        <p key={index} className='font-Light font-[400] text-[14px] p-5' onClick={() => handleSelect(option)}>
          {option}
        </p>
        ))}
      </div>
    );
  };
  
  
  

  const FilterItem = ({ title, value, onChange, options }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    // const [options, setOptions] = useState([]);

    // useEffect(() => {
    //   async function fetchOptions() {
    //     try {
    //       const response = await fetch(`YOUR_API_ENDPOINT_FOR_${title.toUpperCase()}`);
    //       const data = await response.json();
    //       setOptions(data);
    //     } catch (error) {
    //       console.error('Error fetching options:', error);
    //     }
    //   }
  
    //   if (showDropdown) {
    //     fetchOptions();
    //   }
    // }, [showDropdown, title]);

    const handleSelect = (newValue) => {
        setSelectedValue(newValue);
        onChange && onChange(newValue);
        setShowDropdown(false);
      };
  
    return (
      <div
        className="md:flex cursor-pointer hidden relative"
        onClick={() => {setShowDropdown(!showDropdown);}}
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
            options={options}
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

      const [AllFilter, setAllFilter] = useState(false)
    
      const handleFilterChange = (title, value) => {
        setSelectedValues((prevState) => ({
          ...prevState,
          [title]: value,
        }));
      };

      
  return (
    <div className="flex my-7 justify-between drop-shadow-md w-[8/12] bg-[#FFFFFF] p-[30px] md:p-[16px]">
     <FilterItem 
         title="Brand" 
         value={selectedValues['Brand']} 
         onChange={(value) => handleFilterChange('Brand', value)} 
         options={['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes']} // take this out when api is ready
     />
      <FilterItem 
         title="Year of man." 
         value={selectedValues['Year of man.']} 
         onChange={(value) => handleFilterChange('Year of man.', value)}
         options={['2020 - 2024', '2015 - 2019', '2010 - 2014', '2005 - 2009']}  
       />
      <FilterItem 
         title="Year of reg." 
         value={selectedValues['Year of reg.']} 
         onChange={(value) => handleFilterChange('Year of reg.', value)}
         options={['2020 - 2024', '2015 - 2019', '2010 - 2014', '2005 - 2009']} 
       />
      <FilterItem 
         title="Fuel consumption" 
         value={selectedValues['Fuel consumption']} 
         onChange={(value) => handleFilterChange('Fuel consumption', value)}
         options={['1.5L', '2.0L',]} 
       />
      <FilterItem 
         title="Transmission type" 
         value={selectedValues['Transmission type']} 
         onChange={(value) => handleFilterChange('Transmission type', value)}
         options={['Manual','Automatic']}  
      />

      <div className="md:hidden flex" onClick={() => {setAllFilter(!AllFilter);}}>
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
