import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

import AuthLayout from "../AuthLayout";
import { Button, IconInput } from "client/common";

import { User } from "store";
import useToast from "scripts/hooks/useToast";
import { ReactComponent as PasswordIcon } from "client/shared/icons/lock.svg";
import { ReactComponent as ConfirmIcon } from "client/shared/icons/confirm.svg";
import { ReactComponent as AbortIcon } from "client/shared/icons/cross.svg";

import "./PasswordConfirmation.scss";
import { RegisterContext } from "scripts/contexts/RegisterContext";
import { Api } from "api";
import { Toast } from "react-toastify/dist/components";

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
  const { notify, ToastContainer } = useToast({
    content: "DB error occured. Try again later",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });
  const { t } = useTranslation("auth");

  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = async () => {
    const { firstName, lastName, email, password } = contextData;

    const data = await Api().register({
      firstName,
      lastName,
      email,
      password,
    });

    if (!data || !data.status) return notify();
    Cookies.set("jwt", data.token);
    User.auth(data.token);

    contextData.setContext({
      ...contextData,
      currentFragment: contextData.currentFragment + 1,
    });
  };

  const handlePasswordChange = (value: string) => {
    contextData.setContext({
      ...contextData,
      password: value,
    });
  };

  const criteriaOne = contextData.password.length >= 8;
  const criteriaTwo = ["@", ".", "!", "?", "/"].some((value) =>
    contextData.password.includes(value)
  );

  return (
    <AuthLayout title={t("register.password-confirmation")} isRegister>
      <form className="password-confirm-form">
        <IconInput
          className="password-confirm-password-input"
          icon={PasswordIcon}
          name="password"
          label={t("password")!}
          value={contextData.password}
          type="password"
          onChange={(value) => handlePasswordChange(value)}
        />
        <IconInput
          className="password-confirm-password-confirm-input"
          icon={PasswordIcon}
          name="confirm-password"
          label={t("confirm-password")!}
          value={confirmPassword}
          type="password"
          onChange={(value) => setConfirmPassword(value)}
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
          useLoader
          className="password-confirm-submit-btn"
          disabled={!criteriaOne || !criteriaTwo || contextData.password !== confirmPassword}
          onClick={handleSubmit}
          inverse
        >
          {t("register.next")}
        </Button>
      </form>
      <ToastContainer />
    </AuthLayout>
  );
};

export default PasswordRegisterPage;
