import { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoMdClose } from "react-icons/io";
import { Button } from '../../.././Components/ui/button';
import { Separator } from '../../.././Components/ui/separator';
import { apiGetAvailableVehiclesBySearch, apiGetAvailableVehicles } from '@/services/VehiclesService';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  
  
  

  const FilterItem = ({ title, value, onChange, optionsKey, staticOptions }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [options, setOptions] = useState(staticOptions || []);

    useEffect(() => {
      if (optionsKey !== 'brands') return; // Only fetch if optionsKey is 'brands'
  
      async function fetchOptions() {
        try {
          const response = await fetch(`https://engines.fleetopsgh.com/api/filter`);
          const data = await response.json();
          console.log(data);
  
          const transformedOptions = data.brands.map(item => item.VMK);
          setOptions(transformedOptions.filter(option => option !== null));
        } catch (error) {
          console.error('Error fetching options:', error);
        }
      }
  
      if (showDropdown) {
        fetchOptions();
      }
    }, [showDropdown, optionsKey]);
  

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
            //title={title}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onSelect={(newValue) => handleSelect(newValue)}
          />
        )}
      </div>
    );
  };
  

const FilterBar = ({ updateAllData, updateRentals,  updateRideHailing,  updateHirePurchase }) => {

  const id = localStorage.getItem('driver_id')

    const [selectedValues, setSelectedValues] = useState({
        'Brand': '',
        'Year_of_man': '',
        'Year_of_reg': '',
        'Fuel_consumption': '',
        'Transmission_type': '',
      });

      const [AllFilter, setAllFilter] = useState(false)
    
      const handleFilterChange = (title, value) => {
        setSelectedValues((prevState) => ({
          ...prevState,
          [title]: value,
        }));
      };

      const getSearchData = async () => {
        try {
          const res = await apiGetAvailableVehiclesBySearch(id, selectedValues)
            if(res.status === 200){
              updateAllData(res.data?.all?.data);
              updateRentals(res.data?.rentals?.data)
              updateRideHailing(res.data?.rideHailing?.data)
              updateHirePurchase(res.data?.hirePurchase?.data)
              toast.success("Fetched Search Result");
            } else {
              toast.error(res?.response?.data?.message || "Error occurred while fetching data");
            }
        } catch (error) {
          toast.error(error?.response?.data?.message || "Error occurred while fetching data");
          console.log(error)
        }
      }

      const clearSelectedValues = async () => {
        try {
          setSelectedValues({
            'Brand': '',
            'Year_of_man': '',
            'Year_of_reg': '',
            'Fuel_consumption': '',
            'Transmission_type': '',
        });

        await apiGetAvailableVehicles(id).then((res) => {
          if(res.status === 200){
            updateAllData(res.data?.all?.data);
            updateRentals(res.data?.rentals?.data)
            updateRideHailing(res.data?.rideHailing?.data)
            updateHirePurchase(res.data?.hirePurchase?.data)
            toast.success("Results fetched succesfully");
          } else {
            toast.error(res?.response?.data?.message || "Error occurred while fetching data");
          }
        })
        } catch (error) {
          toast.error(error?.response?.data?.message || "Error occurred while fetching data");
          console.log(error)
        }
    };

     const hasSelectedValues = Object.values(selectedValues).some(value => value !== '');
      
  return (

    <div className="flex my-7 items-center justify-between drop-shadow-md w-[8/12] bg-[#FFFFFF] p-[30px] md:p-[16px]">
     <FilterItem 
         title="Brand" 
         value={selectedValues['Brand']} 
         onChange={(value) => handleFilterChange('Brand', value)} 
         //options={['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes']} // take this out when api is ready
         optionsKey="brands"
     />
      <FilterItem 
         title="Year of man." 
         value={selectedValues['Year_of_man']} 
         onChange={(value) => handleFilterChange('Year_of_man', value)}
         staticOptions={['2020-2024', '2015-2019', '2010-2014', '2005-2009']} 
       />
      <FilterItem 
         title="Year of reg." 
         value={selectedValues['Year_of_reg']} 
         onChange={(value) => handleFilterChange('Year_of_reg', value)}
         staticOptions={['2020 - 2024', '2015 - 2019', '2010 - 2014', '2005 - 2009']} 
       />
      <FilterItem 
         title="Fuel consumption" 
         value={selectedValues['Fuel_consumption']} 
         onChange={(value) => handleFilterChange('Fuel_consumption', value)}
         staticOptions={['1.5', '2.0',]} 
       />
      <FilterItem 
         title="Transmission type" 
         value={selectedValues['Transmission_type']} 
         onChange={(value) => handleFilterChange('Transmission_type', value)}
         staticOptions={['Manual','Automatic']}  
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
      
     
      {hasSelectedValues && (
                <div onClick={clearSelectedValues} className='hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110'>
                    <IoMdClose size={30} />
                </div>
            )}

      <Button onClick={() => getSearchData() } className="bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-[108px] md:w-[140px] rounded-[10px] text-white">Search</Button>
    </div>

  );
};

export default FilterBar;

FilterBar.propTypes = {
  updateAllData: PropTypes.func.isRequired,
  updateRentals: PropTypes.func.isRequired,
  updateRideHailing: PropTypes.func.isRequired,
  updateHirePurchase: PropTypes.func.isRequired,
}


FilterItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  optionsKey: PropTypes.string.isRequired,
}

FilterDropdown.propTypes = {
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}