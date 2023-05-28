import React from "react";

import Input from "../Input";
import { IInputProps } from "../Input";

import "./IconInput.scss";
import clsx from "clsx";

interface IIconInputProps extends IInputProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const IconInput: React.FC<IIconInputProps> = (props) => {
  const [Icon, setIcon] = React.useState<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >(props.icon);

  React.useEffect(() => {
    setIcon(props.icon);
  }, [props.icon]);

  return (
    <div className={clsx("icon-input-container", props.className)}>
      <Icon className="icon-input" />
      <Input {...props} />
    </div>
  );
};

export default IconInput;
