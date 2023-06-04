import React from "react";

import { RegisterContextProvider } from "scripts/contexts/RegisterContext";
import FragmentSwitcher from "./FragmentSwitcher";

const RegisterPage = () => {
  return (
    <RegisterContextProvider>
      <FragmentSwitcher />
    </RegisterContextProvider>
  );
};

export default RegisterPage;
