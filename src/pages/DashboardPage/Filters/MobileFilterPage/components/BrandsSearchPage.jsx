import { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { Input } from "../../../../.././Components/ui/input";
import { motion } from "framer-motion";
import { slideIn } from "../../../../.././utils/animation";
import { PropTypes } from 'prop-types';

const BrandsSearchPage = ({ onBackClick, onValueSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for cars
  const cars = [
    { name: "Audi", brand: "A" },
    { name: "BMW", brand: "B" },
    { name: "Chevrolet", brand: "C" },
    { name: "Dodge", brand: "D" },
    { name: "Ford", brand: "F" },
    { name: "Honda", brand: "H" },
    { name: "Toyota", brand: "T" },
    { name: "Audi", brand: "A" },
    { name: "BMW", brand: "B" },
    { name: "Chevrolet", brand: "C" },
    { name: "Dodge", brand: "D" },
    { name: "Ford", brand: "F" },
    { name: "Honda", brand: "H" },
    { name: "Toyota", brand: "T" },
  ];

    // Debounce function to create intervals in api call
    const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    };
  
    // Function to filter cars based on search query
    const filterCars = debounce((searchQuery) => {
      console.log("Perform API call with filtered data:", searchQuery);
    }, 2000); 
  

    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchQuery(value);
      filterCars(value);
    };
  

  // Function to group cars by their first alphabet
  const groupCarsByAlphabet = () => {
    const groupedCars = {};
    cars.forEach((car) => {
      const firstAlphabet = car.brand.charAt(0).toUpperCase();
      if (!groupedCars[firstAlphabet]) {
        groupedCars[firstAlphabet] = [];
      }
      groupedCars[firstAlphabet].push(car);
    });
    return groupedCars;
  };

  // Function to filter cars based on search query
  // const filteredCars = cars.filter(car =>
  //   car.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // Render categorized listing of cars
  const renderCategorizedCars = () => {
    const groupedCars = groupCarsByAlphabet();
    return (
      <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 250px)" }}>
        {Object.entries(groupedCars).map(([alphabet, cars]) => (
          <div className='py-5 px-3' key={alphabet}>
            <h2 className="text-lg font-semibold">{alphabet}</h2>
            <div className="grid grid-cols-2 gap-4">
              {cars.map((car, index) => (
                <div key={index} className="pl-5 pt-1">
                  <ul>
                    <li 
                     className='list-disc'
                     onClick={() => onValueSelect(car.name)}
                    >
                      {car.name}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

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
      <div className='flex items-center justify-center mt-7 mb-10'>
        <Input 
           type="text" 
           placeholder="Search item" 
           value={searchQuery}
           onChange={handleInputChange}
        />
      </div>

      {/* Render categorized listing of cars */}
      {renderCategorizedCars()}
    </motion.div>
  );
};

export default BrandsSearchPage;

BrandsSearchPage.propTypes = {
  onBackClick: PropTypes.func.isRequired,
  onValueSelect: PropTypes.func.isRequired,
}
