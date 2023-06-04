import React, { FC } from "react";

interface WrapProps {
  if: boolean;
  with: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}

const ConditionalWrapper: FC<WrapProps> = ({ if: condition, with: wrapper, children }) => {
  return condition ? wrapper(children) : <>{children}</>;
};

export default ConditionalWrapper;
