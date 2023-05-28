import React from "react";

import Input from "../Input";
import { IInputProps } from "../Input";

import "./IconInput.scss";

interface IIconInputProps extends IInputProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const IconInput: React.FC<IIconInputProps> = ({
  value,
  onChange,
  name,
  className,
  label,
  disabled,
  minLength,
  maxLength,
  withLengthHint,
  icon,
}) => {
  const [Icon, setIcon] =
    React.useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>(
      icon
    );

  React.useEffect(() => {
    setIcon(icon);
  }, [icon]);

  return (
    <div className="icon-input-container">
      <Icon className="icon-input" />
      <Input
        value={value}
        onChange={onChange}
        name={name}
        className={className}
        label={label}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        withLengthHint={withLengthHint}
      />
    </div>
  );
};

export default IconInput;
