import PropTypes from 'prop-types';
import { MdOutlineDelete } from "react-icons/md";

const Table = ({ headers, data, onDelete, headerKeyMap }) => {
  const renderCell = (item, key) => {
    if (key === 'Actions' && onDelete) {
      return (
        <button
          onClick={() => onDelete(item.id)}
          className="bg-[#FFFFFF] transition duration-700 ease-in-out hover:scale-110 flex items-center border-[0.5px] border-[#545151] justify-center text-[#545151] px-3 py-1 rounded"
        >
         <MdOutlineDelete />
          <p className={'hidden md:block'}>Delete</p>
        </button>
      );
    }
    return item[headerKeyMap[key]];
  };

  return (
   <div className={''}>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header, index) => (
            <th key={index} className="py-2 px-4 text-left text-[12px] md:text-[17px] border-b border-l text-[#939393] border-gray-300">
              {header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} className="bg-[#F7F9F8] border-l border-b border-gray-300">
            {headers.map((key, colIndex) => (
              <td key={colIndex} className="py-2 border-l text-[12px] md:text-[16px] text-[#2A2A2A] border-gray-300 px-4">
                {renderCell(item, key)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func,
  headerKeyMap: PropTypes.object.isRequired,
};

export default Table;
