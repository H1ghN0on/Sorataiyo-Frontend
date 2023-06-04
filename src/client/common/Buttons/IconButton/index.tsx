import React from "react";

import { Button } from "client/common";
import { IButtonProps } from "../Button";

import "./IconButton.scss";

interface IIconButtonProps extends IButtonProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const IconButton: React.FC<IIconButtonProps> = (props) => {
  const [Icon, setIcon] = React.useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>(
    props.icon
  );

  React.useEffect(() => {
    setIcon(props.icon);
  }, [props.icon]);

  return (
    <Button className={"icon-button " + (props.className ? props.className : "")} {...props}>
      <div className="icon-button-container">
        <Icon className="icon" />
        <span>{props.children}</span>
      </div>
    </Button>
  );
};

export default IconButton;
