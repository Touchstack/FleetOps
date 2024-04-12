import PropTypes from "prop-types";

const PrimaryButton = ({ buttonText, onClick, ClassName }) => {
  return (
    <button
      type="button"
      className={`text-white text-center bg-fleetBlue font-Regular text-lg px-10 pt-3 pb-2 mr-4 rounded-[7px] hover:bg-fleetLightBlue ${ClassName}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

PrimaryButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  ClassName: PropTypes.string
};

PrimaryButton.defaultProps = {
  buttonText: "",
  onClick: () => {},
  ClassName: ""
};

export default PrimaryButton;
