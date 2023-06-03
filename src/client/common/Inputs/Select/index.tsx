import React from "react";
import clsx from "clsx";

import Outsider from "scripts/hooks/useOutsider";

import { ReactComponent as ArrowDown } from "../../../shared/icons/arrow-down.svg";

import "./Select.scss";

export interface IOptionProps {
  label: string;
  value: string;
}

interface ISelectProps {
  options: IOptionProps[];
  onChange: (option: IOptionProps) => void;
  active: IOptionProps;
  className?: string;
  label?: string;
  name?: string;
}

const Select: React.FC<ISelectProps> = ({ options, className, label, name, onChange, active }) => {
  const [isSelectActive, setSelectActive] = React.useState<boolean>(false);

  const selectRef = React.useRef(null);

  const handleSelectClick = (e: React.MouseEvent) => {
    setSelectActive(!isSelectActive);
  };

  const handleOptionClick = (option: IOptionProps) => {
    onChange(option);
    setSelectActive(false);
  };

  return (
    <Outsider
      onOutsideClick={() => {
        setSelectActive(false);
      }}
    >
      <div className={clsx("select-container", className)}>
        {label && (
          <label className="select-label" htmlFor={name}>
            {label}
          </label>
        )}
        <div ref={selectRef} className="select-base">
          <div onClick={handleSelectClick} className="select-active-container">
            <div className="select-active-text">{active.label}</div>
            <ArrowDown
              className={clsx("select-active-icon", {
                "select-active-icon-active": isSelectActive,
              })}
            />
          </div>
          <div
            className={clsx("options-list", {
              "options-list-hidden": !isSelectActive,
            })}
          >
            {options.length !== 0 &&
              //options will never be dynamic, so key can be index
              options.map((option, index) => (
                <div
                  key={index}
                  onClick={handleOptionClick.bind(this, option)}
                  className={clsx("option-base", {
                    "option-base-active": option === active,
                  })}
                >
                  {option.label}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Outsider>
  );
};

export default Select;
