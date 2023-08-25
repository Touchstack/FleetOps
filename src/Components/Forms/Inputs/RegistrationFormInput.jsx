import PropTypes from "prop-types";

const FormInputItem = ({ label, placeholder, type, id }) => {
  return (
    <div className="mb-8 font-Regular">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-1 focus:border focus:border-fleetLightBlue block w-full p-3"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

FormInputItem.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

FormInputItem.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  id: "",
};

export default FormInputItem;
