import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ReactComponent as EmailIcon } from "../../shared/icons/person.svg";
import { ReactComponent as PasswordIcon } from "../../shared/icons/lock.svg";

import AuthLayout from "./AuthLayout";
import { Button, IconInput } from "client/common";
import { User } from "store";

import "./LoginPage.scss";
import { Api } from "api";
import useToast from "scripts/hooks/useToast";
import Cookies from "js-cookie";

type LoginField = "email" | "password";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });

  const { notify, ToastContainer } = useToast({
    content: "Credentials are wrong",
    status: "danger",
    autoClose: 3000,
    pauseOnHover: true,
    light: true,
    position: "bottom-right",
  });

  const handleLoginChange = (key: LoginField, value: string) => {
    setLoginForm({
      ...loginForm,
      [key]: value,
    });
  };

  const { t } = useTranslation("auth");

  const handleSubmit = async () => {
    const data = await Api().login(loginForm);
    if (!data || !data.status) return notify();
    Cookies.set("jwt", data.token);
    User.auth(data.token);
    navigate(User.user.status === "admin" ? "/admin/catalogs" : "/catalogs");
  };

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
          useLoader
          className="login-submit-btn"
          disabled={!loginForm.email || !loginForm.password}
          onClick={handleSubmit}
          inverse
        >
          {t("login.log-in")!}
        </Button>
      </form>
      <ToastContainer />
    </AuthLayout>
  );
};

export default LoginPage;
