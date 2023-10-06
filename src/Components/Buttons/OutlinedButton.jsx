import PropTypes from "prop-types";

const OutlinedButton = ({ cssprops, buttonText, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${cssprops} text-fleetBlue focus:ring-4 focus:outline-none focus:ring-fleetBlue font-Regular rounded-[7px] text-lg px-10 pt-3 pb-2 text-center mr-3 md:mr-0 border border-fleetBlue hover:bg-fleetLightBlue hover:text-white  dark:focus:ring-fleetBlue`}
    >
      {buttonText}
    </button>
  );
};

OutlinedButton.propTypes = {
  cssprops: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

OutlinedButton.defaultProps = {
  cssprops: "",
  buttonText: "",
  onClick: () => {},
};

export default OutlinedButton;
