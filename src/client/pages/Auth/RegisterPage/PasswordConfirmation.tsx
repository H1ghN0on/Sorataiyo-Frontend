import React from "react";
import { useTranslation } from "react-i18next";

import AuthLayout from "../AuthLayout";
import { Button, IconInput, TextWithHint } from "client/common";

import { ReactComponent as PasswordIcon } from "client/shared/icons/lock.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as AbortIcon } from "client/shared/icons/cross.svg";

import "./PasswordConfirmation.scss";
import { RegisterContext } from "scripts/contexts/RegisterContext";

type ConfirmPasswordField = "password" | "confirmPassword";

interface IPasswordChecker {
  children: React.ReactNode;
  criteria: boolean;
}

const PasswordChecker: React.FC<IPasswordChecker> = ({ children, criteria }) => {
  return (
    <div className="password-checker">
      {criteria ? (
        <ConfirmIcon className="password-checker-icon" />
      ) : (
        <AbortIcon className="password-checker-icon" />
      )}
      {children}
    </div>
  );
};

const PasswordRegisterPage = () => {
  const contextData = React.useContext(RegisterContext);

  const { t } = useTranslation("auth");

  const [form, setForm] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = (key: ConfirmPasswordField, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    contextData.setContext({
      ...contextData,
      currentFragment: contextData.currentFragment + 1,
    });
  };

  const criteriaOne = form.password.length >= 8;
  const criteriaTwo = ["@", ".", "!", "?", "/"].some((value) => form.password.includes(value));

  return (
    <AuthLayout title={t("register.password-confirmation")} isRegister>
      <form className="password-confirm-form">
        <IconInput
          className="password-confirm-password-input"
          icon={PasswordIcon}
          name="password"
          label={t("password")!}
          value={form.password}
          type="password"
          onChange={(value) => handleFormChange("password", value)}
        />
        <IconInput
          className="password-confirm-password-confirm-input"
          icon={PasswordIcon}
          name="confirm-password"
          label={t("confirm-password")!}
          value={form.confirmPassword}
          type="password"
          onChange={(value) => handleFormChange("confirmPassword", value)}
        />
        <div className="password-confirm-checkers">
          <PasswordChecker criteria={criteriaOne}>
            {t("register.password-criteria-1")}
          </PasswordChecker>
          <PasswordChecker criteria={criteriaTwo}>
            {t("register.password-criteria-2")}
          </PasswordChecker>
        </div>
        <Button
          className="password-confirm-submit-btn"
          disabled={!criteriaOne || !criteriaTwo || form.password !== form.confirmPassword}
          onClick={handleSubmit}
          inverse
        >
          {t("register.next")}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default PasswordRegisterPage;
