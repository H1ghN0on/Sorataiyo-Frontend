import React from "react";

import Button from "../Button";

import { IButtonProps } from "../Button";

import "./IconButton.scss";

interface IIconButtonProps extends IButtonProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const IconButton: React.FC<IIconButtonProps> = ({
  icon,
  onClick,
  className,
  disabled,
  useLoader,
  inverse,
  children,
  type = "button",
}) => {
  const [Icon, setIcon] =
    React.useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>(
      icon
    );

  React.useEffect(() => {
    setIcon(icon);
  }, [icon]);

  return (
    <Button
      onClick={onClick}
      className={"icon-button " + (className ? className : "")}
      disabled={disabled}
      useLoader={useLoader}
      inverse={inverse}
      type={type}
    >
      <div className="icon-button-container">
        <Icon className="icon" />
        <span>{children}</span>
      </div>
    </Button>
  );
};

export default IconButton;
