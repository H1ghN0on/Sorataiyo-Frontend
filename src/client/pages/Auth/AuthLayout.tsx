import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ReactComponent as Logo } from "../../shared/icons/sorataiyo-logo.svg";

import "./AuthLayout.scss";

interface IAuthLayoutProps {
  children: React.ReactNode;
  title: string;
  isRegister: boolean;
  isFinish?: boolean;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children, title, isRegister, isFinish }) => {
  const { t } = useTranslation("auth");
  return (
    <div className="auth-page">
      <div className="auth-logo">
        <Logo className="logo" />
      </div>
      <div className="auth-container">
        <h3 className="auth-title">{title}</h3>
        {children}
        {!isFinish && (
          <div className="auth-footer">
            <span>{isRegister ? t("register.already-explored") : t("login.new-to-sorataiyo")}</span>

            {isRegister ? (
              <Link className="auth-footer-link" to="/login">
                {t("register.sign-in")}
              </Link>
            ) : (
              <Link className="auth-footer-link" to="/register">
                {t("login.sign-up")}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
