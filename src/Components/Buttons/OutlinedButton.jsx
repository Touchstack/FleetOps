import PropTypes from "prop-types";

const OutlinedButton = ({ cssprops, buttonText }) => {
  return (
    <button
      type="button"
      className={`${cssprops} text-fleetBlue focus:ring-4 focus:outline-none focus:ring-fleetBlue font-Regular rounded-[7px] text-lg px-10 pt-3 pb-2 text-center mr-3 md:mr-0 border border-fleetBlue hover:bg-fleetLightBlue hover:text-white  dark:focus:ring-fleetBlue`}
    >
      {buttonText}
    </button>
  );
};

OutlinedButton.propTypes = {
  cssprops: PropTypes.string,
  buttonText: PropTypes.string,
};

OutlinedButton.defaultProps = {
  cssprops: "",
  buttonText: "",
};

export default OutlinedButton;
