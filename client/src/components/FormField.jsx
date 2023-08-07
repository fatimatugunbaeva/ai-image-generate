const FormField = (
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSupriseMe,
  handleSurpriseMe
) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="">
          {labelName}
        </label>
        {isSupriseMe && (
          <button type="button" onClick={handleSurpriseMe}>
            Supprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormField;
