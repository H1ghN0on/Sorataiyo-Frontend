import React from "react";
import clsx from "clsx";

import { Checkbox, Radio } from "client/common";

import "./CheckboxList.scss";

interface ICheckboxListValueProps {
  value: string;
  label: string;
  checked: boolean;
}

interface ICheckboxListProps {
  values: ICheckboxListValueProps[];
  onChange: (value: string, checked: boolean) => void;
  column?: boolean;
  className?: string;
  radio?: boolean;
}

const CheckboxList: React.FC<ICheckboxListProps> = ({
  values,
  onChange,
  column,
  className,
  radio,
}) => {
  return (
    <div
      className={clsx("checkbox-list", className, {
        "checkbox-list-column": column,
      })}
    >
      {values &&
        values.map((item, index) =>
          radio ? (
            <Radio
              key={index}
              label={item.label}
              checked={item.checked}
              value={item.value}
              onChange={onChange}
            />
          ) : (
            <Checkbox
              key={index}
              label={item.label}
              checked={item.checked}
              value={item.value}
              onChange={onChange}
            />
          )
        )}
    </div>
  );
};

export default CheckboxList;
