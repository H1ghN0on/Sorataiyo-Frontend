import React from "react";
import clsx from "clsx";

import "./Input.scss";

export interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  name: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  withLengthHint?: boolean;
  type?: "text" | "password";
  placeholder?: string;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  name,
  className,
  label,
  disabled,
  minLength,
  maxLength,
  withLengthHint,
  placeholder,
  type = "text",
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={clsx("input-container", className)}>
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        name={name}
        placeholder={label || placeholder}
        className={clsx("input-base", {
          "input-base-with-hint": Boolean(
            withLengthHint && maxLength && value.length > maxLength - 5
          ),
        })}
        type={type}
        onChange={handleInputChange}
        value={value}
        disabled={disabled ? true : false}
        minLength={minLength}
        maxLength={maxLength}
      ></input>
      {withLengthHint && (
        <label
          className={clsx("input-label-hint", {
            hidden: !Boolean(withLengthHint && maxLength && value.length > maxLength - 5),
          })}
          htmlFor={name}
        >
          {value.length + "/" + maxLength}
        </label>
      )}
    </div>
  );
};

export default Input;
