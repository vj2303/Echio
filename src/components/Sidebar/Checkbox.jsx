import React, { useState } from 'react';

const Checkbox = ({ handleChangeCheckBox, name, label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(!checked);
    handleChangeCheckBox(!checked, e)
  };

  return (
    <label className=" flex items-center gap-2 text-[length:var(--base-text)]">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="hidden"
        name={name}
      />
      <div
        className={`w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center ${checked ? 'bg-[color:var(--sea-green)] border-[color:var(--sea-green)]' : ''
          }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
        {label}
    </label>
  );
};

export default Checkbox;
