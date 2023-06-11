import React from "react";
import { useTranslation } from "react-i18next";

import AuthLayout from "../AuthLayout";
import { Button, Input } from "client/common";

import "./Introduction.scss";
import { RegisterContext } from "scripts/contexts/RegisterContext";

type LoginField = "firstName" | "lastName";

const IntroductionRegisterPage = () => {
  const { t } = useTranslation("auth");

  const contextData = React.useContext(RegisterContext);

  const handleFormChange = (key: LoginField, value: string) => {
    contextData.setContext({
      ...contextData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    contextData.setContext({
      ...contextData,
      currentFragment: contextData.currentFragment + 1,
    });
  };

  return (
    <AuthLayout title={t("register.introduction")} isRegister>
      <form className="introduction-form">
        <div className="introduction-inputs">
          <Input
            className="introduction-firstname-input"
            name="firstname"
            label={t("firstname")!}
            value={contextData.firstName}
            onChange={(value) => handleFormChange("firstName", value)}
          />
          <Input
            className="introduction-lastname-input"
            name="lastname"
            label={t("lastname")!}
            value={contextData.lastName}
            onChange={(value) => handleFormChange("lastName", value)}
          />
        </div>
        <Button
          className="introduction-submit-btn"
          disabled={!contextData.lastName || !contextData.firstName}
          onClick={handleSubmit}
          inverse
        >
          {t("register.next")}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default IntroductionRegisterPage;
