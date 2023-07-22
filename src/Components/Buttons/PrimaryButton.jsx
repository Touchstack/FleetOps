import PropTypes from "prop-types";

const PrimaryButton = ({ buttonText }) => {
  return (
    <button
      type="button"
      className="text-white text-center bg-fleetBlue font-Regular text-lg px-10 pt-3 pb-2 mr-4 rounded-[7px] hover:bg-fleetLightBlue"
    >
      {buttonText}
    </button>
  );
};

PrimaryButton.propTypes = {
  buttonText: PropTypes.string,
};

PrimaryButton.defaultProps = {
  buttonText: "",
};

export default PrimaryButton;
