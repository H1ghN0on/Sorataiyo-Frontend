import React from "react";

import clsx from "clsx";
import { ReactComponent as WaitSpin } from "../../../shared/icons/wait-spin.svg";

import "./Button.scss";

interface IButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useLoader?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  inverse?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  title,
  onClick,
  className,
  disabled,
  useLoader,
  inverse,
  type = "button",
}) => {
  const [isLoading, setLoading] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    setDisabled(isLoading || disabled ? true : false);
  }, [isLoading, disabled]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (useLoader) {
      console.log("hi");
      setLoading(true);
      await onClick(e);
      setLoading(false);
      console.log("hi2");
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
      {isLoading ? <WaitSpin className="loading-icon" /> : title}
    </button>
  );
};

export default Button;
