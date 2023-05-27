import React from "react";

import clsx from "clsx";
import { ReactComponent as WaitSpin } from "../../../shared/icons/wait-spin.svg";

import "./Button.scss";

export interface IButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  useLoader?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  inverse?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  disabled,
  useLoader,
  inverse,
  children,
  type = "button",
}) => {
  const [isLoading, setLoading] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    setDisabled(isLoading || disabled ? true : false);
  }, [isLoading, disabled]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (useLoader) {
      setLoading(true);
      await onClick(e);
      setLoading(false);
      return;
    }

    onClick(e);
  };

  return (
    <button
      className={clsx(className === undefined ? "" : className, "button", {
        "button-loading": isLoading,
        "button-inverse": inverse,
      })}
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
    >
      {isLoading ? <WaitSpin className="loading-icon" /> : children}
    </button>
  );
};

export default Button;
