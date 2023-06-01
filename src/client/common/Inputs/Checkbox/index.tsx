import React from "react";

import "./Checkbox.scss";

interface ICheckboxProps {
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
  label: string;
  value: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ value, checked, onChange, label }) => {
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value, e.target.checked);
  };

  return (
    <label className="checkbox-container">
      <input
        className="checkbox-input"
        type="checkbox"
        name="name"
        checked={checked}
        onChange={handleCheck}
      />
      <span className="checkbox-span" />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;
