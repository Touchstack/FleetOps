import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Button } from '../../../../Components/ui/button';
import { Separator } from '../../../../Components/ui/separator';
import AllFilterPage from './AllFilterPage';
import { apiGetCarOwnerVehiclesBySearch } from '@/services/CarOwnerService';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MobileFilterBar = ({ updateAllData, updateAssigned, updateUnassigned  }) => {
  const id = localStorage.getItem("car-owner-token")

    const [selectedValues, setSelectedValues] = useState({
      'Brand': '',
      'Year_of_man.': '',
      'Year_of_reg.': '',
      'Fuel_consumption': '',
      'Transmission type': '',
    });

    const handleSelectedValuesChange = (newSelectedValues) => {
      setSelectedValues(newSelectedValues);
    };

      const [AllFilter, setAllFilter] = useState(false) 
      const length = Object.values(selectedValues).filter(value => value !== '').length

     // console.log("Selected data on bar =>>", selectedValues)

     const getSearchData = async () => {
      try {
        const res = await apiGetCarOwnerVehiclesBySearch(id, selectedValues)
         console.log("search-data =>>", res);
          if(res.status === 200){
            updateAllData(res.data?.allVehicles?.data); 
            updateAssigned(res.data?.assigned?.data);
            updateUnassigned(res.data?.unAssigned)
            toast.success("fetching data successful");
          }
      } catch (error) {
        toast.error("Error occurred while fetching data");
        console.log(error)
      }
    }
      
  return (
   <>
    <div className="flex my-7 items-center justify-center gap-5 drop-shadow-md w-[8/12] bg-[#FFFFFF] p-[20px]">
      
    <div className={`md:hidden flex p-[12px] ${length > 0 ? `bg-[#95e2f1]` : `bg-[#FFFFFF]`} `} onClick={() => { setAllFilter(!AllFilter); }}>
          <div className="flex items-center gap-2 justify-center">
            <h1 className="text-[14px] text-[#3E3C3C]">All filters</h1>
            <div className='rounded-full w-[26px] flex items-center  justify-center bg-[#23A6BF]'>
              {/* selected values length */}
              {length > 0 &&  
                <span className='text-white '>{length}</span> 
              } 
            </div>
          </div>
          <div className="flex items-center gap-1 pl-3">
            <RiArrowDropDownLine size={25} />
            <Separator orientation="vertical" />
          </div>
      </div>

      <Button onClick={() => getSearchData() } className="bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-[108px] md:w-[140px] rounded-[10px] text-white">Search</Button>
    </div>

    { AllFilter &&  
      <AllFilterPage 
        onCloseClick={() => setAllFilter(!AllFilter)}
        selectedValues={selectedValues}
        onSelectedValuesChange={handleSelectedValuesChange}
        onClickSearch={() =>  getSearchData()}
      /> 
    }
  </>
  );
};

export default MobileFilterBar;

MobileFilterBar.propTypes = {
  updateAllData: PropTypes.func.isRequired,
  updateAssigned: PropTypes.func.isRequired,
  updateUnassigned : PropTypes.func.isRequired,
}