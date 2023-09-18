import PropTypes from "prop-types";

const FormInputItem = ({ label, placeholder, type, id, value, onChange }) => {
  return (
    <div className="mb-5 font-Regular">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        value={value}
        type={type}
        id={id}
        className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-1 focus:border focus:border-fleetLightBlue block w-full p-3"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
};

FormInputItem.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

FormInputItem.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  id: "",
};

export default FormInputItem;
