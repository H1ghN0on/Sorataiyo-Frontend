import React from "react";

import "./Radio.scss";

interface IRadioProps {
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
  label: string;
  value: string;
}

const Radio: React.FC<IRadioProps> = ({ value, checked, onChange, label }) => {
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value, e.target.checked);
  };

  return (
    <label className="radio-container">
      <input
        className="radio-input"
        type="radio"
        name="name"
        checked={checked}
        onChange={handleCheck}
      />
      <span className="radio-span" />
      <span className="radio-label">{label}</span>
    </label>
  );
};

export default Radio;
