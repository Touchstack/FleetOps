import PropTypes from "prop-types";

export default function Preview({ onClick, fileName }) {
  return (
    <div className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-1 focus:border focus:border-fleetLightBlue block w-full p-3 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              fill="currentColor"
              d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"
            />
          </svg>
          <span className="ml-2">{fileName}</span>
        </div>
        <svg
          className="w-5 h-5 text-gray-800 dark:text-white hover:bg-slate-300 hover:cursor-pointer hover:p-1 hover:w-5 hover:h-5 duration-75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          onClick={onClick}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </div>
    </div>
  );
}

Preview.propTypes = {
  fileName: PropTypes.string,
  onClick: PropTypes.func,
};

Preview.defaultProps = {
  fileName: "",
  onClick: () => {},
};
