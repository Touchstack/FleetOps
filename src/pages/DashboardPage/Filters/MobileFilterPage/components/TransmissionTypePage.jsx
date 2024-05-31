import { SlArrowLeft } from "react-icons/sl";
import { motion } from "framer-motion";
import { slideIn } from "../../../../.././utils/animation";
import { PropTypes } from 'prop-types';

const TransmissonTypePage = ({ onBackClick,  onValueSelect }) => {
   const data = [
      {type: "Manual"},
      {type: "Automatic"},
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
       {data.map((transmisson, index) => (
        <p key={index} className='p-6 text-[17px]'
         onClick={() =>  onValueSelect(transmisson.type)}
        >
           {transmisson.type}
        </p>
       ))}
    </div>

  </motion.div>
  )
}

export default TransmissonTypePage

TransmissonTypePage.propTypes = {
  onBackClick: PropTypes.func.isRequired,
  onValueSelect: PropTypes.func.isRequired,
}