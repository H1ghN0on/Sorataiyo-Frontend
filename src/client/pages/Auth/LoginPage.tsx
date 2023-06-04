import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as EmailIcon } from "../../shared/icons/person.svg";
import { ReactComponent as PasswordIcon } from "../../shared/icons/lock.svg";

import AuthLayout from "./AuthLayout";
import { Button, IconInput } from "client/common";

import "./LoginPage.scss";

type LoginField = "email" | "password";

const LoginPage = () => {
  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (key: LoginField, value: string) => {
    setLoginForm({
      ...loginForm,
      [key]: value,
    });
  };

  const { t } = useTranslation("auth");
  // i18n.changeLanguage("ru");
  const handleSubmit = () => {};

  return (
    <AuthLayout title={t("login.title")!} isRegister={false}>
      <form className="login-form">
        <IconInput
          className="login-email-input"
          icon={EmailIcon}
          name="email"
          label={t("email")!}
          value={loginForm.email}
          onChange={(value) => handleLoginChange("email", value)}
        />
        <IconInput
          className="login-password-input"
          icon={PasswordIcon}
          name="password"
          label={t("password")!}
          value={loginForm.password}
          type="password"
          onChange={(value) => handleLoginChange("password", value)}
        />
        <Button
          className="login-submit-btn"
          disabled={!loginForm.email || !loginForm.password}
          onClick={handleSubmit}
          inverse
        >
          {t("login.log-in")!}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
