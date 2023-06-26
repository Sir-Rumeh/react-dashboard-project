import React from "react";

const FormInput = (props) => {
	const { label, name, placeholder, containerStyle } = props;

	return (
  <div className={`formInput flex flex-col pt-4 ${containerStyle}`}>
    {label && (
    <label
					htmlFor={name}
					className="text-xs leading-[14px] tracking-wider font-[600] text-primary-900 mb-3"
    >
      {label}
    </label>
			)}
    <input
				id={name}
				name={name}
				className="w-100 bg-form-input mb-2 rounded-md border focus:outline-primary-400 text-border-color  placeholder:text-border-color px-5 py-3 border-border-color"
				placeholder={placeholder}
    />
  </div>
	);
};

export default FormInput;
