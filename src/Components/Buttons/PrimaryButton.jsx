import PropTypes from "prop-types";

const PrimaryButton = ({ buttonText, onClick }) => {
  return (
    <button
      type="button"
      className="text-white text-center bg-fleetBlue font-Regular text-lg px-10 pt-3 pb-2 mr-4 rounded-[7px] hover:bg-fleetLightBlue"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

PrimaryButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  buttonText: "",
  onClick: () => {},
};

export default PrimaryButton;
