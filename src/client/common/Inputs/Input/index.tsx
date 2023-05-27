import clsx from "clsx";
import React from "react";

import "./Input.scss";

interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
  label?: string;
  disabled?: string;
  minLength?: number;
  maxLength?: number;
  withLengthHint?: boolean;
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
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="input-container">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        name={name}
        placeholder={label}
        className={clsx("input-base", {
          className: className,
          "input-base-with-hint": Boolean(
            withLengthHint && maxLength && value.length > maxLength - 5
          ),
        })}
        type="string"
        onChange={onChange}
        value={value}
        disabled={disabled ? true : false}
        minLength={minLength}
        maxLength={maxLength}
      ></input>
      {withLengthHint && (
        <label
          className={clsx("input-label-hint", {
            hidden: !Boolean(
              withLengthHint && maxLength && value.length > maxLength - 5
            ),
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
