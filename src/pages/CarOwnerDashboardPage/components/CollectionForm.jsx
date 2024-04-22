import PropTypes from "prop-types";

const data = [
  {
    id: 1,
    Description: "Registration (number plate)",
    Details: "GT4555-18",
    Checked: false
  },
  {
    id: 2,
    Description: "Chasis No",
    Details: "MMIDS3436633",
    Checked: false
  },
  {
    id: 3,
    Description: "Insurance",
    Details: "",
    Checked: false
  },
  {
    id: 4,
    Description: "Roadworthy certificate",
    Details: "Expiry date: 29-02-2024",
    Checked: false
  },
  {
    id: 5,
    Description: "Starting Milleage",
    Details: "81010",
    Checked: false
  },
  {
    id: 6,
    Description: "Starting Milleage",
    Details: "",
    Checked: false
  },
];

export const FormDataRow = ({ description, details }) => {
  return (
    <div className="flex md:border-b md:border-t  md:border-[#AAAAAA]  p-3">
      <div className="md:px-4 text-[14px]">{description}</div>
      <div className="md:px-4 md:py-1 py-[1.5rem]">{details}</div>
    </div>
  );
};

const CollectionForm = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col my-20 md:mx-20">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-[#0A0D14] font-bold text-3xl md:text-5xl">
          Vehicle Collection Form
        </h1>
        <p className="text-[#545151] md:text-lg md:w-full  text-center text-base font-light">
          Please fill in the vehicle checklist
        </p>
      </div>

      {/* Grid here */}
      <div className="grid grid-cols-3 md:border md:border-gray-400">
        {/* Description column */}
        <div className="md:border-r  md:border-gray-400">
          <h2 className="font-semibold p-4">Description</h2>
          {data.map((item) => (
            <FormDataRow
              key={item.id}
              description={item.Description || '-'}
            />
          ))}
        </div>

        {/* Details column */}
        <div className="md:border-r  md:border-gray-400">
          <h2 className="font-semibold p-4">Details</h2>
          {data.map((item) => (
            <FormDataRow
            key={item.id}
            description={item.Details || "-"}
          />
          ))}
        </div>

        {/* Check column */}
        <div className="text-center md:border-b md:border-gray-400">
          <h2 className="font-semibold p-4">Check</h2>
          {data.map((item) => (
           <div key={item.id} className="flex items-center justify-center md:border-b md:border-t  md:border-[#AAAAAA] md:p-[0.65rem] ">
              <div className="md:px-4 md:py-0 py-[1.3rem]">
                 <input
                   type="checkbox"
                  />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Buttons */}
      <div className="flex justify-end mt-20 p-4 gap-2">
        <div 
          onClick={onBack}
          className="px-[40px] border-[1px] border-[#23A6BF] py-[16px] cursor-pointer rounded-[10px] mb-10">
            <p className="text-[#23A6BF]">
              Restart
            </p>
        </div>

        <div 
           onClick={onNext}
          className="px-[40px] py-[16px] hover:cursor-pointer  rounded-[10px] bg-[#23A6BF] border-[1px] border-[#FFFFFF] mb-10">
            <p className="text-[#FFFFFF]">
              Continue
            </p>
        </div>
   </div>
    </div>
  );
};

export default CollectionForm;

CollectionForm.propTypes = {
    onNext: PropTypes.func,
    onBack: PropTypes.func,
  };

FormDataRow.propTypes = {
    description: PropTypes.string,
    details: PropTypes.string,
  };


