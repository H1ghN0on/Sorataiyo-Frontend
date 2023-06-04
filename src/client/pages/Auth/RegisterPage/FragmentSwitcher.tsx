import React from "react";
import { RegisterContext } from "scripts/contexts/RegisterContext";

import Introduction from "./Introduction";
import EmailConfirmation from "./EmailConfirmation";
import PasswordConfirmation from "./PasswordConfirmation";
import Finish from "./Finish";

enum FragmentType {
  Introduction,
  Email,
  Password,
  Finish,
}

const Fragment: React.FC<{ fragment: number }> = ({ fragment }) => {
  switch (fragment) {
    case FragmentType.Introduction:
      return <Introduction />;
    case FragmentType.Email:
      return <EmailConfirmation />;
    case FragmentType.Password:
      return <PasswordConfirmation />;
    case FragmentType.Finish:
      return <Finish />;
    default:
      return <Introduction />;
  }
};

const FragmentSwitcher = () => {
  const fragment = React.useContext(RegisterContext);

  return <Fragment fragment={fragment.currentFragment} />;
};

export default FragmentSwitcher;
