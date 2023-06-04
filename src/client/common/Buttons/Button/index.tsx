import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { ReactComponent as WaitSpin } from "../../../shared/icons/wait-spin.svg";
import { ConditionalWrapper } from "client/common";

import "./Button.scss";

export interface IButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  useLoader?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  inverse?: boolean;
  link?: string;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  disabled,
  useLoader,
  inverse,
  children,
  link,
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
    <ConditionalWrapper if={link !== undefined} with={(ch) => <Link to={link!}>{ch}</Link>}>
      <button
        className={clsx(className === undefined ? "" : className, "button", {
          "button-loading": isLoading,
          "button-inverse": inverse,
          "button-disabled": disabled,
        })}
        disabled={isDisabled}
        type={type}
        onClick={handleClick}
      >
        {isLoading ? <WaitSpin className="loading-icon" /> : children}
      </button>
    </ConditionalWrapper>
  );
};

export default Button;
