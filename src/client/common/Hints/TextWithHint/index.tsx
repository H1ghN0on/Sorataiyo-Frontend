import React from "react";
import clsx from "clsx";

import "./TextWithHint.scss";

interface ITextWithHintProps {
  children: React.ReactNode;
  hint: string;
}

const TextWithHint: React.FC<ITextWithHintProps> = ({ children, hint }) => {
  const [isHintActive, setHintActive] = React.useState(false);

  const handleMouseEnter = () => {
    setHintActive(true);
  };

  const handleMouseLeave = () => {
    setHintActive(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="text-with-hint"
    >
      {children}
      <div
        className={clsx("text-hint", {
          "text-hint-hidden": !isHintActive,
        })}
      >
        {hint}
      </div>
    </span>
  );
};

export default TextWithHint;
